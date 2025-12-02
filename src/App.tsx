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
import Timestamp from "./components/Timestamp";
import Tooltip from "./components/Tooltip";
import RepoTab from "./components/RepoTab";

export function App() {
  return (
    <div className="master-container">
      <div className="card">
        <div className="banner">
          <img className="pfp" src={pfp}></img>
          <StatusBubble>
            busy auracoding
          </StatusBubble>
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
          <p className="desc">hey there. name's Max, I'm learning web development and Rust in shape of microservices and GUI apps. I contribute small features to /tg/station from time to time, write Telegram bots and help set them up. open for bounties -w-</p>
          <div style={{display: 'flex', height: 'fit-content', margin: '0px 5px 10px 0'}}>
            <p>My midnight is your</p> <Timestamp ts="1764608400" />
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
            <Badge href="https://t.me/whattheactualfuckbro" src={soundcloud}>
              Telegram ↗
            </Badge>
          </div>
          {/*<div className="buttons">
            <Button fill>Authorize with GitHub</Button>
            <Button contrast>Sign</Button>
            <Button>About signs</Button>
          </div>*/}
        </div>
      </div>
    </div>
  );
}

export default App;
