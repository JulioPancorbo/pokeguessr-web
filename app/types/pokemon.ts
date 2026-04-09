export interface Pokemon {
  id: number
  name: string
  types: Array<{
    type: {
      name: string
    }
  }>
  sprites: {
    front_default: string | null
    back_default: string | null
    front_shiny: string | null
    back_shiny: string | null
  }
}

export interface PokemonSpecies {
  flavor_text_entries: Array<{
    flavor_text: string
    language: {
      name: string
    }
  }>
}

export interface Generation {
  id: number
  name: string
  start: number
  end: number
}

export type GuessResult = "correct" | "incorrect" | "skipped" | "clue"

