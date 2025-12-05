import { APITester } from "./APITester";
import "./index.css";

import Button from "./components/Button";

import pfp from "./mcbalaam.webp";

import { t, TranslationContextProvider } from "translations/translate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faLanguage,
  faArrowRightLong,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import github from "./github-tile.svg";
import steam from "./steampowered-tile.svg";
import extera from "./5EmxevP.png";
import soundcloud from "./soundcloud.png";
import telegram from "./telegram.png";
import kofi from "./kofi.png";
import cloudtips from "./cloudtips.png";
import Badge from "./components/Badge";
import StatusBubble from "./components/StatusBubble";
import Timestamp from "./components/Timestamp";
import Tooltip from "./components/Tooltip";
import RepoTab from "./components/RepoTab";

import { useState } from "react";

export function App() {
  const [locale, setLocale] = useState("en");

  const toggleLocale = () => {
    setLocale((locale) => (locale === "en" ? "ru" : "en"));
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
      </div>
    </TranslationContextProvider>
  );
}

export default App;
