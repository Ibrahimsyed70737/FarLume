import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

const GEMINI_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent'

// Mirrors api/chat.js so /api/chat behaves the same under `vite dev`
// as it does on Vercel — keeps the Gemini key server-side in both.
function geminiDevProxy(env) {
  return {
    name: 'gemini-dev-proxy',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.end('Method not allowed')
          return
        }

        const apiKey = env.GEMINI_API_KEY
        if (!apiKey) {
          res.statusCode = 500
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify({ error: 'Server missing GEMINI_API_KEY' }))
          return
        }

        let body = ''
        for await (const chunk of req) body += chunk

        const attempt = () =>
          fetch(`${GEMINI_URL}?key=${apiKey}`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body,
            signal: AbortSignal.timeout(55000),
          })

        try {
          let upstream = await attempt().catch((err) => {
            console.warn('[gemini-dev-proxy] first attempt failed, retrying:', err)
            return null
          })

          if (!upstream || upstream.status === 503) {
            await new Promise((r) => setTimeout(r, 1500))
            upstream = await attempt()
          }

          const data = await upstream.text()
          res.statusCode = upstream.status
          res.setHeader('content-type', 'application/json')
          res.end(data)
        } catch (err) {
          console.error('[gemini-dev-proxy] request failed:', err)
          res.statusCode = 502
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify({ error: { message: String(err?.message ?? err) } }))
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), tailwindcss(), geminiDevProxy(env)],
  }
})
