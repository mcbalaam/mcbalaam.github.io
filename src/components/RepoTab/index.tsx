import Badge from "../Badge";
import "./styles.css";
import misfortune from "../../../public/mis-fortune.png"
import extera from "../../../public/extera.png"
import byond from "../../../public/byond.png"
import react from "../../../public/react.png"
import typescript from "../../../public/typescript.jpg"
import elysia from "../../../public/elysia.png"
import prisma from "../../../public/prisma.jpg"
import rust from "../../../public/rust.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { t } from "../../../translations/translate";
import Tooltip from "../Tooltip";

export default function RepoTab({ }: {

},) {


  return (
    <span className="repotab-box">
      <span className="repotab-card">
        <span style={{ display: "flex", flexDirection: "row" }}>
          <span style={{ flex: 1 }}>
            <Badge href="https://www.github.com/mcbalaam/mis-fortune" src={misfortune}>mis-fortune <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} /></Badge>
          </span>
          <Tooltip text="TypeScript"><Badge src={typescript} /></Tooltip>
          <Tooltip text="React"><Badge src={react} /></Tooltip>
        </span>
        <p>{t("fortune")}</p>
      </span>
      <span className="repotab-card">
        <span style={{ display: "flex", flexDirection: "row" }}>
          <span style={{ flex: 1 }}>
            <Badge href="https://www.github.com/mcbalaam/exterastore-server" src={extera}>exteraGram Store <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} /></Badge>
          </span>
          <Tooltip text="TypeScript"><Badge src={typescript} /></Tooltip>
          <Tooltip text="ElysiaJS"><Badge src={elysia} /></Tooltip>
          <Tooltip text="Prisma ORM"><Badge src={prisma} /></Tooltip>
        </span><p>{t("extera")}</p>
      </span>
      <span className="repotab-card">
        <span style={{ display: "flex", flexDirection: "row" }}>
          <span style={{ flex: 1 }}>
            <Badge href="https://www.github.com/mcbalaam/zed-dreammaker-langserver" src={byond}>Zed DreamMaker Langserver <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} /></Badge>
          </span>
          <Tooltip text="Rust"><Badge src={rust} /></Tooltip>
        </span><p>{t("zed")}</p>
      </span>
    </span>
  );
}
