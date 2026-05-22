import { programmes } from '@/lib/content'
import { Section, SectionHeading } from '@/components/ui/Section'
import { ProgrammeCard } from '@/components/ProgrammeCard'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

export const metadata = { title: 'Programmes | Michele Tagliani' }

export default function ProgrammesPage() {
  return (
    <>
      <Section className="top-gradient-soft">
        <SectionHeading eyebrow="Work with me" title="Programme options designed around your pace, priorities and ADHD brain." align="center" />
        <Reveal delay={120}>
          <div className="prose-site mt-8 w-full text-center text-lg leading-8 text-black">
            <p>All programmes begin with a comprehensive 90-minute initial consultation. From there, we work together over three months with sessions tailored to your pace, priorities, and how your brain works best. Every programme includes personalised nutrition and lifestyle guidance — the difference between them is session frequency and the rhythm of support.</p>
            <p>Each session combines nutritional therapy with practical coaching — exploring what’s driving your symptoms and translating insight into changes that actually work for ADHD brains.</p>
            <p>Most consultations are delivered online via secure video call, making it easier to access support wherever you are, without the added pressure of travel. This flexible format works particularly well for busy lives and variable routines.</p>
            <p>In-person appointments and home visits in Central and West London can also be arranged — please mention this when booking so we can discuss what works best for you.</p>
          </div>
        </Reveal>
      </Section>

      <Section className="bg-sage-100/70">
        <div className="space-y-8">
          {programmes.map((programme, i) => (
            <Reveal key={programme.name} delay={80 * i}>
              <ProgrammeCard programme={programme} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading eyebrow="Pricing guidance" title="Pricing Notes" align="center" />
        <Reveal delay={120}>
          <div className="mt-12 w-full">
            <article className="grid gap-6 py-8 md:grid-cols-[0.34fr_1fr] md:gap-12 lg:py-10">
              <h3 className="font-serif text-[2.15rem] font-normal leading-tight text-black sm:text-[2.45rem]">Why this investment?</h3>
              <p className="text-lg leading-8 text-black/82">These programmes reflect the depth of personalised support, preparation, analysis, and ongoing guidance provided over three months. This isn’t generic nutrition advice — it’s personalised ADHD-specialist support tailored to how your brain actually works.</p>
            </article>

            <article className="grid gap-6 border-t border-[#02a5a2]/40 py-8 md:grid-cols-[0.34fr_1fr] md:gap-12 lg:py-10">
              <h3 className="font-serif text-[2.15rem] font-normal leading-tight text-black sm:text-[2.45rem]">Payment plans available</h3>
              <p className="text-lg leading-8 text-black/82">We can discuss flexible payment options during your free discovery call.</p>
            </article>

            <article className="grid gap-6 border-t border-[#02a5a2]/40 py-8 md:grid-cols-[0.34fr_1fr] md:gap-12 lg:py-10">
              <h3 className="font-serif text-[2.15rem] font-normal leading-tight text-black sm:text-[2.45rem]">Not sure which programme is right for you?</h3>
              <div className="space-y-4 text-lg leading-8 text-black/82">
                <p>The programmes differ in session frequency and rhythm — not in the quality or depth of support. Every programme works through nutrition, lifestyle, and root-cause thinking.</p>
                <p>The right choice is simply about how you work best: how often you’d like to check in, how much time you want between sessions to implement changes, and whether you’re working through one or two focused areas or several things at once. More areas to cover, or a longer health history, will naturally benefit from more frequent sessions — not because the support is more serious, but because there’s more ground to work through together.</p>
                <p>If you’re unsure, book a free discovery call. We’ll talk through your situation, your goals, and your preferred way of working — and find the right fit together.</p>
              </div>
            </article>
          </div>
        </Reveal>
      </Section>

      <Section className="bg-sage-50">
        <Reveal delay={120}>
          <div className="mx-auto w-full rounded-[2.25rem] border border-[#02a5a2]/30 bg-white px-6 py-10 text-center shadow-[0_18px_48px_rgba(2,165,162,0.08)] sm:px-10 lg:px-14">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#02a5a2]">Questions before booking</p>
            <h2 className="mt-4 font-serif text-[2.6rem] font-normal leading-tight text-black sm:text-[3rem]">Have questions before you choose a programme?</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-black/82">Read the FAQs for guidance on diagnosis, medication, online sessions, payment options and choosing the right level of support.</p>
            <Button href="/faqs" variant="secondary" className="mt-8">Read the FAQs</Button>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
