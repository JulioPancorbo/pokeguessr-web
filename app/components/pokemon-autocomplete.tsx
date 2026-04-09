"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"

interface PokemonOption {
  id: number
  name: string
}

interface PokemonAutocompleteProps {
  pokemonList: PokemonOption[]
  onSelect: (value: string) => void
  value: string
}

export function PokemonAutocomplete({ pokemonList, onSelect, value }: PokemonAutocompleteProps) {
  const [inputValue, setInputValue] = React.useState("")
  const [showSuggestions, setShowSuggestions] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const filteredPokemon = React.useMemo(() => {
    if (!inputValue) return []
    const searchTerm = inputValue.toLowerCase()
    return pokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm)).slice(0, 10)
  }, [pokemonList, inputValue])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)
    setShowSuggestions(true)
  }

  const handleSelectPokemon = (pokemonName: string) => {
    setInputValue(capitalizeFirstLetter(pokemonName))
    onSelect(pokemonName)
    setShowSuggestions(false)
  }

  React.useEffect(() => {
    if (!value) {
      setInputValue("")
    }
  }, [value])

  return (
    <div ref={containerRef} className="relative w-full">
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setShowSuggestions(true)}
        placeholder="Enter Pokémon name"
        className="w-full mb-2"
        style={{ textTransform: "capitalize" }}
      />
      {showSuggestions && filteredPokemon.length > 0 && (
        <div className="absolute w-full z-50 bg-white rounded-md border shadow-md max-h-[300px] overflow-y-auto">
          {filteredPokemon.map((pokemon) => (
            <div
              key={pokemon.id}
              onClick={() => handleSelectPokemon(pokemon.name)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm capitalize"
            >
              {pokemon.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

