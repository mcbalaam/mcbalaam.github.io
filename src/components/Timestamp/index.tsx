import { useState, useEffect } from "react";
import "./styles.css";

function getMyMidnightForUser(): string {
  const userLocalDate = new Date();
  const userMidnightLocal = new Date(
    userLocalDate.getFullYear(),
    userLocalDate.getMonth(),
    userLocalDate.getDate(),
    0,
    0,
    0,
    0,
  );

  const myMidnightUTC = new Date(userMidnightLocal);
  myMidnightUTC.setUTCHours(17, 0, 0, 0);
  myMidnightUTC.setUTCDate(myMidnightUTC.getUTCDate() - 1);

  return myMidnightUTC.toLocaleString("ru-RU", {
    // year: "numeric",
    // month: "2-digit",
    // day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

const MidnightDisplay: React.FC = () => {
  const [myMidnight, setMyMidnight] = useState<string>("");

  useEffect(() => {
    const updateMidnight = () => {
      setMyMidnight(getMyMidnightForUser());
    };

    updateMidnight();
    const interval = setInterval(updateMidnight, 60000);

    return () => clearInterval(interval);
  }, []);

  return <strong className="timestamp">{myMidnight}</strong>;
};

export default MidnightDisplay;
