import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "How to Play PokéGuessr - Beginner Guide",
  description:
    "Learn how to play PokéGuessr, how guesses and hints work, how generations change the challenge, and how to build a better first session.",
  alternates: {
    canonical: "/guides/how-to-play",
  },
}

export default function HowToPlayGuidePage() {
  return (
    <main className="min-h-screen primary px-4 py-10 sm:px-8">
      <article className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-4 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3b4cca]">PokéGuessr Guide</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#1a1a2e]">How to Play PokéGuessr</h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg leading-8 text-[#1a1a2e]">
            PokéGuessr is built around one simple challenge: identify a Pokémon from its silhouette before you run out
            of attempts. The game is easy to start, but the best experience comes from understanding how each tool on
            the screen helps you narrow the answer down.
          </p>
        </header>

        <section className="panel-retro p-6">
          <h2 className="panel-retro-label text-center">The basic loop</h2>
          <div className="space-y-4 text-[#fff6bf] text-sm sm:text-base leading-8">
            <p>
              Every round begins with a hidden Pokémon sprite shown as a silhouette. Your goal is to look at the shape,
              open the autocomplete, and choose the Pokémon you believe matches the outline. If you guess correctly,
              the game reveals the Pokémon and lets you move on to the next round. If you guess incorrectly, the guess
              is recorded against your attempt limit.
            </p>
            <p>
              You have up to five incorrect attempts in each round. That cap creates the rhythm of the game: enough room
              to think, enough pressure to make the hints meaningful, and enough feedback to help you improve over time.
            </p>
          </div>
        </section>

        <section className="panel-retro p-6">
          <h2 className="panel-retro-label text-center">How hints help</h2>
          <div className="space-y-4 text-[#fff6bf] text-sm sm:text-base leading-8">
            <p>
              PokéGuessr includes progressive hints so that a round does not collapse into blind guessing. A good habit
              is to study the outline first, think through the likely family or generation, and only then use a clue.
              Hints are strongest when they confirm or reject a short list you already have in mind.
            </p>
            <p>
              For newer players, hints reduce frustration and keep the game approachable. For experienced players, hints
              become a strategic tool: you can save them for visually tricky silhouettes or use them earlier when you are
              practicing an unfamiliar generation.
            </p>
          </div>
        </section>

        <section className="panel-retro p-6">
          <h2 className="panel-retro-label text-center">Generation filters and difficulty</h2>
          <div className="space-y-4 text-[#fff6bf] text-sm sm:text-base leading-8">
            <p>
              One of the most useful features in PokéGuessr is the generation filter. Instead of jumping straight into a
              pool of more than one thousand Pokémon, you can focus on a familiar generation and build recognition in a
              controlled way. This is the fastest route for beginners and still a smart training method for advanced
              players who want to isolate weaker eras.
            </p>
            <p>
              If you grew up with Generation 1 or Generation 2, starting there can help you learn the interface while
              keeping the challenge fun. Once you feel stable, you can expand into later generations where silhouettes
              often become less familiar and more complex.
            </p>
          </div>
        </section>

        <section className="panel-retro p-6">
          <h2 className="panel-retro-label text-center">Statistics, streaks and practice</h2>
          <div className="space-y-4 text-[#fff6bf] text-sm sm:text-base leading-8">
            <p>
              The statistics panel tracks more than vanity numbers. Games played, win rate, current streak, and best
              streak help you see whether your recognition is improving. A streak gives extra motivation because it turns
              each round into a sequence rather than an isolated guess.
            </p>
            <p>
              The strongest long-term approach is simple: play in short sessions, keep the generation pool controlled,
              and pay attention to the silhouettes that beat you. Patterns repeat. The more actively you notice those
              patterns, the more quickly your results improve.
            </p>
          </div>
        </section>

        <section className="panel-retro p-6">
          <h2 className="panel-retro-label text-center">Best first-session plan</h2>
          <ol className="list-decimal pl-6 space-y-3 text-[#fff6bf] text-sm sm:text-base leading-8">
            <li>Start with one generation you already know reasonably well.</li>
            <li>Study the silhouette for a moment before opening the autocomplete.</li>
            <li>Use hints only after narrowing your choices mentally.</li>
            <li>Do not worry about streaks immediately; focus on recognition quality first.</li>
            <li>After a few rounds, switch generations or mix them once you feel comfortable.</li>
          </ol>
        </section>

        <div className="text-center pt-2">
          <Link href="/" className="text-[#3b4cca] font-bold underline hover:text-[#24318f]">
            Return to the game
          </Link>
        </div>
      </article>
    </main>
  )
}