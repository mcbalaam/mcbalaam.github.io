import type { PropsWithChildren } from "react";
import "./styles.css";

interface TooltipProps {
  children: React.ReactNode; // trigger блок
  text: string; // текст тултипа
}

export default function Tooltip({ children, text }: TooltipProps) {
  return (
    <span className="tooltip-wrapper">
      {children}
      <span className="tooltip-text">{text}</span>
    </span>
  );
}
