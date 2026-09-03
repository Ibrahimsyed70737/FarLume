import Skeleton from '../ui/Skeleton'

function DestinationCardSkeleton({ featured = false }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl ${featured ? 'aspect-[4/5] sm:aspect-[16/11]' : 'aspect-[4/5]'}`}
    >
      <Skeleton className="h-full w-full rounded-2xl" />
    </div>
  )
}

export default DestinationCardSkeleton
