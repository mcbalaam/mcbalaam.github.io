import { useState } from "react";
import { Badge, Button, ModalPopup, Tooltip } from "@mcbalaam/razdor-ui";
import "./styles.css";
import EbitterDemo, { isMobileLayout } from "../EbitterDemo";
import misfortune from "/mis-fortune.png";
import extera from "/extera.png";
import byond from "/byond.png";
import react from "/react.png";
import typescript from "/typescript.jpg";
import elysia from "/elysia.png";
import prisma from "/prisma.jpg";
import rust from "/rust.png";
import go from "/golang.png";
import ebitter from "/bitter.png";
import github from "/github-tile.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { t } from "../../../translations/translate";

export default function RepoTab({}: {}) {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const openDemo = () => {
    setIsMobile(isMobileLayout());
    setIsDemoOpen(true);
  };

  return (
    <span className="repotab-box">
      <span className="repotab-card">
        <span style={{ display: "flex", flexDirection: "row" }}>
          <span style={{ flex: 1 }}>
            <Badge href="https://www.github.com/mcbalaam/ebitter" src={ebitter}>
              ebitter{" "}
              <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
            </Badge>
          </span>
          <Tooltip text="Go">
            <Badge src={go} />
          </Tooltip>
        </span>
        <p>{t("ebitter")}</p>
        <Button color="good" fill faIcon={faPlay} onClick={openDemo}>
          {t("run_live_demo")}
        </Button>
      </span>
      <span className="repotab-card">
        <span style={{ display: "flex", flexDirection: "row" }}>
          <span style={{ flex: 1 }}>
            <Badge href="https://www.github.com/mcbalaam/pico-rss" src={go}>
              pico-rss{" "}
              <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
            </Badge>
          </span>
          <Tooltip text="Go">
            <Badge src={go} />
          </Tooltip>
        </span>
        <p>{t("picorss")}</p>
      </span>
      <span className="repotab-card">
        <span style={{ display: "flex", flexDirection: "row" }}>
          <span style={{ flex: 1 }}>
            <Badge
              href="https://www.github.com/mcbalaam/mis-fortune"
              src={misfortune}
            >
              mis-fortune{" "}
              <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
            </Badge>
          </span>
          <Tooltip text="TypeScript">
            <Badge src={typescript} />
          </Tooltip>
          <Tooltip text="React">
            <Badge src={react} />
          </Tooltip>
        </span>
        <p>{t("fortune")}</p>
      </span>
      <span className="repotab-card">
        <span style={{ display: "flex", flexDirection: "row" }}>
          <span style={{ flex: 1 }}>
            <Badge href="https://www.github.com/mcbalaam/graft" src={github}>
              graft{" "}
              <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
            </Badge>
          </span>
          <Tooltip text="Go">
            <Badge src={go} />
          </Tooltip>
        </span>
        <p>{t("graft")}</p>
      </span>
      <span className="repotab-card">
        <span style={{ display: "flex", flexDirection: "row" }}>
          <span style={{ flex: 1 }}>
            <Badge
              href="https://www.github.com/mcbalaam/exterastore-server"
              src={extera}
            >
              exteraGram Store{" "}
              <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
            </Badge>
          </span>
          <Tooltip text="TypeScript">
            <Badge src={typescript} />
          </Tooltip>
          <Tooltip text="ElysiaJS">
            <Badge src={elysia} />
          </Tooltip>
          <Tooltip text="Prisma ORM">
            <Badge src={prisma} />
          </Tooltip>
        </span>
        <p>{t("extera")}</p>
      </span>
      <span className="repotab-card">
        <span style={{ display: "flex", flexDirection: "row" }}>
          <span style={{ flex: 1 }}>
            <Badge href="https://www.github.com/mcbalaam/razdor-ui" src={react}>
              Razdor-UI Component Library{" "}
              <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
            </Badge>
          </span>
          <Tooltip text="React">
            <Badge src={react} />
          </Tooltip>
        </span>
        <p>{t("razdor")}</p>
      </span>

      <ModalPopup
        control={{
          isOpen: isDemoOpen,
          onClose: () => setIsDemoOpen(false),
          closeOnOverlayClick: true,
          closeOnEscape: true,
          showCloseButton: true,
          title: t("demo_title"),
          size: isMobile ? "small" : "large",
        }}
      >
        <EbitterDemo mobile={isMobile} />
      </ModalPopup>
    </span>
  );
}
