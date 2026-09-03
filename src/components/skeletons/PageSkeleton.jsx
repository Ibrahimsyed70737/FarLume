import LoadingSymbol from '../brand/LoadingSymbol'

function PageSkeleton() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <LoadingSymbol size={32} />
    </div>
  )
}

export default PageSkeleton
