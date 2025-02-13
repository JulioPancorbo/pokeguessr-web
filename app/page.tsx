"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Play, SkipForward, ChevronRight, ChevronLeft } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import confetti from "canvas-confetti"

const generations = [
  { id: 1, name: "Gen I", start: 1, end: 151 },
  { id: 2, name: "Gen II", start: 152, end: 251 },
  { id: 3, name: "Gen III", start: 252, end: 386 },
  { id: 4, name: "Gen IV", start: 387, end: 493 },
  { id: 5, name: "Gen V", start: 494, end: 649 },
  { id: 6, name: "Gen VI", start: 650, end: 721 },
  { id: 7, name: "Gen VII", start: 722, end: 809 },
  { id: 8, name: "Gen VIII", start: 810, end: 898 },
]

export default function Home() {
  const [pokemon, setPokemon] = useState<any>(null)
  const [guess, setGuess] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(true)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showClue, setShowClue] = useState(false)
  const [guessCount, setGuessCount] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [incorrectGuesses, setIncorrectGuesses] = useState<string[]>([])
  const [clueCount, setClueCount] = useState(0)
  const [revealedClues, setRevealedClues] = useState<string[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedGeneration, setSelectedGeneration] = useState(generations[0])
  const [currentSpriteIndex, setCurrentSpriteIndex] = useState(0)
  const [pokemonDescription, setPokemonDescription] = useState("")
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    fetchRandomPokemon()
  }, [])

  const fetchRandomPokemon = async () => {
    setLoading(true)
    setMessage("")
    setGuess("")
    setIsCorrect(false)
    setShowClue(false)
    setGuessCount(0)
    setGameOver(false)
    setIncorrectGuesses([])
    setClueCount(0)
    setRevealedClues([])
    setCurrentSpriteIndex(0)
    setPokemonDescription("")
    const randomId =
      Math.floor(Math.random() * (selectedGeneration.end - selectedGeneration.start + 1)) + selectedGeneration.start
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    const data = await response.json()
    setPokemon(data)
    fetchPokemonDescription(randomId)
    setLoading(false)
  }

  const fetchPokemonDescription = async (id: number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const data = await response.json()
    const englishFlavorText = data.flavor_text_entries.find((entry: any) => entry.language.name === "en")
    setPokemonDescription(
      englishFlavorText ? englishFlavorText.flavor_text.replace(/\f/g, " ") : "No description available.",
    )
  }

  const handleGuess = () => {
    if (guess.toLowerCase() === pokemon.name.toLowerCase()) {
      setMessage(`Correct! You guessed it! It's ${capitalizeFirstLetter(pokemon.name)}!`)
      setIsCorrect(true)
      setGameOver(true)
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    } else {
      const newGuessCount = guessCount + 1
      setGuessCount(newGuessCount)
      setIncorrectGuesses([...incorrectGuesses, guess])
      if (newGuessCount >= 5) {
        setMessage(`Game over! The Pokémon was ${capitalizeFirstLetter(pokemon.name)}.`)
        setGameOver(true)
      }
    }
    setGuess("")
  }

  const handleShowClue = () => {
    if (clueCount < 4) {
      const newClueCount = clueCount + 1
      setClueCount(newClueCount)
      setGuessCount(guessCount + 1)
      setShowClue(true)
      let newClue = ""
      switch (newClueCount) {
        case 1:
          newClue = `Type: ${getTypeString(pokemon.types)}`
          break
        case 2:
          newClue = "Pokémon's cry"
          break
        case 3:
          newClue = `Name: ${getPartialName(pokemon.name, true)}`
          break
        case 4:
          newClue = `Name: ${getPartialName(pokemon.name, false)}`
          break
      }
      setRevealedClues([...revealedClues, newClue])
      setIncorrectGuesses([...incorrectGuesses, "Clue"])
      if (guessCount + 1 >= 5) {
        setMessage(`Game over! The Pokémon was ${capitalizeFirstLetter(pokemon.name)}.`)
        setGameOver(true)
      }
    }
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

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const playPokemonCry = () => {
    if (audioRef.current) {
      audioRef.current.src = `https://play.pokemonshowdown.com/audio/cries/${pokemon.name.toLowerCase()}.mp3`
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleSkip = () => {
    setGameOver(true)
    setMessage(`You skipped. The Pokémon was ${capitalizeFirstLetter(pokemon.name)}.`)
    setIncorrectGuesses([...incorrectGuesses, "Skipped"])
  }

  const revealAnimation = {
    initial: { scale: 0, rotate: 180 },
    animate: { scale: 1, rotate: 360 },
    transition: { duration: 1, ease: "easeOut" },
  }

  const changeSprite = (direction: "next" | "prev") => {
    const sprites = [
      pokemon.sprites.front_default,
      pokemon.sprites.back_default,
      pokemon.sprites.front_shiny,
      pokemon.sprites.back_shiny,
    ].filter(Boolean)

    if (direction === "next") {
      setCurrentSpriteIndex((prevIndex) => (prevIndex + 1) % sprites.length)
    } else {
      setCurrentSpriteIndex((prevIndex) => (prevIndex - 1 + sprites.length) % sprites.length)
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.onended = () => setIsPlaying(false)
    }
  }, [])

  const getCurrentSprite = () => {
    const sprites = [
      pokemon.sprites.front_default,
      pokemon.sprites.back_default,
      pokemon.sprites.front_shiny,
      pokemon.sprites.back_shiny,
    ].filter(Boolean)
    return sprites[currentSpriteIndex]
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-2">PokéGuessr</h1>
      <h2 className="text-2xl mb-8 text-gray-600">Who's that Pokémon?</h2>
      <div className="mb-4">
        <Select
          value={selectedGeneration.name}
          onValueChange={(value) =>
            setSelectedGeneration(generations.find((gen) => gen.name === value) || generations[7])
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select generation" />
          </SelectTrigger>
          <SelectContent>
            {generations.map((gen) => (
              <SelectItem key={gen.id} value={gen.name}>
                {gen.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="flex gap-4 mb-4">
            <div className="relative w-80 h-80">
              <AnimatePresence mode="wait">
                {!gameOver ? (
                  <motion.div key="silhouette" {...revealAnimation} className="w-full h-full">
                    <Image
                      src={getCurrentSprite() || "/placeholder.svg"}
                      alt="Pokemon silhouette"
                      fill
                      className="object-contain filter brightness-0"
                      style={{ imageRendering: "pixelated" }}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="revealed"
                    {...revealAnimation}
                    className="w-full h-full"
                    onAnimationComplete={playPokemonCry}
                  >
                    <Image
                      src={getCurrentSprite() || "/placeholder.svg"}
                      alt={`Revealed Pokemon: ${capitalizeFirstLetter(pokemon.name)}${getCurrentSprite().includes("shiny") ? " (Shiny)" : ""}`}
                      fill
                      className="object-contain"
                      style={{ imageRendering: "pixelated" }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              {gameOver && (
                <div className="absolute top-0 left-0 right-0 flex justify-between p-2">
                  <Button onClick={() => changeSprite("prev")} size="sm" variant="secondary">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button onClick={() => changeSprite("next")} size="sm" variant="secondary">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
            {gameOver && (
              <div className="w-64 flex flex-col items-center">
                <div className="text-left w-full">
                  <p>
                    <strong>Name:</strong> {capitalizeFirstLetter(pokemon.name)}
                    {getCurrentSprite().includes("shiny") && <span className="text-yellow-500 ml-2">(Shiny)</span>}
                  </p>
                  <p>
                    <strong>Pokédex #:</strong> {pokemon.id}
                  </p>
                  <p>
                    <strong>Type(s):</strong> {getTypeString(pokemon.types)}
                  </p>
                  <p className="mt-2">
                    <strong>Description:</strong>
                  </p>
                  <p className="text-sm">{pokemonDescription}</p>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center mb-4">
            <Input
              type="text"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              placeholder="Enter Pokémon name"
              className="mb-2"
              disabled={gameOver}
            />
            <div className="flex gap-2 mb-4">
              <Button onClick={handleGuess} disabled={gameOver || !guess}>
                Guess
              </Button>
              <Button onClick={handleShowClue} variant="outline" disabled={gameOver || clueCount >= 4}>
                Show Clue ({4 - clueCount})
              </Button>
              <Button onClick={handleSkip} variant="secondary" disabled={gameOver}>
                <SkipForward className="h-4 w-4 mr-2" />
                Skip
              </Button>
            </div>
            <div className="flex gap-2 mb-4">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className={`w-20 h-10 border-2 flex flex-col items-center justify-center text-xs ${
                      index < incorrectGuesses.length
                        ? incorrectGuesses[index] === "Skipped"
                          ? "bg-orange-200 border-orange-500"
                          : "bg-red-200 border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <span className="font-bold">Attempt {index + 1}</span>
                    {index < incorrectGuesses.length && (
                      <span>
                        {incorrectGuesses[index] === "Clue"
                          ? "Clue"
                          : incorrectGuesses[index] === "Skipped"
                            ? "Skipped"
                            : incorrectGuesses[index].slice(0, 6)}
                      </span>
                    )}
                  </div>
                ))}
            </div>
          </div>
          {revealedClues.length > 0 && (
            <div className="flex flex-col items-center mb-4">
              <h3 className="text-lg font-semibold mb-2">Revealed Clues:</h3>
              <ol className="list-decimal pl-5">
                {revealedClues.map((clue, index) => (
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
          {message && <p className="text-xl mb-4">{message}</p>}
          {gameOver && <Button onClick={fetchRandomPokemon}>Next Pokémon</Button>}
          <audio ref={audioRef} />
        </>
      )}
    </main>
  )
}

