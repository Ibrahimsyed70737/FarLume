import { Link } from 'react-router-dom'
import Logomark from '../components/brand/Logomark'
import Reveal from '../components/motion/Reveal'

function About() {
  return (
    <main className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
            <Logomark size={16} />
            About us
          </p>
          <h1 className="mt-4 text-4xl font-display text-white sm:text-5xl">
            Built for the trip before the trip.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-300">
            Farlume started from a simple frustration: planning a trip means
            twelve tabs open at once — one for weather, one for flights, one
            for “best things to do,” one for a map you can never find again.
            We wanted one place that actually held it together.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 space-y-8">
          <div>
            <h2 className="text-xl font-display text-white">What we do</h2>
            <p className="mt-2 text-neutral-400">
              Farlume brings destinations, real-time weather, and an AI
              travel assistant into one place. Browse a curated set of
              destinations, see what the weather actually looks like right
              now, and ask our assistant to put together a day-by-day
              itinerary — rendered as a real plan, not a wall of chat text.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display text-white">
              How we build it
            </h2>
            <p className="mt-2 text-neutral-400">
              Real weather comes from OpenWeather. Photography comes from
              Pexels, fetched live rather than bundled into the app. The
              assistant runs on Google Gemini, grounded in the exact
              destinations we feature — it won&rsquo;t invent a place we
              don&rsquo;t have.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-display text-white">
              Where we&rsquo;re going
            </h2>
            <p className="mt-2 text-neutral-400">
              This is an early build. More destinations, more ways to save
              and share a plan, and a few surprises are on the way.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-amber-300 transition hover:text-amber-200"
          >
            Have a question or found a bug? Get in touch
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </Reveal>
      </div>
    </main>
  )
}

export default About
