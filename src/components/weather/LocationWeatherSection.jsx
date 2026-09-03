import { useEffect } from 'react'
import { useGeolocation } from '../../hooks/useGeolocation'
import Reveal from '../motion/Reveal'
import { useLocationStore } from '../../store/useLocationStore'
import LocationSearch from './LocationSearch'
import WeatherWidget from './WeatherWidget'

function LocationWeatherSection() {
  const { status, coords, error, request } = useGeolocation()
  const { location, setLocation } = useLocationStore()

  useEffect(() => {
    if (status === 'success' && coords) {
      setLocation({ ...coords, label: 'Your location' })
    }
  }, [status, coords, setLocation])

  return (
    <section className="px-6 py-24 sm:px-10 lg:px-16">
      <Reveal className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-display text-white sm:text-4xl">
          Weather, wherever you are
        </h2>
        <p className="mt-2 text-neutral-400">
          Share your location, or search for one, to see current conditions.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={request}
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-2.5 text-sm font-medium text-neutral-950 shadow-[0_8px_24px_-8px_rgba(251,191,36,0.5)] transition hover:bg-amber-300 disabled:opacity-60"
          >
            {status === 'loading' ? 'Locating…' : 'Use my location'}
          </button>

          <LocationSearch
            onSelect={(place) =>
              setLocation({
                lat: place.lat,
                lon: place.lon,
                label: `${place.name}, ${place.country}`,
              })
            }
          />
        </div>

        {status === 'error' && error === 'denied' && (
          <p className="mt-3 text-sm text-neutral-400">
            Location access was denied — search for a city instead.
          </p>
        )}
        {status === 'error' && error !== 'denied' && (
          <p className="mt-3 text-sm text-neutral-400">
            Couldn&rsquo;t get your location — search for a city instead.
          </p>
        )}

        <div className="mt-6">
          <WeatherWidget
            coords={location ? { lat: location.lat, lon: location.lon } : null}
            label={location?.label}
          />
        </div>
      </Reveal>
    </section>
  )
}

export default LocationWeatherSection
