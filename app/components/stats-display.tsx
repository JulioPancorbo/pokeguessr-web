import type { StatDisplay } from "../types/stats"

interface StatsDisplayProps {
  stats: StatDisplay[]
}

export function StatsDisplay({ stats }: StatsDisplayProps) {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-1">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center justify-center p-2 rounded-lg bg-white">
          <span className="text-xs text-gray-600">{stat.label}</span>
          <span className="text-sm font-bold">{stat.value}</span>
        </div>
      ))}
    </div>
  )
}

