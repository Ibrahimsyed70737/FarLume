import Logomark from '../brand/Logomark'
import { usePhoto } from '../../hooks/usePhoto'

function DestinationImage({ query, className = '' }) {
  const { status, photo } = usePhoto(query)

  if (status === 'success') {
    return (
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
      />
    )
  }

  if (status === 'loading') {
    return (
      <div
        className={`skeleton-shimmer relative flex h-full w-full items-center justify-center overflow-hidden bg-neutral-800 ${className}`}
        aria-hidden="true"
      >
        <Logomark size={20} className="text-neutral-600" />
      </div>
    )
  }

  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900 ${className}`}
      role="img"
      aria-label={query}
    >
      <span className="text-xs text-neutral-500">Image unavailable</span>
    </div>
  )
}

export default DestinationImage
