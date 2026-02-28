import type { PropsWithChildren } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // 1. Импортируем анимацию
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

// 2. Компонент для анимированной цифры
function AnimatedDigit({ digit }: { digit: string }) {
  return (
<div style={{ 
      position: "relative",  
      height: "1em", 
      width: "1em",
      overflow: "hidden", 
      display: "inline-block",
      textAlign: "center" 
    }}>
      <AnimatePresence mode="popLayout">
        <motion.span
          // Ключ - это главное! Он должен меняться при смене цифры
          key={digit} 
          initial={{ y: "100%" }} // Появляется снизу
          animate={{ y: "0%" }}   // Встает на место
          exit={{ y: "-100%" }}   // Уходит вверх
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          // ВАЖНО: absolute, чтобы обе цифры были в одном месте
          style={{ 
            position: "absolute", 
            top: -3, 
            left: 0, 
            width: "100%",
            height: "100%"
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

  const badgeClass = `reaction-badge ${isReacted ? "reacted" : ""} ${contrast ? "contrast" : ""} ${small ? "small" : ""}`;

  // 3. Разбиваем число на цифры для анимации
  const countString = count.toString();

  return (
    <button className={badgeClass} onClick={handleClick} type="button">
      {src && <img className="reaction-emoji" src={src} alt="" />}
      <span className="reaction-text">{children}</span>
      <span className="reaction-count">
        {countString.split("").map((digit, index) => (
          <AnimatedDigit key={index} digit={digit} />
        ))}
      </span>
    </button>
  );
}