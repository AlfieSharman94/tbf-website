import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import FacilityCard from '../components/FacilityCard'
import CTABand from '../components/CTABand'
import Footer from '../components/Footer'
import { JOIN_ONLINE_URL } from '../lib/constants'
import { MANAGER_QUOTE, MANAGER_ATTRIBUTION } from '../lib/copy'

const facilities = [
  {
    title: 'Cardio Studio',
    description: 'Treadmills, rowers, cross trainers, bikes, and steppers.',
    image: '/images/CARDIO_STUDIO_1.png',
    alt: 'The cardio studio at The Body Factory with rows of cardio machines',
    href: '/facilities#cardio-studio',
  },
  {
    title: 'Swimming Pool',
    description: 'Heated 26ft × 13ft pool — 3ft throughout, no deep end.',
    image: '/images/SWIMMING_POOL1.png',
    alt: 'The heated indoor swimming pool at The Body Factory',
    href: '/facilities#swimming-pool',
  },
  {
    title: 'Infra-Red Sauna',
    description: 'Heat Wave sauna for calorie burn, joint relief and deep relaxation.',
    image: '/images/TBF-Sauna2.png',
    alt: 'The infra-red sauna room at The Body Factory',
    href: '/facilities#infra-red-sauna',
  },
  {
    title: 'Beauty Room',
    description: 'Bookable treatments with resident therapist Sarah.',
    image: '/images/BEAUTYROOM.JPG',
    alt: 'The beauty treatment room at The Body Factory',
    href: '/facilities#beauty-room',
  },
  {
    title: 'Plate Room',
    description: 'Plate-loaded resistance machines for strength training.',
    image: '/images/TBF-PlateRoom-Home.png',
    alt: 'The plate-loaded resistance machine room at The Body Factory',
    href: '/facilities#plate-room',
  },
  {
    title: 'Bell Room',
    description: 'Kettlebells, dumbbells, bands and mats — functional training.',
    image: '/images/TBF-Dumbells2.jpeg',
    alt: 'The functional training room with kettlebells and dumbbells at The Body Factory',
    href: '/facilities#bell-room',
  },
]

