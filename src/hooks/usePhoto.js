import { useEffect, useState } from 'react'
import { searchPhoto } from '../lib/pexels'

const cache = new Map()

export function usePhoto(query) {
  const [state, setState] = useState(() => {
    const cached = cache.get(query)
    return cached
      ? { status: 'success', photo: cached }
      : { status: 'loading', photo: null }
  })

  useEffect(() => {
    if (!query) return

    const cached = cache.get(query)
    if (cached) {
      setState({ status: 'success', photo: cached })
      return
    }

    let cancelled = false
    setState({ status: 'loading', photo: null })

    searchPhoto(query)
      .then((photo) => {
        if (cancelled) return
        cache.set(query, photo)
        setState({ status: 'success', photo })
      })
      .catch(() => {
        if (cancelled) return
        setState({ status: 'error', photo: null })
      })

    return () => {
      cancelled = true
    }
  }, [query])

  return state
}
