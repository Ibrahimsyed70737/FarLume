import Skeleton from '../ui/Skeleton'
import DestinationCardSkeleton from './DestinationCardSkeleton'

function HomeSkeleton() {
  return (
    <main>
      <div className="h-svh min-h-[560px] w-full bg-neutral-900" />

      <section className="px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <Skeleton className="h-9 w-64" />
          <Skeleton className="mt-3 h-5 w-80" />

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Skeleton className="h-11 w-full rounded-full sm:max-w-xs" />
            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-9 w-20 shrink-0 rounded-full" />
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-2">
              <DestinationCardSkeleton featured />
            </div>
            {Array.from({ length: 5 }).map((_, i) => (
              <DestinationCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomeSkeleton
