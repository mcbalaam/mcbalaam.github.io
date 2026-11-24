import { useEffect, useRef, useState } from "preact/hooks";
import { Badge, Button, ModalPopup, Tooltip } from "@mcbalaam/razdor-ui";
import "./styles.css";
import EbitterDemo, { isMobileLayout } from "../EbitterDemo";
import misfortune from "/mis-fortune.webp";
import react from "/react.webp";
import typescript from "/typescript.webp";
import go from "/golang.webp";
import ebitter from "/bitter.png";
import github from "/github-tile.svg";
import { ArrowUpRight, Play } from "lucide-react";
import { useT } from "../../translate";
import { bindUsageArrows } from "./usageArrows";

export default function RepoTab({ showUsageArrows }: { showUsageArrows: boolean }) {
  const t = useT();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const repoList = useRef<HTMLSpanElement>(null);
  const usageLabel = t("projects.usedHere");

  useEffect(() => {
    if (showUsageArrows && repoList.current) {
      return bindUsageArrows(repoList.current, usageLabel);
    }
  }, [showUsageArrows, usageLabel]);

  const openDemo = () => {
    setIsMobile(isMobileLayout());
    setIsDemoOpen(true);
  };

  return (
    <span className="repotab-box" ref={repoList}>
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
      <span className="repotab-card" data-usage-target="#rss-title">
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
      <span className="repotab-card" data-usage-target=".language-button">
        <span style={{ display: "flex", flexDirection: "row" }}>
          <span style={{ flex: 1 }}>
            <Badge
              href="https://www.github.com/mcbalaam/to18ml"
              src={typescript}
            >
              to18ml{" "}
              <ArrowUpRight size={12} />
            </Badge>
          </span>
          <Tooltip text="TypeScript">
            <Badge src={typescript} />
          </Tooltip>
        </span>
        <p>{t("projects.to18ml")}</p>
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
      <span className="repotab-card" data-usage-target=".card:has(.banner)">
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
