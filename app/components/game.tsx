"use client"

import type { Metadata } from "next"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, ChevronRight, ChevronLeft } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { PokemonAutocomplete } from "./pokemon-autocomplete"
import { usePokemonGame } from "../hooks/usePokemonGame"
import { usePokemonData } from "../hooks/usePokemonData"
import { GENERATIONS } from "../config/game-config"
import type { Generation } from "../types/pokemon"
import { useGameStats } from "../hooks/useGameStats"
import { StatsDisplay } from "./stats-display"
import confetti from "canvas-confetti"
import { GenerationSelector } from "./generation-selector"
import { MobileMenu } from "./mobile-menu"
import { GameHeader } from "./game-header"
import Link from "next/link"
import { STORAGE_PREFIX } from "../config/storage-config"

const generations = []

export const metadata: Metadata = {
  title: "PokéGuessr",
  description: "Guess the Pokémon from its silhouette!",
}

export function Game() {
  const { state, updateState, resetGame, handleGuess, handleShowClue } = usePokemonGame()
  const { pokemonList, fetchPokemonList, fetchRandomPokemon, fetchPokemonDescription } = usePokemonData()
  const [selectedGenerations, setSelectedGenerations] = useState<Generation[]>([GENERATIONS[0]])
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const { stats, updateStats, getWinRate } = useGameStats()

  // Mobile menu state
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isStatsOpen, setIsStatsOpen] = useState(false)

  // Añadir este estado al inicio del componente junto a los otros estados
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const initializeGame = async () => {
      updateState({ loading: true })
      try {
        await fetchPokemonList(selectedGenerations)
        const pokemon = await fetchRandomPokemon(selectedGenerations)
        const description = await fetchPokemonDescription(pokemon.id)

        updateState({
          pokemon,
          pokemonDescription: description,
          loading: false,
        })
      } catch (error) {
        console.error("Error initializing game:", error)
        updateState({
          message: "Error loading game. Please try again.",
          loading: false,
        })
      }
    }

    resetGame()
    initializeGame()
  }, [selectedGenerations, fetchPokemonList, fetchRandomPokemon, fetchPokemonDescription, updateState, resetGame])

  const handleGuessWrapper = () => {
    if (!state.pokemon) return
    if (!state.guess) return

    if (state.guess.toLowerCase() === state.pokemon.name.toLowerCase()) {
      updateState({
        message: `Correct! It's ${capitalizeFirstLetter(state.pokemon.name)}!`,
        gameOver: true,
        isCorrect: true,
      })
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
      playPokemonCry()
      updateStats(true)
    } else if (state.incorrectGuesses.length >= 4) {
      updateState({
        message: `Game over! The Pokémon was: ${capitalizeFirstLetter(state.pokemon.name)}.`,
        gameOver: true,
      })
      updateStats(false)
    } else {
      updateState({
        incorrectGuesses: [...state.incorrectGuesses, state.guess],
        guess: "",
      })
    }
  }

  const setSelectedGeneration = (newGeneration: Generation) => {
    setSelectedGenerations([newGeneration])
  }

  const handleGenerationChange = (value: string) => {
    const newGeneration = GENERATIONS.find((gen) => gen.name === value) || GENERATIONS[0]
    setSelectedGeneration(newGeneration)
  }

  const handleSkip = () => {
    updateState({
      gameOver: true,
      message: `You skipped. The Pokémon was: ${capitalizeFirstLetter(state.pokemon!.name)}.`,
      incorrectGuesses: [...state.incorrectGuesses, "Skipped"],
    })
    updateStats(false)
  }

  // Reemplazar la función handleClearCache con esta versión que solo limpia el caché de Pokémon
  const handleClearCache = () => {
    // Obtener todas las claves del localStorage
    const keys = Object.keys(localStorage)

    // Filtrar solo las claves relacionadas con los Pokémon (que comienzan con el prefijo)
    const pokemonKeys = keys.filter((key) => key.startsWith(STORAGE_PREFIX))

    // Eliminar solo las entradas de Pokémon
    pokemonKeys.forEach((key) => localStorage.removeItem(key))

    // Mostrar una alerta al usuario
    alert("Pokémon cache cleared successfully! The page will reload to apply changes.")

    // Recargar la página para reiniciar y volver a cargar los datos
    window.location.reload()
  }

  const playPokemonCry = async () => {
    if (audioRef.current && state.pokemon) {
      const audioUrl = `https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${state.pokemon.id}.ogg`

      try {
        // Create a new Audio object to test if the file exists and is playable
        const audio = new Audio()
        audio.crossOrigin = "anonymous"

        // Set up error handling before setting the source
        const audioPromise = new Promise((resolve, reject) => {
          audio.onloadeddata = () => resolve(true)
          audio.onerror = () => reject(new Error("Audio file not found or not playable"))
        })

        audio.src = audioUrl

        // Wait for the audio to be loaded or error out
        await audioPromise

        // If we get here, the audio is valid, so set it to our ref and play
        if (audioRef.current) {
          audioRef.current.crossOrigin = "anonymous"
          audioRef.current.src = audioUrl
          await audioRef.current.play()
          setIsPlaying(true)
        }
      } catch (error) {
        console.log("Could not play Pokémon cry:", error)
        setIsPlaying(false)
      }
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onended = () => setIsPlaying(false)
    }
  }, [])

  const revealAnimation = {
    initial: { scale: 0, rotate: 180 },
    animate: { scale: 1, rotate: 360 },
    transition: { duration: 1, ease: "easeOut" },
  }

  const changeSprite = (direction: "next" | "prev") => {
    const sprites = [
      state.pokemon!.sprites.front_default,
      state.pokemon!.sprites.back_default,
      state.pokemon!.sprites.front_shiny,
      state.pokemon!.sprites.back_shiny,
    ].filter(Boolean)

    if (direction === "next") {
      updateState({ currentSpriteIndex: (state.currentSpriteIndex + 1) % sprites.length })
    } else {
      updateState({ currentSpriteIndex: (state.currentSpriteIndex - 1 + sprites.length) % sprites.length })
    }
  }

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const getTypeString = (types: any[]) => {
    return types.map((t) => capitalizeFirstLetter(t.type.name)).join("/")
  }

  const getPartialName = (name: string, firstOnly: boolean) => {
    if (firstOnly) {
      return name[0].toUpperCase() + " " + "_ ".repeat(name.length - 1).trim()
    } else {
      return (
        name[0].toUpperCase() + " " + "_ ".repeat(name.length - 2).trim() + " " + name[name.length - 1].toLowerCase()
      )
    }
  }

  const getCurrentSprite = () => {
    if (!state.pokemon) return "/placeholder.svg"
    const sprites = [
      state.pokemon.sprites.front_default,
      state.pokemon.sprites.back_default,
      state.pokemon.sprites.front_shiny,
      state.pokemon.sprites.back_shiny,
    ].filter(Boolean)
    return sprites[state.currentSpriteIndex] || "/placeholder.svg"
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-24 primary">
      {/* Mobile Header */}
      <GameHeader onOpenSettings={() => setIsSettingsOpen(true)} onOpenStats={() => setIsStatsOpen(true)} />

      {/* Mobile Menus */}
      <MobileMenu side="left" isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)}>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Game Settings</h3>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="text-sm font-medium text-center mb-2">Generation</div>
            <GenerationSelector
              generations={GENERATIONS}
              selectedGenerations={selectedGenerations}
              onChange={setSelectedGenerations}
            />
          </div>

          {/* Añadir el botón Clear Cache aquí */}
          <div className="mt-6">
            <Button onClick={handleClearCache} className="w-full bg-red-500 hover:bg-red-600 text-white">
              Clear Cache
            </Button>
            {/* Actualizar el texto explicativo debajo del botón */}
            <p className="text-xs text-center mt-2 text-gray-600">This will clear only the cached Pokémon data</p>
          </div>
        </div>
      </MobileMenu>

      <MobileMenu side="right" isOpen={isStatsOpen} onClose={() => setIsStatsOpen(false)}>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Statistics</h3>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="text-sm font-medium text-center mb-2">Statistics</div>
            <StatsDisplay
              stats={[
                { label: "Games Played", value: stats.totalGames },
                { label: "Win Rate", value: `${getWinRate()}%` },
                { label: "Current Streak", value: stats.currentStreak },
                { label: "Best Streak", value: stats.bestStreak },
              ]}
            />
          </div>
        </div>
      </MobileMenu>

      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center mt-8 sm:mt-0">PokéGuessr</h1>
      <h2 className="text-2xl sm:text-3xl mb-4 text-gray-600 text-center">Who's that Pokémon?</h2>

      <div className="w-full max-w-6xl">
        <div className="flex flex-col items-center">
          {/* Header section with generation selector and stats - Only visible on desktop */}
          <div className="hidden sm:flex w-full max-w-4xl flex-col sm:flex-row justify-center gap-4 mb-6">
            <div className="w-full bg-gray-100 rounded-lg p-4">
              <div className="text-sm font-medium text-center mb-2">Generation</div>
              <GenerationSelector
                generations={GENERATIONS}
                selectedGenerations={selectedGenerations}
                onChange={setSelectedGenerations}
              />
            </div>
            <div className="w-full bg-gray-100 rounded-lg p-4">
              <div className="text-sm font-medium text-center mb-2">Statistics</div>
              <StatsDisplay
                stats={[
                  { label: "Games Played", value: stats.totalGames },
                  { label: "Win Rate", value: `${getWinRate()}%` },
                  { label: "Current Streak", value: stats.currentStreak },
                  { label: "Best Streak", value: stats.bestStreak },
                ]}
              />
            </div>
          </div>

          {/* Main game content */}
          <div className="w-full max-w-4xl">
            {state.loading ? (
              <p>Loading...</p>
            ) : (
              <>
                {/*{state.message && (*/}
                {/*  <div className="mb-4 text-center">*/}
                {/*    <p className="text-xl mb-4">{state.message}</p>*/}
                {/*    {state.gameOver && (*/}
                {/*      <Button*/}
                {/*        onClick={() => {*/}
                {/*          resetGame()*/}
                {/*          fetchRandomPokemon(selectedGenerations).then((pokemon) => {*/}
                {/*            fetchPokemonDescription(pokemon.id).then((description) => {*/}
                {/*              updateState({*/}
                {/*                pokemon,*/}
                {/*                pokemonDescription: description,*/}
                {/*              })*/}
                {/*            })*/}
                {/*          })*/}
                {/*        }}*/}
                {/*        className="secondary hover:bg-blue-700"*/}
                {/*      >*/}
                {/*        Next Pokémon*/}
                {/*      </Button>*/}
                {/*    )}*/}
                {/*  </div>*/}
                {/*)}*/}

                {/* Pokémon display section */}
                <div className="bg-blue-400 rounded-xl p-6 mb-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1 flex flex-col items-center">
                      <AnimatePresence mode="wait">
                        {!state.gameOver ? (
                          <motion.div
                            key="silhouette"
                            {...revealAnimation}
                            className="w-full h-full flex items-center justify-center"
                          >
                            {!isTransitioning && (
                              <Image
                                src={getCurrentSprite() || "/placeholder.svg"}
                                alt="Pokemon silhouette"
                                width={200}
                                height={200}
                                className="object-contain filter brightness-0"
                                style={{ imageRendering: "pixelated" }}
                              />
                            )}
                          </motion.div>
                        ) : (
                          <motion.div
                            key="revealed"
                            {...revealAnimation}
                            className="w-full h-full flex items-center justify-center"
                          >
                            <Image
                              src={getCurrentSprite() || "/placeholder.svg"}
                              alt={`Revealed Pokemon: ${capitalizeFirstLetter(state.pokemon!.name)}${getCurrentSprite().includes("shiny") ? " (Shiny)" : ""}`}
                              width={200}
                              height={200}
                              className="object-contain"
                              style={{ imageRendering: "pixelated" }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                      {state.gameOver && (
                        <>
                          <p className="text-center text-xl mb-4">{state.message}</p>
                          <div className="flex justify-center gap-2 w-full">
                            <Button
                              onClick={() => changeSprite("prev")}
                              size="sm"
                              variant="outline"
                              className="hover:bg-gray-200"
                            >
                              <ChevronLeft className="h-4 w-4 mr-2" />
                              Previous sprite
                            </Button>
                            <Button
                              onClick={() => changeSprite("next")}
                              size="sm"
                              variant="outline"
                              className="hover:bg-gray-200"
                            >
                              Next sprite
                              <ChevronRight className="h-4 w-4 ml-2" />
                            </Button>
                          </div>
                        </>
                      )}
                    </div>

                    {state.gameOver && (
                      <div className="flex-1">
                        <div className="space-y-2 bg-blue-200 rounded-lg p-4 h-full">
                          <p className="font-mono">
                            <strong>Name:</strong> {capitalizeFirstLetter(state.pokemon!.name)}
                            {getCurrentSprite().includes("shiny") && (
                              <span className="text-yellow-500 ml-2">(Shiny)</span>
                            )}
                          </p>
                          <p className="font-mono">
                            <strong>Pokédex #:</strong> {state.pokemon!.id}
                          </p>
                          <p className="font-mono">
                            <strong>Type(s):</strong> {getTypeString(state.pokemon!.types)}
                          </p>
                          <p className="mt-2 font-mono">
                            <strong>Description:</strong>
                          </p>
                          <p className="text-sm font-mono">{state.pokemonDescription}</p>
                          <div className="mt-4 space-y-4">
                            <div className="flex justify-center">
                              <Button
                                onClick={async () => {
                                  setIsTransitioning(true)
                                  resetGame()
                                  try {
                                    const pokemon = await fetchRandomPokemon(selectedGenerations)
                                    const description = await fetchPokemonDescription(pokemon.id)
                                    updateState({
                                      pokemon,
                                      pokemonDescription: description,
                                    })
                                  } catch (error) {
                                    console.error("Error fetching new pokemon:", error)
                                  } finally {
                                    setIsTransitioning(false)
                                  }
                                }}
                                className="secondary hover:bg-blue-700 w-full"
                                disabled={isTransitioning}
                              >
                                {isTransitioning ? "Loading..." : "Next Pokémon"}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Game controls */}
                <div className="flex flex-col items-center mb-4 w-full max-w-md mx-auto">
                  <PokemonAutocomplete
                    pokemonList={pokemonList}
                    value={state.guess}
                    onSelect={(value) => updateState({ guess: value })}
                  />
                  <div className="flex flex-wrap justify-center gap-2 mb-4 w-full">
                    <Button
                      onClick={() => handleGuessWrapper()}
                      disabled={state.gameOver || !state.guess}
                      className="flex-1 secondary hover:bg-[#2a37a3] border-none"
                    >
                      Guess!
                    </Button>
                    <Button
                      onClick={handleShowClue}
                      variant="outline"
                      disabled={state.gameOver || state.clueCount >= 4}
                      className="flex-1 bg-blue-400 hover:bg-blue-500 border-none text-white"
                    >
                      Show Clue
                    </Button>
                    <Button
                      onClick={handleSkip}
                      variant="secondary"
                      disabled={state.gameOver}
                      className="flex-1 tertiary hover:bg-[#cc0000] border-none text-white"
                    >
                      Skip
                    </Button>
                  </div>

                  {/* Attempts display */}
                  <div className="flex flex-col items-center gap-2 mb-4 w-full">
                    {Array(5)
                      .fill(null)
                      .map((_, index) => (
                        <div
                          key={index}
                          className={`w-full max-w-xs h-10 border-2 flex flex-row items-center justify-between px-2 text-xs rounded-md ${
                            index < state.incorrectGuesses.length
                              ? state.isCorrect && index === state.incorrectGuesses.length - 1
                                ? "bg-green-200 border-green-500"
                                : state.incorrectGuesses[index] === "Skipped"
                                  ? "bg-orange-200 border-orange-500"
                                  : "bg-red-200 border-red-500"
                              : "light border-gray-300"
                          }`}
                        >
                          <span className="font-bold">Attempt {index + 1}</span>
                          {index < state.incorrectGuesses.length && (
                            <span>
                              {state.incorrectGuesses[index] === "Clue"
                                ? "Clue"
                                : state.incorrectGuesses[index] === "Skipped"
                                  ? "Skipped"
                                  : state.incorrectGuesses[index]}
                            </span>
                          )}
                        </div>
                      ))}
                  </div>
                </div>

                {/* Clues section */}
                {state.revealedClues.length > 0 && (
                  <div className="flex flex-col items-center mb-4">
                    <h3 className="text-lg font-semibold mb-2">Revealed Clues:</h3>
                    <ol className="list-decimal pl-5">
                      {state.revealedClues.map((clue, index) => (
                        <li key={index} className="mb-1">
                          {clue}
                          {clue === "Pokémon's cry" && (
                            <Button onClick={playPokemonCry} variant="ghost" size="sm" className="ml-2">
                              <Play className="h-4 w-4" />
                            </Button>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                <audio ref={audioRef} crossOrigin="anonymous" preload="auto" />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Footer remains the same */}
      <footer className="mt-8 text-center">
        <p>Created by juliocodex</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://github.com/JulioPancorbo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:opacity-75 transition-opacity"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/juliopancorbo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
            style={{ color: "#0A66C2" }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.buymeacoffee.com/juliocodex"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
          >
            <svg className="w-6 h-6" role="img" viewBox="0 0 24 24" fill="#0D0C22" xmlns="http://www.w3.org/2000/svg">
              <title>Buy Me A Coffee</title>
              <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z"/>
            </svg>
          </a>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="/privacy-policy" className="text-gray-600 hover:text-gray-800">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </main>
  )
}

