type Pokemon = {
  id: number
  name: string
}

export const fetchPokemonList = async (genStart: number, genEnd: number): Promise<Pokemon[]> => {
  const STORAGE_KEY = `pokemon-list-${genStart}-${genEnd}`

  // Check if we have the data in localStorage
  const cached = localStorage.getItem(STORAGE_KEY)
  if (cached) {
    return JSON.parse(cached)
  }

  // If not in cache, fetch from API
  try {
    const pokemonList: Pokemon[] = []

    for (let id = genStart; id <= genEnd; id++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await response.json()
      pokemonList.push({
        id: data.id,
        name: data.name,
      })
    }

    // Store in localStorage for future use
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pokemonList))
    return pokemonList
  } catch (error) {
    console.error("Error fetching Pokemon list:", error)
    return []
  }
}

