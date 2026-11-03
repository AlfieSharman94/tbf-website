import Button from './Button'

function CheckIcon({ featured }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="7" stroke={featured ? '#1ABCD4' : '#0F7A8A'} strokeWidth="1.5" />
      <path d="M4.5 8l2.5 2.5 4-5" stroke={featured ? '#1ABCD4' : '#0F7A8A'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function PricingCard({
  eyebrow,
  price,
  priceUnit,
  tagline,
  features = [],
  ctaLabel,
  ctaHref,
  featured = false,
}) {
  return (
    <div className={`relative rounded-lg p-8 flex flex-col ${
      featured
        ? 'bg-ink text-white border-2 border-ink'
        : 'bg-white text-ink border border-line'
    }`}>
      {/* Most Popular tab */}
      {featured && (
        <div className="absolute -top-[1px] right-6 bg-turquoise text-ink text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-b-md">
          Most Popular
        </div>
      )}

      {/* Eyebrow */}
      <p className={`text-eyebrow uppercase tracking-wider mb-4 ${featured ? 'text-turquoise-dark' : 'text-turquoise-dark'}`}>
        {eyebrow}
      </p>

      {/* Price */}
      <div className="flex items-end gap-1 mb-2">
        <span className={`text-[48px] font-bold leading-none ${featured ? 'text-white' : 'text-ink'}`}>
          {price}
        </span>
        {priceUnit && (
          <span className={`text-[15px] pb-1 ${featured ? 'text-white/70' : 'text-ink-muted'}`}>
            {priceUnit}
          </span>
        )}
      </div>

      {/* Tagline */}
      {tagline && (
        <p className={`text-[14px] mb-6 ${featured ? 'text-white/70' : 'text-ink-muted'}`}>
          {tagline}
        </p>
      )}

      {/* Features */}
      <ul className="flex flex-col gap-3 mb-8 flex-1">
        {features.map((f, i) => (
          <li key={i} className={`flex items-start gap-2.5 text-[15px] ${featured ? 'text-white' : 'text-ink-soft'}`}>
            <CheckIcon featured={featured} />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        href={ctaHref}
        variant={featured ? 'primary' : 'secondary'}
        size="md"
        className="w-full justify-center"
      >
        {ctaLabel}
      </Button>
    </div>
  )
}
