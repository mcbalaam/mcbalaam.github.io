import { useState, useEffect } from "react";
import { ADMIN_CONFIG } from "../../config"
import "./styles.css";
import { t } from "../../../translations/translate";
import ContentLoader from "react-content-loader";

interface DayData {
  date: string;
  count: number;
}

interface GitHubActivityProps {
  username: string;
  locale: string;
}

async function fetchContributions(username: string): Promise<DayData[]> {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${ADMIN_CONFIG.githubUsername}?y=last`
  );
  const data = await response.json();

  const today = new Date();
  const twoMonthsAgo = new Date(today);
  twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 4);

  return (data.contributions as { date: string; count: number }[])
    .filter((d) => new Date(d.date) >= twoMonthsAgo)
    .map((d) => ({ date: d.date, count: d.count }));
}

function getColor(count: number, max: number): string {
  if (count === 0) return "var(--gh-empty)";
  const intensity = Math.min(count / Math.max(max * 0.6, 1), 1);
  if (intensity < 0.25) return "var(--gh-low)";
  if (intensity < 0.5) return "var(--gh-mid)";
  if (intensity < 0.75) return "var(--gh-high)";
  return "var(--gh-max)";
}

function formatDate(dateStr: string, locale: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString(locale === "ru" ? "ru-RU" : "en-US", {
    month: "short", day: "numeric", year: "numeric"
  });
}

function pluralizeContributions(n: number, locale: string): string {
  if (locale !== "ru") {
    return `${n} contribution${n !== 1 ? "s" : ""}`;
  }
  const pr = new Intl.PluralRules("ru");
  const forms: Record<string, string> = {
    one: "контрибуция",
    few: "контрибуции",
    many: "контрибуций",
    other: "контрибуций",
  };
  return `${n} ${forms[pr.select(n)]}`;
}

export default function GitHubActivity({ username, locale }: GitHubActivityProps) {
  const [days, setDays] = useState<DayData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; day: DayData } | null>(null);

  const WEEKDAYS = locale === "ru"
    ? ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"]
    : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    fetchContributions(username)
      .then((data) => {
        setDays(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load activity");
        setLoading(false);
      });
  }, [username]);

  if (loading) {
    return (
      <div className="gh-activity">
        <ContentLoader
          speed={1}
          width="100%"
          height={70}
          backgroundColor="#bbb1e34d"
          foregroundColor="#a5a6bf99"
          style={{ display: 'block' }}
        >
          <rect x="0" y="0" ry="5" rx="5" width="100%" height="70px" />
        </ContentLoader>
      </div>
    );
  }

  if (error) {
    return <div className="gh-activity gh-error">{error}</div>;
  }

  const max = Math.max(...days.map((d) => d.count), 1);
  const totalContributions = days.reduce((sum, d) => sum + d.count, 0);

  const firstDay = days[0] ? new Date(days[0].date + "T00:00:00").getDay() : 0;
  const paddedDays: (DayData | null)[] = [
    ...Array(firstDay).fill(null),
    ...days,
  ];

  const weeks: (DayData | null)[][] = [];
  for (let i = 0; i < paddedDays.length; i += 7) {
    weeks.push(paddedDays.slice(i, i + 7));
  }

  const monthLabels: { label: string; weekIndex: number }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, wi) => {
    const firstReal = week.find((d) => d !== null);
    if (firstReal) {
      const m = new Date(firstReal.date + "T00:00:00").getMonth();
      if (m !== lastMonth) {
        monthLabels.push({
          label: new Date(firstReal.date + "T00:00:00").toLocaleDateString(
            locale === "ru" ? "ru-RU" : "en-US",
            { month: "short" }
          ),
          weekIndex: wi,
        });
        lastMonth = m;
      }
    }
  });

  const CELL = 13;
  const GAP = 3;
  const STEP = CELL + GAP;
  const LEFT_OFFSET = 28;
  const TOP_OFFSET = 20;
  const svgWidth = LEFT_OFFSET + weeks.length * STEP;
  const svgHeight = TOP_OFFSET + 7 * STEP;

  return (
    <>
      <div className="gh-activity">
        <div className="gh-header">
          <span className="gh-title">{t("github")}</span>
          <span className="gh-count">{pluralizeContributions(totalContributions, locale)}</span>
        </div>

        <div className="gh-svg-wrap">
          <svg
            width={svgWidth}
            height={svgHeight}
            onMouseLeave={() => setTooltip(null)}
          >
            {[1, 3, 5].map((dow) => (
              <text
                key={dow}
                x={LEFT_OFFSET - 6}
                y={TOP_OFFSET + dow * STEP + CELL - 2}
                fontSize={9}
                textAnchor="end"
                fill="var(--color-text-secondary, #888)"
              >
                {WEEKDAYS[dow]}
              </text>
            ))}

            {monthLabels.map(({ label, weekIndex }) => (
              <text
                key={label + weekIndex}
                x={LEFT_OFFSET + weekIndex * STEP}
                y={TOP_OFFSET - 6}
                fontSize={10}
                fill="var(--color-text-secondary, #888)"
              >
                {label}
              </text>
            ))}

            {weeks.map((week, wi) =>
              week.map((day, di) => {
                if (!day) {
                  return (
                    <rect
                      key={`empty-${wi}-${di}`}
                      x={LEFT_OFFSET + wi * STEP}
                      y={TOP_OFFSET + di * STEP}
                      width={CELL}
                      height={CELL}
                      rx={2}
                      fill="transparent"
                    />
                  );
                }
                return (
                  <rect
                    key={day.date}
                    className="gh-cell"
                    x={LEFT_OFFSET + wi * STEP}
                    y={TOP_OFFSET + di * STEP}
                    width={CELL}
                    height={CELL}
                    rx={2}
                    fill={getColor(day.count, max)}
                    onMouseEnter={(e) =>
                      setTooltip({ x: e.clientX, y: e.clientY, day })
                    }
                    onMouseMove={(e) =>
                      setTooltip({ x: e.clientX, y: e.clientY, day })
                    }
                  />
                );
              })
            )}
          </svg>
        </div>

        <div className="gh-legend">
          <span className="gh-legend-label">{t("less")}</span>
          {["var(--gh-empty)", "var(--gh-low)", "var(--gh-mid)", "var(--gh-high)", "var(--gh-max)"].map((c, i) => (
            <div key={i} className="gh-legend-cell" style={{ background: c }} />
          ))}
          <span className="gh-legend-label">{t("more")}</span>
        </div>
      </div>

      {tooltip && (
        <div
          className="gh-tooltip"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <strong>{pluralizeContributions(tooltip.day.count, locale)}</strong>
          {" · "}
          {formatDate(tooltip.day.date, locale)}
        </div>
      )}
    </>
  );
}