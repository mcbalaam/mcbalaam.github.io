import { useState } from "react";
import Badge from "../Badge";
import "./styles.css";

interface StackItem {
  src: string;
  label: string;
  description: string;
}

interface StackInfoProps {
  items: StackItem[];
}

export default function StackInfo({ items }: StackInfoProps) {
  const [active, setActive] = useState(0);

  if (items.length === 0) return null;

  return (
    <div className="stack-info">
      <div className="stack-badges">
        {items.map((item, i) => (
          <span
            key={item.label}
            className={`stack-badge-wrap${i === active ? " stack-badge-wrap--active" : ""}`}
            onClick={() => setActive(i)}
          >
            <Badge src={item.src}>{item.label}</Badge>
          </span>
        ))}
      </div>
      <p className="stack-desc">{items[active].description}</p>
    </div>
  );
}