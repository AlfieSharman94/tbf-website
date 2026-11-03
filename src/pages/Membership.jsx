import Container from '../components/Container'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import PricingCard from '../components/PricingCard'
import CashCard from '../components/CashCard'
import CTABand from '../components/CTABand'
import { JOIN_ONLINE_URL } from '../lib/constants'

const ddPlans = [
  {
    eyebrow: '12-Month Direct Debit',
    price: '£40',
    priceUnit: '/month',
    tagline: 'Our best value — gym, infra-red sauna and pool.',
    features: ['Full gym access', 'Infra-red sauna', 'Swimming pool', 'QR-code equipment demos'],
    ctaLabel: 'Join Online',
    ctaHref: JOIN_ONLINE_URL,
    featured: true,
  },
  {
    eyebrow: '6-Month Direct Debit',
    price: '£45',
    priceUnit: '/month',
    tagline: 'Same access, shorter commitment.',
    features: ['Full gym access', 'Infra-red sauna', 'Swimming pool', 'QR-code equipment demos'],
    ctaLabel: 'Join Online',
    ctaHref: JOIN_ONLINE_URL,
    featured: false,
  },
  {
    eyebrow: 'Mum & Daughter · 12-Month',
    price: '£60',
    priceUnit: '/month',
    tagline: 'Train together. One membership, two people.',
    features: ['Full access for both', 'Daughters aged 12–18', 'Infra-red sauna', 'Swimming pool'],
    ctaLabel: 'Join Online',
    ctaHref: JOIN_ONLINE_URL,
    featured: false,
  },
]

const cashPlans = [
  { eyebrow: '1 Month', price: '£55', description: 'Gym, infra-red sauna & pool' },
  { eyebrow: '3 Months', price: '£135', description: 'Gym, infra-red sauna & pool' },
  { eyebrow: '12 Months', price: '£360', description: 'Gym + infra-red sauna + pool', badge: 'Best value' },
  { eyebrow: '1-Month Sunbed Course', price: '£50', description: 'Non-members · over 18s only' },
]

const payg = [
  { n: '01', label: 'Infra-Red Sauna', price: '£9 / session' },
  { n: '02', label: 'Sunbeds', price: '£7 / session' },
  { n: '03', label: 'Swimming Pool', price: '£6 / session' },
  { n: '04', label: 'Gym', price: '£5 / session' },
]

export default function Membership() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 bg-white px-4 py-2 rounded-md z-[100] text-ink font-semibold">
        Skip to content
      </a>

      <main id="main-content">
        {/* ——— Hero ——— */}
        <section className="relative bg-ink py-24 overflow-hidden">
          {/* Decorative £ */}
          <div
            className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-white opacity-[0.06] font-bold leading-none select-none"
            style={{ fontSize: '400px', lineHeight: 1 }}
            aria-hidden="true"
          >
            £
          </div>

          <Container className="relative z-10">
            <Eyebrow inverse>Membership</Eyebrow>
            <h1 className="text-[44px] md:text-display font-bold text-white mt-4 mb-5 max-w-2xl" style={{ lineHeight: '1' }}>
              Come and join the only women's health club in Dagenham.
            </h1>
            <p className="text-lead text-white/80 mb-8 max-w-xl">
              Three ways to join — direct debit for the best long-term value, fixed-term cash plans for flexibility, or pay-as-you-go to dip in.
            </p>
            <Button href={JOIN_ONLINE_URL} variant="primary" size="lg">
              Join Online
            </Button>
          </Container>
        </section>

        {/* ——— Direct Debit ——— */}
        <section className="bg-off-white py-20 md:py-28">
          <Container>
            <Eyebrow>Direct Debit</Eyebrow>
            <h2 className="text-[32px] md:text-h2 font-bold text-ink mt-4 mb-12">Monthly memberships</h2>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
              {ddPlans.map(plan => (
                <PricingCard key={plan.eyebrow} {...plan} />
              ))}
            </div>

            {/* Info bar */}
            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-4 border border-line bg-white rounded-md py-4 px-6">
                <div className="shrink-0 w-6 h-6 rounded-full bg-turquoise flex items-center justify-center text-white text-xs font-bold">i</div>
                <p className="text-[15px] text-ink-soft">
                  <strong className="text-ink">Direct debit is our most popular option</strong> — straightforward monthly payments, easy to manage.
                </p>
              </div>
              <div className="flex items-center gap-4 border border-line bg-white rounded-md py-4 px-6">
                <div className="shrink-0 w-6 h-6 rounded-full bg-turquoise flex items-center justify-center text-white text-xs font-bold">i</div>
                <p className="text-[15px] text-ink-soft">
                  <strong className="text-ink">Sunbed monthly top-up from £30</strong> — over 18s only. Sunbeds can only be used every other day on a monthly top-up.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ——— Non-Contract ——— */}
        <section className="bg-white py-20 md:py-28">
          <Container>
            <Eyebrow>Non-Contract</Eyebrow>
            <h2 className="text-[32px] md:text-h2 font-bold text-ink mt-4 mb-3">Pay in cash, fixed terms.</h2>
            <p className="text-body text-ink-muted mb-10 max-w-xl">
              Prefer not to set up a direct debit? Pay in full at reception for any of these fixed-length memberships.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {cashPlans.map(plan => (
                <CashCard key={plan.eyebrow} {...plan} />
              ))}
            </div>
          </Container>
        </section>

        {/* ——— Pay As You Go ——— */}
        <section className="bg-off-white py-20 md:py-28">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              <div>
                <Eyebrow>Pay As You Go</Eyebrow>
                <h2 className="text-[32px] md:text-h2 font-bold text-ink mt-4 mb-4">Drop in. Pay as you go membership.</h2>
                <p className="text-body text-ink-muted">
                  For visiting friends, family or anyone curious. Pay at reception per visit. No commitment.
                </p>
              </div>

              <div className="border border-line bg-white rounded-md overflow-hidden">
                {payg.map(({ n, label, price }, i) => (
                  <div
                    key={n}
                    className={`flex items-center px-6 py-4 gap-4 ${i < payg.length - 1 ? 'border-b border-line' : ''}`}
                  >
                    <span className="text-eyebrow text-ink-muted font-semibold w-6 shrink-0">{n}</span>
                    <span className="text-[15px] text-ink flex-1">{label}</span>
                    <span className="text-[15px] font-bold text-ink shrink-0">{price}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ——— Small Print ——— */}
        <section className="bg-white py-12 border-t border-line">
          <Container>
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <Eyebrow>Small Print</Eyebrow>
              <p className="text-[14px] text-ink-muted leading-relaxed">
                A £6 joining fee is due at the club on your first visit. Memberships are non-transferable. Full terms and conditions apply — ask at reception or read them online before signing up.
              </p>
            </div>
          </Container>
        </section>

        <CTABand />
      </main>
    </>
  )
}
