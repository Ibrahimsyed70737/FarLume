import { useState } from 'react'
import { generateItinerary } from '../../lib/gemini'
import LoadingSymbol from '../brand/LoadingSymbol'
import Reveal from '../motion/Reveal'
import ItineraryView from './ItineraryView'

function ItineraryPlanner({ destination }) {
  const [days, setDays] = useState(3)
  const [interests, setInterests] = useState('')
  const [status, setStatus] = useState('idle')
  const [itinerary, setItinerary] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  async function handleGenerate(event) {
    event.preventDefault()
    const safeDays = Math.min(7, Math.max(1, Number(days) || 3))
    setDays(safeDays)
    setStatus('loading')
    setItinerary(null)

    try {
      const result = await generateItinerary({
        destination,
        days: safeDays,
        interests,
      })
      setItinerary(result)
      setStatus('success')
    } catch (err) {
      setErrorMessage(err.message || 'Something went wrong.')
      setStatus('error')
    }
  }

  return (
    <section className="mt-20">
      <Reveal>
        <h2 className="text-2xl font-display text-white">Plan a trip</h2>
        <p className="mt-1 text-sm text-neutral-400">
          Let the assistant put together a day-by-day plan for {destination.name}.
        </p>

        <form
          onSubmit={handleGenerate}
          className="mt-5 flex flex-col gap-4 rounded-2xl border border-white/8 bg-neutral-900/50 p-5 backdrop-blur-xl sm:flex-row sm:items-end"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="itinerary-days" className="text-xs text-neutral-400">
              Number of days
            </label>
            <input
              id="itinerary-days"
              type="number"
              min={1}
              max={7}
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-24 rounded-lg border border-neutral-700 bg-neutral-950/60 px-3 py-2 text-sm text-white focus-visible:border-amber-400"
            />
          </div>

          <div className="flex flex-1 flex-col gap-1.5">
            <label htmlFor="itinerary-interests" className="text-xs text-neutral-400">
              Interests (optional)
            </label>
            <input
              id="itinerary-interests"
              type="text"
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              placeholder="food, history, hiking…"
              className="w-full rounded-lg border border-neutral-700 bg-neutral-950/60 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus-visible:border-amber-400"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-medium text-neutral-950 shadow-[0_8px_24px_-8px_rgba(251,191,36,0.5)] transition hover:bg-amber-300 disabled:opacity-60"
          >
            {status === 'loading' && (
              <LoadingSymbol size={14} className="text-neutral-950" />
            )}
            {status === 'loading' ? 'Generating…' : 'Generate itinerary'}
          </button>
        </form>

        {status === 'error' && (
          <p className="mt-4 text-sm text-red-400">{errorMessage}</p>
        )}
      </Reveal>

      {status === 'success' && itinerary && <ItineraryView days={itinerary} />}
    </section>
  )
}

export default ItineraryPlanner
