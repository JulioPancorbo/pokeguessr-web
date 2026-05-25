import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Pokémon Generations Guide for PokéGuessr",
  description:
    "Understand how different Pokémon generations affect difficulty in PokéGuessr and how to practice them in the right order.",
  alternates: {
    canonical: "/guides/pokemon-generations-guide",
  },
}

export default function PokemonGenerationsGuidePage() {
  return (
    <main className="min-h-screen primary px-4 py-10 sm:px-8">
      <article className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-4 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3b4cca]">PokéGuessr Guide</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#1a1a2e]">Pokémon Generations Guide</h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg leading-8 text-[#1a1a2e]">
            Not every generation feels the same in PokéGuessr. Some are easier because players know them better, while
            others become harder because the designs are newer, denser, or simply less familiar.
          </p>
        </header>

        <section className="panel-retro p-6">
          <h2 className="panel-retro-label text-center">Why generation choice matters</h2>
          <div className="space-y-4 text-[#fff6bf] text-sm sm:text-base leading-8">
            <p>
              The generation filter changes more than the pool size. It changes your confidence, the kind of silhouettes
              you face, and how often memory can help you immediately. A well-chosen generation filter gives structure to
              practice and prevents the game from turning into random guesswork.
            </p>
            <p>
              For many players, older generations feel easier because those Pokémon have had more screen time across main
              games, anime, trading cards, and merchandise. Later generations can feel harder because the silhouettes are
              less deeply memorized, even when the designs themselves are strong.
            </p>
          </div>
        </section>

        <section className="panel-retro p-6">
          <h2 className="panel-retro-label text-center">A sensible practice order</h2>
          <ol className="list-decimal pl-6 space-y-3 text-[#fff6bf] text-sm sm:text-base leading-8">
            <li>Start with the generation you know best to understand the flow of the game.</li>
            <li>Add a neighboring generation once your guesses feel stable and deliberate.</li>
            <li>Use mixed generations only when you are consistently reading silhouettes instead of relying on nostalgia.</li>
            <li>Return to weaker generations on purpose instead of avoiding them.</li>
          </ol>
        </section>

        <section className="panel-retro p-6">
          <h2 className="panel-retro-label text-center">What usually makes later generations harder</h2>
          <ul className="list-disc pl-6 space-y-3 text-[#fff6bf] text-sm sm:text-base leading-8">
            <li>Less exposure over time for many players.</li>
            <li>More layered silhouettes with accessories, spikes, and complex outlines.</li>
            <li>Regional familiarity differences depending on when players joined the franchise.</li>
            <li>Greater overlap in broad shape categories until you notice smaller defining features.</li>
          </ul>
        </section>

        <section className="panel-retro p-6">
          <h2 className="panel-retro-label text-center">How to use generations strategically</h2>
          <div className="space-y-4 text-[#fff6bf] text-sm sm:text-base leading-8">
            <p>
              If your goal is confidence, stay longer in a familiar generation and build a clean win rate. If your goal
              is improvement, rotate one familiar generation with one weaker generation and compare how often you need
              hints in each. That contrast shows you where your silhouette recognition is strong and where it still needs
              work.
            </p>
            <p>
              This is one of the most useful strengths of PokéGuessr: the game does not force a single difficulty path.
              You can turn it into a relaxed nostalgia quiz or into a more disciplined recognition practice tool just by
              changing the generation filter.
            </p>
          </div>
        </section>

        <div className="text-center pt-2">
          <Link href="/guides" className="text-[#3b4cca] font-bold underline hover:text-[#24318f]">
            Back to all guides
          </Link>
        </div>
      </article>
    </main>
  )
}