import type { PropsWithChildren, CSSProperties } from "react";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  faIcon,
}: PropsWithChildren<{
  contrast?: boolean;
  fill?: boolean;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  faIcon?: typeof faIcons;
}>) {
  return (
    <button
      className={`fancy-button${contrast ? " blue" : ""}${fill ? " fill" : ""}${className ? " " + className : ""}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {faIcon && <FontAwesomeIcon className="button-img icon" icon={faIcon} />}
      {href && <img className="button-img" src={href} />}
      {children && <span className="fancy-button-text">{children}</span>}
    </button>
  );
}
