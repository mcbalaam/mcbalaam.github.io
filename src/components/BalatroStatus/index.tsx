import type { PropsWithChildren, ReactNode } from "react";
import "./styles.css";

export default function BalatroStatus({
  children,
  title,
  badge,
  rarity,
}: PropsWithChildren<{
  title: string;
  badge: ReactNode;
  rarity?: "common" | "uncommon" | "rare" | "legendary";
}>) {
  return (
    <span className="balatro-status">
      <span className="balatro-title">{title}</span>
      <span className="balatro-inside">{children}</span>
      <span className={`balatro-badge balatro-badge--${rarity ?? "uncommon"}`}>
        {badge}
      </span>
    </span>
  );
}