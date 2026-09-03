import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import DestinationImage from '../components/destinations/DestinationImage'
import FamousPlaces from '../components/destinations/FamousPlaces'
import WeatherWidget from '../components/weather/WeatherWidget'
import ItineraryPlanner from '../components/itinerary/ItineraryPlanner'
import Reveal from '../components/motion/Reveal'
import { destinations } from '../data/destinations'

function Destination() {
  const { slug } = useParams()
  const destination = destinations.find((d) => d.slug === slug)

  if (!destination) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="text-3xl font-display text-white">
          We couldn&rsquo;t find that destination.
        </h1>
        <Link
          to="/"
          className="text-sm font-medium text-amber-300 hover:text-amber-200"
        >
          &larr; Back to all destinations
        </Link>
      </main>
    )
  }

  return (
    <main>
      <div className="relative h-[56vh] min-h-[400px] w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="h-full w-full"
        >
          <DestinationImage query={destination.imageQuery} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-10 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/"
              className="text-sm font-medium text-white/80 hover:text-amber-300"
            >
              &larr; All destinations
            </Link>
            <p className="mt-4 text-sm font-medium uppercase tracking-wide text-amber-300">
              {destination.country}
            </p>
            <h1 className="mt-1 text-4xl font-display text-white sm:text-5xl">
              {destination.name}
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 lg:px-16">
        <Reveal>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
            <p className="max-w-2xl text-lg leading-relaxed text-neutral-300">
              {destination.description}
            </p>

            <WeatherWidget coords={destination.coords} label={destination.name} />
          </div>
        </Reveal>

        <FamousPlaces places={destination.famousPlaces} />
        <ItineraryPlanner destination={destination} />
      </div>
    </main>
  )
}

export default Destination
