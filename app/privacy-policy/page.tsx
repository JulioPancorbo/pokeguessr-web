import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen p-8 primary font-mono">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-block mb-8 text-blue-600 hover:text-blue-800 hover:underline">
          ← Back to Game
        </Link>

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            This Privacy Policy explains how PokéGuessr ("we", "us", or "our") collects, uses, and protects your
            information when you use our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-4">We collect the following types of information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Game statistics and progress (stored locally in your browser)</li>
            <li>Usage data through cookies and similar technologies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use the collected information to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and maintain the game service</li>
            <li>Track game progress and statistics</li>
            <li>Improve user experience</li>
            <li>Display relevant advertisements</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Advertising</h2>
          <p className="mb-4">
            We use Google AdSense to display advertisements. Google AdSense uses cookies to serve ads based on your
            prior visits to our website or other websites. You can opt out of personalized advertising by visiting
            Google's{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ads Settings
            </a>
            .
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Storage</h2>
          <p className="mb-4">
            Game progress and statistics are stored locally in your browser using localStorage. This data remains on
            your device and is not transmitted to our servers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mb-4">Email: juliocodex7@gmail.com</p>
        </section>

        <footer className="text-sm text-gray-600">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </footer>
      </div>
    </div>
  )
}

