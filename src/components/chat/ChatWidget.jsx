import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import LoadingSymbol from '../brand/LoadingSymbol'
import Logomark from '../brand/Logomark'
import { destinations } from '../../data/destinations'
import { sendChatMessage } from '../../lib/gemini'

function useCurrentDestination() {
  const { pathname } = useLocation()
  const match = pathname.match(/^\/destinations\/([^/]+)/)
  const slug = match?.[1]
  return destinations.find((d) => d.slug === slug) ?? null
}

function ChatWidget() {
  const destination = useCurrentDestination()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const listRef = useRef(null)

  useEffect(() => {
    setMessages([])
    setStatus('idle')
  }, [destination?.slug])

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight })
  }, [messages, status])

  async function handleSend(event) {
    event.preventDefault()
    const text = input.trim()
    if (!text || status === 'loading') return

    const nextHistory = [...messages, { role: 'user', text }]
    setMessages(nextHistory)
    setInput('')
    setStatus('loading')

    try {
      const reply = await sendChatMessage({
        history: messages,
        message: text,
        destination,
      })
      setMessages([...nextHistory, { role: 'assistant', text: reply }])
      setStatus('idle')
    } catch (err) {
      setErrorMessage(err.message || 'Something went wrong.')
      setStatus('error')
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-40 sm:bottom-5 sm:right-5">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 flex h-[min(480px,70vh)] w-[calc(100vw-2rem)] max-w-[340px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/80 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.7)] backdrop-blur-2xl sm:w-[380px] sm:max-w-[380px]"
          >
          <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
            <div className="flex items-center gap-2">
              <Logomark size={16} className="text-amber-400" />
              <div>
                <p className="text-sm font-medium text-white">Farlume assistant</p>
                <p className="text-xs text-neutral-500">
                  {destination ? `Asking about ${destination.name}` : 'Ask me anything'}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1.5 text-neutral-400 hover:bg-white/10 hover:text-white"
            >
              <CloseIcon />
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.length === 0 && (
              <p className="text-sm text-neutral-500">
                {destination
                  ? `Ask how long to spend in ${destination.name}, what to see, or when to go.`
                  : 'Ask about destinations, timing, or what to pack.'}
              </p>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                  m.role === 'user'
                    ? 'ml-auto bg-amber-400 text-neutral-950'
                    : 'bg-neutral-800 text-neutral-100'
                }`}
              >
                <FormattedText text={m.text} />
              </div>
            ))}
            {status === 'loading' && (
              <div className="flex max-w-[85%] items-center gap-2 rounded-xl bg-neutral-800 px-3 py-2 text-sm text-neutral-400">
                <LoadingSymbol size={14} />
                Thinking…
              </div>
            )}
            {status === 'error' && (
              <div className="max-w-[85%] rounded-xl bg-red-950/40 px-3 py-2 text-sm text-red-300">
                {errorMessage}
              </div>
            )}
          </div>

          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 border-t border-white/8 p-3"
          >
            <label htmlFor="chat-input" className="sr-only">
              Message
            </label>
            <input
              id="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              className="min-w-0 flex-1 rounded-full border border-neutral-700 bg-neutral-950/60 px-4 py-2 text-sm text-white placeholder:text-neutral-500 focus-visible:border-amber-400"
            />
            <button
              type="submit"
              disabled={status === 'loading' || !input.trim()}
              className="shrink-0 rounded-full bg-amber-400 px-4 py-2 text-sm font-medium text-neutral-950 disabled:opacity-50"
            >
              Send
            </button>
          </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close travel assistant' : 'Open travel assistant'}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-neutral-950 shadow-[0_4px_24px_rgba(0,0,0,0.45)] ring-4 ring-neutral-950/40 transition hover:bg-amber-300 sm:h-14 sm:w-14"
      >
        {open ? <CloseIcon /> : <ChatIcon />}
      </button>
    </div>
  )
}

function FormattedText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i}>{part.slice(2, -2)}</strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      <path
        d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.2-3.6A7.96 7.96 0 0 1 4 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default ChatWidget
