import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { CheckIcon } from '@/components/ui/icons'
import { siteConfig } from '@/lib/site'

export const metadata = { title: 'ADHD Support | Michele Tagliani' }

const signs = [
  'Persistent mental overload or racing thoughts',
  'Emotional sensitivity or reactivity',
  'Chronic fatigue or cycles of burnout',
  'Difficulty maintaining consistency rather than motivation',
  'Perfectionism, people-pleasing, or masking',
  'Symptoms that worsen with hormonal shifts'
]

const addressAreas = [
  {
    title: 'Micronutrient status and neurotransmitter support',
    text: 'Nutrients like magnesium, zinc, iron, omega-3s, and B vitamins directly affect how your brain produces dopamine, serotonin, and norepinephrine — neurotransmitters that regulate focus, mood, and motivation.'
  },
  {
    title: 'Gut health, inflammation, and nutrient absorption',
    text: 'The gut-brain connection isn’t just theory — it’s real. Poor digestion affects nutrient absorption, inflammation drives brain fog, and gut bacteria directly communicate with your nervous system.'
  },
  {
    title: 'Stress response and nervous system regulation',
    text: 'When your nervous system is constantly in threat mode, focus becomes nearly impossible. We work on calming the stress response so your brain can actually function.'
  },
  {
    title: 'Sleep quality and circadian rhythm',
    text: 'ADHD brains struggle with sleep. But poor sleep makes every ADHD symptom worse. We address what’s disrupting your sleep and how to support better rest.'
  },
  {
    title: 'Hormonal changes across the menstrual cycle and different life stages',
    text: 'Hormones influence neurotransmitters like dopamine, which is why many women notice shifts in focus, energy, or emotional regulation at different points in the month or during life transitions.'
  }
]

const nutritionMeans = [
  'Stabilizing blood sugar to reduce crashes, irritability, and brain fog',
  'Ensuring adequate nutrients needed for neurotransmitter function',
  'Supporting gut-brain communication and reducing inflammatory load',
  'Calming the nervous system so the brain isn’t constantly in threat mode',
  'Working with non-linear energy and focus, not against them'
]

const testingIncludes = [
  'Nutrient status',
  'Gut health and digestion',
  'Inflammation or histamine load',
  'Hormone patterns',
  'Food intolerance testing',
  'Organic acids test',
  'Hair mineral analysis'
]

const rightForYou = [
  'Self-identified or awaiting assessment',
  'Navigating hormonal changes',
  'Dealing with chronic overwhelm or burnout',
  'Frustrated that conventional advice hasn’t helped'
]

const perimenopauseSymptoms = [
  'worsening brain fog',
  'sleep disruption',
  'increased emotional sensitivity',
  'greater difficulty with organisation and follow-through',
  'fatigue and overwhelm'
]

