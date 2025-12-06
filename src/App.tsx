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

export function App() {
  const [locale, setLocale] = useState("en");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<
    "default" | "strict" | "noCloseButton"
  >("default");

  const toggleLocale = () => {
    setLocale((locale) => (locale === "en" ? "ru" : "en"));
  };

  const openModal = (type: typeof modalType) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const modalControl: ModalControl = {
    isOpen: isModalOpen,
    onClose: () => setIsModalOpen(false),
    closeOnOverlayClick: modalType !== "strict",
    closeOnEscape: modalType !== "strict",
    showCloseButton: modalType !== "noCloseButton",
    title: "Пример модального окна",
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
            <AuthButtons />
          </div>
        </div>
        <div className="card">
          <div className="item-container accountbar">
            <SignList onLeaveSignClick={() => openModal("default")} />
          </div>
        </div>
      </div>

      <ModalPopup control={modalLeaveSign}>
        <SignForm />
      </ModalPopup>
    </TranslationContextProvider>
  );
}

export default App;
