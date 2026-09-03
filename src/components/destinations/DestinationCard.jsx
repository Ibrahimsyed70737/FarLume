import { Link } from 'react-router-dom'
import DestinationImage from './DestinationImage'

function DestinationCard({ destination, featured = false }) {
  return (
    <Link
      to={`/destinations/${destination.slug}`}
      className={`group relative block overflow-hidden rounded-2xl bg-neutral-900 shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_20px_40px_-24px_rgba(0,0,0,0.6)] ring-1 ring-white/5 transition-shadow duration-300 hover:shadow-[0_1px_0_rgba(255,255,255,0.06)_inset,0_28px_56px_-24px_rgba(0,0,0,0.7)] focus-visible:outline-offset-4 ${
        featured ? 'aspect-[4/5] sm:aspect-[16/11]' : 'aspect-[4/5]'
      }`}
    >
      <DestinationImage
        query={destination.imageQuery}
        className="transition duration-700 ease-out group-hover:scale-[1.06]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/25 to-transparent" />
      <div className="absolute inset-0 opacity-0 ring-1 ring-inset ring-amber-300/40 transition-opacity duration-300 group-hover:opacity-100" />

      <div className={`absolute inset-x-0 bottom-0 ${featured ? 'p-6 sm:p-8' : 'p-5'}`}>
        <p className="text-xs font-medium uppercase tracking-wide text-amber-300">
          {destination.country}
        </p>
        <h3
          className={`mt-1 font-display text-white ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}
        >
          {destination.name}
        </h3>
        <p
          className={`mt-1 text-neutral-300 ${featured ? 'max-w-sm text-sm sm:text-base' : 'line-clamp-1 text-sm'}`}
        >
          {destination.tagline}
        </p>
      </div>
    </Link>
  )
}

export default DestinationCard
