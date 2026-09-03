export const config = { maxDuration: 60 }

const GEMINI_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: { message: 'Method not allowed' } })
    return
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    res.status(500).json({ error: { message: 'Server missing GEMINI_API_KEY' } })
    return
  }

  const attempt = () =>
    fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(req.body),
      signal: AbortSignal.timeout(55000),
    })

  try {
    let upstream = await attempt().catch((err) => {
      console.warn('[api/chat] first attempt failed, retrying:', err)
      return null
    })

    if (!upstream || upstream.status === 503) {
      await new Promise((r) => setTimeout(r, 1500))
      upstream = await attempt()
    }

    const data = await upstream.text()
    res.status(upstream.status).setHeader('content-type', 'application/json').send(data)
  } catch (err) {
    console.error('[api/chat] request failed:', err)
    res
      .status(502)
      .json({ error: { message: String(err?.message ?? err) } })
  }
}
