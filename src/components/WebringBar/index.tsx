import { useEffect, useState } from "react";
import {
  faArrowLeft,
  faArrowRight,
  faArrowUpFromBracket,
  faArrowUpRightFromSquare,
  faRing,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mcbalaam/razdor-ui";import "./styles.css";

export const WEBRING_URL = "https://webring.otomir23.me";
// Твой slug в вебринке. Пока заявки нет в списке — плашка просто не показывается.
export const WEBRING_SLUG = "mcbalaam";

const NEIGHBORS = 3;
const CACHE_KEY = "webring:sites";
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

interface WebringSite {
  id: number;
  slug: string;
  name: string;
  url: string;
  favicon: string | null;
}

function readCache(): WebringSite[] | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { at: number; sites: WebringSite[] };
    if (!Array.isArray(parsed.sites) || Date.now() - parsed.at > CACHE_TTL_MS) return null;
    return parsed.sites;
  } catch {
    return null;
  }
}

function writeCache(sites: WebringSite[]) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), sites }));
  } catch {
    // ignore quota/private-mode errors
  }
}
function neighbors(sites: WebringSite[], index: number, step: -1 | 1): WebringSite[] {
  const out: WebringSite[] = [];
  for (let i = 1; i <= NEIGHBORS; i++) {
    out.push(sites[(index + step * i + sites.length) % sites.length] as WebringSite);
  }
  return out;
}

export default function WebringBar({ slug = WEBRING_SLUG }: { slug?: string }) {
  // Тестовый режим: ?webring=<slug> в URL подменяет центральный slug,
  // чтобы посмотреть плашку до принятия заявки. Например: ?webring=vita
  const [effectiveSlug] = useState(() => {
    try {
      return new URLSearchParams(window.location.search).get("webring")?.trim() || slug;
    } catch {
      return slug;
    }
  });
  const [sites, setSites] = useState<WebringSite[] | null>(() => readCache());
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch(`${WEBRING_URL}/sites`)
      .then((res) => {
        if (!res.ok) throw new Error(`webring: ${res.status}`);
        return res.json() as Promise<WebringSite[]>;
      })
      .then((data) => {
        if (!alive) return;
        writeCache(data);
        setSites(data);
      })
      .catch(() => {
        if (alive) setFailed(true);
      });
    return () => {
      alive = false;
    };
  }, []);

  if (failed) return null;

  // Данных ещё нет — рисуем скелетон того же размера, чтобы не прыгала раскладка.
  if (!sites) {
    return (
      <nav className="webring-bar webring-loading" aria-label="Webring">
        <span className="webring-skeleton-btn" />
        <span className="webring-skeleton-btn" />
        <div className="webring-slugs">
          <span className="webring-skeleton-slug webring-dist-3" />
          <span className="webring-skeleton-slug webring-dist-2" />
          <span className="webring-skeleton-slug webring-dist-1" />
          <span className="webring-skeleton-slug webring-current" />
          <span className="webring-skeleton-slug webring-dist-1" />
          <span className="webring-skeleton-slug webring-dist-2" />
          <span className="webring-skeleton-slug webring-dist-3" />
        </div>
        <span className="webring-skeleton-btn" />
      </nav>
    );
  }

  const index = sites.findIndex((site) => site.slug === effectiveSlug);
  if (index === -1) return null;

  const curr = sites[index] as WebringSite;
  const prevSites = neighbors(sites, index, -1).reverse();
  const nextSites = neighbors(sites, index, 1);

  return (
    <nav className="webring-bar" aria-label="Webring">
      <Button
        tiny
        className="webring-nav-button"
        faIcon={faArrowUpRightFromSquare}
        onClick={() => window.open(WEBRING_URL, "_blank", "noopener,noreferrer")}
      />
      <Button
        tiny
        className="webring-nav-button"
        faIcon={faArrowLeft}
        onClick={() => {
          window.location.href = `${WEBRING_URL}/${effectiveSlug}/prev`;
        }}
      />
      <div className="webring-slugs">
        {prevSites.map((site, i) => (
          <a
            key={site.slug}
            className={`webring-slug webring-dist-${NEIGHBORS - i}`}
            href={site.url}
          >
            {site.slug}
          </a>
        ))}
        <a className="webring-slug webring-current" href={curr.url}>
          {curr.slug}
        </a>
        {nextSites.map((site, i) => (
          <a
            key={site.slug}
            className={`webring-slug webring-dist-${i + 1}`}
            href={site.url}
          >
            {site.slug}
          </a>
        ))}
      </div>
      <Button
        tiny
        className="webring-nav-button"
        faIcon={faArrowRight}
        onClick={() => {
          window.location.href = `${WEBRING_URL}/${effectiveSlug}/next`;
        }}
      />
    </nav>
  );
}
