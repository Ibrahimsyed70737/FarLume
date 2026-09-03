import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { destinations } from '../../data/destinations'
import Reveal from '../motion/Reveal'
import DestinationCard from './DestinationCard'
import SearchFilterBar from './SearchFilterBar'

function DestinationExplorer() {
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()

    return destinations.filter((d) => {
      const matchesQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.country.toLowerCase().includes(q)
      const matchesRegion = !region || d.region === region
      return matchesQuery && matchesRegion
    })
  }, [query, region])

  const showFeatured = results.length >= 3

  return (
    <section id="destinations" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-display text-white sm:text-4xl">
            Where to next?
          </h2>
          <p className="mt-2 max-w-lg text-neutral-400">
            Browse destinations, or narrow it down by region.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8">
          <SearchFilterBar
            query={query}
            onQueryChange={setQuery}
            region={region}
            onRegionChange={setRegion}
          />
        </Reveal>

        {results.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((destination, i) => {
              const featured = showFeatured && i === 0

              return (
                <motion.div
                  key={destination.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.5,
                    delay: Math.min(i, 6) * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={featured ? 'sm:col-span-2 lg:col-span-2' : ''}
                >
                  <DestinationCard destination={destination} featured={featured} />
                </motion.div>
              )
            })}
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center gap-2 text-center text-neutral-400">
            <p className="text-lg text-white">No destinations match.</p>
            <p className="text-sm">Try a different search term or region.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default DestinationExplorer
