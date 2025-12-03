import type { PropsWithChildren, CSSProperties } from "react";
import "./styles.css";

export default function Button({
  children,
  contrast,
  fill,
  href,
  onClick,
  disabled,
  className,
  style,
}: PropsWithChildren<{
  contrast?: boolean;
  fill?: boolean;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}>) {
  return (
    <button
      className={`fancy-button${contrast ? " blue" : ""}${fill ? " fill" : ""}${className ? " " + className : ""}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {href && <img className="button-img" src={href} />}
      <span className="fancy-button-text">{children}</span>
    </button>
  );
}
