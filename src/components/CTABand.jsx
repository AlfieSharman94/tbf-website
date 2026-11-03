import Eyebrow from './Eyebrow'
import Button from './Button'
import { JOIN_ONLINE_URL } from '../lib/constants'

export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-turquoise py-20 md:py-28">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white opacity-10" />
      <div className="pointer-events-none absolute -bottom-24 -right-8 w-64 h-64 rounded-full bg-white opacity-10" />

      <div className="relative max-w-container mx-auto px-6 md:px-10">
        <Eyebrow>Ready when you are</Eyebrow>
        <h2 className="text-[32px] md:text-h2 font-bold text-ink mt-4 mb-8 max-w-2xl">
          Come and join the only women's health club in Dagenham.
        </h2>
        <Button href={JOIN_ONLINE_URL} variant="primary-dark" size="lg">
          Join Online
        </Button>
      </div>
    </section>
  )
}
