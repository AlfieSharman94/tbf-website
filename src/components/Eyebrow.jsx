export default function Eyebrow({ children, inverse = false }) {
  const colour = inverse ? 'bg-white' : 'bg-turquoise-dark'
  const text = inverse ? 'text-white' : 'text-turquoise-dark'
  return (
    <div className="flex items-center gap-3">
      <span className={`block w-8 h-px ${colour}`} />
      <span className={`text-eyebrow uppercase tracking-wider ${text}`}>
        {children}
      </span>
    </div>
  )
}
