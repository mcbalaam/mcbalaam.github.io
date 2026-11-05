import type { ComponentChildren } from "preact";
import { useEffect, useRef, useState } from "react";
import "./styles.css";

interface ReactionProps {
  children: ComponentChildren;
  contrast?: boolean;
  small?: boolean;
  src?: string;
  count?: number;
  reacted?: boolean;
  onReaction?: (reacted: boolean) => void;
  onClick: () => void;
}

type Direction = "up" | "down";

function AnimatedDigit({
  digit,
  direction,
}: {
  digit: string;
  direction: Direction;
}) {
  const [current, setCurrent] = useState(digit);
  const [previous, setPrevious] = useState<string | null>(null);
  const [prevDirection, setPrevDirection] = useState<Direction>(direction);
  const currentRef = useRef(digit);

  useEffect(() => {
    if (digit === currentRef.current) return;

    setPrevious(currentRef.current);
    setPrevDirection(direction);
    setCurrent(digit);
    currentRef.current = digit;
  }, [digit, direction]);

  useEffect(() => {
    if (previous === null) return;

    const id = window.setTimeout(() => setPrevious(null), 260);
    return () => window.clearTimeout(id);
  }, [previous]);

  return (
    <span className="reaction-digit" aria-hidden="true">
      {previous !== null && (
        <span
          key={`out-${previous}`}
          className={`reaction-digit__item reaction-digit__item--out reaction-digit__item--out-${prevDirection}`}
        >
          {previous}
        </span>
      )}

      <span
        key={`in-${current}`}
        className={`reaction-digit__item reaction-digit__item--in reaction-digit__item--in-${direction}`}
      >
        {current}
      </span>
    </span>
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
}: ReactionProps ) {
  const [internalReacted, setInternalReacted] = useState(false);
  const isReacted =
    externalReacted !== undefined ? externalReacted : internalReacted;

  const prevCountRef = useRef(count);
  const direction: Direction = count >= prevCountRef.current ? "up" : "down";
  prevCountRef.current = count;

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
      <span className="reaction-count" aria-label={String(count)}>
        {showSkeleton ? (
          <span className="reaction-count-skeleton" aria-hidden="true" />
        ) : (
          <span aria-hidden="true">
            {count
              .toString()
              .split("")
              .map((digit, index) => (
                <AnimatedDigit
                  key={index}
                  digit={digit}
                  direction={direction}
                />
              ))}
          </span>
        )}
      </span>
    </button>
  );
}
