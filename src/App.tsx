import { APITester } from "./APITester";
import "./index.css";

import Button from "./components/Button";

import pfp from "./mcbalaam.webp";

import { t, TranslationContextProvider } from "translations/translate";

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
              mcbalaam ~ эмсибалаам, балаам, макбаклак (he/him)
            </div>
            <p className="desc">{t("aboutMe")}</p>
            <div
              style={{
                display: "flex",
                height: "fit-content",
                margin: "0px 5px 10px 0",
              }}
            >
              <p>{t("myMidniht")}</p> <Timestamp ts="1764608400" />
              <p>{t("active")}</p>
            </div>

            <h1>Connections</h1>
            <div className="connections">
              <Badge href="https://www.github.com/mcbalaam" src={github}>
                GitHub ↗
              </Badge>
              <Badge href="https://steamcommunity.com/id/mcbalaam/" src={steam}>
                Steam ↗
              </Badge>
              <Badge href="https://soundcloud.com/mcbalaam" src={soundcloud}>
                SoundСloud ↗
              </Badge>
              <Badge href="https://t.me/whattheactualfuckbro" src={telegram}>
                Telegram ↗
              </Badge>
              <Badge href="https://ko-fi.com/mcbalaam" src={kofi}>
                Ko-Fi ↗
              </Badge>
              <Badge href="https://pay.cloudtips.ru/p/7ac675d4" src={cloudtips}>
                CloudTips ↗
              </Badge>
            </div>
            <button onClick={toggleLocale}>Authorize with GitHub</button>
            <Button href={steam} />
            <Button href={steam}>Steam</Button>
          </div>
        </div>
      </div>
    </TranslationContextProvider>
  );
}

export default App;
