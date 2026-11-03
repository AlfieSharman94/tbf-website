export default function ContactInfoCard({ icon, eyebrow, value, caption, href }) {
  const Inner = () => (
    <>
      <div className="flex items-start justify-between mb-4">
        <div className="w-8 h-8 border border-line flex items-center justify-center text-turquoise-dark">
          {icon}
        </div>
        <span className="text-line text-lg">→</span>
      </div>
      <p className="text-eyebrow uppercase tracking-wider text-turquoise-dark mb-2">{eyebrow}</p>
      <p className="text-[18px] font-bold text-ink mb-1 break-all">{value}</p>
      <p className="text-[14px] text-ink-muted">{caption}</p>
    </>
  )

  const base = 'block border border-line rounded-md p-8 transition-shadow duration-150 hover:shadow-md'

  if (href) {
    return (
      <a href={href} className={base}>
        <Inner />
      </a>
    )
  }

  return (
    <div className={base}>
      <Inner />
    </div>
  )
}
