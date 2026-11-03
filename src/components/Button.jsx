const variants = {
  primary: 'bg-turquoise text-ink border-transparent hover:bg-[#17adc4]',
  secondary: 'bg-transparent text-ink border-ink border-[1.5px] hover:bg-ink hover:text-white',
  'primary-dark': 'bg-ink text-white border-transparent hover:bg-ink-soft',
  'secondary-on-dark': 'bg-transparent text-white border-white border-[1.5px] hover:bg-white hover:text-ink',
}

const sizes = {
  md: 'py-3 px-6 text-[15px]',
  lg: 'py-4 px-7 text-[15px]',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}) {
  const base = `inline-flex items-center gap-2 rounded-md font-semibold transition-all duration-150 group ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {children}
      <span className="inline-block transition-transform duration-150 group-hover:translate-x-0.5">→</span>
    </>
  )

  const isExternal = href && (href.startsWith('http') || href.startsWith('//'))

  if (href) {
    return (
      <a
        href={href}
        className={base}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {content}
        {isExternal && <span className="sr-only">(opens in new tab)</span>}
      </a>
    )
  }

  return (
    <button className={base} {...props}>
      {content}
    </button>
  )
}
