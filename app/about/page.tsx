import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About PokéGuessr",
  description:
    "Learn what PokéGuessr is, why it was created, how it works, and what kind of experience it aims to offer Pokémon fans.",
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen primary px-4 py-10 sm:px-8">
      <article className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-4 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3b4cca]">About PokéGuessr</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#1a1a2e]">Why this project exists</h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg leading-8 text-[#1a1a2e]">
            PokéGuessr was created as a lightweight web game for Pokémon fans who enjoy testing recognition rather than
            memorizing trivia lists. The goal is to make silhouette guessing fast to start, satisfying to replay, and
            useful both for casual sessions and for more focused practice.
          </p>
        </header>

        <section className="panel-retro p-6">
          <h2 className="panel-retro-label text-center">What PokéGuessr tries to offer</h2>
          <div className="space-y-4 text-[#fff6bf] text-sm sm:text-base leading-8">
            <p>
              Many Pokémon quizzes are enjoyable for a few minutes but do not give players much room to learn or improve.
              PokéGuessr tries to do more than that by combining a simple guessing loop with generation filters, hint
              support, streak tracking, and enough repeatability to make progress visible over time.
            </p>
            <p>
              The intention is not to bury players in setup, accounts, or menus. You arrive, you start a round, and the
              challenge is clear immediately. At the same time, the site now includes guides and supporting pages so the
              experience has more depth than a single interactive screen.
            </p>
          </div>
        </section>

        <section className="panel-retro p-6">
          <h2 className="panel-retro-label text-center">How the site works</h2>
          <div className="space-y-4 text-[#fff6bf] text-sm sm:text-base leading-8">
            <p>
              PokéGuessr uses Pokémon data to build rounds around silhouettes and reveal information progressively. The
              site keeps gameplay simple in the browser while storing local progress such as streaks and games played, so
              players can come back and continue improving without needing an account.
            </p>
            <p>
              The surrounding pages exist to help players understand the game better: how to start, how to recognize
              silhouettes more effectively, and how to think about practice across different generations.
            </p>
          </div>
        </section>

        <section className="panel-retro p-6">
          <h2 className="panel-retro-label text-center">Who this is for</h2>
          <div className="space-y-4 text-[#fff6bf] text-sm sm:text-base leading-8">
            <p>
              This project is for Pokémon fans who enjoy visual recognition, quick challenge loops, and replayable web
              games that do not get in the way. It is also for players who know older generations well and want a clean
              way to practice the ones they remember less clearly.
            </p>
            <p>
              Whether someone wants a short five-minute session or a deliberate practice routine, the site is meant to be
              easy to enter and rewarding to revisit.
            </p>
          </div>
        </section>

        <div className="text-center pt-2">
          <Link href="/" className="text-[#3b4cca] font-bold underline hover:text-[#24318f]">
            Return to PokéGuessr
          </Link>
        </div>
      </article>
    </main>
  )
}