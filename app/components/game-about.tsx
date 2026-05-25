import Link from "next/link"

const quickGuides = [
  {
    title: "How to Play PokéGuessr",
    description:
      "Learn the rules, how hints work, how guesses are counted, and the fastest way to enjoy the game from your first session.",
    href: "/guides/how-to-play",
  },
  {
    title: "Silhouette Strategy Guide",
    description:
      "Train your eye to read tails, horns, wings, stance, and body proportions before typing your guess.",
    href: "/guides/silhouette-strategy",
  },
  {
    title: "Pokémon Generations Guide",
    description:
      "See which generations usually feel easier, which are harder, and how to build a better practice order.",
    href: "/guides/pokemon-generations-guide",
  },
]

export function GameAbout() {
  return (
    <section className="w-full max-w-4xl mx-auto mt-10 space-y-6" aria-labelledby="about-pokeguessr">
      <div className="panel-retro p-5 sm:p-6">
        <h2 id="about-pokeguessr" className="panel-retro-label text-center">
          About PokéGuessr
        </h2>

        <div className="space-y-4 text-[#fff6bf] text-sm leading-7 sm:text-base sm:leading-8">
          <p>
            PokéGuessr is a browser-based Pokémon silhouette game built for players who enjoy recognition,
            memory, and pattern reading. Each round hides a Pokémon and asks you to identify it from its shape alone,
            which turns even familiar monsters into a more interesting challenge.
          </p>

          <p>
            The game works for quick casual sessions, but it also rewards repeat play. You can focus on a single
            generation, use progressive hints when a silhouette is tricky, and track streaks over time. That makes the
            experience useful both as a fun quiz and as a lightweight training tool for visual Pokémon recognition.
          </p>

          <p>
            What gives PokéGuessr replay value is that silhouettes reward observation rather than simple recall. Tail
            shape, ears, wings, stance, height, and body proportions all become clues, which is why the game feels more
            satisfying the more you practice it.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="panel-retro p-4">
          <h3 className="panel-retro-label text-center">Why People Play</h3>
          <p className="text-[#fff6bf] text-sm leading-7">
            Some players use PokéGuessr as a fast daily challenge, while others use it to revisit generations they know
            less well and measure how much their recognition improves over time.
          </p>
        </div>

        <div className="panel-retro p-4">
          <h3 className="panel-retro-label text-center">What You Practice</h3>
          <p className="text-[#fff6bf] text-sm leading-7">
            Generation knowledge, silhouette reading, hint management, streak consistency, and quick filtering between
            similar-looking Pokémon all become part of improving at the game.
          </p>
        </div>

        <div className="panel-retro p-4">
          <h3 className="panel-retro-label text-center">Why It Is Easy to Start</h3>
          <p className="text-[#fff6bf] text-sm leading-7">
            You can play immediately in the browser, keep local stats, and come back whenever you want without creating
            an account or downloading anything.
          </p>
        </div>
      </div>

      <div className="panel-retro p-5 sm:p-6">
        <h3 className="panel-retro-label text-center">PokéGuessr Guides</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {quickGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="block rounded-md border border-[#ffde00]/30 bg-[#10142b] p-4 transition-transform duration-150 hover:-translate-y-0.5 hover:border-[#ffde00]"
            >
              <h4 className="mb-2 text-sm sm:text-base font-bold text-[#ffde00]">{guide.title}</h4>
              <p className="text-[#fff6bf] text-sm leading-6">{guide.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/guides" className="font-bold text-[#3b4cca] underline hover:text-[#24318f]">
            Browse all guides
          </Link>
          <Link href="/about" className="font-bold text-[#3b4cca] underline hover:text-[#24318f]">
            About this project
          </Link>
        </div>
      </div>
    </section>
  )
}
