import { iconUrl } from '../../lib/openweather'
import { useWeather } from '../../hooks/useWeather'

function WeatherWidget({ coords, label }) {
  const { status, weather } = useWeather(coords)

  if (!coords) {
    return (
      <div className="rounded-2xl border border-white/8 bg-neutral-900/50 p-6 text-sm text-neutral-400 backdrop-blur-xl">
        Share or search a location to see current weather.
      </div>
    )
  }

  if (status === 'loading' || status === 'idle') {
    return (
      <div
        className="h-[120px] animate-pulse rounded-2xl border border-white/8 bg-neutral-900/50 backdrop-blur-xl"
        aria-hidden="true"
      />
    )
  }

  if (status === 'error') {
    return (
      <div className="rounded-2xl border border-red-900/40 bg-red-950/20 p-6 text-sm text-red-300 backdrop-blur-xl">
        Couldn&rsquo;t load weather right now. Check your connection or try again
        shortly.
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-neutral-900/50 p-6 shadow-[0_20px_40px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl">
      <div>
        <p className="text-sm text-neutral-400">{label ?? weather.cityName}</p>
        <p className="mt-1 text-4xl font-display text-white">{weather.tempC}&deg;C</p>
        <p className="mt-1 text-sm capitalize text-neutral-300">
          {weather.description} &middot; feels like {weather.feelsLikeC}&deg;
        </p>
      </div>
      <img
        src={iconUrl(weather.icon)}
        alt={weather.condition}
        width={64}
        height={64}
      />
    </div>
  )
}

export default WeatherWidget
