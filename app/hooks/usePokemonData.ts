"use client"

import { useState, useCallback } from "react"
import type { Pokemon, PokemonSpecies, Generation } from "../types/pokemon"
import { STORAGE_PREFIX } from "../config/game-config"

export function usePokemonData() {
  const [pokemonList, setPokemonList] = useState<Array<{ id: number; name: string }>>([])

  const fetchPokemonList = useCallback(async (generations: Generation[]) => {
    try {
      let allPokemon: Array<{ id: number; name: string }> = []

      for (const generation of generations) {
        const STORAGE_KEY = `${STORAGE_PREFIX}${generation.start}-${generation.end}`

        // Check localStorage first for this generation
        const cached = localStorage.getItem(STORAGE_KEY)
        if (cached) {
          allPokemon = [...allPokemon, ...JSON.parse(cached)]
          continue
        }

        // Fetch from API if not cached
        const list = await Promise.all(
          Array.from({ length: generation.end - generation.start + 1 }, async (_, index) => {
            const id = generation.start + index
            // Fetch species data instead of pokemon data
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
            if (!response.ok) throw new Error(`Failed to fetch Pokémon species #${id}`)
            const data = await response.json()
            return {
              id: data.id,
              name: data.name, // This will be the base name without forms
            }
          }),
        )

        localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
        allPokemon = [...allPokemon, ...list]
      }

      setPokemonList(allPokemon)
    } catch (error) {
      console.error("Error fetching Pokemon list:", error)
      setPokemonList([])
    }
  }, [])

  const fetchRandomPokemon = useCallback(async (generations: Generation[]): Promise<Pokemon> => {
    // Create a range of all possible IDs from the selected generations
    const idRanges = generations.map((gen) => Array.from({ length: gen.end - gen.start + 1 }, (_, i) => gen.start + i))
    const allPossibleIds = idRanges.flat()

    // Select a random ID from all possible IDs
    const randomId = allPossibleIds[Math.floor(Math.random() * allPossibleIds.length)]

    try {
      // First, fetch the species data to get the correct base name
      const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${randomId}`)
      if (!speciesResponse.ok) throw new Error(`Failed to fetch Pokémon species #${randomId}`)
      const speciesData = await speciesResponse.json()

      // Then fetch the pokemon data to get the sprites and types
      const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${speciesData.name}`)
      if (!pokemonResponse.ok) throw new Error(`Failed to fetch Pokémon #${randomId}`)
      const pokemonData = await pokemonResponse.json()

      // Combine the data, using the species name but keeping pokemon data
      return {
        ...pokemonData,
        name: speciesData.name, // Use the base name from species
        id: speciesData.id, // Use the ID from species
      }
    } catch (error) {
      console.error("Error fetching random Pokemon:", error)
      throw error
    }
  }, [])

  const fetchPokemonDescription = useCallback(async (id: number): Promise<string> => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      if (!response.ok) throw new Error(`Failed to fetch Pokémon species #${id}`)
      const data: PokemonSpecies = await response.json()

      const englishFlavorText = data.flavor_text_entries.find((entry) => entry.language.name === "en")

      return englishFlavorText ? englishFlavorText.flavor_text.replace(/\f/g, " ") : "No description available."
    } catch (error) {
      console.error("Error fetching Pokemon description:", error)
      return "Description unavailable."
    }
  }, [])

  return {
    pokemonList,
    fetchPokemonList,
    fetchRandomPokemon,
    fetchPokemonDescription,
  }
}

