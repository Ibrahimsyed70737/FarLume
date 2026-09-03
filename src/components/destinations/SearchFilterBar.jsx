import { regions } from '../../data/destinations'

function SearchFilterBar({ query, onQueryChange, region, onRegionChange }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-xs">
        <label htmlFor="destination-search" className="sr-only">
          Search destinations
        </label>
        <input
          id="destination-search"
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search destinations…"
          className="w-full rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus-visible:border-amber-400"
        />
      </div>

      <div
        role="group"
        aria-label="Filter by region"
        className="-mx-6 flex gap-2 overflow-x-auto px-6 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
      >
        <button
          type="button"
          onClick={() => onRegionChange('')}
          aria-pressed={region === ''}
          className={`shrink-0 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm transition ${
            region === ''
              ? 'border-amber-400 bg-amber-400/10 text-amber-300'
              : 'border-neutral-800 text-neutral-300 hover:border-neutral-600'
          }`}
        >
          All
        </button>
        {regions.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => onRegionChange(r)}
            aria-pressed={region === r}
            className={`shrink-0 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm transition ${
              region === r
                ? 'border-amber-400 bg-amber-400/10 text-amber-300'
                : 'border-neutral-800 text-neutral-300 hover:border-neutral-600'
            }`}
          >
            {r}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchFilterBar
