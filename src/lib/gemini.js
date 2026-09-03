import { destinations } from '../data/destinations'

const CATALOG = destinations
  .map((d) => `${d.name}, ${d.country} (${d.region})`)
  .join('; ')

async function callGemini(body) {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })

  const data = await res.json().catch(() => null)

  if (!res.ok) {
    const detail = data?.error?.message ?? res.statusText
    console.error('Gemini request failed:', res.status, detail)
    throw new Error(
      res.status === 429
        ? 'Rate limited — try again in a moment.'
        : res.status === 503
          ? 'The assistant is under heavy load right now — try again shortly.'
          : `Gemini request failed (${res.status})`,
    )
  }

  const candidate = data?.candidates?.[0]
  const text = candidate?.content?.parts?.find((p) => p.text)?.text

  if (!text) {
    console.error('Gemini returned no usable text:', JSON.stringify(data))
    throw new Error(
      candidate?.finishReason === 'MAX_TOKENS'
        ? 'Response was cut off — try fewer days or a shorter question.'
        : 'Empty response from the assistant.',
    )
  }

  return text
}

export async function sendChatMessage({ history, message, destination }) {
  const systemContext = destination
    ? `You are the travel assistant for a travel app called Farlume. This app currently features exactly these destinations: ${CATALOG}. The visitor is on the page for ${destination.name}, ${destination.country}. Background: ${destination.description} Notable places there: ${destination.famousPlaces.map((p) => p.name).join(', ')}. Answer only about travel: how long to spend, what to see, when to go, practical tips. Keep answers under 120 words. Plain text only, no markdown formatting.`
    : `You are the travel assistant for a travel app called Farlume. This app currently features exactly these destinations, and no others: ${CATALOG}. If asked what destinations are offered, list only these — do not invent or add any destination outside this list, even famous ones. If asked about a destination not in this list, say plainly that it isn't featured yet and suggest a similar one from the list. Keep answers under 120 words. Plain text only, no markdown formatting.`

  const contents = [
    { role: 'user', parts: [{ text: systemContext }] },
    { role: 'model', parts: [{ text: 'Understood, I can help with that.' }] },
    ...history.map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.text }],
    })),
    { role: 'user', parts: [{ text: message }] },
  ]

  return callGemini({ contents })
}

export async function generateItinerary({ destination, days, interests }) {
  const prompt = `Create a ${days}-day travel itinerary for ${destination.name}, ${destination.country}.
Background: ${destination.description}
Notable places to consider: ${destination.famousPlaces.map((p) => p.name).join(', ')}.
${interests ? `Visitor interests: ${interests}.` : ''}
Return ONLY valid JSON matching this shape, no markdown fences, no commentary:
{
  "days": [
    {
      "day": 1,
      "title": "short theme for the day",
      "activities": [
        { "time": "Morning", "title": "activity name", "description": "one short sentence" }
      ]
    }
  ]
}
Each day should have 3-4 activities across Morning/Afternoon/Evening.`

  const text = await callGemini({
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: {
      responseMimeType: 'application/json',
      maxOutputTokens: 8192,
    },
  })

  let parsed
  try {
    parsed = JSON.parse(text)
  } catch (err) {
    console.error('Itinerary JSON parse failed:', err, text)
    throw new Error('Received a malformed itinerary — try again.')
  }

  if (!Array.isArray(parsed?.days)) throw new Error('Malformed itinerary response')
  return parsed.days
}
