import { NextResponse } from 'next/server'

type ContactPayload = {
  name?: string
  email?: string
  phone?: string
  interest?: string
  message?: string
  consent?: string
  company?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function renderText(payload: Required<Pick<ContactPayload, 'name' | 'email' | 'interest' | 'message'>> & Pick<ContactPayload, 'phone'>) {
  return [
    'New website enquiry',
    '',
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || 'Not provided'}`,
    `Interest: ${payload.interest}`,
    '',
    'Message:',
    payload.message
  ].join('\n')
}

function renderHtml(payload: Required<Pick<ContactPayload, 'name' | 'email' | 'interest' | 'message'>> & Pick<ContactPayload, 'phone'>) {
  const rows = [
    ['Name', payload.name],
    ['Email', payload.email],
    ['Phone', payload.phone || 'Not provided'],
    ['Interest', payload.interest]
  ]

  return `
    <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
      <h1 style="font-family: Georgia, serif; font-weight: 400; color: #000;">New website enquiry</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 680px; margin: 24px 0;">
        <tbody>
          ${rows.map(([label, value]) => `
            <tr>
              <th style="border: 1px solid #d6ece0; background: #edf5f1; padding: 12px; text-align: left; width: 160px;">${escapeHtml(label)}</th>
              <td style="border: 1px solid #d6ece0; padding: 12px;">${escapeHtml(value)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <h2 style="font-family: Georgia, serif; font-weight: 400; color: #000;">Message</h2>
      <p style="white-space: pre-line;">${escapeHtml(payload.message)}</p>
    </div>
  `
}

export async function POST(request: Request) {
  let body: ContactPayload

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 })
  }

  const name = clean(body.name)
  const email = clean(body.email).toLowerCase()
  const phone = clean(body.phone)
  const interest = clean(body.interest)
  const message = clean(body.message)
  const consent = clean(body.consent)
  const company = clean(body.company)

  if (company) {
    return NextResponse.json({ ok: true })
  }

  if (!name || !email || !interest || !message || !consent) {
    return NextResponse.json({ message: 'Please complete all required fields.' }, { status: 400 })
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 400 })
  }

  if (message.length < 10) {
    return NextResponse.json({ message: 'Please add a little more detail to your message.' }, { status: 400 })
  }

  if (message.length > 3000) {
    return NextResponse.json({ message: 'Please keep your message under 3000 characters.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL || 'hi@paulonatal.com'
  const from = process.env.CONTACT_FROM_EMAIL || 'Michele Tagliani Website <hello@micheletagliani.com>'

  if (!apiKey) {
    return NextResponse.json({ message: 'Email sending is not configured yet. Add RESEND_API_KEY to the environment variables.' }, { status: 500 })
  }

  const payload = { name, email, phone, interest, message }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `Website enquiry: ${interest} — ${name}`,
      text: renderText(payload),
      html: renderHtml(payload)
    })
  })

  if (!response.ok) {
    return NextResponse.json({ message: 'The message could not be sent. Please try again or email directly.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
