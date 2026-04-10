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
        className="w-full mb-2 pokemon-input"
        style={{ textTransform: "capitalize" }}
      />
      {showSuggestions && filteredPokemon.length > 0 && (
        <div className="absolute w-full z-50 rounded-md max-h-[300px] overflow-y-auto" style={{
          background: "linear-gradient(135deg, rgba(26,40,96,0.95) 0%, rgba(20,30,70,0.95) 100%)",
          border: "2px solid rgba(255,222,0,0.4)",
          boxShadow: "4px 4px 0px rgba(0,0,0,0.5), inset 0 0 10px rgba(0,0,0,0.3)",
        }}>
          {filteredPokemon.map((pokemon) => (
            <div
              key={pokemon.id}
              onClick={() => handleSelectPokemon(pokemon.name)}
              style={{
                padding: "8px 10px",
                cursor: "pointer",
                borderBottom: "1px solid rgba(255,222,0,0.15)",
                color: "#ffde00",
                fontSize: "0.55rem",
                fontFamily: "var(--font-press-start), monospace",
                textTransform: "capitalize",
                transition: "all 0.15s ease",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,222,0,0.15)"
                e.currentTarget.style.color = "#fff"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.color = "#ffde00"
              }}
            >
              {pokemon.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

