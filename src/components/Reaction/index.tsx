import type { PropsWithChildren } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContentLoader from "react-content-loader";
import "./styles.css";

interface ReactionProps {
  contrast?: boolean;
  small?: boolean;
  src?: string;
  count?: number;
  reacted?: boolean;
  onReaction?: (reacted: boolean) => void;
  onClick: () => void;
}

function AnimatedDigit({ digit }: { digit: string }) {
  return (
    <div
      style={{
        position: "relative",
        height: "1em",
        width: "0.7em",
        overflow: "hidden",
        display: "inline-block",
        textAlign: "center",
      }}
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={digit}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            position: "absolute",
            top: -3,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function Reaction({
  children,
  src,
  contrast,
  small,
  count = 0,
  reacted: externalReacted,
  onReaction,
  onClick,
}: PropsWithChildren<ReactionProps>) {
  const [internalReacted, setInternalReacted] = useState(false);
  const isReacted = externalReacted !== undefined ? externalReacted : internalReacted;

  const handleClick = () => {
    onClick();
    if (onReaction) {
      onReaction(!isReacted);
    } else {
      setInternalReacted(!isReacted);
    }
  };

  const badgeClass = `reaction-badge ${isReacted ? "reacted" : ""} ${
    contrast ? "contrast" : ""
  } ${small ? "small" : ""}`;

  const showSkeleton = count === 0;

  return (
    <button className={badgeClass} onClick={handleClick} type="button">
      {src && <img className="reaction-emoji" src={src} alt="" />}
      <span className="reaction-text">{children}</span>
      <span className="reaction-count">
        {showSkeleton ? (
<ContentLoader
  speed={1}
  width={20}
  height={20}
  viewBox="0 0 28 30"
  backgroundColor="#bbb1e34d"
  foregroundColor="#a5a6bf99"
  style={{ display: 'block'}} 
>
  <rect x="0" y="0" ry="5" rx="5" width="23" height="27"  />
</ContentLoader>
        ) : (
          count
            .toString()
            .split("")
            .map((digit, index) => <AnimatedDigit key={index} digit={digit} />)
        )}
      </span>
    </button>
  );
}