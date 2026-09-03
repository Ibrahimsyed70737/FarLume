import { useCallback, useState } from 'react'

export function useGeolocation() {
  const [state, setState] = useState({ status: 'idle', coords: null, error: null })

  const request = useCallback(() => {
    if (!navigator.geolocation) {
      setState({ status: 'error', coords: null, error: 'unsupported' })
      return
    }

    setState({ status: 'loading', coords: null, error: null })

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({
          status: 'success',
          coords: {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          },
          error: null,
        })
      },
      (error) => {
        const reason = error.code === error.PERMISSION_DENIED ? 'denied' : 'failed'
        setState({ status: 'error', coords: null, error: reason })
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 },
    )
  }, [])

  return { ...state, request }
}
