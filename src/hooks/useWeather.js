import { useEffect, useState } from 'react'
import { getCurrentWeather } from '../lib/openweather'

export function useWeather(coords) {
  const [state, setState] = useState({ status: 'idle', weather: null })

  useEffect(() => {
    if (!coords) {
      setState({ status: 'idle', weather: null })
      return
    }

    let cancelled = false
    setState({ status: 'loading', weather: null })

    getCurrentWeather(coords)
      .then((weather) => {
        if (!cancelled) setState({ status: 'success', weather })
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'error', weather: null })
      })

    return () => {
      cancelled = true
    }
  }, [coords?.lat, coords?.lon])

  return state
}
