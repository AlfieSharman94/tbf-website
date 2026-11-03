import Container from '../components/Container'
import Eyebrow from '../components/Eyebrow'
import CTABand from '../components/CTABand'
import Footer from '../components/Footer'

const sections = [
  {
    n: '01', total: '10',
    slug: 'gym-floor',
    category: 'Main Floor',
    title: 'The Gym Floor',
    body: 'The heart of the club. A spacious, air-conditioned gym floor combining cardio equipment and free weights — everything you need for a full workout in one room. Plenty of space between machines, plenty of light, no waiting around.',
    tags: ['Air conditioned', 'Cardio + free weights', 'QR code demos on every machine'],
    image: '/images/TBF-GymFloor2.jpeg',
    alt: 'The main gym floor at The Body Factory showing cardio machines and free weights',
    objectPosition: 'center top',
  },
  {
    n: '02', total: '10',
    slug: 'cardio-studio',
    category: 'Cardio',
    title: 'The Cardio Studio',
    body: 'A dedicated cardio room with treadmills, rowers, cross trainers, upright and recumbent bikes, and steppers. Modern, well-maintained equipment with screens, fans, and Bluetooth — pop your headphones in and lose yourself in a workout.',
    tags: ['Treadmills', 'Rowers', 'Cross trainers', 'Bikes', 'Steppers'],
    image: '/images/CARDIO_STUDIO.png',
    alt: 'The cardio studio at The Body Factory with treadmills and cardio machines',
  },
  {
    n: '03', total: '10',
    slug: 'plate-room',
    category: 'Strength',
    title: 'The Plate Room',
    body: 'Plate-loaded resistance machines for women serious about building strength. Easier on the joints than free weights for some movements, and a great way to progress safely. Every machine has a QR code — scan it and watch a YouTube demo showing exactly how to use it.',
    tags: ['Plate-loaded machines', 'Beginner-friendly'],
    image: '/images/TBF-PlateRoom2.png',
    alt: 'The plate-loaded resistance machine room at The Body Factory',
  },
  {
    n: '04', total: '10',
    slug: 'pin-room',
    category: 'Strength',
    title: 'The Pin Room',
    body: 'Pin-loaded resistance machines — adjust the weight with a single pin, no plates to lift on or off. Perfect for circuit training, for newer members, and for anyone who wants to move quickly between exercises.',
    tags: ['Pin-loaded selectorised', 'Full body coverage', 'Quick adjustments'],
    image: '/images/TBF-PinRoom2.png',
    alt: 'The pin-loaded resistance machine room at The Body Factory',
  },
  {
    n: '05', total: '10',
    slug: 'bell-room',
    category: 'Functional',
    title: 'The Bell Room',
    body: 'Functional training, free of charge. Kettlebells, dumbbells, resistance bands, medicine balls, benches and mats. Use it as a warm-up zone, a full-body workout room, or a place to stretch out after the floor.',
    tags: ['Kettlebells', 'Dumbbells', 'Resistance bands', 'Medicine balls', 'Benches'],
    image: '/images/TBF-Dumbells2.jpeg',
    alt: 'The functional training room at The Body Factory with kettlebells and dumbbells',
  },
  {
    n: '06', total: '10',
    slug: 'swimming-pool',
    category: 'Pool',
    title: 'Swimming Pool & Hydrotherapy Spa',
    body: 'A heated 26ft × 13ft pool, 3ft deep throughout — no deep end, just a calm, accessible space to swim or walk. The hydrotherapy benefits are real: lower-impact movement, gentle resistance, and a wonderful sense of weightlessness.',
    tags: ['26ft × 13ft', '3ft deep throughout', 'Heated year-round', 'Hydrotherapy benefits'],
    image: '/images/TBF-Pool3.jpeg',
    alt: 'The heated indoor swimming pool at The Body Factory',
  },
  {
    n: '07', total: '10',
    slug: 'infra-red-sauna',
    category: 'Recovery',
    title: 'Heat Wave Infra-Red Sauna',
    body: 'Infra-red heats your body directly rather than warming the air, which means a gentler, more comfortable experience with real benefits. Members report improved circulation, joint relief, deeper sleep and a meaningful calorie burn — and it feels wonderful.',
    tags: ['Calorie burn', 'Joint relief', 'Improved circulation', 'Detox & relaxation'],
    image: '/images/TBF-Sauna.jpeg',
    alt: 'The infra-red sauna at The Body Factory',
    aspectClass: 'aspect-square',
  },
  {
    n: '08', total: '10',
    slug: 'sunbeds',
    category: 'Tanning',
    title: 'Sunbeds',
    body: 'Two modern stand-up sunbeds in private cubicles, with clear session limits. Available to members and on a pay-as-you-go basis. Strictly over-18s only.',
    tags: ['Two stand-up units', 'Private cubicles', 'Over-18s only'],
    image: '/images/TBF-Sunbed.jpeg',
    alt: 'A stand-up sunbed cubicle at The Body Factory',
    aspectClass: 'aspect-[4/3]',
  },
  {
    n: '09', total: '10',
    slug: 'beauty-room',
    category: 'Beauty',
    title: 'Beauty by Sarah',
    body: 'A dedicated beauty room run by Sarah, our resident therapist. Bookable for treatments either before or after your workout — many members make a Saturday morning of it. Ask at reception for the current treatment menu and pricing.',
    tags: ['Bookable treatments', 'Open to non-members'],
    image: '/images/BEAUTYROOM.JPG',
    alt: 'The beauty treatment room at The Body Factory',
  },
  {
    n: '10', total: '10',
    slug: 'changing-facilities',
    category: 'Amenities',
    title: 'Changing Facilities',
    body: 'Spacious changing rooms with secure lockers, hot showers, hairdryers and a generous vanity area. Bring a swim bag, bring a gym bag, bring both — there\'s room.',
    tags: ['Lockers', 'Hot showers', 'Hairdryers', 'Vanity area'],
    image: '/images/CHANGING_ROOM1.jpeg',
    alt: 'The Body Factory changing room with lockers and vanity area',
    aspectClass: 'aspect-[4/3]',
  },
]

