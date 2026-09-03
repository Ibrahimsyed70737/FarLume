const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'
const GEO_URL = 'https://api.openweathermap.org/geo/1.0/direct'

export async function getCurrentWeather({ lat, lon }) {
  if (!API_KEY) throw new Error('Missing VITE_OPENWEATHER_API_KEY')

  const url = `${WEATHER_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`OpenWeather request failed: ${res.status}`)

  const data = await res.json()
  return {
    tempC: Math.round(data.main.temp),
    feelsLikeC: Math.round(data.main.feels_like),
    condition: data.weather?.[0]?.main ?? '',
    description: data.weather?.[0]?.description ?? '',
    icon: data.weather?.[0]?.icon ?? '',
    humidity: data.main.humidity,
    windKph: Math.round(data.wind.speed * 3.6),
    cityName: data.name,
  }
}

export async function searchLocations(query) {
  if (!API_KEY) throw new Error('Missing VITE_OPENWEATHER_API_KEY')
  if (!query.trim()) return []

  const url = `${GEO_URL}?q=${encodeURIComponent(query)}&limit=5&appid=${API_KEY}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`OpenWeather geocoding failed: ${res.status}`)

  const data = await res.json()
  return data.map((place) => ({
    name: place.name,
    state: place.state ?? '',
    country: place.country,
    lat: place.lat,
    lon: place.lon,
  }))
}

export function iconUrl(icon) {
  return `https://openweathermap.org/img/wn/${icon}@2x.png`
}
