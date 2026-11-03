import Eyebrow from './Eyebrow'

export default function SectionDivider({ variant = 'hairline', eyebrow, number, rightLabel, inverse = false }) {
  if (variant === 'hairline') {
    return <hr className="border-t border-line" />
  }

  if (variant === 'eyebrow') {
    return (
      <div className="flex items-center justify-between">
        {eyebrow && <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow>}
        {rightLabel && (
          <span className="text-eyebrow uppercase tracking-wider text-ink-muted">{rightLabel}</span>
        )}
      </div>
    )
  }

  if (variant === 'numbered') {
    return (
      <div className="flex items-center gap-4">
        <span className="shrink-0 inline-flex items-center justify-center w-10 h-10 border border-turquoise-dark text-turquoise-dark text-eyebrow font-semibold tracking-wider">
          {number}
        </span>
        <span className="flex-1 h-px bg-line" />
        {rightLabel && (
          <span className="shrink-0 text-eyebrow uppercase tracking-wider text-ink-muted">{rightLabel}</span>
        )}
      </div>
    )
  }

  return null
}
