import { useState } from 'react'
import Logomark from '../components/brand/Logomark'
import Reveal from '../components/motion/Reveal'

const CONTACT_EMAIL = 'ibrahimibrahim70737@gmail.com'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [type, setType] = useState('General question')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    const subject = `Farlume — ${type}`
    const body = `From: ${name} (${email})\n\n${message}`
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
    setSent(true)
  }

  return (
    <main className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
            <Logomark size={16} />
            Contact us
          </p>
          <h1 className="mt-4 text-4xl font-display text-white sm:text-5xl">
            Found a bug? Have an idea?
          </h1>
          <p className="mt-4 text-neutral-400">
            Send us a message and it&rsquo;ll open in your email client,
            addressed to{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-amber-300 underline underline-offset-2 hover:text-amber-200"
            >
              {CONTACT_EMAIL}
            </a>
            . Prefer to write it yourself? Use that link directly.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-5 rounded-2xl border border-white/8 bg-neutral-900/50 p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="text-xs text-neutral-400">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-lg border border-neutral-700 bg-neutral-950/60 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus-visible:border-amber-400"
                  placeholder="Your name"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="text-xs text-neutral-400">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg border border-neutral-700 bg-neutral-950/60 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus-visible:border-amber-400"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-type" className="text-xs text-neutral-400">
                What&rsquo;s this about?
              </label>
              <select
                id="contact-type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="rounded-lg border border-neutral-700 bg-neutral-950/60 px-3 py-2 text-sm text-white focus-visible:border-amber-400"
              >
                <option>General question</option>
                <option>Report an issue</option>
                <option>Feedback</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-xs text-neutral-400">
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="resize-none rounded-lg border border-neutral-700 bg-neutral-950/60 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus-visible:border-amber-400"
                placeholder="What happened, or what's on your mind?"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-2.5 text-sm font-medium text-neutral-950 shadow-[0_8px_24px_-8px_rgba(251,191,36,0.5)] transition hover:bg-amber-300"
            >
              Send message
            </button>

            {sent && (
              <p className="text-sm text-neutral-400">
                Opening your email client now. If nothing happened, email us
                directly at{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-amber-300 underline underline-offset-2 hover:text-amber-200"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </main>
  )
}

export default Contact
