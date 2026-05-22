'use client'

import { FormEvent, useState } from 'react'
import { ChevronRightIcon } from '@/components/ui/icons'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result?.message || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      setMessage('Thank you — your message has been sent. I’ll get back to you within 48 hours.')
      form.reset()
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 w-full rounded-[2.25rem] border border-[#02a5a2]/30 bg-[linear-gradient(135deg,#d6ece0_0%,#edf5f1_48%,#ffffff_100%)] p-6 text-left shadow-[0_22px_60px_rgba(2,165,162,0.10)] sm:p-8 lg:p-10">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#02a5a2]">Enquiry form</p>
        <h2 className="mt-3 font-serif text-[2.25rem] font-normal leading-tight text-black sm:text-[2.6rem]">Tell me what you’re looking for support with</h2>
        <p className="mt-4 text-base leading-7 text-black/72 sm:text-lg sm:leading-8">Use the form below to share a little about what’s going on, what kind of support you’re interested in, and the best way to contact you.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-black">
          Name
          <input name="name" type="text" required autoComplete="name" className="rounded-[1.1rem] border border-[#02a5a2]/25 bg-white px-4 py-3.5 text-base font-normal text-black outline-none transition placeholder:text-black/35 focus:border-[#02a5a2] focus:ring-4 focus:ring-[#02a5a2]/12" placeholder="Your name" />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-black">
          Email
          <input name="email" type="email" required autoComplete="email" className="rounded-[1.1rem] border border-[#02a5a2]/25 bg-white px-4 py-3.5 text-base font-normal text-black outline-none transition placeholder:text-black/35 focus:border-[#02a5a2] focus:ring-4 focus:ring-[#02a5a2]/12" placeholder="you@example.com" />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-black">
          Phone <span className="font-normal text-black/55">optional</span>
          <input name="phone" type="tel" autoComplete="tel" className="rounded-[1.1rem] border border-[#02a5a2]/25 bg-white px-4 py-3.5 text-base font-normal text-black outline-none transition placeholder:text-black/35 focus:border-[#02a5a2] focus:ring-4 focus:ring-[#02a5a2]/12" placeholder="Best contact number" />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-black">
          What is this about?
          <select name="interest" required className="rounded-[1.1rem] border border-[#02a5a2]/25 bg-white px-4 py-3.5 text-base font-normal text-black outline-none transition focus:border-[#02a5a2] focus:ring-4 focus:ring-[#02a5a2]/12">
            <option value="">Select one</option>
            <option>ADHD support</option>
            <option>Also supporting</option>
            <option>Programmes</option>
            <option>Hospitality consultancy</option>
            <option>General enquiry</option>
          </select>
        </label>
      </div>

      <label className="mt-5 grid gap-2 text-sm font-semibold text-black">
        Message
        <textarea name="message" required rows={6} className="resize-none rounded-[1.1rem] border border-[#02a5a2]/25 bg-white px-4 py-3.5 text-base font-normal leading-7 text-black outline-none transition placeholder:text-black/35 focus:border-[#02a5a2] focus:ring-4 focus:ring-[#02a5a2]/12" placeholder="Tell me briefly what you’re looking for support with." />
      </label>

      <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-black/75">
        <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-[#02a5a2]/40 text-[#02a5a2] focus:ring-[#02a5a2]" />
        <span>I agree to be contacted about my enquiry.</span>
      </label>

      <label className="hidden" aria-hidden="true">
        Company
        <input name="company" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#02a5a2] px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_14px_32px_rgba(2,165,162,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#018f8c] hover:shadow-[0_18px_38px_rgba(2,165,162,0.30)] focus:outline-none focus:ring-2 focus:ring-[#02a5a2] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:translate-y-0"
        >
          {status === 'submitting' ? 'Sending…' : 'Send your enquiry'}
          <ChevronRightIcon className="h-3.5 w-3.5" />
        </button>

        {message && (
          <p className={status === 'success' ? 'text-sm font-semibold leading-6 text-[#018f8c]' : 'text-sm font-semibold leading-6 text-red-700'}>
            {message}
          </p>
        )}
      </div>
    </form>
  )
}
