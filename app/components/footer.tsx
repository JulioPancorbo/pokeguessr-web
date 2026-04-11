import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-12 border-t border-black py-8 px-4 text-center">
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="text-gray-600 text-sm">
          PokéGuessr © {new Date().getFullYear()} - A free Pokémon guessing game
        </p>
        <nav className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/faq"
            className="text-blue-600 hover:text-blue-800 underline text-sm"
          >
            FAQ
          </Link>
          <Link
            href="/privacy-policy"
            className="text-blue-600 hover:text-blue-800 underline text-sm"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  )
}
