import { Link } from 'react-router-dom'
import Logomark from '../brand/Logomark'

function Footer() {
  return (
    <footer className="border-t border-white/8 px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-amber-300"
          >
            <Logomark size={16} />
            Farlume
          </Link>
          <p className="mt-3 max-w-xs text-sm text-neutral-400">
            Explore destinations, check the weather, and let an AI plan the
            trip while you dream about it.
          </p>
        </div>

        <nav aria-label="Footer" className="flex gap-8 text-sm">
          <Link
            to="/about"
            className="text-neutral-300 transition hover:text-amber-300"
          >
            About us
          </Link>
          <Link
            to="/contact"
            className="text-neutral-300 transition hover:text-amber-300"
          >
            Contact us
          </Link>
        </nav>
      </div>

      <p className="mx-auto mt-10 max-w-6xl text-xs text-neutral-400">
        &copy; {new Date().getFullYear()} Farlume. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
