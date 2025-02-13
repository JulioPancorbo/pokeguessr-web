import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pokémon Guesser",
  description: "Guess the Pokémon from its silhouette!",
  generator: 'v0.dev'
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
          crossorigin="anonymous"></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'