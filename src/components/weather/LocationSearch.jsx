import { useEffect, useRef, useState } from 'react'
import { searchLocations } from '../../lib/openweather'

function LocationSearch({ onSelect }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [status, setStatus] = useState('idle')
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      setStatus('idle')
      return
    }

    let cancelled = false
    setStatus('loading')
    const timeout = setTimeout(() => {
      searchLocations(query)
        .then((places) => {
          if (cancelled) return
          setResults(places)
          setStatus(places.length ? 'success' : 'empty')
        })
        .catch(() => {
          if (!cancelled) setStatus('error')
        })
    }, 400)

    return () => {
      cancelled = true
      clearTimeout(timeout)
    }
  }, [query])

  useEffect(() => {
    function handleClick(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={containerRef} className="relative w-full sm:max-w-xs">
      <label htmlFor="location-search" className="sr-only">
        Search for a location
      </label>
      <input
        id="location-search"
        type="search"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value)
          setOpen(true)
        }}
        onFocus={() => setOpen(true)}
        placeholder="Search a city…"
        className="w-full rounded-full border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus-visible:border-amber-400"
      />

      {open && query.trim() && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-xl">
          {status === 'loading' && (
            <p className="px-4 py-3 text-sm text-neutral-400">Searching…</p>
          )}
          {status === 'error' && (
            <p className="px-4 py-3 text-sm text-red-400">
              Search failed. Try again.
            </p>
          )}
          {status === 'empty' && (
            <p className="px-4 py-3 text-sm text-neutral-400">No matches.</p>
          )}
          {status === 'success' &&
            results.map((place, i) => (
              <button
                key={`${place.lat}-${place.lon}-${i}`}
                type="button"
                onClick={() => {
                  onSelect(place)
                  setQuery(`${place.name}, ${place.country}`)
                  setOpen(false)
                }}
                className="block w-full px-4 py-2.5 text-left text-sm text-neutral-200 hover:bg-neutral-800"
              >
                {place.name}
                {place.state ? `, ${place.state}` : ''}, {place.country}
              </button>
            ))}
        </div>
      )}
    </div>
  )
}

export default LocationSearch
