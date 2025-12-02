import type { PropsWithChildren } from "react";
import "./styles.css";

export default function Button({
  children,
  contrast,
  fill,
}: PropsWithChildren<{ contrast?: boolean; fill?: boolean }>) {
  return (
    <button
      className={`fancy-button${contrast ? " blue" : ""}${fill ? " fill" : ""}`}
    >
      {children}
    </button>
  );
}
