import { faqs } from '@/lib/content'
import { Section, SectionHeading } from '@/components/ui/Section'
import { FaqAccordion } from '@/components/FaqAccordion'

export const metadata = { title: 'FAQs | Michele Tagliani' }

export default function FAQsPage() {
  return (
    <Section className="top-gradient-soft">
      <SectionHeading eyebrow="FAQs" title="Questions before you book" align="center">
        <p>Answers to common questions about diagnosis, medication, online sessions, payment options and choosing the right programme.</p>
      </SectionHeading>
      <FaqAccordion items={faqs} />
    </Section>
  )
}
