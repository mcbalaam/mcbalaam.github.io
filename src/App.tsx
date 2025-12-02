import { APITester } from "./APITester";
import "./index.css";

import Button from "./components/Button";

import pfp from "./pfp.jpg";

import github from "./github-tile.svg";
import steam from "./steampowered-tile.svg";
import extera from "./5EmxevP.png";
import soundcloud from "./soundcloud.png";
import Badge from "./components/Badge";
import StatusBubble from "./components/StatusBubble";
import MidnightDisplay from "./components/Timestamp";

export function App() {
  return (
    <div className="card">
      <div className="banner">
        <img className="pfp" src={pfp}></img>
        <StatusBubble>
          <i>Status goes here...</i>
        </StatusBubble>
      </div>
      <div className="item-container">
        <div className="name">
          <div className="nameplate">mcbalaam</div>
          <Badge small src={extera}>
            MOTH
          </Badge>
          <Badge small src={extera}>
            extera
          </Badge>
        </div>
        <div className="pnouns">
          mcbalaam ~ эмсибалаам, балаам, макбаклак (he/him)
        </div>
        <p>
          My midnight is your <MidnightDisplay />
        </p>
        <div className="connections">
          <Button contrast>Contrast Button</Button>
          <Button>Button</Button>
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
            Soundcloud ↗
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default App;
