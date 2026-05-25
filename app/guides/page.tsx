import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "PokéGuessr Guides - How to Play, Strategy and Generations",
  description:
    "Read PokéGuessr guides covering how to play, silhouette recognition strategy, and the difficulty of different Pokémon generations.",
  alternates: {
    canonical: "/guides",
  },
}

const guides = [
  {
    title: "How to Play PokéGuessr",
    href: "/guides/how-to-play",
    summary:
      "A complete beginner guide to the rules, hints, skips, statistics, and the best way to start playing confidently.",
  },
  {
    title: "Silhouette Strategy Guide",
    href: "/guides/silhouette-strategy",
    summary:
      "Learn how to read body shape, pose, tails, wings, ears, and other visual cues before making your guess.",
  },
  {
    title: "Pokémon Generations Guide",
    href: "/guides/pokemon-generations-guide",
    summary:
      "Understand which generations tend to feel easier or harder and how to structure your practice sessions.",
  },
]

export default function GuidesPage() {
  return (
    <main className="min-h-screen primary px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-[#1a1a2e]">PokéGuessr Guides</h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-[#1a1a2e] leading-8">
            These guides help first-time players understand the game quickly and help returning players improve how they
            recognize Pokémon from silhouettes across different generations.
          </p>
        </header>

        <section className="grid gap-5 md:grid-cols-3">
          {guides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="panel-retro block p-5 hover:translate-y-[-2px] transition-transform">
              <h2 className="panel-retro-label text-center">Guide</h2>
              <h3 className="mb-3 text-lg font-bold text-[#ffde00]">{guide.title}</h3>
              <p className="text-[#fff6bf] text-sm leading-7">{guide.summary}</p>
            </Link>
          ))}
        </section>

        <section className="panel-retro p-6">
          <h2 className="panel-retro-label text-center">Why this section exists</h2>
          <div className="space-y-4 text-[#fff6bf] leading-8 text-sm sm:text-base">
            <p>
              PokéGuessr is simple to start, but it becomes much more rewarding when you learn how to read silhouettes,
              manage hints, and practice generations in a smart order. These guides exist to make the site useful even
              when you are not in the middle of a round.
            </p>
            <p>
              Instead of relying only on short FAQ answers, this section explains the game in a fuller and more useful
              way. That gives new players a better starting point and gives returning players a clearer path to improve.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}