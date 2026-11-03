import { useState, useRef } from 'react'
import FormField from './FormField'
import Button from './Button'
import { FORMSPREE_ENDPOINT } from '../lib/constants'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(fields) {
  const errors = {}
  if (!fields.name.trim()) errors.name = 'Please enter your name.'
  if (!fields.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!EMAIL_RE.test(fields.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!fields.message.trim()) errors.message = 'Please enter a message.'
  return errors
}

export default function ContactForm() {
  const formRef = useRef(null)
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General enquiry',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  function handleChange(e) {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: undefined }))
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate(fields)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setStatus('submitting')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(formRef.current),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-line rounded-md p-8 text-center">
        <div className="w-12 h-12 rounded-full bg-turquoise/10 flex items-center justify-center mx-auto mb-4">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="#0F7A8A" strokeWidth="1.5" />
            <path d="M7 12l3.5 3.5L17 8.5" stroke="#0F7A8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-h3 font-bold text-ink mb-2">Message sent</h3>
        <p className="text-[15px] text-ink-muted">Thanks — we'll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <FormField label="Name" name="name" value={fields.name} onChange={handleChange} error={errors.name} />
      <FormField label="Email" name="email" type="email" value={fields.email} onChange={handleChange} error={errors.email} />
      <FormField label="Phone" name="phone" type="tel" value={fields.phone} onChange={handleChange} optional />
      <FormField label="Subject" name="subject" as="select" value={fields.subject} onChange={handleChange}>
        <option>General enquiry</option>
        <option>Membership</option>
        <option>Tour request</option>
        <option>Other</option>
      </FormField>
      <FormField label="Message" name="message" as="textarea" value={fields.message} onChange={handleChange} error={errors.message} />

      <p className="text-[13px] text-ink-muted">
        By submitting you agree to be contacted about your enquiry.
      </p>

      {status === 'error' && (
        <p role="alert" className="text-[14px] text-error border border-error/30 bg-error/5 rounded-md px-4 py-3">
          Something went wrong — please try again or call us directly.
        </p>
      )}

      <Button type="submit" variant="primary" size="md" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  )
}
