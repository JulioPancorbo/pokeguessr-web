"use client"

import { useState, useEffect } from "react"
import type { GameStats } from "../types/stats"

const STATS_STORAGE_KEY = "pokemon-game-stats"

const defaultStats: GameStats = {
  totalGames: 0,
  wins: 0,
  currentStreak: 0,
  bestStreak: 0,
}

export function useGameStats() {
  const [stats, setStats] = useState<GameStats>(defaultStats)

  useEffect(() => {
    // Load stats from localStorage on mount
    const savedStats = localStorage.getItem(STATS_STORAGE_KEY)
    if (savedStats) {
      setStats(JSON.parse(savedStats))
    }
  }, [])

  const updateStats = (won: boolean) => {
    setStats((prevStats) => {
      const newStats = {
        ...prevStats,
        totalGames: prevStats.totalGames + 1,
        wins: won ? prevStats.wins + 1 : prevStats.wins,
        currentStreak: won ? prevStats.currentStreak + 1 : 0,
        lastResult: won ? "win" : "loss",
      } as GameStats

      // Update best streak if current streak is higher
      if (newStats.currentStreak > prevStats.bestStreak) {
        newStats.bestStreak = newStats.currentStreak
      }

      // Save to localStorage
      localStorage.setItem(STATS_STORAGE_KEY, JSON.stringify(newStats))
      return newStats
    })
  }

  const getWinRate = (): number => {
    if (stats.totalGames === 0) return 0
    return Math.round((stats.wins / stats.totalGames) * 100)
  }

  return {
    stats,
    updateStats,
    getWinRate,
  }
}

