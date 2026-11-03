import { Link } from 'react-router-dom'
import { CONTACT } from '../lib/constants'

function FooterEyebrow({ children }) {
  return (
    <p className="text-eyebrow uppercase tracking-wider text-ink-muted mb-4">{children}</p>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-container mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Logo + blurb */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-sm bg-turquoise flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm tracking-tight leading-none">TBF</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-[15px] text-white tracking-tight">The Body Factory</span>
                <span className="text-[11px] text-ink-muted font-medium tracking-widest uppercase">Women Only · Est. 1994</span>
              </div>
            </div>
            <p className="text-[15px] text-ink-muted leading-relaxed">
              Dagenham's women-only health club since 1994. Non-trendy. Very friendly.
            </p>
          </div>

          {/* Visit */}
          <div>
            <FooterEyebrow>Visit</FooterEyebrow>
            <p className="text-[15px] text-white leading-relaxed">
              {CONTACT.address.line1}<br />
              {CONTACT.address.line2}
            </p>
          </div>

          {/* Contact */}
          <div>
            <FooterEyebrow>Contact</FooterEyebrow>
            <div className="flex flex-col gap-2 text-[15px]">
              <a href={CONTACT.phoneHref} className="text-white hover:text-turquoise transition-colors">
                {CONTACT.phoneDisplay}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="text-white hover:text-turquoise transition-colors break-all">
                {CONTACT.email}
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <FooterEyebrow>Hours</FooterEyebrow>
            <div className="flex flex-col gap-1.5 text-[15px]">
              <div className="flex justify-between gap-4">
                <span className="text-ink-muted">Mon – Fri</span>
                <span className="text-white">{CONTACT.hours.weekdays}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-ink-muted">Saturday</span>
                <span className="text-white">{CONTACT.hours.saturday}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-ink-muted">Sunday</span>
                <span className="text-white">{CONTACT.hours.sunday}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-6 border-t border-ink-soft flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-ink-muted">
          <span>© {new Date().getFullYear()} The Body Factory. All rights reserved.</span>
          {/* TODO before public launch:
               Add Privacy Policy and Cookie Notice pages (legally required for contact form + Google Maps embed).
               Then re-add the footer links here, pointing to /privacy and /cookies routes. */}
        </div>
      </div>
    </footer>
  )
}
