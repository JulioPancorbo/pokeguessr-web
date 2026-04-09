import type { Metadata } from "next"
import { Game } from "./components/game"

export const metadata: Metadata = {
  title: "PokéGuessr",
  description: "Guess the Pokémon from its silhouette!",
}

export default function Page() {
  return <Game />
}

