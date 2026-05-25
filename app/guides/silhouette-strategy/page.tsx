import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "PokéGuessr Silhouette Strategy Guide",
  description:
    "Improve at PokéGuessr by learning how to read Pokémon silhouettes through body shape, pose, tails, wings, ears, and proportions.",
  alternates: {
    canonical: "/guides/silhouette-strategy",
  },
}

export default function SilhouetteStrategyGuidePage() {
  return (
    <main className="min-h-screen primary px-4 py-10 sm:px-8">
      <article className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-4 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3b4cca]">PokéGuessr Guide</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#1a1a2e]">Silhouette Strategy Guide</h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg leading-8 text-[#1a1a2e]">
            The fastest way to improve at PokéGuessr is to stop looking for the whole Pokémon at once. Instead, break
            the silhouette into smaller clues and read it like a shape puzzle.
          </p>
        </header>

        <section className="panel-retro p-6">
          <h2 className="panel-retro-label text-center">Start with the outline, not the name</h2>
          <div className="space-y-4 text-[#fff6bf] text-sm sm:text-base leading-8">
            <p>
              Most wrong guesses come from forcing an early answer. A better habit is to scan the silhouette in layers.
              Ask yourself whether the body is round, long, bulky, upright, floating, winged, horned, or tail-driven.
              That first pass quickly removes huge parts of the Pokédex.
            </p>
            <p>
              When you slow down enough to identify the structure first, your guesses become narrower and more accurate.
              This matters especially for silhouettes that look obvious at first glance but actually belong to a less
              common species with a very similar posture.
            </p>
          </div>
        </section>

        <section className="panel-retro p-6">
          <h2 className="panel-retro-label text-center">Look for signature features</h2>
          <ul className="list-disc pl-6 space-y-3 text-[#fff6bf] text-sm sm:text-base leading-8">
            <li>Tail shape often separates lookalikes faster than the head or torso.</li>
            <li>Ear placement matters for many mascot-style or small-bodied Pokémon.</li>
            <li>Wing size and angle can reveal whether the silhouette belongs to a bird, bat, dragon, or insect-like design.</li>
            <li>Horns, crests, spikes, and shoulder shapes often identify evolutionary lines.</li>
            <li>Leg stance tells you whether the Pokémon is agile, grounded, humanoid, or beast-like.</li>
          </ul>
        </section>

        <section className="panel-retro p-6">
          <h2 className="panel-retro-label text-center">Use proportions to avoid common traps</h2>
          <div className="space-y-4 text-[#fff6bf] text-sm sm:text-base leading-8">
            <p>
              Some silhouettes share a general theme but differ in proportion. That is where many players lose rounds.
              A tail may be slightly too long, the head may sit lower than expected, or the limbs may be much shorter
              than the Pokémon you first imagined. Those differences are exactly what separates an informed guess from a
              rushed guess.
            </p>
            <p>
              In practical terms, it helps to compare body parts mentally. Is the head oversized relative to the body?
              Are the arms visible? Does the torso lean forward? Is the tail decorative or structurally dominant? These
              questions are small, but together they make the silhouette much easier to identify.
            </p>
          </div>
        </section>

        <section className="panel-retro p-6">
          <h2 className="panel-retro-label text-center">Build a shortlist before you use a hint</h2>
          <div className="space-y-4 text-[#fff6bf] text-sm sm:text-base leading-8">
            <p>
              Good players do not use hints as a replacement for observation. They use them to choose between two or
              three realistic options. If you already suspect a fire-type starter line or a flying Pokémon from a
              specific generation, a hint becomes decisive. If you use hints too early, they do less for you because you
              have not narrowed the field yourself.
            </p>
            <p>
              The same approach helps your long-term memory. When you connect a clue to a shortlist you created through
              observation, you remember the silhouette better in future rounds.
            </p>
          </div>
        </section>

        <section className="panel-retro p-6">
          <h2 className="panel-retro-label text-center">A practical training method</h2>
          <ol className="list-decimal pl-6 space-y-3 text-[#fff6bf] text-sm sm:text-base leading-8">
            <li>Play one generation repeatedly for a short session.</li>
            <li>Note the Pokémon that fooled you and why they fooled you.</li>
            <li>Pay attention to the exact feature you missed, not just the answer.</li>
            <li>Replay later and see whether you now recognize that pattern sooner.</li>
          </ol>
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