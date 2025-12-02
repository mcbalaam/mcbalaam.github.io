import type { PropsWithChildren } from "react";
import "./styles.css";

interface TooltipProps {
  children: React.ReactNode; // trigger блок
  text: string; // текст тултипа
}

export default function Tooltip({ children, text }: TooltipProps) {
  return (
    <div className="tooltip-wrapper">
      {children}
      <div className="tooltip-text">{text}</div>
    </div>
  );
}
