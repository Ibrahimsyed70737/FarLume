import DestinationExplorer from '../components/destinations/DestinationExplorer'
import Hero from '../components/layout/Hero'
import LocationWeatherSection from '../components/weather/LocationWeatherSection'

function Home() {
  return (
    <main>
      <Hero />
      <DestinationExplorer />
      <LocationWeatherSection />
    </main>
  )
}

export default Home
