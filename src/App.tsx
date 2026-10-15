import { useState, useEffect } from "react";
import { t, getTranslator, useTranslator, TranslationContextProvider } from "../translations/translate";
import { getStatus, type UserStatus } from "./requests";
import { getVanityConfig } from "./config";
import { ReactionManager } from "./requests";
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import {
  Languages,
  ArrowRight,
  ArrowUpRight,
  CircleCheck,
  CircleX,
  Mail,
} from "lucide-react";

import '@mcbalaam/razdor-ui/dist/index.css'

import Picture from "./components/Picture";
import github from "/github-tile.svg";
import steam from "/steampowered-tile.svg";
import robust from "/robust.webp";
import soundcloud from "/soundcloud.webp";
import kofi from "/kofi.webp";
import cloudtips from "/cloudtips.png";
import pfp from "/mcbalaam.webp";
import react from "/react.webp"
import typescript from "/typescript.webp"
import docker from "/docker.webp"
import gatus from "/gatus.webp"
import ansible from "/vscode-ansible.webp"
import go from "/golang.webp"

import { Button, ModalPopup, type ModalControl, useCreateToast, Badge, Tooltip, Card, Timestamp } from "@mcbalaam/razdor-ui"
import StatusBubble from "./components/StatusBubble";
import AuthButtons from "./components/AccountBar/AccountBar";
import SignList from "./components/SignList";
import SignForm from "./components/SignForm/SignForm";
import Reaction from "./components/Reaction";
import RepoTab from "./components/RepoTab";
import GitHubActivity from "./components/GitHubActivity";
import StackInfo from "./components/StackInfo";
import Balatro from "./components/Balatro";
import RssFeed from "./components/RssFeed";
import WebringBar from "./components/WebringBar";
import ColorPicker from "./components/ColorPicker";

function hexToHsl(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16) / 255;
  const g = parseInt(h.slice(2, 4), 16) / 255;
  const b = parseInt(h.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  let hue = 0;
  let s = 0;
  if (d !== 0) {
    s = d / (1 - Math.abs(2 * l - 1));
    if (max === r) hue = ((g - b) / d) % 6;
    else if (max === g) hue = (b - r) / d + 2;
    else hue = (r - g) / d + 4;
    hue *= 60;
    if (hue < 0) hue += 360;
  }
  return [hue, s, l];
}

function hslToHex(h: number, s: number, l: number): string {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  const to = (v: number) =>
    Math.round((v + m) * 255).toString(16).padStart(2, "0");
  return `#${to(r)}${to(g)}${to(b)}`;
}

function seedToBalatroColors(
  seed: string,
  theme: "dark" | "light",
): [string, string, string] {
  const [h] = hexToHsl(seed);
  const color1 = hslToHex(h, 0.24, 0.29);
  const color2 = hslToHex((h + 360 - 47) % 360, 0.24, 0.20);
  const color3 =
    theme === "light" ? hslToHex(h, 0.13, 0.44) : hslToHex(h, 0.22, 0.16);
  return [color1, color2, color3];
}

async function getVisitorToken(): Promise<string> {
  const fp = await FingerprintJS.load();
  const result = await fp.get();
  return result.visitorId;
}

type LayoutMode = "triple" | "double" | "single";

function getLayoutMode(): LayoutMode {
  if (typeof window === "undefined") return "triple";
  if (window.matchMedia("(max-width: 860px)").matches) return "single";
  if (window.matchMedia("(max-width: 1285px)").matches) return "double";
  return "triple";
}

function useLayoutMode(): LayoutMode {
  const [mode, setMode] = useState<LayoutMode>(getLayoutMode);

  useEffect(() => {
    const singleQuery = window.matchMedia("(max-width: 860px)");
    const doubleQuery = window.matchMedia("(max-width: 1285px)");
    const update = () => setMode(getLayoutMode());
    singleQuery.addEventListener("change", update);
    doubleQuery.addEventListener("change", update);
    update();
    return () => {
      singleQuery.removeEventListener("change", update);
      doubleQuery.removeEventListener("change", update);
    };
  }, []);

  return mode;
}