function TagList({ tags, small = false }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(t => (
        <span
          key={t}
          className={`inline-flex items-center gap-1.5 bg-white border border-line rounded-full text-ink-soft ${
            small ? 'text-[12px] py-1 px-3' : 'text-[13px] py-1.5 px-3.5'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-turquoise shrink-0" />
          {t}
        </span>
      ))}
    </div>
  )
}

function FacilitySection({ section, imageLeft }) {
  const { n, total, category, title, body, tags, image, alt, objectPosition = 'center', aspectClass = 'aspect-video' } = section

  const textCol = (
    <div className="flex flex-col justify-center py-8 md:py-0">
      {/* Numbered divider */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-3">
          <Eyebrow>{category}</Eyebrow>
        </div>
        <span className="ml-auto text-eyebrow uppercase tracking-wider text-ink-muted">{n} / {total}</span>
      </div>
      <h2 className="text-[24px] md:text-h3 font-bold text-ink mb-4">{title}</h2>
      <p className="text-body text-ink-soft mb-6 leading-relaxed">{body}</p>
      <TagList tags={tags} small />
    </div>
  )

  // Image is always second in the DOM so mobile always shows: title → image.
  // On desktop, md:order-first visually moves it to the left column when needed.
  const imageCol = (
    <div className={imageLeft ? 'md:order-first' : ''}>
      {image ? (
        <img
          src={image}
          alt={alt}
          className={`w-full ${aspectClass} object-cover`}
          style={{ objectPosition }}
        />
      ) : (
        <div className="w-full aspect-video bg-line flex items-center justify-center">
          <span className="text-[13px] text-ink-muted text-center px-4 uppercase tracking-wider font-semibold">
            Photo coming soon
          </span>
        </div>
      )}
    </div>
  )

  return (
    <section className="py-16 md:py-20 border-b border-line last:border-b-0">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {textCol}
          {imageCol}
        </div>
      </Container>
    </section>
  )
}

export default function Facilities() {
  const allTags = [
    'Gym Floor', 'Cardio Studio', 'Plate Room', 'Pin Room',
    'Bell Room', 'Swimming Pool', 'Infra-Red Sauna', 'Sunbeds',
    'Beauty Room', 'Changing Facilities',
  ]

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-white px-4 py-2 rounded-md z-[100] text-ink font-semibold">
        Skip to content
      </a>

      <main id="main-content">
        {/* Intro */}
        <section className="bg-white pt-16 pb-12 border-b border-line">
          <Container>
            <Eyebrow>Facilities</Eyebrow>
            <h1 className="text-[44px] md:text-display font-bold text-ink mt-4 mb-4 max-w-3xl" style={{ lineHeight: '1' }}>
              A full club, designed for women.
            </h1>
            <p className="text-lead text-ink-muted max-w-2xl mb-8">
              Ten distinct spaces under one roof. Cardio, strength, swim, recovery, beauty — every room set up with women in mind, and the team to show you around.
            </p>

            {/* Tag chips */}
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <a
                  key={tag}
                  href={`#${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-1.5 bg-white border border-line rounded-full text-[13px] text-ink-soft py-2 px-4 hover:border-turquoise-dark transition-colors duration-150"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-turquoise shrink-0" />
                  {tag}
                </a>
              ))}
            </div>
          </Container>
        </section>

        {/* QR Code callout */}
        <section className="bg-ink py-12 md:py-16">
          <Container>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0 w-14 h-14 bg-turquoise flex items-center justify-center rounded-sm">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="2" y="2" width="12" height="12" rx="1" stroke="white" strokeWidth="1.5" />
                  <rect x="5" y="5" width="6" height="6" fill="white" />
                  <rect x="18" y="2" width="12" height="12" rx="1" stroke="white" strokeWidth="1.5" />
                  <rect x="21" y="5" width="6" height="6" fill="white" />
                  <rect x="2" y="18" width="12" height="12" rx="1" stroke="white" strokeWidth="1.5" />
                  <rect x="5" y="21" width="6" height="6" fill="white" />
                  <rect x="18" y="18" width="4" height="4" fill="white" />
                  <rect x="26" y="18" width="4" height="4" fill="white" />
                  <rect x="18" y="26" width="4" height="4" fill="white" />
                  <rect x="26" y="26" width="4" height="4" fill="white" />
                </svg>
              </div>
              <div>
                <Eyebrow inverse>Exclusive to TBF</Eyebrow>
                <h2 className="text-[24px] md:text-h3 font-bold text-white mt-2 mb-2">
                  Every machine has a QR code. Scan, watch, lift.
                </h2>
                <p className="text-[15px] text-white/60 max-w-xl">
                  Never used a machine before? Scan the QR code on the frame, watch a 30-second demo from our team, and you're set. No queueing for a trainer, no awkward guessing.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Facility sections */}
        <div>
          {sections.map((section, i) => (
            <div key={section.n} id={section.slug}>
              <FacilitySection section={section} imageLeft={i % 2 !== 0} />
            </div>
          ))}
        </div>

        <CTABand />
      </main>
    </>
  )
}
