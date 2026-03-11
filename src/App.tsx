import { useState, useEffect, useRef } from "react";
import { t, TranslationContextProvider } from "../translations/translate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getStatus, type UserStatus } from "./requests";
import { getVanityConfig } from "./config";
import TiltCard from "./components/Token";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  faMoon,
  faSun,
  faLanguage,
  faArrowRightLong,
  faArrowUpRightFromSquare,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import "./index.css";

import Balatro from "./components/Balatro";

import github from "../public/github-tile.svg";
import steam from "../public/steampowered-tile.svg";
import robust from "../public/robust.png";
import soundcloud from "../public/soundcloud.png";
import telegram from "../public/telegram.png";
import kofi from "../public/kofi.png";
import cloudtips from "../public/cloudtips.png";
import pfp from "../public/mcbalaam.webp";
import femtanyl from "../public/femtanyl.jpg";
import birthday from "../public/birthday.jpg";
import ksb from "../public/ksb.jpg";
import bilb from "../public/bilb.jpg";

import Button from "./components/Button";
import Badge from "./components/Badge";
import StatusBubble from "./components/StatusBubble";
import Timestamp from "./components/Timestamp";
import AuthButtons from "./components/AccountBar/AccountBar";
import SignList from "./components/SignList";
import SignForm from "./components/SignForm/SignForm";
import ModalPopup, { type ModalControl } from "./components/ModalPopup";
import ToastNotification from "./components/ToastNotification";
import Reaction from "./components/Reaction";
import Tooltip from "./components/Tooltip";
import RepoTab from "./components/RepoTab";
import GitHubActivity from "./components/GitHubActivity";

import { ReactionManager } from "./requests";

import FingerprintJS from '@fingerprintjs/fingerprintjs';

async function getVisitorToken(): Promise<string> {
  const fp = await FingerprintJS.load();
  const result = await fp.get();
  return result.visitorId;
}

