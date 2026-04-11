import type { Metadata } from "next"
import { FAQAccordion } from "../components/faq-accordion"

export const metadata: Metadata = {
  title: "PokéGuessr FAQ - Frequently Asked Questions",
  description:
    "Get answers to commonly asked questions about PokéGuessr. Learn how to play, tips, features, and more about our free Pokémon guessing game.",
  keywords: [
    "pokeguessr faq",
    "how to play pokeguessr",
    "pokeguessr tips",
    "pokemon guessing game help",
    "pokeguessr features",
  ],
}

const faqItems = [
  {
    category: "Getting Started",
    items: [
      {
        question: "What is PokéGuessr?",
        answer:
          "PokéGuessr is a free online Pokémon guessing game where players identify Pokémon from their silhouettes. Test your knowledge across all Pokémon generations with increasing difficulty levels, track your statistics, and compete with friends. No download or registration required.",
      },
      {
        question: "How do I play PokéGuessr?",
        answer:
          "A Pokémon silhouette appears on screen. Type the name of the Pokémon you think it is in the search box. You get up to 5 incorrect guesses per round. Use hints to help narrow down your selection. When you guess correctly, a new Pokémon appears. Your win rate and streaks are tracked automatically.",
      },
      {
        question: "Do I need to download anything?",
        answer:
          "No! PokéGuessr is 100% web-based. Just visit pokeguessr.com in any modern web browser on desktop, tablet, or mobile. The game caches Pokémon data locally, so it works offline after the first load.",
      },
      {
        question: "Is PokéGuessr completely free?",
        answer:
          "Yes, PokéGuessr is completely free to play. There are no hidden costs, paywalls, or premium features. We support the game through ads, but you can play unlimited games at no cost.",
      },
      {
        question: "Do I need to create an account?",
        answer:
          "No account required! Your statistics, win streaks, and game progress are saved automatically to your browser's local storage. If you switch devices or clear your browser data, your stats will reset.",
      },
    ],
  },
  {
    category: "Gameplay",
    items: [
      {
        question: "How many Pokémon are in PokéGuessr?",
        answer:
          "PokéGuessr includes 1000+ Pokémon across all 9 generations (Generation 1 through Generation 9). You can filter by generation to focus on specific eras, or mix them all together for a challenge.",
      },
      {
        question: "How many guesses do I get?",
        answer:
          "You get up to 5 incorrect guesses per Pokémon. Once you reach 5 wrong guesses, the game ends and reveals the correct answer. Correct guesses don't count against your limit.",
      },
      {
        question: "Can I choose specific Pokémon generations?",
        answer:
          "Yes! Use the Generation Selector to filter by specific generations (Gen 1-9) or play with all generations mixed together. This is perfect for focusing on Pokémon you know well.",
      },
      {
        question: "What does the clue/hint button do?",
        answer:
          "The hint button reveals helpful information about the Pokémon, such as its type (Fire, Water, Grass), height, weight, or other distinguishing characteristics. Use this strategically when you're stuck!",
      },
      {
        question: "Can I skip a Pokémon?",
        answer:
          "Yes! Click the 'Skip' button to skip the current Pokémon and move to the next one. Skipping counts as a loss in your statistics.",
      },
    ],
  },
  {
    category: "Features & Statistics",
    items: [
      {
        question: "How are my statistics tracked?",
        answer:
          "Your games played, win rate percentage, current win streak, and best win streak are all tracked automatically and saved to your browser. You can view these statistics in the Statistics panel.",
      },
      {
        question: "What's a win streak?",
        answer:
          "A win streak is the number of consecutive Pokémon you guess correctly. Your current streak resets when you lose a game. Your best streak is the highest consecutive wins you've achieved in a single session.",
      },
      {
        question: "What does win rate mean?",
        answer:
          "Your win rate is the percentage of games you've won out of total games played. For example, if you've won 40 games out of 50, your win rate is 80%. Higher win rate indicates better Pokémon knowledge!",
      },
      {
        question: "Can I see different Pokémon sprites (shiny, different poses)?",
        answer:
          "Yes! Once you guess a Pokémon correctly, use the sprite navigation buttons to view different versions including back sprites, shiny variants, and official artwork. This is just for fun after you've won the round.",
      },
      {
        question: "How do I clear my cache/reset statistics?",
        answer:
          "Click 'Clear Cache' in Settings. This will delete all cached Pokémon data and reset your statistics. The page will reload afterward. Be careful - this action cannot be undone!",
      },
    ],
  },
  {
    category: "Technical & Compatibility",
    items: [
      {
        question: "Does PokéGuessr work on mobile?",
        answer:
          "Yes! PokéGuessr works on all modern smartphones and tablets. The interface is fully responsive and optimized for touchscreen. Play on iPhone, Android, iPad, or any device with a modern browser.",
      },
      {
        question: "Does PokéGuessr work offline?",
        answer:
          "Partially! The first time you load PokéGuessr, it caches Pokémon data. After that, you can play offline if your browser cache is enabled. However, you won't be able to load new Pokémon for generations you haven't played yet without internet.",
      },
      {
        question: "Why is my screen lagging?",
        answer:
          "Lag is usually caused by too many browser tabs open or low device memory. Try closing other tabs and restarting your browser. If lag persists, try clearing your browser cache or using a different browser.",
      },
      {
        question: "Which browsers does PokéGuessr support?",
        answer:
          "PokéGuessr works with all modern browsers including Chrome, Firefox, Safari, Edge, and any Chromium-based browser (brave, Vivaldi, etc.). For best performance, use a recent browser version.",
      },
      {
        question: "Can I play PokéGuessr offline after the first load?",
        answer:
          "Yes! Once you've played at least once with internet, the Pokémon data is cached locally. You can play offline afterward using your device's local storage. Note: New generations you haven't accessed require internet on first load.",
      },
    ],
  },
  {
    category: "Tips & Strategies",
    items: [
      {
        question: "What are some tips for getting better at PokéGuessr?",
        answer:
          "Start with a single generation you know well. Use hints strategically - they often clarify Pokémon types. Pay attention to silhouette details: unique shapes, tails, and body proportions. Practice regularly to improve your recognition speed. Watch for similarities between generations.",
      },
      {
        question: "Which generation is the easiest or hardest?",
        answer:
          "Generation 1 (Kanto) is usually easiest - most players grew up with it. Later generations (6+) are harder due to more complex designs and less mainstream recognition. Try Gen 1 first to build confidence, then progress to harder generations.",
      },
      {
        question: "How do I improve my win rate?",
        answer:
          "Practice with single generations first, then gradually add more. Use the hint system strategically. Learn common silhouette patterns - many Pokémon share similar body types. Focus on understanding Pokémon types and their visual characteristics.",
      },
      {
        question: "Is there a time limit per guess?",
        answer:
          "No time limit - you can take as long as you need to guess. PokéGuessr focuses on knowledge, not speed. Take your time and think through possibilities carefully.",
      },
    ],
  },
]

