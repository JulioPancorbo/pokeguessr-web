import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PokéGuessr vs Pokémon Quiz vs Gearoid - Comparison",
  description:
    "Compare PokéGuessr with other free Pokémon guessing games. See feature differences, gameplay modes, and which suits you best.",
  keywords: [
    "pokeguessr vs pokemonquiz",
    "best pokemon guessing game",
    "pokemon quiz comparison",
    "gearoid vs pokeguessr",
    "free pokemon game",
  ],
}

interface ComparisonFeature {
  feature: string
  pokeguessr: string | boolean
  pkmnquiz: string | boolean
  gearoid: string | boolean
}

const comparisonData: ComparisonFeature[] = [
  {
    feature: "Free to Play",
    pokeguessr: true,
    pkmnquiz: true,
    gearoid: true,
  },
  {
    feature: "Silhouette Mode",
    pokeguessr: "Primary mode",
    pkmnquiz: "Limited",
    gearoid: "Yes",
  },
  {
    feature: "Pokémon Count",
    pokeguessr: "1000+ (Gen 1-9)",
    pkmnquiz: "~800 (Gen 1-8)",
    gearoid: "800+ (Gen 1-9)",
  },
  {
    feature: "Hint System",
    pokeguessr: "4-level progressive hints",
    pkmnquiz: "Minimal hints",
    gearoid: "Basic hints",
  },
  {
    feature: "Generation Selector",
    pokeguessr: "Full Gen 1-9 filter",
    pkmnquiz: "Limited selection",
    gearoid: "Full filter available",
  },
  {
    feature: "Statistics Tracking",
    pokeguessr: "Comprehensive (win rate, streaks)",
    pkmnquiz: "Basic tracking",
    gearoid: "Limited stats",
  },
  {
    feature: "Mobile Responsive",
    pokeguessr: true,
    pkmnquiz: true,
    gearoid: true,
  },
  {
    feature: "Account Required",
    pokeguessr: false,
    pkmnquiz: false,
    gearoid: false,
  },
  {
    feature: "Offline Play",
    pokeguessr: "After first load",
    pkmnquiz: "Limited",
    gearoid: "Limited",
  },
  {
    feature: "Audio Clues (Pokémon Cries)",
    pokeguessr: "Yes",
    pkmnquiz: "No",
    gearoid: "No",
  },
  {
    feature: "Sprite Viewer",
    pokeguessr: "Multiple variants",
    pkmnquiz: "Basic viewer",
    gearoid: "Limited variants",
  },
  {
    feature: "Animation Quality",
    pokeguessr: "Smooth (Framer Motion)",
    pkmnquiz: "Standard",
    gearoid: "Standard",
  },
  {
    feature: "Difficulty Modes",
    pokeguessr: "By generation filter",
    pkmnquiz: "Limited",
    gearoid: "By generation",
  },
  {
    feature: "Speed of Updates",
    pokeguessr: "Regular updates",
    pkmnquiz: "Occasional",
    gearoid: "Occasional",
  },
  {
    feature: "User Interface",
    pokeguessr: "Modern & Responsive",
    pkmnquiz: "Clean & Simple",
    gearoid: "Functional",
  },
]

function renderValue(value: string | boolean): string {
  if (typeof value === "boolean") {
    return value ? "✓" : "✗"
  }
  return value
}

function generateComparisonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ComparisonChart",
    "name": "Pokémon Guessing Games Comparison",
    "itemCompared": [
      {
        "@type": "Product",
        "name": "PokéGuessr",
        "url": "https://pokeguessr.com",
      },
      {
        "@type": "Product",
        "name": "Pokémon Quiz",
        "url": "https://pkmnquiz.com",
      },
      {
        "@type": "Product",
        "name": "Gearoid's Pokémon",
        "url": "https://gearoid.me/pokemon",
      },
    ],
  }
}

