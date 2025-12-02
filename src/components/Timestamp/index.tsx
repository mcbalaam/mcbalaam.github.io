import { useState, useEffect } from "react";
import "./styles.css";
import Tooltip from "../Tooltip";

interface TimestampProps {
  ts: string; // Unix timestamp в секундах или ISO
}

export default function Timestamp({ ts }: TimestampProps) {
  const [date, setDate] = useState<Date>(new Date());

  // Парсинг Unix timestamp (секунды) или ISO строки
  const parseTimestamp = (ts: string): Date => {
    const num = Number(ts);

    // Если это Unix timestamp в секундах (обычно 10 цифр)
    if (!isNaN(num) && ts.length === 10) {
      return new Date(num * 1000); // конвертируем в миллисекунды
    }

    // Если это timestamp в миллисекундах (13 цифр) или ISO строка
    const parsed = new Date(ts);

    if (!isNaN(parsed.getTime())) {
      return parsed;
    }

    console.warn(`Invalid timestamp: ${ts}`);
    return new Date();
  };

  useEffect(() => {
    setDate(parseTimestamp(ts));
  }, [ts]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(parseTimestamp(ts));
    }, 60000);

    return () => clearInterval(interval);
  }, [ts]);

  // Короткое время для основного отображения
  const shortTime = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  // Полная дата и время для тултипа
  const fullDateTime = date.toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <Tooltip text={fullDateTime}>
      <span className="timestamp">{shortTime}</span>
    </Tooltip>
  );
}