function CheckList({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`mt-6 grid gap-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-4 text-lg leading-8 text-black">
          <span className="mt-1.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#02a5a2]/10 text-[#02a5a2]">
            <CheckIcon className="h-4 w-4" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function FullTextSection({
  eyebrow,
  title,
  children,
  className
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
  className: string
}) {
  return (
    <Section className={className}>
      <div className="w-full text-center">
        <SectionHeading eyebrow={eyebrow} title={title} align="center" />
        <Reveal delay={100}>
          <div className="prose-site mt-8 space-y-6 text-lg leading-8 text-black">{children}</div>
        </Reveal>
      </div>
    </Section>
  )
}

export default function AdhdSupportPage() {
  return (
    <>
      <Section className="top-gradient-soft">
        <div className="w-full text-center">
          <Reveal>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[#02a5a2]">ADHD support</p>
            <h1 className="font-serif text-[3rem] leading-[0.98] text-black">
              ADHD & nutrition — a whole-body approach.
            </h1>
            <div className="mx-auto mt-7 h-px w-28 bg-gradient-to-r from-[#02a5a2]/70 to-[#02a5a2]/15" />
            <div className="mt-8 space-y-5 text-lg leading-8 text-black/82">
              <p>ADHD in women is frequently misunderstood and under-recognized.</p>
              <p>Many women don&apos;t experience obvious hyperactivity. Instead, they struggle with emotional regulation, mental overload, fatigue, inconsistency, and burnout— particularly as life demands increase.</p>
              <p>My work looks beyond symptoms to understand how physiology influences focus, mood, energy, and follow-through—and how targeted nutrition and lifestyle support can make daily life feel steadier and more manageable.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-sage-100/70">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeading eyebrow="Why ADHD often looks different in women" title="Many women with ADHD don’t fit the traditional stereotype." />
          <Reveal delay={120}>
            <div className="text-lg leading-8 text-black/82">
              <p>Instead, it shows up as:</p>
              <CheckList items={signs} />
              <p className="mt-8">This is one reason ADHD in women is so often missed — and why a whole-body, life-stage-aware approach is essential.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading eyebrow="What we address" title="When I work with women with ADHD, we explore:" align="center" />
        <div className="mt-12 space-y-4">
          {addressAreas.map((area, index) => (
            <Reveal key={area.title} delay={70 * index}>
              <article className="rounded-[2.5rem] bg-[#02a5a2] px-5 py-5 text-white shadow-[0_16px_38px_rgba(2,165,162,0.16)] sm:rounded-[999px] sm:px-7 sm:py-6">
                <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                    <Image src="/images/flower.png" alt="" width={26} height={22} className="h-auto w-7" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-[1.85rem] leading-tight text-white sm:text-[2.15rem]">{area.title}</h3>
                    <p className="mt-3 text-base leading-8 text-white/92 sm:text-lg">{area.text}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140}>
          <p className="mt-10 text-center text-lg leading-8 text-black/82">
            When these systems are under strain, ADHD symptoms intensify — making focus, emotional regulation, motivation, and consistency feel significantly harder.
          </p>
        </Reveal>
      </Section>

      <FullTextSection eyebrow="A note on diagnosis" title="Whether you have a diagnosis, are self-identified, or are simply starting to question whether ADHD may be part of the picture, you’re welcome here." className="bg-sage-100/70">
        <p>What matters is that you recognise yourself in these patterns — whether that’s difficulty with focus, emotional regulation, overwhelm, or consistency.</p>
        <p>My role is to help you understand what your body and brain need to function better, regardless of labels.</p>
      </FullTextSection>

      <FullTextSection eyebrow="ADHD Across the Whole Family" title="While my main focus is supporting women, ADHD rarely exists in isolation." className="bg-white">
        <p>Many women I work with are also parenting children with ADHD traits or navigating relationships with partners who experience similar challenges. ADHD shows up differently across ages and genders — from emotional regulation and focus in children, to stress, impulsivity, or burnout in adults.</p>
        <p>Where it makes sense, I take a family-aware approach. I help parents support them with focus, behaviour, gut health, sleep, and emotional regulation in a gentle, age-appropriate way. Sometimes supporting the whole household — shared routines, nutrition, nervous system regulation — brings relief for everyone, not just the individual.</p>
      </FullTextSection>

      <Section className="bg-[#02a5a2] text-white">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1fr] lg:items-start">
          <Reveal>
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-white/70">Where nutrition and lifestyle support come in</p>
              <h2 className="font-serif text-[2.5rem] font-normal leading-tight text-white sm:text-[3rem]">
                Nutrition doesn’t “cure” ADHD — but it can make a meaningful difference in how symptoms are experienced day to day.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6 text-lg leading-8 text-white/88">
              <p>Supporting ADHD through nutrition and lifestyle means:</p>
              <ul className="grid gap-3">
                {nutritionMeans.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-1.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/16 text-white">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>For many women, these foundations are what allow focus, emotional balance, and resilience to improve — whether or not medication is part of the picture.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <FullTextSection eyebrow="Medication and ADHD" title="Medication can be a helpful tool for some women, and I take a balanced, non-judgmental view." className="bg-white">
        <p>However, medication works best when the body is supported. Poor nutrient status, unstable blood sugar, chronic stress, disrupted sleep, or hormonal imbalance can all reduce its effectiveness or increase side effects.</p>
        <p>Nutrition and lifestyle support help create the conditions where any treatment works better — and for some women, they’re enough on their own to significantly improve symptoms.</p>
      </FullTextSection>

      <Section className="bg-sage-100/70">
        <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-start">
          <SectionHeading eyebrow="Functional Testing" title="Gaining Clarity, Not Labels" />
          <Reveal delay={120}>
            <div className="space-y-6 text-lg leading-8 text-black/82">
              <p>When appropriate, I use functional testing to better understand what may be driving symptoms beneath the surface.</p>
              <p>This might include:</p>
              <CheckList items={testingIncludes} />
              <p>Testing isn’t about chasing problems or over-medicalising — it’s about reducing guesswork and tailoring support more precisely, based on your biology and life context.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-[#02a5a2] text-white">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1fr] lg:items-start">
          <Reveal>
            <div>
              <h2 className="font-serif text-[2.5rem] font-normal leading-tight text-white sm:text-[3rem]">A Compassionate, Realistic Approach</h2>
              <div className="mt-7 h-px w-28 bg-white/35" />
              <div className="mt-8 space-y-5 text-lg leading-9 text-white/88">
                <p>Many women with ADHD have spent years feeling like they “should” be doing better.</p>
                <p><strong className="font-bold text-white">You’re not broken.</strong></p>
                <p>Your body and brain are responding to the information, demands, and stress placed on them. With the right support, things can feel steadier, clearer, and more manageable — without pushing harder or striving for perfection.</p>
                <p>My role is to help you understand what’s happening, prioritise what matters most, and make changes that are realistic, sustainable, and supportive of your whole life.</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6 text-lg leading-8 text-white/88">
              <h2 className="font-serif text-[2rem] font-normal leading-tight text-white sm:text-[2.35rem] lg:text-[2.55rem]">Is This Approach Right for You?</h2>
              <p>Many of the women I support are:</p>
              <ul className="grid gap-3">
                {rightForYou.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-1.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/16 text-white">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>If you recognise yourself in these patterns, an ADHD-informed, whole-body approach may offer clarity — and a way forward that finally makes sense.</p>
              <Button href={siteConfig.bookingUrl} variant="secondary" className="mt-2 !border-white !bg-white !text-[#02a5a2] hover:!bg-white hover:!text-[#02a5a2]">Book a free discovery call</Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[0.42fr_1fr] lg:items-start">
          <Reveal>
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[#02a5a2]">ADHD and Perimenopause</p>
              <h2 className="font-serif text-[2.7rem] font-normal leading-tight text-black sm:text-[3rem]">
                Is your ADHD getting harder to manage in your 40s or late 30s?
              </h2>
              <div className="mt-7 h-px w-28 bg-gradient-to-r from-[#02a5a2]/70 to-[#02a5a2]/15" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-lg leading-8 text-black/82">
              <p>Many women first recognise their ADHD during perimenopause or notice that symptoms once felt manageable suddenly intensify.</p>
              <p>Perimenopause doesn’t only affect reproductive hormones — it also affects brain chemistry. Oestrogen plays an important role in regulating dopamine, a neurotransmitter central to focus, motivation, and emotional regulation.</p>
              <p>As hormone levels fluctuate, many women experience:</p>
              <CheckList items={perimenopauseSymptoms} />
              <p>For women with ADHD, these changes can amplify existing patterns and make daily life feel significantly harder.</p>
              <p>My work focuses on supporting the intersection between brain health, hormonal change, and nervous system regulation so that women can move through this transition with greater stability, clarity, and resilience.</p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
