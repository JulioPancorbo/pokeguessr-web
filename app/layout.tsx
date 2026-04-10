import "./globals.css"
import type { Metadata } from "next"
import { Chewy, Press_Start_2P } from "next/font/google"
import type React from "react"
import Script from "next/script"

const chewy = Chewy({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
})

export const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-press-start",
})

export const metadata: Metadata = {
  title: "PokéGuessr",
  description:
    "Test your Pokémon knowledge! Try to identify Pokémon from their silhouettes in this fun guessing game. Features all generations, statistics tracking, and various game modes.",
  keywords: [
    "Pokemon",
    "Game",
    "Quiz",
    "Guessing Game",
    "Pokemon Quiz",
    "Pokemon Game",
    "Pokeguesser",
    "Pokemon Guesser",
    "PokeGuessr",
  ],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2924464423031513"
     crossOrigin="anonymous"></script>            
        
        </head>
      <body className={`${chewy.className} ${pressStart2P.variable}`}>{children}</body>
    </html>
  )
}

