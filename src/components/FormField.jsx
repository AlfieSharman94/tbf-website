export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  optional = false,
  as = 'input',
  children,
  placeholder,
}) {
  const id = `field-${name}`
  const errorId = `${id}-error`

  const baseInput =
    'w-full border rounded-md px-4 py-3 text-[15px] text-ink bg-white transition-colors duration-150 outline-none ' +
    (error
      ? 'border-error focus:border-error'
      : 'border-line focus:border-turquoise-dark')

  const inputProps = {
    id,
    name,
    value,
    onChange,
    placeholder,
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': error ? errorId : undefined,
    className: baseInput,
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-[14px] font-semibold text-ink-soft">
        {label}
        {optional && <span className="ml-1 text-ink-muted font-normal">(optional)</span>}
      </label>

      {as === 'textarea' ? (
        <textarea {...inputProps} rows={5} className={`${baseInput} resize-y`} />
      ) : as === 'select' ? (
        <select {...inputProps} className={baseInput}>
          {children}
        </select>
      ) : (
        <input {...inputProps} type={type} />
      )}

      {error && (
        <p id={errorId} role="alert" className="flex items-center gap-1.5 text-[13px] text-error">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="#B23A3A" strokeWidth="1.5" />
            <line x1="7" y1="4" x2="7" y2="7.5" stroke="#B23A3A" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="7" cy="10" r="0.75" fill="#B23A3A" />
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}
