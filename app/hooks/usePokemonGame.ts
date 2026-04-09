"use client"

import { useState, useCallback } from "react"
import type { Pokemon } from "../types/pokemon"
import { MAX_GUESSES, MAX_CLUES } from "../config/game-config"
import confetti from "canvas-confetti"

interface GameState {
  pokemon: Pokemon | null
  guess: string
  message: string
  loading: boolean
  isCorrect: boolean
  showClue: boolean
  guessCount: number
  gameOver: boolean
  incorrectGuesses: string[]
  clueCount: number
  revealedClues: string[]
  currentSpriteIndex: number
  pokemonDescription: string
}

export function usePokemonGame() {
  const [state, setState] = useState<GameState>({
    pokemon: null,
    guess: "",
    message: "",
    loading: true,
    isCorrect: false,
    showClue: false,
    guessCount: 0,
    gameOver: false,
    incorrectGuesses: [],
    clueCount: 0,
    revealedClues: [],
    currentSpriteIndex: 0,
    pokemonDescription: "",
  })

  const updateState = useCallback((updates: Partial<GameState>) => {
    setState((prev) => ({ ...prev, ...updates }))
  }, [])

  const resetGame = useCallback(() => {
    updateState({
      guess: "",
      message: "",
      isCorrect: false,
      showClue: false,
      guessCount: 0,
      gameOver: false,
      incorrectGuesses: [],
      clueCount: 0,
      revealedClues: [],
      currentSpriteIndex: 0,
      pokemonDescription: "",
    })
  }, [updateState])

  const handleGuess = useCallback(
    (guess: string) => {
      const newGuessCount = state.guessCount + 1
      const isCorrect = guess.toLowerCase() === state.pokemon?.name.toLowerCase()

      updateState({
        guessCount: newGuessCount,
        incorrectGuesses: [...state.incorrectGuesses, guess],
        guess: "",
      })

      if (isCorrect) {
        updateState({
          message: `Correct! It's ${capitalizeFirstLetter(state.pokemon!.name)}!`,
          isCorrect: true,
          gameOver: true,
        })
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
      } else if (newGuessCount >= MAX_GUESSES) {
        updateState({
          message: `Game over! The Pokémon was: ${capitalizeFirstLetter(state.pokemon!.name)}.`,
          gameOver: true,
        })
      }
    },
    [state.guessCount, state.incorrectGuesses, state.pokemon, updateState],
  )

  const handleShowClue = useCallback(() => {
    if (state.clueCount < MAX_CLUES) {
      const newClueCount = state.clueCount + 1
      const newGuessCount = state.guessCount + 1
      const newClue = getClueText(newClueCount, state.pokemon!)

      updateState({
        clueCount: newClueCount,
        guessCount: newGuessCount,
        showClue: true,
        revealedClues: [...state.revealedClues, newClue],
        incorrectGuesses: [...state.incorrectGuesses, "Clue"],
      })

      if (newGuessCount >= MAX_GUESSES) {
        updateState({
          message: `Game over! The Pokémon was: ${capitalizeFirstLetter(state.pokemon!.name)}.`,
          gameOver: true,
        })
      }
    }
  }, [state.clueCount, state.guessCount, state.incorrectGuesses, state.pokemon, state.revealedClues, updateState])

  return {
    state,
    updateState,
    resetGame,
    handleGuess,
    handleShowClue,
  }
}

// Utility functions
function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function getClueText(clueCount: number, pokemon: Pokemon): string {
  switch (clueCount) {
    case 1:
      return `Type: ${pokemon.types.map((t) => capitalizeFirstLetter(t.type.name)).join("/")}`
    case 2:
      return "Pokémon's cry"
    case 3:
      return `Name: ${getPartialName(pokemon.name, true)}`
    case 4:
      return `Name: ${getPartialName(pokemon.name, false)}`
    default:
      return ""
  }
}

function getPartialName(name: string, firstOnly: boolean): string {
  if (firstOnly) {
    return name[0].toUpperCase() + " " + "_ ".repeat(name.length - 1).trim()
  }
  return name[0].toUpperCase() + " " + "_ ".repeat(name.length - 2).trim() + " " + name[name.length - 1].toLowerCase()
}

