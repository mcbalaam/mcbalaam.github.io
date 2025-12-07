import { useState } from "react";
import { t, TranslationContextProvider } from "translations/translate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faLanguage,
  faArrowRightLong,
  faArrowUpRightFromSquare,
  faInfoCircle,
  faPlus,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

import "./index.css";

import github from "../media/github-tile.svg";
import steam from "../media/steampowered-tile.svg";
import extera from "../media/5EmxevP.png";
import soundcloud from "../media/soundcloud.png";
import telegram from "../media/telegram.png";
import kofi from "../media/kofi.png";
import cloudtips from "../media/cloudtips.png";
import pfp from "../media/mcbalaam.webp";

import Button from "./components/Button";
import Badge from "./components/Badge";
import StatusBubble from "./components/StatusBubble";
import Timestamp from "./components/Timestamp";
import AuthButtons from "./components/AccountBar/AccountBar";
import SignList from "./components/SignList";
import SignForm from "./components/SignForm/SignForm";
import RepoTab from "./components/RepoTab";
import ModalPopup, { type ModalControl } from "./components/ModalPopup";
import ToastNotification from "./components/ToastNotification";

export function App() {
  const [locale, setLocale] = useState("en");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<
    "default" | "strict" | "noCloseButton"
  >("default");
  const [toast, setToast] = useState<{
    visible: boolean;
    message: string;
    type: "success" | "error";
  }>({
    visible: false,
    message: "",
    type: "success",
  });
  const [signsRefreshKey, setSignsRefreshKey] = useState(0);

  const toggleLocale = () => {
    setLocale((locale) => (locale === "en" ? "ru" : "en"));
  };

  const openModal = (type: typeof modalType) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const modalLeaveSign: ModalControl = {
    isOpen: isModalOpen,
    onClose: () => setIsModalOpen(false),
    closeOnOverlayClick: modalType !== "strict",
    closeOnEscape: modalType !== "strict",
    showCloseButton: modalType !== "noCloseButton",
    title: t("sign_header"),
    footerButtons:
      modalType === "strict" ? (
        <>
          <Button onClick={() => setIsModalOpen(false)}>Закрыть</Button>
          <Button primary onClick={() => setIsModalOpen(false)}>
            Сохранить
          </Button>
        </>
      ) : undefined,
  };

  const showToast = (message: string, type: "success" | "error") => {
    setToast({
      visible: true,
      message,
      type,
    });
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

  return (
    <TranslationContextProvider locale={locale}>
      <div className="master-container">
        <div className="card">
          <div className="banner">
            <Button
              className="language-button"
              faIcon={faLanguage}
              onClick={toggleLocale}
            />
            <Button className="theme-button" faIcon={faMoon} />
            <img className="pfp" src={pfp}></img>
            <StatusBubble>busy auracoding</StatusBubble>
          </div>
          <div className="item-container">
            <div className="name">
              <div className="nameplate">mcbalaam</div>
              <Badge small src={extera}>
                extera
              </Badge>
            </div>
            <div className="pnouns">
              mcbalaam <FontAwesomeIcon icon={faArrowRightLong} /> эмсибалаам,
              балаам, макбаклак (he/him)
            </div>
            <p className="desc">{t("aboutMe")}</p>
            <div
              style={{
                display: "flex",
                height: "fit-content",
                flexWrap: "wrap",
                margin: "0px 5px 10px 0",
              }}
            >
              <p>
                {t("myMidniht")} <Timestamp ts="1764608400" />. {t("active")}
              </p>
            </div>

            <h1>{t("connections")}</h1>
            <div className="connections">
              <Badge href="https://www.github.com/mcbalaam" src={github}>
                GitHub{" "}
                <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
              </Badge>
              <Badge href="https://steamcommunity.com/id/mcbalaam/" src={steam}>
                Steam{" "}
                <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
              </Badge>
              <Badge href="https://soundcloud.com/mcbalaam" src={soundcloud}>
                SoundСloud{" "}
                <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
              </Badge>
              <Badge href="https://t.me/whattheactualfuckbro" src={telegram}>
                Telegram{" "}
                <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
              </Badge>
              <Badge href="https://ko-fi.com/mcbalaam" src={kofi}>
                Ko-Fi{" "}
                <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
              </Badge>
              <Badge href="https://pay.cloudtips.ru/p/7ac675d4" src={cloudtips}>
                CloudTips{" "}
                <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
              </Badge>
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
              onAuthChange={(isAuthenticated) => {
                // Auth change handled by explicit success/error callbacks
              }}
            />
          </div>
        </div>
        <div className="card">
          <div className="item-container accountbar">
            <SignList
              onLeaveSignClick={() => openModal("default")}
              onSignDeleted={handleSignDeleted}
              onSignDeleteError={handleSignDeleteError}
              refreshKey={signsRefreshKey}
            />
          </div>
        </div>
      </div>

      <ModalPopup control={modalLeaveSign}>
        <SignForm
          onSignCreated={handleSignFormSuccess}
          onSignError={handleSignFormError}
        />
      </ModalPopup>

      {toast.visible && (
        <ToastNotification
          icon={toast.type === "success" ? faCircleCheck : faCircleXmark}
          type={toast.type === "success" ? "success" : "error"}
          duration={3000}
          onClose={() => setToast({ ...toast, visible: false })}
          position="bottom-center"
        >
          {toast.message}
        </ToastNotification>
      )}
    </TranslationContextProvider>
  );
}

export default App;
