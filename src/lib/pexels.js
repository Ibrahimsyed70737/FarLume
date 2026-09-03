const API_KEY = import.meta.env.VITE_PEXELS_API_KEY
const BASE_URL = 'https://api.pexels.com/v1/search'

export async function searchPhoto(query) {
  if (!API_KEY) {
    throw new Error('Missing VITE_PEXELS_API_KEY')
  }

  const url = `${BASE_URL}?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`
  const res = await fetch(url, {
    headers: { Authorization: API_KEY },
  })

  if (!res.ok) {
    throw new Error(`Pexels request failed: ${res.status}`)
  }

  const data = await res.json()
  const photo = data?.photos?.[0]

  if (!photo) {
    throw new Error('No photo found')
  }

  return {
    src: photo.src.large,
    alt: photo.alt || query,
    photographer: photo.photographer,
    photographerUrl: photo.photographer_url,
  }
}
