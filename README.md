# PokéGuessr

> **Who's that Pokémon?** — A browser-based Pokémon guessing game powered by the [PokéAPI](https://pokeapi.co/).

## Overview

PokéGuessr challenges you to identify a Pokémon from its silhouette. Each round a random Pokémon is selected from your chosen generation and displayed as a black silhouette. You have **5 attempts** to guess the name correctly. Use optional clues to narrow it down, and once the game ends the silhouette is dramatically revealed alongside full Pokédex information.

## Features

- 🎮 **Silhouette guessing** — Identify Pokémon by their blacked-out sprite
- 🗂️ **Generation selector** — Choose from Generation I through VIII (Pokémon #1–898)
- 💡 **Progressive clues** — Up to 4 clues revealed on demand, each costing one attempt:
  1. Pokémon type(s)
  2. Pokémon cry (audio playback)
  3. First letter of the name with blanks
  4. First and last letters of the name with blanks
- ⏩ **Skip option** — Give up and reveal the answer immediately
- 🎉 **Confetti celebration** — Fireworks on a correct guess
- 🔊 **Pokémon cry** — Audio plays automatically on reveal and is available as a clue
- 🖼️ **Sprite viewer** — Browse front, back, and shiny variants after the game ends
- 📖 **Pokédex card** — Name, Pokédex number, type(s), and Pokédex flavor-text description shown on reveal
- 🌀 **Reveal animation** — Smooth rotation/scale transition powered by Framer Motion

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Confetti | [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) |
| Pokémon Data | [PokéAPI](https://pokeapi.co/) (REST) |
| Pokémon Cries | [Pokémon Showdown](https://play.pokemonshowdown.com/) audio CDN |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/JulioPancorbo/pokeguessr-web.git
cd pokeguessr-web

# Install dependencies
npm install
```

### Running Locally

```bash
# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to start playing.

### Building for Production

```bash
npm run build
npm run start
```

## How to Play

1. **Select a generation** from the dropdown (defaults to Gen I).
2. A random Pokémon from that generation is loaded and shown as a **black silhouette**.
3. Type your guess into the input field and click **Guess** (or press Enter).
4. If you're stuck, click **Show Clue** to reveal a hint — but each clue costs one of your 5 attempts.
5. Click **Skip** to give up and reveal the Pokémon immediately.
6. After 5 incorrect attempts, or when you guess correctly / skip, the Pokémon is revealed with its name, Pokédex number, type(s), and description.
7. Click **Next Pokémon** to start a new round.

## Project Structure

```
pokeguessr-web/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout and metadata
│   └── page.tsx          # Main game component
├── components/
│   ├── ui/               # shadcn/ui component library
│   └── theme-provider.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Additional stylesheets
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimised production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run the Next.js ESLint linter |

## License

This project is for personal/educational use. Pokémon names, sprites, and cries are property of Nintendo / Game Freak / The Pokémon Company. Data is sourced from the community-maintained [PokéAPI](https://pokeapi.co/).