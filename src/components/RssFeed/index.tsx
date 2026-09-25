import { useState, useEffect } from "react";
import { Card, ModalPopup, Button, useCreateToast } from "@mcbalaam/razdor-ui";
import { faLink, faCheck } from "@fortawesome/free-solid-svg-icons";
import ContentLoader from "react-content-loader";
import { t, getTranslator } from "../../../translations/translate";
import "./styles.css";

const RSS_URL = "https://rss.mcblm.xyz/rss.xml";
const PROXY_RAW = "https://api.allorigins.win/raw?url=" + encodeURIComponent(RSS_URL);
const PROXY_JSON = "https://api.allorigins.win/get?url=" + encodeURIComponent(RSS_URL);

interface RssItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  content: string;
}

function stripHtml(html: string): string {
  const div = document.createElement("div");
  div.innerHTML = html;
  return (div.textContent || div.innerText || "").trim();
}

function ensureHeadings(html: string): string {
  // 1) Unwrap markdown headings that are inside <p> (common when pico-rss body starts with "# Title" without blank line)
  //    <p># Title</p> or <p>## Title</p> (with or without space after #) -> <h1>Title</h1>
  let fixed = html
    .replace(/<p>\s*(#{1,6})\s*([^<]+?)\s*<\/p>/g, (_m, hashes: string, text: string) => {
      const level = (hashes as string).length;
      return `<h${level}>${(text as string).trim()}</h${level}>`;
    })
    .replace(/<p>\s*(<h[1-6][^>]*>.*?<\/h[1-6]>)\s*<\/p>/gi, "$1");

  // 2) Fallback for raw markdown lines not yet converted (handle "#Title" without space too)
  if (!fixed.includes("<h1") && !fixed.includes("<h2")) {
    fixed = fixed
      .split("\n")
      .map((line) => {
        const m = line.match(/^(#{1,6})\s*(.*)$/);
        if (m && m[2]?.trim()) {
          const level = m[1]!.length;
          const text = m[2]!.trim();
          // avoid converting lines that are just "######" without text
          if (text) return `<h${level}>${text}</h${level}>`;
        }
        return line;
      })
      .join("\n");
  }

  // 3) DOM-based unwrap for any <p> that only contains a heading or markdown heading text
  try {
    const doc = new DOMParser().parseFromString(`<div>${fixed}</div>`, "text/html");
    const ps = doc.querySelectorAll("p");
    ps.forEach((p) => {
      const text = p.textContent?.trim() || "";
      const inner = p.innerHTML.trim();
      // <p><h1>...</h1></p> -> unwrap
      if (/^<h[1-6][^>]*>.*<\/h[1-6]>$/.test(inner)) {
        p.replaceWith(...Array.from(p.childNodes).map((n) => n.cloneNode(true)));
        return;
      }
      // <p># Title</p> -> <h1>Title</h1> (already handled by regex, but keep as fallback)
      const m = text.match(/^(#{1,6})\s*(.+)$/);
      if (m && p.children.length === 0) {
        const level = m[1]!.length;
        const h = doc.createElement(`h${level}`);
        h.textContent = m[2]!.trim();
        p.replaceWith(h);
      }
    });
    // 4) First paragraph (description) as h2 — per user request "описание h2"
    const container = doc.querySelector("div");
    const firstEl = container?.firstElementChild as HTMLElement | null;
    if (firstEl && firstEl.tagName === "P") {
      const h2 = doc.createElement("h2");
      h2.innerHTML = firstEl.innerHTML;
      firstEl.replaceWith(h2);
    }
    const div = doc.querySelector("div");
    if (div) fixed = div.innerHTML;
  } catch {}

  return fixed;
}

function formatDate(dateStr: string, locale: string): string {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString(locale === "ru" ? "ru-RU" : "en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

interface RssFeedData {
  channelTitle: string;
  channelLink: string;
  channelDescription: string;
  items: RssItem[];
}

async function fetchRss(): Promise<RssFeedData> {
  let xmlText = "";
  try {
    const res = await fetch(RSS_URL, { mode: "cors" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    xmlText = await res.text();
    if (!xmlText.includes("<rss")) throw new Error("Invalid RSS");
  } catch {
    try {
      const res = await fetch(PROXY_RAW);
      if (!res.ok) throw new Error(`Proxy HTTP ${res.status}`);
      xmlText = await res.text();
      if (!xmlText.includes("<rss")) throw new Error("Invalid proxy RSS");
    } catch {
      const res = await fetch(PROXY_JSON);
      if (!res.ok) throw new Error(`Proxy JSON HTTP ${res.status}`);
      const data = (await res.json()) as { contents: string };
      let contents = data.contents || "";
      if (contents.startsWith("data:")) {
        const b64 = contents.split(",")[1] || "";
        try {
          contents = atob(b64);
        } catch {}
      }
      xmlText = contents;
    }
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlText, "text/xml");
  const parseError = doc.querySelector("parsererror");
  if (parseError) throw new Error("XML parse error");

  const channel = doc.querySelector("channel");
  const channelTitle = channel?.querySelector(":scope > title")?.textContent?.trim() || "RSS";
  const channelLink = channel?.querySelector(":scope > link")?.textContent?.trim() || "https://rss.mcblm.xyz";
  const channelDescription = channel?.querySelector(":scope > description")?.textContent?.trim() || "";

  const items = Array.from(doc.querySelectorAll("item")).slice(0, 3);
  const parsedItems = items.map((item) => {
    const title = item.querySelector("title")?.textContent?.trim() || "Untitled";
    const link = item.querySelector("link")?.textContent?.trim() || "";
    const pubDate = item.querySelector("pubDate")?.textContent?.trim() || "";
    const description = item.querySelector("description")?.textContent?.trim() || "";
    const rawContent = item.querySelector("content\\:encoded, encoded")?.textContent?.trim() || description;
    const content = ensureHeadings(rawContent);
    return { title, link, pubDate, description: stripHtml(description).slice(0, 140), content };
  });

  return { channelTitle, channelLink, channelDescription, items: parsedItems };
}

export default function RssFeed({ locale }: { locale: string }) {
  const [data, setData] = useState<RssFeedData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<RssItem | null>(null);
  const [copied, setCopied] = useState(false);
  const { createSuccessToast } = useCreateToast();

  const handleCopyLink = async () => {
    if (!data?.channelLink) return;
    try {
      await navigator.clipboard.writeText(data.channelLink);
      setCopied(true);
      const tr = await getTranslator(locale);
      createSuccessToast({ children: String(tr("rss_copied")), duration: 2000, position: "bottom-center", icon: faCheck });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open(data.channelLink, "_blank");
    }
  };

  useEffect(() => {
    fetchRss()
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch((e) => {
        setError(e instanceof Error ? e.message : "Failed to load RSS");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Card title="RSS">
        <ContentLoader
          speed={1}
          width="100%"
          height={110}
          backgroundColor="#bbb1e34d"
          foregroundColor="#a5a6bf99"
          style={{ display: "block" }}
        >
          <rect x="0" y="0" rx="8" ry="8" width="100%" height="32" />
          <rect x="0" y="40" rx="8" ry="8" width="100%" height="32" />
          <rect x="0" y="80" rx="8" ry="8" width="100%" height="30" />
        </ContentLoader>
      </Card>
    );
  }

  if (error) {
    return (
      <Card title={data?.channelTitle || "RSS"}>
        <div className="rss-error">{t("rss_error")}: {error}</div>
      </Card>
    );
  }

  if (!data || data.items.length === 0) {
    return (
      <Card title={data?.channelTitle || "RSS"}>
        <div className="rss-empty">{t("rss_empty")}</div>
      </Card>
    );
  }

  return (
    <>
      <Card
        title={
          <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
            {data.channelTitle}
            <Button
              faIcon={copied ? faCheck : faLink}
              onClick={handleCopyLink}
              tiny
              style={{ padding: "2px 6px", minHeight: "22px", height: "22px" }}
            />
          </span>
        }
      >
        <div className="rss-feed">
          <div className="rss-tiles">
            {data.items.map((item) => (
              <div key={item.link || item.title} className="rss-tile" onClick={() => setSelected(item)}>
                <div className="rss-tile-title">{item.title}</div>
                <div className="rss-tile-date">{formatDate(item.pubDate, locale)}</div>
                <div className="rss-tile-desc">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <ModalPopup
        control={{
          isOpen: !!selected,
          onClose: () => setSelected(null),
          closeOnOverlayClick: true,
          closeOnEscape: true,
          showCloseButton: true,
          title: selected?.title || "",
          size: "large"
        }}
      >
        {selected && (
          <div className="rss-modal-content">
            <div className="rss-modal-meta">
              {formatDate(selected.pubDate, locale)} - <a href={selected.link} target="_blank" rel="noopener noreferrer">{selected.link}</a>
            </div>
            <div dangerouslySetInnerHTML={{ __html: selected.content }} />
          </div>
        )}
      </ModalPopup>
    </>
  );
}
