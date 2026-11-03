import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Button from './Button'
import { CONTACT, JOIN_ONLINE_URL } from '../lib/constants'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/membership', label: 'Membership' },
  { to: '/contact', label: 'Contact' },
]

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 shrink-0">
      <div className="w-10 h-10 rounded-sm bg-turquoise flex items-center justify-center">
        <span className="text-white font-bold text-sm tracking-tight leading-none">TBF</span>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="font-bold text-[15px] text-ink tracking-tight">The Body Factory</span>
        <span className="text-[11px] text-ink-muted font-medium tracking-widest uppercase">Women Only · Est. 1994</span>
      </div>
    </Link>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-line">
        <div className="max-w-container mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-6">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-[15px] font-medium pb-0.5 transition-colors duration-150 ${
                    isActive
                      ? 'text-ink border-b-2 border-turquoise'
                      : 'text-ink-soft hover:text-ink'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href={CONTACT.phoneHref}
              className="text-[15px] font-medium text-ink-soft hover:text-ink transition-colors"
            >
              {CONTACT.phoneDisplay}
            </a>
            <Button href={JOIN_ONLINE_URL} variant="primary" size="md">
              Join Online
            </Button>
          </div>

          {/* Mobile: Join Online + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <Button href={JOIN_ONLINE_URL} variant="primary" size="md" className="text-sm py-2 px-4">
              Join Online
            </Button>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 text-ink"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-white flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="h-16 flex items-center justify-between px-6 border-b border-line">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
              className="p-2 text-ink"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-2 p-8" aria-label="Mobile navigation">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-3xl font-bold py-2 transition-colors duration-150 ${
                    isActive ? 'text-turquoise-dark' : 'text-ink hover:text-turquoise-dark'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="px-8 pb-8 mt-auto border-t border-line pt-6">
            <a
              href={CONTACT.phoneHref}
              className="block text-lg font-medium text-ink-soft mb-4"
            >
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
