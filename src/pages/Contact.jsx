import Container from '../components/Container'
import Eyebrow from '../components/Eyebrow'
import ContactInfoCard from '../components/ContactInfoCard'
import ContactForm from '../components/ContactForm'
import CTABand from '../components/CTABand'
import { CONTACT } from '../lib/constants'

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2h4l1.5 3.5L7 7a11 11 0 004 4l1.5-1.5L16 11v4a1 1 0 01-1 1C6.7 16 2 11.3 2 3a1 1 0 011-1z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 2a5 5 0 010 10c0 0-5-5.4-5-7.5A5 5 0 019 2z" />
      <circle cx="9" cy="7" r="1.5" />
    </svg>
  )
}

function EnvelopeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="14" height="10" rx="1" />
      <path d="M2 5l7 5 7-5" />
    </svg>
  )
}

export default function Contact() {
  const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address.full)}`

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-white px-4 py-2 rounded-md z-[100] text-ink font-semibold">
        Skip to content
      </a>

      <main id="main-content">
        {/* ——— Intro ——— */}
        <section className="bg-white py-16 border-b border-line">
          <Container>
            <Eyebrow>Get in Touch</Eyebrow>
            <h1 className="text-[44px] md:text-display font-bold text-ink mt-4 mb-4" style={{ lineHeight: '1' }}>
              Come and say hello.
            </h1>
            <p className="text-lead text-ink-muted max-w-xl">
              Drop in for a tour, give us a ring, or send a message — we'll get back to you within 24 hours.
            </p>
          </Container>
        </section>

        {/* ——— Contact Info Cards ——— */}
        <section className="bg-off-white py-12 md:py-16">
          <Container>
            <div className="grid md:grid-cols-3 gap-6">
              <ContactInfoCard
                icon={<PhoneIcon />}
                eyebrow="Call Us"
                value={CONTACT.phoneDisplay}
                caption="Reception line, during opening hours."
                href={CONTACT.phoneHref}
              />
              <ContactInfoCard
                icon={<PinIcon />}
                eyebrow="Visit Us"
                value={CONTACT.address.line1}
                caption={CONTACT.address.line2}
                href={mapsUrl}
              />
              <ContactInfoCard
                icon={<EnvelopeIcon />}
                eyebrow="Email Us"
                value={CONTACT.email}
                caption="We reply within 24 hours."
                href={`mailto:${CONTACT.email}`}
              />
            </div>
          </Container>
        </section>

        {/* ——— Hours + Map ——— */}
        <section className="bg-white py-16 md:py-20">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              {/* Hours */}
              <div>
                <Eyebrow>Opening Hours</Eyebrow>
                <h2 className="text-[24px] md:text-h3 font-bold text-ink mt-4 mb-6">When you can find us</h2>
                <table className="w-full text-[15px]">
                  <tbody>
                    <tr className="border-b border-line">
                      <td className="py-3 text-ink-muted">Monday – Friday</td>
                      <td className="py-3 text-right font-medium text-ink">{CONTACT.hours.weekdays}</td>
                    </tr>
                    <tr className="border-b border-line">
                      <td className="py-3 text-ink-muted">Saturday</td>
                      <td className="py-3 text-right font-medium text-ink">{CONTACT.hours.saturday}</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-ink-muted">Sunday</td>
                      <td className="py-3 text-right font-medium text-ink">{CONTACT.hours.sunday}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-6 flex items-start gap-2 text-[14px] text-ink-muted">
                  <span className="w-2 h-2 rounded-full bg-turquoise shrink-0 mt-1" />
                  Pool sessions and beauty appointments need to be booked in advance — give us a ring or pop in.
                </div>
              </div>

              {/* Map */}
              <div>
                <Eyebrow>Find Us</Eyebrow>
                <h2 className="text-[24px] md:text-h3 font-bold text-ink mt-4 mb-4">
                  430–434 Hedgemans Road, Dagenham
                </h2>
                {/* TODO: replace with a generated embed code from Google Maps for higher fidelity */}
                <iframe
                  src="https://www.google.com/maps?q=430-434+Hedgemans+Road+Dagenham&output=embed"
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map showing The Body Factory location"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* ——— Contact Form ——— */}
        <section className="bg-off-white py-16 md:py-20">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <Eyebrow>Send a Message</Eyebrow>
                <h2 className="text-[32px] md:text-h2 font-bold text-ink mt-4 mb-4">We'd love to hear from you.</h2>
                <p className="text-body text-ink-soft mb-4">
                  Whether it's a question about membership, a request to bring a friend along, or something more personal — we read every message and reply within 24 hours.
                </p>
                <p className="text-[13px] text-ink-muted mb-6">We don't pass your details to anyone, ever.</p>
                <p className="text-[14px] text-ink-soft">
                  Prefer the phone?{' '}
                  <a href={CONTACT.phoneHref} className="text-turquoise-dark font-medium hover:underline">
                    {CONTACT.phoneDisplay}
                  </a>
                </p>
              </div>

              <ContactForm />
            </div>
          </Container>
        </section>

        <CTABand />
      </main>
    </>
  )
}