function generateFAQSchema() {
  const questions = faqItems.flatMap((category) =>
    category.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }))
  )

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions,
  }
}

export default function FAQPage() {
  const faqSchema = generateFAQSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-lg">
              PokéGuessr FAQ
            </h1>
            <p className="text-lg text-gray-300">
              Everything you need to know about playing PokéGuessr
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-12">
            {faqItems.map((category) => (
              <a
                key={category.category}
                href={`#${category.category.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-3 py-2 bg-white/5 hover:bg-white/10 border border-cyan-500/30 hover:border-cyan-500 rounded-lg text-sm font-medium text-cyan-300 transition-all duration-300 text-center"
              >
                {category.category}
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-4xl mx-auto space-y-12">
          {faqItems.map((category, idx) => (
            <section
              key={category.category}
              id={category.category.toLowerCase().replace(/\s+/g, "-")}
              className="space-y-4"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                <h2 className="text-2xl font-bold text-cyan-300">
                  {category.category}
                </h2>
                <span className="ml-auto text-sm text-gray-400 font-mono">
                  {category.items.length} items
                </span>
              </div>

              {/* FAQ Items */}
              <FAQAccordion items={category.items} />
            </section>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-lg p-8">
            <p className="text-gray-300 mb-4">Still have questions?</p>
            <a
              href="/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Back to Game
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
