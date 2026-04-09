export interface GameStats {
  totalGames: number
  wins: number
  currentStreak: number
  bestStreak: number
  lastResult?: "win" | "loss"
}

export interface StatDisplay {
  label: string
  value: string | number
}

