import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { siteConfig } from '@/lib/site'
import { ContactForm } from '@/components/ContactForm'
import { Reveal } from '@/components/ui/Reveal'

export const metadata = { title: 'Contacts | Michele Tagliani' }

export default function ContactPage() {
  return (
    <>
      <Section className="top-gradient-soft">
        <Reveal>
          <div className="w-full text-center">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#02a5a2]">Contact / Book</p>
            <h1 className="mt-4 font-serif text-[2.8rem] font-normal leading-tight text-black sm:text-[3rem]">Book a discovery call</h1>
            <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-[#02a5a2]/70 to-[#02a5a2]/15" />
            <div className="prose-site mt-8 w-full text-lg leading-8 text-black/82">
              <p>If you recognise yourself in what you&apos;ve read — and you&apos;re wondering whether this kind of support might help — I&apos;d love to hear from you.</p>
              <p>The discovery call is a free, relaxed 20-minute conversation where we talk through what&apos;s been going on, what you&apos;re hoping to change, and whether working together feels like the right fit. There&apos;s no pressure and no obligation.</p>
              <p>You&apos;ll leave with a clearer sense of what support might look like for you — whatever you decide.</p>
            </div>
            <p className="mt-8 text-lg leading-8 text-black/82">Prefer to reach out first? Email me at <a className="font-semibold text-[#02a5a2] transition hover:text-[#018f8c]" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a> or use the form below. I&apos;ll get back to you within 48 hours.</p>
            <ContactForm />
          </div>
        </Reveal>
      </Section>

      <Section className="bg-sage-50">
        <Reveal delay={120}>
          <div className="w-full rounded-[2.25rem] border border-[#02a5a2]/30 bg-white px-6 py-10 text-center shadow-[0_18px_48px_rgba(2,165,162,0.08)] sm:px-10 lg:px-14">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#02a5a2]">Questions before booking</p>
            <h2 className="mt-4 font-serif text-[2.6rem] font-normal leading-tight text-black sm:text-[3rem]">Not ready to book yet?</h2>
            <p className="mt-5 text-lg leading-8 text-black/82">Read the FAQs for guidance on diagnosis, medication, online sessions, payment options and choosing the right level of support.</p>
            <Button href="/faqs" variant="secondary" className="mt-8">Read the FAQs</Button>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
