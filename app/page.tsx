import Image from 'next/image'
import Link from 'next/link'
import { testimonials } from '@/lib/content'
import { siteConfig } from '@/lib/site'
import { Button } from '@/components/ui/Button'
import { Section, SectionHeading } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { CheckIcon } from '@/components/ui/icons'
import { TestimonialsCarousel } from '@/components/TestimonialsCarousel'

const heroHighlights = [
  'Online across the UK & abroad',
  'ADHD-informed, hormone-aware support',
  'Nutrition, lifestyle & practical coaching'
]

const whoCards = [
  { title: 'Mental overload', text: 'Feeling mentally overwhelmed even when life looks “under control”.' },
  { title: 'Inconsistent follow-through', text: 'Struggling with consistency despite strong motivation.' },
  { title: 'Burnout cycles', text: 'Cycles of burnout, exhaustion, or emotional overload.' },
  { title: 'Focus feels harder', text: 'Difficulty focusing or completing tasks.' },
  { title: 'Hormonal shifts', text: 'Worsening symptoms during hormonal shifts such as perimenopause.' },
  { title: 'Nothing quite sticks', text: 'Trying countless health strategies that never quite stick.' }
]

const whyDifferent = [
  {
    title: 'Flexible structure',
    text: 'Strategies that work with fluctuating energy and focus, rather than expecting perfect consistency.'
  },
  {
    title: 'Dopamine-friendly strategies',
    text: 'Because the issue is rarely willpower — it’s how the brain regulates motivation and stimulation.'
  },
  {
    title: 'Root-cause focus',
    text: 'Looking beyond symptoms to understand how nutrition, hormones, digestion, sleep, and stress influence how your brain functions.'
  },
  {
    title: 'Hormone-aware',
    text: 'Supporting women through monthly hormonal fluctuations and life stages such as perimenopause and postpartum.'
  }
]

const areasOfSupport = [
  {
    title: 'ADHD & focus',
    text: 'Understanding how nutrition, hormones, sleep and stress influence attention, motivation and emotional regulation.'
  },
  {
    title: 'Hormonal balance',
    text: 'Supporting PMS, PCOS, perimenopause and other hormonal changes that can affect mood, energy and cognitive clarity.'
  },
  {
    title: 'Gut health & digestion',
    text: 'Addressing digestive symptoms, inflammation and nutrient absorption that influence both physical and mental wellbeing.'
  },
  {
    title: 'Stress & nervous system regulation',
    text: 'Helping the body move out of chronic stress patterns that contribute to burnout, fatigue and emotional overwhelm.'
  },
  {
    title: 'Children and family health',
    text: 'Supporting families navigating ADHD traits, digestion, sleep and emotional regulation in children.'
  }
]

const supportList = [
  'personalised nutrition strategies',
  'supplement guidance where appropriate',
  'support with blood sugar balance and energy regulation',
  'digestive health support',
  'hormonal and nervous system support',
  'functional testing where helpful',
  'practical coaching to help changes stick'
]

