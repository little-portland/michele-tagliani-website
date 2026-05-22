import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/site'
import { Container } from '@/components/ui/Container'

export function Footer() {
  return (
    <footer className="bg-[#02a5a2] text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-4" aria-label="Michele Tagliani home">
              <span className="relative flex h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/70 bg-white/90 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                <Image src="/images/michele-logo-nutrition.png" alt="Michele Tagliani logo" fill sizes="64px" className="object-contain" />
              </span>
              <span className="font-serif text-4xl leading-none text-white">Michele Tagliani</span>
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/82">
              Evidence-based nutrition and lifestyle support for women with ADHD — science-based, compassionate, and personalised.
            </p>
            <p className="mt-6 text-sm text-white/70">Registered Nutritional Therapist & Naturopath. BANT & CNHC Registered.</p>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">Links</p>
            <ul className="mt-4 space-y-3 text-sm text-white/82">
              <li><a className="transition hover:text-white" href={siteConfig.clientPortalUrl} target="_blank" rel="noreferrer">Client Portal</a></li>
              <li><Link className="transition hover:text-white" href="/blog">Blog</Link></li>
              <li><Link className="transition hover:text-white" href="/faqs">FAQs</Link></li>
              <li><Link className="transition hover:text-white" href="/privacy">Privacy Policy</Link></li>
              <li><Link className="transition hover:text-white" href="/terms">Terms & Conditions</Link></li>
              <li><a className="transition hover:text-white" href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-white">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-white/82">
              <li><a className="transition hover:text-white" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a></li>
              <li><Link className="transition hover:text-white" href="/contact">Book a free discovery call</Link></li>
              <li><Link className="transition hover:text-white" href="/hospitality-consultancy">Hospitality consultancy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-6 text-xs text-white/70">
          © {new Date().getFullYear()} Michele Tagliani.
        </div>
      </Container>
    </footer>
  )
}
