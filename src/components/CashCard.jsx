export default function CashCard({ eyebrow, price, description, badge }) {
  return (
    <div className="relative border border-line rounded-md p-6 flex flex-col">
      {/* Badge */}
      {badge && (
        <span className="absolute top-4 right-4 border border-turquoise-dark text-turquoise-dark text-[11px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm">
          {badge}
        </span>
      )}

      <p className="text-eyebrow uppercase tracking-wider text-turquoise-dark mb-3">{eyebrow}</p>
      <p className="text-[40px] font-bold leading-none text-ink mb-2">{price}</p>
      <p className="text-[15px] text-ink-muted mb-6 flex-1">{description}</p>
      <span className="text-[15px] font-medium text-turquoise-dark">Pay at the club →</span>
    </div>
  )
}
