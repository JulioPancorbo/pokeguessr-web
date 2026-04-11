import type { Metadata } from "next"
import { Game } from "./components/game"

export const metadata: Metadata = {
  title: "PokéGuessr - Free Pokémon Guessing Game Online",
  description: "Play the ultimate Pokémon guessing game! Identify Pokémon from their silhouettes in this engaging free quiz. Track your stats across all generations. Challenge yourself now—no download required!",
}

export default function Page() {
  return <Game />
}

