
## v57 note

This version includes a `.env.local` file for local testing of the contact form. Add your real `RESEND_API_KEY` before testing email sending.

# Michele Tagliani Website

A custom Next.js + Sanity CMS website for Michele Tagliani's ADHD-specialist nutrition positioning.

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Sanity CMS at `/studio`
- Designed for deployment on Vercel

## Local setup

```bash
npm install
npm run dev
```

Open:

- Website: http://localhost:3000
- Sanity Studio: http://localhost:3000/studio

The site works with placeholder content before Sanity is connected.

## Environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Then fill in:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
NEXT_PUBLIC_BOOKING_URL=
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_INSTAGRAM_URL=
NEXT_PUBLIC_CLIENT_PORTAL_URL=
RESEND_API_KEY=
CONTACT_TO_EMAIL=hi@paulonatal.com
CONTACT_FROM_EMAIL="Michele Tagliani Website <hello@micheletagliani.com>"
```


## Contact form email setup

The contact form posts to `/api/contact` and sends email through Resend without needing an extra npm package.

1. Create a Resend account.
2. Verify the sending domain you want to use for `CONTACT_FROM_EMAIL`.
3. Add these variables to `.env.local` and to the Vercel project environment variables:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=hi@paulonatal.com
CONTACT_FROM_EMAIL="Michele Tagliani Website <hello@micheletagliani.com>"
```

For testing, keep `CONTACT_TO_EMAIL=hi@paulonatal.com`. When the final inbox is ready, change only `CONTACT_TO_EMAIL` in Vercel.

## Sanity setup

1. Create a Sanity account/project.
2. Copy your Sanity project ID into `.env.local`.
3. Add the same environment variables to Vercel.
4. Open `/studio` and start adding content.

The Sanity schema includes:

- Site Settings
- Pages with modular sections
- Programmes
- Testimonials
- FAQs
- Blog Posts

## Deployment workflow

Local machine → GitHub → Vercel.

After changes:

```bash
git status
git add .
git commit -m "Update website"
git push
```

Vercel will deploy automatically when connected to the GitHub repository.

## Notes before launch

Replace placeholders for:

- Michele's final logo
- Portrait and lifestyle images
- Booking URL
- Contact email
- Practice Better client portal URL
- Instagram link
- Testimonials
- Legal pages
- Lead magnet PDFs
- BANT / CNHC / NTA logos

The hidden consultancy page is available at `/hospitality-consultancy` and is marked `noindex`.