export default function Home() {
  return (
    <>
      {/* Skip to content */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-white px-4 py-2 rounded-md z-[100] text-ink font-semibold">
        Skip to content
      </a>

      <main id="main-content">
        {/* ——— Hero ——— */}
        <section
          className="relative min-h-[520px] md:min-h-[600px] flex items-end"
          style={{
            backgroundImage: 'url(/images/RECEPTION.JPG)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-label="Hero"
        >
          {/* Dark scrim */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.55) 100%)' }}
          />
          {/* Diagonal stripe pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="stripes" patternUnits="userSpaceOnUse" width="12" height="12" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="12" stroke="white" strokeWidth="4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#stripes)" />
            </svg>
          </div>

          <Container className="relative z-10 pb-12 md:pb-16 w-full flex items-end justify-between">
            <div className="max-w-xl">
              {/* Turquoise bar accent */}
              <div className="w-8 h-1 bg-turquoise mb-4" />
              <Eyebrow inverse>Dagenham · Established 1994</Eyebrow>
              <h1 className="text-[44px] md:text-display font-bold text-white mt-4 mb-5">
                TBF Women's Only<br />Health Club.
              </h1>
              <p className="text-lead text-white/80 mb-8 max-w-md">
                Empowering women through wellness — in a space that's genuinely yours.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href={JOIN_ONLINE_URL} variant="primary" size="lg">
                  Join Online
                </Button>
                <Button as={Link} href="/facilities" variant="secondary-on-dark" size="lg">
                  Explore Facilities
                </Button>
              </div>
            </div>

            {/* Stat block — desktop only */}
            <div className="hidden md:flex flex-col items-end text-right">
              <span className="text-display font-bold text-white leading-none">30+</span>
              <Eyebrow inverse>Years of Community</Eyebrow>
            </div>
          </Container>
        </section>

        {/* ——— Who We Are ——— */}
        <section className="bg-off-white py-24 md:py-32">
          <Container>
            <div className="grid md:grid-cols-12 gap-10 md:gap-16">
              <div className="md:col-span-5">
                <Eyebrow>Who We Are</Eyebrow>
                <h2 className="text-[32px] md:text-h2 font-bold text-ink mt-4">
                  A high quality, professional health club — for women only.
                </h2>
              </div>
              <div className="md:col-span-7 flex flex-col gap-5 text-body text-ink-soft">
                <p>The Body Factory has been Dagenham's home for women's fitness since 1994. We're a community gym in the truest sense of the word — friendly faces at the door, members who've been with us for over a decade, and staff who know your name.</p>
                <p>We welcome women of all shapes, sizes, ethnicities, ages and abilities. Whether you're picking up a weight for the first time at 65, training for a half marathon, or coming in with your daughter for a swim — you belong here.</p>
                <p>No grunting strangers. No judgement. Just a clean, well-equipped club where women come to feel stronger, healthier, and a little bit happier.</p>
              </div>
            </div>
          </Container>
        </section>

        {/* ——— Why Ladies Only ——— */}
        <section className="bg-white py-24 md:py-32">
          <Container>
            <Eyebrow>Why Women Only</Eyebrow>
            <h2 className="text-[32px] md:text-h2 font-bold text-ink mt-4 mb-12 max-w-2xl">
              A space built around how women actually want to work out.
            </h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
              {[
                {
                  n: '01',
                  title: 'Privacy',
                  body: 'A genuinely women-only environment. No mixed sessions, no exceptions — just the quiet confidence that comes with a space designed for you.',
                },
                {
                  n: '02',
                  title: 'Comfort',
                  body: 'Train how you want to train. Wear what you want to wear. From the changing rooms to the gym floor, this is your space. Trainers/Gym footwear must be worn for health and safety.',
                },
                {
                  n: '03',
                  title: 'Supportive Environment',
                  body: 'Staff who know your name. Members who cheer each other on. It feels less like a gym and more like an extended family.',
                },
              ].map(({ n, title, body }) => (
                <div key={n}>
                  <span className="block text-[56px] font-bold text-turquoise-dark leading-none mb-3 opacity-40">{n}</span>
                  <h3 className="text-[24px] md:text-h3 font-bold text-ink mb-3">{title}</h3>
                  <p className="text-body text-ink-soft">{body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ——— Mission & Vision ——— */}
        <section className="grid md:grid-cols-2">
          {/* Mission — ink bg */}
          <div className="bg-ink py-20 md:py-28 px-8 md:px-16">
            <Eyebrow inverse>Mission</Eyebrow>
            <h3 className="text-[24px] md:text-h3 font-bold text-white mt-4 mb-8">Our Mission</h3>
            <ol className="flex flex-col gap-6">
              {[
                { n: '01', title: 'Empower Women', body: 'Build strength — physical, mental, social — through movement.' },
                { n: '02', title: 'Promote Health & Confidence', body: 'A welcoming entry point to healthier habits at any age.' },
                { n: '03', title: 'Build Community', body: 'A club, not just a gym. Friendships that outlast the workout.' },
              ].map(({ n, title, body }) => (
                <li key={n} className="flex gap-4">
                  <span className="text-eyebrow text-turquoise-dark font-semibold shrink-0 mt-0.5">{n}</span>
                  <div>
                    <p className="font-bold text-white mb-0.5">{title}</p>
                    <p className="text-[15px] text-white/60">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Vision — white bg */}
          <div className="bg-white py-20 md:py-28 px-8 md:px-16 border-t border-line md:border-t-0 md:border-l border-line">
            <Eyebrow>Vision</Eyebrow>
            <h3 className="text-[24px] md:text-h3 font-bold text-ink mt-4 mb-8">Our Vision</h3>
            <ol className="flex flex-col gap-6">
              {[
                { n: '01', title: 'A Safe, Supportive Space', body: 'Women-only, no compromises — for the long haul.' },
                { n: '02', title: 'Balance and Vitality', body: 'Fitness, recovery, beauty and rest, all under one roof.' },
                { n: '03', title: 'Long-Term Wellbeing', body: 'Sustainable habits for the next thirty years and beyond.' },
              ].map(({ n, title, body }) => (
                <li key={n} className="flex gap-4">
                  <span className="text-eyebrow text-turquoise-dark font-semibold shrink-0 mt-0.5">{n}</span>
                  <div>
                    <p className="font-bold text-ink mb-0.5">{title}</p>
                    <p className="text-[15px] text-ink-muted">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ——— From the Manager ——— */}
        <section className="bg-off-white py-24 md:py-32">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              {/* Portrait */}
              <div>
                <img
                  src="/images/Lesley.jpeg"
                  alt="Lesley Jones, General Manager at The Body Factory"
                  className="w-full aspect-[4/5] object-cover rounded-sm"
                />
              </div>

              {/* Quote */}
              <div>
                <Eyebrow>From the Manager</Eyebrow>
                {/* Large decorative quote glyph */}
                <div className="text-[120px] leading-none font-bold text-turquoise opacity-40 select-none mt-2 mb-0 h-16 overflow-hidden">"</div>
                <div className="flex flex-col gap-4 mt-4">
                  {MANAGER_QUOTE.map((para, i) => (
                    <p key={i} className="text-body text-ink-soft leading-relaxed">{para}</p>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-3">
                  <div className="w-8 h-px bg-turquoise-dark" />
                  <div>
                    <p className="font-bold text-ink">{MANAGER_ATTRIBUTION.name}</p>
                    <p className="text-[13px] text-ink-muted">{MANAGER_ATTRIBUTION.title} · {MANAGER_ATTRIBUTION.tenure}</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ——— Facilities Preview ——— */}
        <section className="bg-white py-24 md:py-32">
          <Container>
            <div className="flex items-end justify-between mb-12 gap-4">
              <div>
                <Eyebrow>Facilities</Eyebrow>
                <h2 className="text-[32px] md:text-h2 font-bold text-ink mt-4">
                  Everything you need, under one roof.
                </h2>
              </div>
              <Link
                to="/facilities"
                className="shrink-0 text-[15px] font-semibold text-turquoise-dark hover:underline"
              >
                See all facilities →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {facilities.map(f => (
                <FacilityCard key={f.title} {...f} />
              ))}
            </div>
          </Container>
        </section>

        <CTABand />
      </main>
    </>
  )
}
