import { useState } from "react";
import { Badge, Button, ModalPopup, Tooltip } from "@mcbalaam/razdor-ui";
import "./styles.css";
import EbitterDemo, { isMobileLayout } from "../EbitterDemo";
import misfortune from "/mis-fortune.webp";
import extera from "/extera.webp";
import react from "/react.webp";
import typescript from "/typescript.webp";
import elysia from "/elysia.webp";
import prisma from "/prisma.webp";
import go from "/golang.webp";
import ebitter from "/bitter.png";
import github from "/github-tile.svg";
import { ArrowUpRight, Play } from "lucide-react";
import { useT } from "../../translate";

export default function RepoTab({}: {}) {
  const t = useT();
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
              <ArrowUpRight size={12} />
            </Badge>
          </span>
          <Tooltip text="Go">
            <Badge src={go} />
          </Tooltip>
        </span>
        <p>{t("projects.ebitter")}</p>
        <Button color="secondary" fill icon={Play} onClick={openDemo}>
          {t("page.runLiveDemo")}
        </Button>
      </span>
      <span className="repotab-card">
        <span style={{ display: "flex", flexDirection: "row" }}>
          <span style={{ flex: 1 }}>
            <Badge href="https://www.github.com/mcbalaam/pico-rss" src={go}>
              pico-rss{" "}
              <ArrowUpRight size={12} />
            </Badge>
          </span>
          <Tooltip text="Go">
            <Badge src={go} />
          </Tooltip>
        </span>
        <p>{t("projects.picorss")}</p>
      </span>
      <span className="repotab-card">
        <span style={{ display: "flex", flexDirection: "row" }}>
          <span style={{ flex: 1 }}>
            <Badge
              href="https://www.github.com/mcbalaam/mis-fortune"
              src={misfortune}
            >
              mis-fortune{" "}
              <ArrowUpRight size={12} />
            </Badge>
          </span>
          <Tooltip text="TypeScript">
            <Badge src={typescript} />
          </Tooltip>
          <Tooltip text="React">
            <Badge src={react} />
          </Tooltip>
        </span>
        <p>{t("projects.fortune")}</p>
      </span>
      <span className="repotab-card">
        <span style={{ display: "flex", flexDirection: "row" }}>
          <span style={{ flex: 1 }}>
            <Badge href="https://www.github.com/mcbalaam/graft" src={github}>
              graft{" "}
              <ArrowUpRight size={12} />
            </Badge>
          </span>
          <Tooltip text="Go">
            <Badge src={go} />
          </Tooltip>
        </span>
        <p>{t("projects.graft")}</p>
      </span>
      <span className="repotab-card">
        <span style={{ display: "flex", flexDirection: "row" }}>
          <span style={{ flex: 1 }}>
            <Badge
              href="https://www.github.com/mcbalaam/exterastore-server"
              src={extera}
            >
              exteraGram Store{" "}
              <ArrowUpRight size={12} />
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
        <p>{t("projects.extera")}</p>
      </span>
      <span className="repotab-card">
        <span style={{ display: "flex", flexDirection: "row" }}>
          <span style={{ flex: 1 }}>
            <Badge href="https://www.github.com/mcbalaam/razdor-ui" src={react}>
              Razdor-UI Component Library{" "}
              <ArrowUpRight size={12} />
            </Badge>
          </span>
          <Tooltip text="React">
            <Badge src={react} />
          </Tooltip>
        </span>
        <p>{t("projects.razdor")}</p>
      </span>

      <ModalPopup
        control={{
          isOpen: isDemoOpen,
          onClose: () => setIsDemoOpen(false),
          closeOnOverlayClick: true,
          closeOnEscape: true,
          showCloseButton: true,
          title: t("demo.title"),
          size: isMobile ? "small" : "large",
        }}
      >
        <EbitterDemo mobile={isMobile} />
      </ModalPopup>
    </span>
  );
}