const homeProgrammes = [
  { name: 'Foundations', summary: 'A clear roadmap with light support.', cadence: '1 initial consultation + 2 follow-ups over 3 months', price: '£650' },
  { name: 'Rebalance', summary: 'Regular guidance and accountability every 2–3 weeks to help changes stick.', cadence: '1 initial consultation + 4 follow-ups over 3 months', price: '£895', featured: true },
  { name: 'Restore', summary: 'Deeper support for complex or long-standing health concerns.', cadence: '1 initial consultation + 6 follow-ups over 3 months', price: '£1,095' },
  { name: 'Anchor', summary: 'High-touch support for burnout, transitions or difficult periods.', cadence: '1 initial consultation + 8 follow-ups over 3 months', price: '£1,495' },
  { name: 'Sustain', summary: 'Ongoing monthly support after completing a core programme.', cadence: '1 nutrition session + 1 coaching session each month', price: '£225/month' }
]

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function HomePage() {
  return (
    <>
      <section className="page-top-gradient relative isolate overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(2,165,162,0.10),transparent_28%),radial-gradient(circle_at_left_center,rgba(255,255,255,0.66),transparent_32%)]" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.95fr)] lg:items-center xl:gap-14">
            <Reveal>
              <div className="max-w-[52rem]">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#02a5a2]/15 bg-white/72 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.26em] text-[#02a5a2] shadow-[0_10px_24px_rgba(24,50,42,0.06)] backdrop-blur">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#02a5a2]" />
                  Root-cause nutrition for women with ADHD
                </div>

                <h1 className="mt-6 font-serif text-[2.7rem] leading-[0.96] text-ink sm:text-[3.45rem] lg:text-[3.95rem] xl:text-[4.2rem]">
                  Balanced Mind, Nourished Body
                </h1>

                <p className="mt-5 text-lg leading-8 text-black sm:text-[1.22rem] sm:leading-9">
                  Support for focus, emotional balance, energy, hormones and overall wellbeing — through personalised nutrition and lifestyle strategies designed for the way your brain and body actually work.
                </p>

                <p className="mt-5 text-base leading-8 text-black/82 sm:text-[1.04rem]">
                  If you often feel overwhelmed, mentally exhausted, or like life takes more effort than it should, you’re not alone. ADHD in women rarely looks like the stereotype. It often shows up as emotional intensity, mental overload, inconsistent energy, poor sleep, and cycles of burnout.
                </p>

                <div className="mt-8 text-black">
                  <p className="font-serif text-[2rem] leading-none text-black sm:text-[2.35rem]">Michele Tagliani</p>
                  <p className="mt-4 text-sm font-semibold uppercase leading-7 tracking-[0.22em]">
                    <span className="block">Nutritional Therapist, Naturopath and ADHD Coach</span>
                    <span className="block">Supporting women and families for over 10 years.</span>
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={siteConfig.bookingUrl}>Book a free discovery call</Button>
                  <Button href="/programmes" variant="secondary">Explore my programmes</Button>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {heroHighlights.map((item, index) => (
                    <Reveal key={item} delay={90 * index}>
                      <div className="inline-flex items-center gap-2 rounded-full border border-[#02a5a2]/18 bg-[rgba(255,255,255,0.76)] px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_24px_rgba(24,50,42,0.05)] backdrop-blur">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#02a5a2]" />
                        <span>{item}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative mx-auto mt-6 w-full max-w-[34rem] pb-10 sm:mt-0 sm:pb-12 lg:mx-0 lg:ml-auto lg:max-w-[37rem]">
                <div className="relative aspect-[1.12/1] overflow-hidden rounded-[2rem] shadow-[0_28px_70px_rgba(24,50,42,0.22)] sm:rounded-[2.35rem]">
                  <Image
                    src="/images/hero-img.jpg"
                    alt="Natural naturopathic ingredients and mortar and pestle"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/16 via-transparent to-white/8" />
                </div>

                <div className="absolute right-2 top-2 z-20 w-[calc(100%-1rem)] rounded-[1.35rem] bg-[#02a5a2] px-5 py-4 text-white shadow-[0_18px_45px_rgba(2,165,162,0.28)] sm:right-0 sm:top-0 sm:w-[17rem] sm:px-5 sm:py-4 lg:right-[-2.5rem] lg:top-[-2.5rem] lg:w-[18rem] lg:rounded-[1.6rem]">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white/75">Whole-body care</p>
                  <p className="mt-3 text-[0.8rem] font-semibold leading-[1.3rem] text-white">
                    ADHD, hormones, digestion and energy — connected support.
                  </p>
                </div>

                <div className="absolute bottom-0 left-3 right-3 rounded-[1.35rem] border border-white/20 bg-[#02a5a2]/95 p-4 text-white shadow-[0_18px_45px_rgba(2,165,162,0.28)] backdrop-blur-md sm:-bottom-5 sm:-left-5 sm:right-auto sm:w-[24rem] sm:rounded-[1.6rem] sm:p-5">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white/75">Clinical experience</p>
                  <div className="mt-2 flex items-end gap-3">
                    <span className="font-serif text-4xl leading-none text-white">10+</span>
                    <p className="pb-1 text-sm leading-6 text-white/88">years supporting women & families</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Section className="bg-white" containerClassName="max-w-[92rem]">
        <div className="w-full text-center">
          <SectionHeading eyebrow="Who this is for" title="Many of the women I work with recognise themselves in patterns like these:" align="center">
            <p>Some of my patients have an ADHD diagnosis. Others are still exploring whether ADHD might be part of the picture. What matters is that something isn’t working — and you’re ready to understand why and find a way forward.</p>
          </SectionHeading>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {whoCards.map((item, index) => (
            <Reveal key={item.title} delay={70 * index}>
              <div className="group h-full rounded-[2rem] border border-[#02a5a2] bg-white p-7 shadow-[0_22px_60px_rgba(2,165,162,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(2,165,162,0.18)]">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#02a5a2] text-white shadow-[0_12px_28px_rgba(2,165,162,0.24)] transition duration-300 group-hover:scale-105">
                  <CheckIcon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-[1.75rem] font-normal leading-tight text-black">{item.title}</h3>
                <p className="mt-3 text-[1.02rem] leading-8 text-black/75">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="section-wash bg-[#f8f1e7]">
        <Reveal>
          <div className="w-full text-center">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[#02a5a2]">Why ADHD-informed support is different</p>
            <h2 className="font-serif text-[2.5rem] leading-tight text-ink sm:text-[3rem]">
              Traditional health advice assumes you have consistent energy, predictable routines, and the ability to follow rigid plans. For ADHD brains, that’s rarely realistic. My work is designed with this in mind.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {whyDifferent.map((item, index) => (
            <Reveal key={item.title} delay={100 * index}>
              <div className="h-full">
                <div className="mb-6 h-12 w-14 sm:h-14 sm:w-16">
                  <Image
                    src="/images/flower.png"
                    alt=""
                    width={300}
                    height={253}
                    className="h-full w-full object-contain"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-serif text-[1.55rem] font-normal leading-[1.05] text-ink sm:text-[2rem]">{item.title}</h3>
                <p className="mt-5 max-w-sm text-[1rem] leading-8 text-black/78">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.48fr_1.52fr] lg:items-center xl:gap-16">
          <Reveal>
            <div className="mx-auto max-w-[18rem] sm:max-w-[20rem] lg:max-w-[21rem]">
              <Image
                src="/images/michele-home.jpg"
                alt="Michele Tagliani"
                width={1000}
                height={1500}
                sizes="(max-width: 1024px) 72vw, 24vw"
                className="h-auto w-full rounded-[2rem] border border-[#02a5a2] shadow-[0_18px_42px_rgba(2,165,162,0.20)]"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="prose-site max-w-none">
              <p className="text-xs font-bold uppercase tracking-[0.32em] !text-[#02a5a2]">About Michele</p>
              <div className="mt-5 space-y-4 text-lg leading-8 text-black">
                <p>I’m Michele Tagliani, a Nutritional Therapist, Naturopath and ADHD Coach with over 10 years of clinical experience.</p>
                <p>My work focuses on supporting women with ADHD using a whole-body approach that looks at brain health, hormones, digestion, stress physiology, sleep, and nutrition together.</p>
                <p>This work is both professional and personal. I live with ADHD myself and understand the complexity that many women experience — the mental intensity, the cycles of overwhelm, and the frustration of feeling capable yet constantly exhausted.</p>
                <p>Over the years, a pattern became clear in my practice: many women struggling with fatigue, poor focus, anxiety, digestive issues, and hormonal disruption were also navigating ADHD patterns — often amplified by life stages such as postpartum or perimenopause.</p>
                <p>Today my work centres on helping women understand what is happening beneath these symptoms and create realistic, sustainable changes that genuinely support how their brain and body function.</p>
              </div>
              <Button href="/about" variant="secondary" className="mt-8">Read more about Michele</Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-[#02a5a2] text-white">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-white/80">What I believe</p>
              <h2 className="mt-4 font-serif text-[2.5rem] leading-tight text-white sm:text-[3rem]">Your brain works differently — and it needs a different kind of support.</h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-5 text-lg leading-9 text-white/90">
              <p>ADHD symptoms are influenced by far more than brain chemistry alone — including blood sugar balance, nutrient status, sleep quality, stress response, digestion, and hormonal shifts.</p>
              <p>When these foundations are supported, focus, emotional regulation, energy, and resilience often improve significantly.</p>
              <p>Alongside this, we also look at what drives and motivates you — and how to create practical systems and tools that help you follow through, achieve your goals, and get things done in a way that works for you.</p>
              <p>Small, consistent changes that fit real life tend to create far more lasting progress than rigid health protocols.</p>
              <p>Medication can be helpful, but it&apos;s rarely the whole story. And even when it is part of the picture, it works best when your body is properly supported.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading eyebrow="Areas of support" title="ADHD rarely shows up in isolation." align="center">
          <p>The symptoms you’re experiencing are often connected to broader systems in the body — and that’s where we dig in. We may work across:</p>
        </SectionHeading>
        <div className="mt-12 space-y-4">
          {areasOfSupport.map((area, index) => (
            <Reveal key={area.title} delay={80 * index}>
              <div className="rounded-[2.5rem] sm:rounded-[999px] bg-[#02a5a2] px-5 py-5 text-white shadow-[0_16px_38px_rgba(2,165,162,0.16)] sm:px-7 sm:py-6">
                <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                    <Image src="/images/flower.png" alt="" width={26} height={22} className="h-auto w-7" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-[1.85rem] leading-tight text-white sm:text-[2.15rem]">{area.title}</h3>
                    <p className="mt-3 text-base leading-8 text-white/92 sm:text-lg">{area.text}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/also-supporting" variant="secondary">Explore areas of support</Button>
        </div>
      </Section>

      <Section className="bg-sage-100/70">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <SectionHeading eyebrow="How we work together" title="All programmes include personalised one-to-one support over three months, with the option to continue with ongoing guidance if needed.">
                <p>We begin with an in-depth consultation where we explore your health history, symptoms, lifestyle, and goals. From there, I create personalised nutrition and lifestyle guidance designed specifically for ADHD brains.</p>
              </SectionHeading>
              <p className="mt-8 text-lg leading-8 text-black/78">Follow-up sessions provide guidance, accountability, and adjustments as your needs evolve.</p>
              <Button href="/programmes" className="mt-8">Explore my programmes</Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="text-lg font-semibold text-black">Support may include:</p>
              <ul className="mt-6 space-y-0">
                {supportList.map((item) => (
                  <li key={item} className="flex items-start gap-4 border-b border-[#02a5a2]/20 py-4 text-lg leading-7 text-black">
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#02a5a2] text-white shadow-[0_10px_22px_rgba(2,165,162,0.18)]">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading eyebrow="Programmes" title="I offer several levels of support depending on how much guidance and structure you need." align="center" />
        <div className="mt-12 space-y-5">
          {homeProgrammes.map((programme, index) => (
            <Reveal key={programme.name} delay={70 * index}>
              <Link
                href={`/programmes#${slugify(programme.name)}`}
                className="group block rounded-[2rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02a5a2] focus-visible:ring-offset-4"
                aria-label={`Explore the ${programme.name} programme`}
              >
                <article className="relative overflow-hidden rounded-[2rem] border border-[#02a5a2]/35 bg-[linear-gradient(135deg,#d6ece0_0%,#edf5f1_44%,#ffffff_100%)] shadow-[0_22px_60px_rgba(2,165,162,0.11)] transition duration-300 group-hover:-translate-y-1 group-hover:border-[#02a5a2] group-hover:shadow-[0_28px_76px_rgba(2,165,162,0.16)]">
                  <div className="grid gap-7 p-7 lg:grid-cols-[1.05fr_0.78fr_auto] lg:items-center lg:p-8">
                    <div>
                      <p className="inline-flex rounded-full border border-[#02a5a2]/25 bg-white/82 px-3 py-1 text-xs font-bold uppercase tracking-[0.26em] text-[#02a5a2] shadow-[0_8px_20px_rgba(2,165,162,0.08)] backdrop-blur">Programme</p>
                      <h3 className="mt-4 font-serif text-[2.2rem] font-normal leading-none text-ink sm:text-[2.55rem]">{programme.name}</h3>
                      <p className="mt-4 max-w-2xl text-lg leading-8 text-black/75">{programme.summary}</p>
                    </div>
                    <div className="relative border-t border-[#02a5a2]/18 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/55">Format</p>
                      <p className="mt-2 text-base leading-7 text-black/78">{programme.cadence}</p>
                      <p className="pt-4 font-serif text-[2rem] leading-none text-[#053f3d]">{programme.price}</p>
                    </div>
                    <div className="lg:justify-self-end">
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#02a5a2]/30 bg-white px-5 py-3 text-sm font-semibold text-[#02a5a2] shadow-[0_10px_26px_rgba(2,165,162,0.08)] transition duration-300 group-hover:border-[#02a5a2] group-hover:bg-[#02a5a2] group-hover:text-white">
                        <span>Explore Programme</span>
                        <span aria-hidden="true">›</span>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-10 text-center text-lg leading-8 text-black/78">All programmes begin with a comprehensive initial consultation and personalised recommendations.</p>
        </Reveal>
        <div className="mt-8 text-center">
          <Button href="/programmes">Explore all programmes</Button>
        </div>
      </Section>

      <Section className="bg-sage-50">
        <div className="overflow-hidden rounded-[2.5rem] border border-sage-200 bg-white/90 p-8 shadow-soft sm:p-12">
          <SectionHeading eyebrow="Client words" title="What past clients have to say" align="center" />
          <TestimonialsCarousel items={testimonials} />
        </div>
      </Section>

      <Section className="bg-sage-100 section-wash">
        <Reveal>
          <div className="w-full text-center">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-sage-600">Ready to feel more supported?</p>
            <h2 className="mt-4 font-serif text-5xl leading-tight text-ink sm:text-6xl">Book a free 20-minute discovery call.</h2>
            <p className="mt-5 text-lg leading-8 text-sage-800">Book a free 20-minute discovery call to talk about your situation and see whether working together feels like the right fit.</p>
            <Button href={siteConfig.bookingUrl} className="mt-8">Book your discovery call</Button>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
