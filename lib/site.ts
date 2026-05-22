export const siteConfig = {
  name: 'Michele Tagliani',
  title: 'Michele Tagliani | ADHD Nutrition & Lifestyle Support',
  description:
    'Evidence-based nutrition and lifestyle support for women with ADHD, supporting focus, emotional balance, energy, hormones and overall wellbeing.',
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || '/contact',
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@micheletagliani.com',
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://www.instagram.com/michele_tagliani_nutrition/',
  clientPortalUrl: process.env.NEXT_PUBLIC_CLIENT_PORTAL_URL || 'https://practicebetter.io/'
}

export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'ADHD Support', href: '/adhd-support' },
  { label: 'Also Supporting', href: '/also-supporting' },
  { label: 'Programmes', href: '/programmes' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacts', href: '/contact' }
]
