function Skeleton({ className = '' }) {
  return (
    <div
      className={`skeleton-shimmer relative overflow-hidden rounded-md bg-neutral-800 ${className}`}
      aria-hidden="true"
    />
  )
}

export default Skeleton
