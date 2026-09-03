import Skeleton from '../ui/Skeleton'

function DestinationSkeleton() {
  return (
    <main>
      <div className="relative h-[56vh] min-h-[400px] w-full bg-neutral-900 px-6 pb-10 sm:px-10 lg:px-16">
        <div className="absolute inset-x-6 bottom-10 sm:inset-x-10 lg:inset-x-16">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="mt-4 h-4 w-20" />
          <Skeleton className="mt-2 h-12 w-64" />
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          <div className="max-w-2xl space-y-2">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-2/3" />
          </div>
          <Skeleton className="h-[104px] rounded-2xl" />
        </div>

        <div className="mt-20">
          <Skeleton className="h-7 w-40" />
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-2xl">
                <Skeleton className="aspect-[3/2] rounded-2xl" />
                <div className="space-y-2 py-3">
                  <Skeleton className="h-5 w-2/3" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Skeleton className="h-7 w-32" />
          <Skeleton className="mt-2 h-4 w-72" />
          <Skeleton className="mt-5 h-24 w-full rounded-2xl" />
        </div>
      </div>
    </main>
  )
}

export default DestinationSkeleton