export default function ComparePage() {
  const comparisonSchema = generateComparisonSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Pokémon Guessing Games Comparison
            </h1>
            <p className="text-lg text-gray-300">
              Compare PokéGuessr with other popular Pokémon guessing games
            </p>
          </div>

          {/* Intro Section */}
          <div className="bg-white/5 border border-cyan-500/30 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-bold text-cyan-300 mb-4">
              Finding Your Perfect Pokémon Game
            </h2>
            <p className="text-gray-300 mb-4">
              If you're looking for a free Pokémon guessing game, you have several excellent options. Each game has unique strengths:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>
                <strong className="text-cyan-300">PokéGuessr</strong> — Best for comprehensive features
                and statistics tracking
              </li>
              <li>
                <strong className="text-cyan-300">Pokémon Quiz</strong> — Simple interface, quick games
              </li>
              <li>
                <strong className="text-cyan-300">Gearoid's Pokémon</strong> — Focused minimalist approach
              </li>
            </ul>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b-2 border-cyan-500/30">
                  <th className="text-left px-4 py-4 font-bold text-cyan-300 text-sm sm:text-base">
                    Feature
                  </th>
                  <th className="text-center px-4 py-4 font-bold text-purple-300 text-sm sm:text-base">
                    PokéGuessr
                  </th>
                  <th className="text-center px-4 py-4 font-bold text-purple-300 text-sm sm:text-base">
                    Pokémon Quiz
                  </th>
                  <th className="text-center px-4 py-4 font-bold text-purple-300 text-sm sm:text-base">
                    Gearoid
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-500/10">
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-white/5 transition-colors duration-200"
                  >
                    <td className="px-4 py-4 font-semibold text-gray-200 text-sm sm:text-base">
                      {row.feature}
                    </td>
                    <td className="text-center px-4 py-4 text-gray-300 text-sm sm:text-base">
                      <span
                        className={
                          renderValue(row.pokeguessr) === "✓" ||
                          renderValue(row.pokeguessr) !== "✗"
                            ? "text-green-400 font-semibold"
                            : ""
                        }
                      >
                        {renderValue(row.pokeguessr)}
                      </span>
                    </td>
                    <td className="text-center px-4 py-4 text-gray-300 text-sm sm:text-base">
                      {renderValue(row.pkmnquiz)}
                    </td>
                    <td className="text-center px-4 py-4 text-gray-300 text-sm sm:text-base">
                      {renderValue(row.gearoid)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Comparison Sections */}
        <div className="max-w-7xl mx-auto space-y-12">
          {/* PokéGuessr Section */}
          <section className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-4">
              PokéGuessr - Best Overall
            </h2>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong>Best for:</strong> Players wanting comprehensive
                statistics and the most polished experience
              </p>
              <div>
                <p className="font-semibold text-cyan-300 mb-2">Strengths:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>4-level progressive hint system (type, cry, letters)</li>
                  <li>
                    Comprehensive statistics tracking (win rate, streaks,
                    generation analysis)
                  </li>
                  <li>Audio clues with Pokémon cries</li>
                  <li>
                    Smooth animations and modern UI (Framer Motion, Tailwind)
                  </li>
                  <li>Works offline after first load</li>
                  <li>Regularly updated with new features</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-cyan-300 mb-2">Best Features:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Multiple sprite viewers (shiny, back, official artwork)</li>
                  <li>
                    Comprehensive Pokédex information on reveal
                  </li>
                  <li>Flexible generation filtering</li>
                </ul>
              </div>
            </div>
            <a
              href="/"
              className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Play PokéGuessr Now
            </a>
          </section>

          {/* Pokémon Quiz Section */}
          <section className="bg-white/5 border border-purple-500/30 rounded-lg p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4">
              Pokémon Quiz
            </h2>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong>Best for:</strong> Players who want a quick, simple
                experience without complex features
              </p>
              <div>
                <p className="font-semibold text-purple-300 mb-2">Strengths:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Clean, minimalist interface</li>
                  <li>Fast loading and responsive</li>
                  <li>Free to play</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-purple-300 mb-2">
                  Limitations:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Limited hint system</li>
                  <li>Basic statistics tracking</li>
                  <li>Fewer Pokémon included</li>
                </ul>
              </div>
            </div>
            <a
              href="https://pkmnquiz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Visit Pokémon Quiz →
            </a>
          </section>

          {/* Gearoid Section */}
          <section className="bg-white/5 border border-pink-500/30 rounded-lg p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-pink-300 mb-4">
              Gearoid's Pokémon
            </h2>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong>Best for:</strong> Developers and players interested in
                open-source implementations
              </p>
              <div>
                <p className="font-semibold text-pink-300 mb-2">Strengths:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Functional silhouette game</li>
                  <li>Free and open-source</li>
                  <li>Available for all generations</li>
                  <li>Works on mobile</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-pink-300 mb-2">
                  Limitations:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Minimal feature set</li>
                  <li>Limited statistics</li>
                  <li>Fewer UI flourishes</li>
                  <li>Less frequent updates</li>
                </ul>
              </div>
            </div>
            <a
              href="https://gearoid.me/pokemon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-all duration-300"
            >
              Visit Gearoid's Pokémon →
            </a>
          </section>
        </div>

        {/* Verdict Section */}
        <div className="max-w-7xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-300 mb-4">
              Which Game Should You Choose?
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-green-300">Choose PokéGuessr if:</strong>
                <br />
                You want the most features, best statistics tracking, audio
                clues, and a polished experience. PokéGuessr offers the
                comprehensive package with regular updates and the most
                immersive interface.
              </p>
              <p>
                <strong className="text-green-300">
                  Choose Pokémon Quiz if:
                </strong>
                <br />
                You prefer simplicity and just want to jump into quick games
                without distractions or software overhead.
              </p>
              <p>
                <strong className="text-green-300">Choose Gearoid if:</strong>
                <br />
                You're interested in open-source code or prefer a minimal
                approach to the game. It's a solid alternative for all
                generations.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-green-300 mb-4">
                Ready to start playing?
              </h3>
              <a
                href="/"
                className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Play PokéGuessr Now
              </a>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="max-w-7xl mx-auto mt-16 text-center text-gray-400 text-sm">
          <p>
            Last updated: April 2026. Information is accurate to the best of
            our knowledge.
          </p>
          <p className="mt-2">
            This comparison is based on publicly available features and
            functionality of each game.
          </p>
        </div>
      </main>
    </>
  )
}