export function App() {
  const [locale, setLocale] = useState("en");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [seed, setSeed] = useState<string>("#5865f2");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { createSuccessToast, createErrorToast } = useCreateToast();
  const [signsRefreshKey, setSignsRefreshKey] = useState(0);
  const [userStatus, setUserStatus] = useState<UserStatus | null>(null);
  const [visitorToken, setVisitorToken] = useState<string | null>(null);
  const layout = useLayoutMode();
  const tr = useTranslator(locale);

  useEffect(() => {
    const initToken = async () => {
      const token = await getVisitorToken();
      setVisitorToken(token);
    };
    initToken();
  }, []);

  const [reactionCounts, setReactionCounts] = useState<Record<string, number>>({});
  const [userReactions, setUserReactions] = useState<string[]>([]);

  useEffect(() => {
    if (!visitorToken) return;

    const fetchReactions = async () => {
      try {
        const [counts, userActive] = await Promise.all([
          ReactionManager.getReactionCounts(),
          ReactionManager.getUserReactions(visitorToken)
        ]);
        setReactionCounts(counts);
        setUserReactions(userActive);
      } catch (err) {
        console.error(err);
      }
    };
    fetchReactions();
  }, [visitorToken]);

  const handleReactionClick = async (type: string) => {
    if (!visitorToken) return;

    const isReacted = userReactions.includes(type);

    if (isReacted) {
      setUserReactions(prev => prev.filter(t => t !== type));
      setReactionCounts(prev => ({
        ...prev,
        [type]: Math.max(0, (prev[type] || 0) - 1)
      }));
    } else {
      setUserReactions(prev => [...prev, type]);
      setReactionCounts(prev => ({
        ...prev,
        [type]: (prev[type] || 0) + 1
      }));
    }

    try {
      if (isReacted) {
        await ReactionManager.removeReaction(type, visitorToken);
      } else {
        await ReactionManager.addReaction(type, visitorToken);
      }

      const [counts, userActive] = await Promise.all([
        ReactionManager.getReactionCounts(),
        ReactionManager.getUserReactions(visitorToken)
      ]);
      setReactionCounts(counts);
      setUserReactions(userActive);

    } catch (error) {
      null;
    }
  };

  useEffect(() => {
    const loadStatus = async () => {
      try {
        const status = await getStatus();
        setUserStatus(status);
      } catch (error) {
        console.error("Failed to load status:", error);
        setUserStatus({
          status: "busy auracoding",
          vanity_id: null,
          updated_at: new Date().toISOString(),
        });
      }
    };
    loadStatus();
  }, []);

  useEffect(() => {
    const getCookie = (name: string): string | null => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
      return null;
    }

    const savedLocale = getCookie("locale");
    const savedTheme = getCookie("theme") as "dark" | "light" | null;

    let initialLocale = "en";
    if (savedLocale) {
      initialLocale = savedLocale;
    } else {
      const browserLang = navigator.language || navigator.languages?.[0] || "en";
      const prefersRu = browserLang.startsWith("ru");
      initialLocale = prefersRu ? "ru" : "en";
    }
    setLocale(initialLocale);

    let initialTheme: "dark" | "light" = "dark";
    if (savedTheme) {
      initialTheme = savedTheme;
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      initialTheme = prefersDark ? "dark" : "light";
    }
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    document.documentElement.style.setProperty("color-scheme", initialTheme);

    const savedSeed = getCookie("seed");
    if (savedSeed) {
      setSeed(savedSeed);
      document.documentElement.style.setProperty("--seed", savedSeed);
    }
  }, []);

  const toggleLocale = () => {
    setLocale((locale) => {
      const newLocale = locale === "en" ? "ru" : "en";
      document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
      return newLocale;
    });
  };

  const toggleTheme = () => {
    setTheme((theme) => {
      const newTheme = theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      document.documentElement.style.setProperty("color-scheme", newTheme);
      document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;
      return newTheme;
    });
  };

  const handleSeedChange = (next: string) => {
    setSeed(next);
    document.documentElement.style.setProperty("--seed", next);
    document.cookie = `seed=${next}; path=/; max-age=31536000`;
  };

  const [balatro1, balatro2, balatro3] = seedToBalatroColors(seed, theme);

  const openModal = () => setIsModalOpen(true);

  const modalLeaveSign: ModalControl = {
    isOpen: isModalOpen,
    onClose: () => setIsModalOpen(false),
    closeOnOverlayClick: true,
    closeOnEscape: true,
    showCloseButton: true,
    title: t("sign_header"),
  };

  const handleSignFormSuccess = async () => {
    setIsModalOpen(false);
    const tr = await getTranslator(locale);
    createSuccessToast({ children: String(tr("sign_toastSent")), duration: 3000, position: "bottom-center", icon: CircleCheck });
    setSignsRefreshKey((prev) => prev + 1);
  };

  const handleSignFormError = async (errorMessage: string) => {
    setIsModalOpen(false);
    const tr = await getTranslator(locale);
    createErrorToast({ children: `${String(tr("sign_error"))}: ${errorMessage}`, position: "bottom-center", icon: CircleX });
  };

  const handleSignDeleted = async () => {
    const tr = await getTranslator(locale);
    createSuccessToast({ children: String(tr("sign_toastDeleted")), duration: 3000, position: "bottom-center", icon: CircleCheck });
    setSignsRefreshKey((prev) => prev + 1);
  };

  const handleSignDeleteError = async (errorMessage: string) => {
    const tr = await getTranslator(locale);
    createErrorToast({ children: `${String(tr("sign_toastDeleteError"))}: ${errorMessage}`, position: "bottom-center", icon: CircleX });
  };

  const handleLogoutSuccess = async () => {
    const tr = await getTranslator(locale);
    createSuccessToast({ children: String(tr("logout_toastSuccess")), duration: 3000, position: "bottom-center", icon: CircleCheck });
    setSignsRefreshKey((prev) => prev + 1);
  };

  const handleLogoutError = async (errorMessage: string) => {
    const tr = await getTranslator(locale);
    createErrorToast({ children: `${String(tr("logout_toastError"))}: ${errorMessage}`, position: "bottom-center", icon: CircleX });
  };

  const handleLoginSuccess = async () => {
    const tr = await getTranslator(locale);
    createSuccessToast({ children: String(tr("authViaGitHub")), duration: 3000, position: "bottom-center", icon: CircleCheck });
    setSignsRefreshKey((prev) => prev + 1);
  };

  const handleLoginError = async (errorMessage: string) => {
    const tr = await getTranslator(locale);
    createErrorToast({ children: `${String(tr("sign_error"))}: ${errorMessage}`, position: "bottom-center", icon: CircleX });
  };

  const VanityOverlay = ({ vanityId }: { vanityId: string }) => {
    const config = getVanityConfig(vanityId);
    if (!config) return null;
    const style = {
      position: "absolute" as const,
      top: `calc(50% + ${config.y}px)`,
      left: `calc(50% + ${config.x}px)`,
      transform: `translate(-50%, -50%) rotate(${config.angle}deg)`,
      width: "auto", height: "auto", maxWidth: "120px", maxHeight: "120px",
      pointerEvents: "none" as const, zIndex: 3,
    };
    return <Picture avif={config.avif} webp={config.webp} alt="" style={style} />;
  };

  const profileCard = (
    <Card>
      <div className="banner">
        <Button className="language-button" icon={Languages} onClick={toggleLocale} />
        <ColorPicker seed={seed} onChange={handleSeedChange} theme={theme} onToggleTheme={toggleTheme} />
        <div className="avatar-container">
          <img className="pfp" src={pfp}></img>
          {userStatus?.vanity_id && <VanityOverlay vanityId={userStatus.vanity_id} />}
        </div>
        <StatusBubble>{(userStatus?.status || "\n").replace(/<br\s*\/?>/gi, "\n")}</StatusBubble>
      </div>
      <div className="name">
        <div className="nameplate">mcbalaam</div>
        <Badge small src={robust}>RBST</Badge>
      </div>
      <div className="pnouns">
        mcbalaam <ArrowRight size={14} />{" "}
        эмсибалаам, балаам, макбаклак (he/him)
      </div>
      <p className="desc">{t("aboutMe")}</p>
      <div style={{ display: "flex", height: "fit-content", flexWrap: "wrap", margin: "0px 5px 10px 0" }}>
        <p>{t("myMidniht")} <Timestamp ts="1764608400" />. {t("active")}</p>
      </div>

      <h1>{t("connections")}</h1>
      <div className="connections">
        <Badge href="https://www.github.com/mcbalaam" src={github}>GitHub <ArrowUpRight size={12} /></Badge>
        <Badge href="https://steamcommunity.com/id/mcbalaam/" src={steam}>Steam <ArrowUpRight size={12} /></Badge>
        <Badge href="https://soundcloud.com/mcbalaam" src={soundcloud}>SoundСloud <ArrowUpRight size={12} /></Badge>
        <Badge href="https://ko-fi.com/mcbalaam" src={kofi}>Ko-Fi <ArrowUpRight size={12} /></Badge>
        <Badge href="https://pay.cloudtips.ru/p/7ac675d4" src={cloudtips}>CloudTips <ArrowUpRight size={12} /></Badge>
      </div>
      <br></br>
      <Button
        className="mail-button"
        fill
        color="secondary"
        onClick={() => window.location.href = "mailto:mcbalaam@proton.me"}
        icon={Mail}
      >
        <span className="mail-button-labels">
          <span className="mail-button-label mail-button-label-default">
            {t("mailme")}
          </span>
          <span className="mail-button-label mail-button-label-hover" aria-hidden="true">
            {t("mailme_hover")}
          </span>
        </span>
        <ArrowUpRight size={12} />
      </Button>
      <br></br>
      <div className="reactions">
        <Tooltip text=":pig2:">
          <Reaction
            count={reactionCounts["pig"] || 0}
            reacted={userReactions.includes("pig")}
            onClick={() => handleReactionClick("pig")}
          >🐖</Reaction>
        </Tooltip>
        <Tooltip text=":dash:">
          <Reaction
            count={reactionCounts["dash"] || 0}
            onClick={() => handleReactionClick("dash")}
            reacted={userReactions.includes("dash")}
          >💨</Reaction>
        </Tooltip>
        <Tooltip text=":heart:">
          <Reaction
            count={reactionCounts["heart"] || 0}
            onClick={() => handleReactionClick("heart")}
            reacted={userReactions.includes("heart")}
          >❤️</Reaction>
        </Tooltip>
        <Tooltip text=":broken_heart:">
          <Reaction
            count={reactionCounts["broken_heart"] || 0}
            onClick={() => handleReactionClick("broken_heart")}
            reacted={userReactions.includes("broken_heart")}
          >💔</Reaction>
        </Tooltip>
      </div>
    </Card>
  );

  const accountCard = (
    <Card>
      <AuthButtons
        onLoginSuccess={handleLoginSuccess}
        onLoginError={handleLoginError}
        onLogoutSuccess={handleLogoutSuccess}
        onLogoutError={handleLogoutError}
        onAuthChange={() => { }}
      />
      <br></br>
      <SignList
        locale={locale}
        onLeaveSignClick={() => openModal()}
        onSignDeleted={handleSignDeleted}
        onSignDeleteError={handleSignDeleteError}
        refreshKey={signsRefreshKey}
      />
    </Card>
  );

  const stackCard = (
    <Card title={tr("myStack")}>
      <div style={{ display: 'inline-flex', flexDirection: "column" }}>
        <StackInfo items={[
          { src: go, label: "Go", description: t("about_stack_go") },
          { src: typescript, label: "TypeScript", description: t("about_stack_typescript") },
          { src: ansible, label: "Ansible", description: t("about_stack_ansible") },
          { src: gatus, label: "Monitoring", description: t("about_stack_monitoring") },
          { src: react, label: "ReactJS", description: t("about_stack_react") },
          { src: docker, label: "Docker", description: t("about_stack_docker") },
        ]} />
      </div>
    </Card>
  );

  const workingCard = (
    <Card title={tr("working_on")}>
      <RepoTab />
    </Card>
  );

  const rssCard = (
    <RssFeed locale={locale} />
  );

  const githubCard = (
    <Card>
      <GitHubActivity locale={locale} username="mcbalaam" />
    </Card>
  );

  const webringBar = <WebringBar />;

  return (
    <TranslationContextProvider locale={locale}>
      <Balatro color1={balatro1} color2={balatro2} color3={balatro3} mouseInteraction={false}></Balatro>
      {layout === "triple" && (
        <div className="master-container is-triple">
          {webringBar}
          <div className="column profile-column">
            {profileCard}
            {accountCard}
          </div>
          <div className="column projects-column">
            {workingCard}
          </div>
          <div className="column extra-column">
            {stackCard}
            {githubCard}
            {rssCard}
          </div>
        </div>
      )}
      {layout === "double" && (
        <div className="master-container is-double">
          {webringBar}
          <div className="column primary-column">
            {profileCard}
            {accountCard}
            {githubCard}
          </div>
          <div className="column secondary-column">
            {stackCard}
            {workingCard}
            {rssCard}
          </div>
        </div>
      )}
      {layout === "single" && (
        <div className="master-container is-single">
          {webringBar}
          <div className="column single-column">
            {profileCard}
            {accountCard}
            {stackCard}
            {workingCard}
            {rssCard}
            {githubCard}
          </div>
        </div>
      )}
      <ModalPopup control={modalLeaveSign}>
        <SignForm onSignCreated={handleSignFormSuccess} onSignError={handleSignFormError} />
      </ModalPopup>


    </TranslationContextProvider>
  );
}

export default App;
