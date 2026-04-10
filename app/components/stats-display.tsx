import type { StatDisplay } from "../types/stats"

interface StatsDisplayProps {
  stats: StatDisplay[]
}

const ICONS = ["🎮", "🏆", "🔥", "⭐"]
const COLORS = ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff"]

export function StatsDisplay({ stats }: StatsDisplayProps) {
  const winRateStat = stats.find((s) => s.label === "Win Rate")
  const winRate = winRateStat ? parseInt(String(winRateStat.value)) : 0

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px", width: "100%" }}>
      {stats.map((stat, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 10px",
            background: index % 2 === 0
              ? "rgba(255,255,255,0.03)"
              : "rgba(0,0,0,0.15)",
            borderLeft: `3px solid ${COLORS[index % COLORS.length]}`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Win rate bar background */}
          {stat.label === "Win Rate" && (
            <div style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: `${winRate}%`,
              background: `linear-gradient(90deg, rgba(107,203,119,0.15) 0%, rgba(107,203,119,0.05) 100%)`,
              transition: "width 1s ease",
              pointerEvents: "none",
            }} />
          )}

          {/* Icon */}
          <span style={{ fontSize: "12px", flexShrink: 0, lineHeight: 1 }}>{ICONS[index % ICONS.length]}</span>

          {/* Label */}
          <span style={{
            fontFamily: "var(--font-press-start), monospace",
            fontSize: "0.42rem",
            color: "rgba(255,222,0,0.6)",
            letterSpacing: "0.04em",
            flex: 1,
            textTransform: "uppercase",
          }}>
            {stat.label}
          </span>

          {/* Value */}
          <span style={{
            fontFamily: "var(--font-press-start), monospace",
            fontSize: "0.75rem",
            color: COLORS[index % COLORS.length],
            letterSpacing: "0.02em",
            textShadow: `0 0 8px ${COLORS[index % COLORS.length]}88`,
            flexShrink: 0,
            minWidth: "3ch",
            textAlign: "right",
          }}>
            {stat.value}
          </span>
        </div>
      ))}
    </div>
  )
}