export function App() {
  const [locale, setLocale] = useState("en");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState<{
    visible: boolean;
    message: React.ReactNode;
    type: "success" | "error";
  }>({
    visible: false,
    message: "",
    type: "success",
  });
  const [signsRefreshKey, setSignsRefreshKey] = useState(0);
  const [userStatus, setUserStatus] = useState<UserStatus | null>(null);
  const [processingReactions, setProcessingReactions] = useState<Set<string>>(new Set());
  const [visitorToken, setVisitorToken] = useState<string | null>(null);

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

  const openModal = () => setIsModalOpen(true);

  const modalLeaveSign: ModalControl = {
    isOpen: isModalOpen,
    onClose: () => setIsModalOpen(false),
    closeOnOverlayClick: true,
    closeOnEscape: true,
    showCloseButton: true,
    title: t("sign_header"),
  };

  const showToast = (message: React.ReactNode, type: "success" | "error") => {
    setToast({ visible: true, message, type });
  };

  const handleSignFormSuccess = () => {
    setIsModalOpen(false);
    showToast(t("sign_toastSent"), "success");
    setSignsRefreshKey((prev) => prev + 1);
  };

  const handleSignFormError = (errorMessage: string) => {
    setIsModalOpen(false);
    showToast(`${t("sign_error")}: ${errorMessage}`, "error");
  };

  const handleSignDeleted = () => {
    showToast(t("sign_toastDeleted"), "success");
    setSignsRefreshKey((prev) => prev + 1);
  };

  const handleSignDeleteError = (errorMessage: string) => {
    showToast(`${t("sign_toastDeleteError")}: ${errorMessage}`, "error");
  };

  const handleLogoutSuccess = () => {
    showToast(t("logout_toastSuccess"), "success");
    setSignsRefreshKey((prev) => prev + 1);
  };

  const handleLogoutError = (errorMessage: string) => {
    showToast(`${t("logout_toastError")}: ${errorMessage}`, "error");
  };

  const handleLoginSuccess = () => {
    showToast(t("authViaGitHub"), "success");
    setSignsRefreshKey((prev) => prev + 1);
  };

  const handleLoginError = (errorMessage: string) => {
    showToast(`${t("sign_error")}: ${errorMessage}`, "error");
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
    return <img src={config.path} style={style} />;
  };

  return (
    <TranslationContextProvider locale={locale}>
      <Balatro color1="#3C385A" color2="#24313D" color3={theme == "light" ? "#656181" : "#201F31"} mouseInteraction={false}></Balatro>
      <div className="master-container">
        <div className="main-column">
          <div className="card">
            <div className="banner">
              <Button className="language-button" faIcon={faLanguage} onClick={toggleLocale} />
              <Button className="theme-button" faIcon={theme === "dark" ? faMoon : faSun} onClick={toggleTheme} />
              <div className="avatar-container">
                <img className="pfp" src={pfp}></img>
                {userStatus?.vanity_id && <VanityOverlay vanityId={userStatus.vanity_id} />}
              </div>
              <StatusBubble>{(userStatus?.status || "\n").replace(/<br\s*\/?>/gi, "\n")}</StatusBubble>
            </div>
            <div className="item-container">
              <div className="name">
                <div className="nameplate">mcbalaam</div>
                <Badge small src={robust}>RBST</Badge>
              </div>
              <div className="pnouns">
                mcbalaam <FontAwesomeIcon size="sm" icon={faArrowRightLong} />{" "}
                эмсибалаам, балаам, макбаклак (he/him)
              </div>
              <p className="desc">{t("aboutMe")}</p>
              <div style={{ display: "flex", height: "fit-content", flexWrap: "wrap", margin: "0px 5px 10px 0" }}>
                <p>{t("myMidniht")} <Timestamp ts="1764608400" />. {t("active")}</p>
              </div>

              <h1>{t("connections")}</h1>
              <div className="connections">
                <Badge href="https://www.github.com/mcbalaam" src={github}>GitHub <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} /></Badge>
                <Badge href="https://steamcommunity.com/id/mcbalaam/" src={steam}>Steam <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} /></Badge>
                <Badge href="https://soundcloud.com/mcbalaam" src={soundcloud}>SoundСloud <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} /></Badge>
                <Badge href="https://t.me/whattheactualfuckbro" src={telegram}>Telegram <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} /></Badge>
                <Badge href="https://ko-fi.com/mcbalaam" src={kofi}>Ko-Fi <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} /></Badge>
                <Badge href="https://pay.cloudtips.ru/p/7ac675d4" src={cloudtips}>CloudTips <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} /></Badge>
              </div>
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
            </div>
          </div>
          <div className="card">
            <div className="item-container accountbar">
              <AuthButtons
                onLoginSuccess={handleLoginSuccess}
                onLoginError={handleLoginError}
                onLogoutSuccess={handleLogoutSuccess}
                onLogoutError={handleLogoutError}
                onAuthChange={() => { }}
              />
            </div>
          </div>
          <div className="card">
            <div className="item-container accountbar">
              <SignList
                onLeaveSignClick={() => openModal()}
                onSignDeleted={handleSignDeleted}
                onSignDeleteError={handleSignDeleteError}
                refreshKey={signsRefreshKey}
              />
            </div>
          </div>
        </div>
        <div className="side-column">
          <div className="card side-card">
            <div className="item-container accountbar">
              <h1 style={{ marginBottom: "10px" }}>{t("working_on")}</h1>
              <RepoTab />
            </div>
          </div>
          <div className="card side-card">
            <div className="item-container" style={{display: 'inline-flex', gap: "10px"}}>
              <TiltCard src={femtanyl} label="femtanyl" href="https://open.spotify.com/artist/..." dnd />
              <TiltCard src={birthday} label="The Birthday Massacre" href="https://open.spotify.com/artist/..." dnd />
              <TiltCard src={ksb} label="ksb music" href="https://open.spotify.com/artist/..." dnd />
              <TiltCard src={bilb} label="билборды" href="https://open.spotify.com/artist/..." dnd />
            </div>
          </div>
          <div className="card side-card">
            <div className="item-container">
              <GitHubActivity locale={locale} username="mcbalaam" />
            </div>
          </div>

        </div>
      </div>
      <ModalPopup control={modalLeaveSign}>
        <SignForm onSignCreated={handleSignFormSuccess} onSignError={handleSignFormError} />
      </ModalPopup>
      {toast.visible && (
        <ToastNotification
          icon={toast.type === "success" ? faCircleCheck : faCircleXmark}
          type={toast.type === "success" ? "success" : "error"}
          duration={3000}
          onClose={() => setToast({ ...toast, visible: false })}
          position="bottom-center"
        >{toast.message}</ToastNotification>
      )}
      
    </TranslationContextProvider>
  );
}

export default App;