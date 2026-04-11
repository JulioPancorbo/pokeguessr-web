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
  generator: 'v0.app',
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "PokéGuessr - Free Pokémon Guessing Game Online",
    description: "Play the ultimate Pokémon guessing game! Identify Pokémon from silhouettes and test your knowledge. Free game, no download required.",
    url: "https://pokeguessr.com",
    type: "website",
    images: [
      {
        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        width: 256,
        height: 256,
        alt: "PokéGuessr Game Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PokéGuessr - Free Pokémon Guessing Game",
    description: "Can you identify Pokémon from their silhouettes? Test your knowledge in this free online game!",
    images: ["https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "PokéGuessr",
    "description": "A free online Pokémon guessing game where players identify Pokémon from their silhouettes",
    "url": "https://pokeguessr.com",
    "applicationCategory": "Game",
    "gamePlayMode": "SinglePlayer",
    "genre": ["Quiz", "Educational"],
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "PokéGuessr"
    }
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2924464423031513"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${chewy.className} ${pressStart2P.variable}`}>{children}</body>
    </html>
  )
}

