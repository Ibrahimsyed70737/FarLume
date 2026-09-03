import { motion } from 'framer-motion'
import Reveal from '../motion/Reveal'
import DestinationImage from './DestinationImage'

function FamousPlaces({ places }) {
  if (!places?.length) return null

  return (
    <section className="mt-20">
      <Reveal>
        <h2 className="text-2xl font-display text-white">Famous places</h2>
      </Reveal>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {places.map((place, i) => (
          <motion.article
            key={place.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group overflow-hidden rounded-2xl border border-white/8 bg-neutral-900 shadow-[0_20px_40px_-28px_rgba(0,0,0,0.6)]"
          >
            <div className="aspect-[3/2] overflow-hidden">
              <DestinationImage
                query={place.imageQuery}
                className="transition duration-700 ease-out group-hover:scale-[1.05]"
              />
            </div>
            <div className="p-4">
              <h3 className="font-display text-lg text-white">{place.name}</h3>
              <p className="mt-1 text-sm text-neutral-400">{place.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default FamousPlaces
