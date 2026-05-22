import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { siteConfig } from '@/lib/site'

export const metadata = { title: 'Also Supporting | Michele Tagliani' }

const gutRecognise = [
  {
    label: 'In your gut and digestion',
    text: 'Bloating, discomfort after eating, indigestion, irregular bowel movements, food sensitivities, feeling worse after meals, or the sense that your digestion has never quite worked properly — even when you’re eating well.'
  },
  {
    label: 'In your energy and nervous system',
    text: 'Persistent fatigue that doesn’t improve with rest, feeling wired but exhausted, cycles of pushing through and crashing, difficulty switching off, or slow recovery from stress or illness.'
  },
  {
    label: 'Across the picture',
    text: 'Brain fog, low mood, emotional reactivity, unexplained weight changes, or the sense that everything just takes more effort than it should.'
  }
]

const gutLookAt = [
  'Gut health and digestion — absorption, inflammation, and gut-brain communication',
  'Nervous system regulation — stress response, adrenal function, and resilience',
  'Blood sugar balance — energy stability, mood, and focus across the day',
  'Nutrient status — deficiencies that affect energy, mood, and recovery',
  'Sleep quality — and what’s disrupting it'
]

const hormoneRecognise = [
  {
    label: 'Cycle-related symptoms',
    text: 'PMS or PMDD, mood shifts in the week before your period, painful, irregular, or heavy periods, or a diagnosis of PCOS that hasn’t fully been addressed.'
  },
  {
    label: 'During perimenopause or menopause',
    text: 'Increasing anxiety or low mood, disrupted sleep, hot flushes, brain fog, fatigue, or the feeling that your body and mind are harder to manage than they used to be.'
  },
  {
    label: 'Across the picture',
    text: 'Low energy, skin changes, weight shifts, digestive changes, or symptoms that seem to move around and are difficult to pin down.'
  }
]

const hormoneLookAt = [
  'Blood sugar regulation — which directly affects hormone balance and mood stability',
  'Gut health — including how hormones are metabolised and cleared',
  'Nutrient status — key nutrients that support hormone production and signalling',
  'Stress physiology — chronic stress profoundly disrupts hormonal balance',
  'Sleep quality — and its relationship with hormonal rhythms',
  'Hormonal patterns across your cycle, or through perimenopause and menopause'
]

const familyRecognise = [
  {
    label: 'Gut and digestion',
    text: 'Bloating, stomach aches, food reactions, constipation, or a very limited diet driven by sensory sensitivities around food.'
  },
  {
    label: 'Behaviour, focus, and emotional regulation',
    text: 'Difficulty concentrating, emotional outbursts, low frustration tolerance, impulsivity, or struggles with transitions and routine.'
  },
  {
    label: 'Energy, sleep, and immunity',
    text: 'Persistent fatigue, disrupted sleep patterns, frequent infections, eczema, or a sense that your child is never quite well.'
  },
  {
    label: 'Eating and nutrition',
    text: 'Extreme picky eating, strong food aversions, or anxiety around mealtimes — which can make it hard to ensure they’re getting what they need.'
  }
]

function SectionIntro({
  eyebrow,
  title,
  tagline,
  align = 'left'
}: {
  eyebrow: string
  title: string
  tagline?: string
  align?: 'left' | 'center'
}) {
  const isCentered = align === 'center'

  return (
    <Reveal>
      <div className={isCentered ? 'w-full text-center' : 'w-full'}>
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#02a5a2]">{eyebrow}</p>
        <h2 className="mt-5 font-serif text-[2.5rem] font-normal leading-tight text-black sm:text-[3rem]">{title}</h2>
        <div className={`mt-6 h-px w-24 bg-gradient-to-r from-[#02a5a2]/70 to-[#02a5a2]/15 ${isCentered ? 'mx-auto' : ''}`} />
        {tagline && <p className="mx-auto mt-7 max-w-5xl text-[1.25rem] font-semibold italic leading-9 text-black/82 sm:text-[1.35rem]">{tagline}</p>}
      </div>
    </Reveal>
  )
}

function RecognitionPill({ label, text }: { label: string; text: string }) {
  return (
    <article className="rounded-[2.5rem] bg-[#02a5a2] px-5 py-5 text-white shadow-[0_16px_38px_rgba(2,165,162,0.16)] sm:rounded-[999px] sm:px-7 sm:py-6">
      <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:text-left">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          <Image src="/images/flower.png" alt="" width={26} height={22} className="h-auto w-7" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <h3 className="font-serif text-[1.85rem] font-normal leading-tight text-white sm:text-[2.15rem]">{label}</h3>
          <p className="mt-3 text-base leading-8 text-white/92 sm:text-lg">{text}</p>
        </div>
      </div>
    </article>
  )
}

function splitSupportItem(item: string) {
  const [title, ...rest] = item.split(' — ')
  return { title, text: rest.join(' — ') }
}

function SupportGrid({ items }: { items: string[] }) {
  const gridCols = items.length >= 6 ? 'lg:grid-cols-6' : 'lg:grid-cols-5'

  return (
    <div className={`mt-8 grid gap-8 text-center sm:grid-cols-2 md:gap-9 ${gridCols} lg:gap-8`}>
      {items.map((item) => {
        const { title, text } = splitSupportItem(item)
        return (
          <div key={item} className="mx-auto h-full max-w-[18rem] sm:max-w-none">
            <div className="mx-auto mb-4 h-10 w-12 sm:h-11 sm:w-12 lg:h-9 lg:w-11">
              <Image
                src="/images/flower.png"
                alt=""
                width={300}
                height={253}
                className="h-full w-full object-contain"
                aria-hidden="true"
              />
            </div>
            <h4 className="font-serif text-[1.45rem] font-normal leading-tight text-black sm:text-[1.55rem] lg:text-[1.22rem] xl:text-[1.35rem]">{title}</h4>
            {text && <p className="mx-auto mt-3 max-w-[18rem] text-[0.98rem] leading-7 text-black/78 lg:text-[0.9rem] lg:leading-6 xl:text-[0.96rem] xl:leading-7">{text}</p>}
          </div>
        )
      })}
    </div>
  )
}

export default function AlsoSupportingPage() {
  return (
    <>
      <Section className="top-gradient-soft">
        <div className="w-full text-center">
          <Reveal>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[#02a5a2]">Also supporting</p>
            <h1 className="font-serif text-[3rem] font-normal leading-tight text-black">Hormones, digestion, stress physiology, and metabolic health.</h1>
            <div className="mx-auto mt-7 h-px w-28 bg-gradient-to-r from-[#02a5a2]/70 to-[#02a5a2]/15" />
            <div className="mt-8 space-y-5 text-lg leading-8 text-black/82">
              <p>While my work focuses on supporting women with ADHD, many of the symptoms people struggle with are connected to broader systems in the body — including hormones, digestion, stress physiology, and metabolic health.</p>
              <p>Below are some of the key areas where nutrition and lifestyle support can make a meaningful difference.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-sage-100/70">
        <div className="w-full text-center">
          <SectionIntro
            eyebrow="Digestive resilience"
            title="Gut Health, Energy & Nervous System Support"
            tagline="When your body feels stuck — exhausted, reactive, and hard to shift — it’s rarely one thing."
            align="center"
          />

          <Reveal delay={120}>
            <div className="mt-10 w-full space-y-8 text-lg leading-8 text-black/82">
              <p>Digestive health, energy, and nervous system regulation are deeply interconnected. Poor gut function affects nutrient absorption, which affects brain chemistry and mood. Chronic stress dysregulates the nervous system, which disrupts digestion and sleep. Burnout depletes the very resources needed to recover from burnout. These systems talk to each other constantly — which is why addressing them together tends to work better than treating each one in isolation.</p>

              <div>
                <p className="font-bold text-black">You might recognise some of these:</p>
                <div className="mt-5 space-y-4">
                  {gutRecognise.map((item) => (
                    <RecognitionPill key={item.label} label={item.label} text={item.text} />
                  ))}
                </div>
              </div>

              <p>These experiences are especially common in women with ADHD — whose nervous systems are often already working harder to manage stimulation, emotional intensity, and daily demands. But they show up in women without an ADHD diagnosis too, and the underlying drivers are often the same.</p>

              <div>
                <h3 className="font-serif text-[2.1rem] font-normal leading-tight text-black">What we look at</h3>
                <p className="mt-4">Rather than treating each symptom in isolation, we explore how your digestive health, stress physiology, nutrient status, sleep, and daily rhythms are interacting — and where the most meaningful leverage points are for you.</p>
                <p className="mt-6">This might include:</p>
                <SupportGrid items={gutLookAt} />
              </div>

              <p>Where it makes sense, functional testing can help clarify what’s happening beneath the surface and make support more precise.</p>

              <div>
                <h3 className="font-serif text-[2.1rem] font-normal leading-tight text-black">What this can feel like, in practice</h3>
                <p className="mt-4">When these foundations begin to settle, many women notice changes they weren’t expecting — not just in digestion or energy, but in emotional resilience, cognitive clarity, and the sense that life takes slightly less effort than it used to.</p>
                <p className="mt-5">That’s not a coincidence. It’s what happens when your body finally has what it needs.</p>
                <p className="mt-5 italic">Whether gut health, energy, or nervous system regulation is your primary concern — or all three — I’d love to hear what’s been going on for you.</p>
              </div>

              <div className="flex justify-center">
                <Button href={siteConfig.bookingUrl} variant="secondary">Book a free discovery call</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="w-full text-center">
          <SectionIntro
            eyebrow="Hormonal patterns"
            title="Hormonal Health"
            tagline="Hormonal symptoms are rarely “just hormones.” They’re usually a signal that several systems in the body need support."
            align="center"
          />

          <Reveal delay={120}>
            <div className="mt-10 w-full space-y-8 text-lg leading-8 text-black/82">
              <p>How hormones are produced, metabolised, and experienced is shaped by many things — stress levels, blood sugar stability, gut health, sleep quality, and nutrient status all play a role. This means that symptoms like mood swings, irregular cycles, or perimenopausal fatigue are rarely caused by hormones alone — and rarely resolved by addressing hormones alone either.</p>

              <div>
                <p className="font-bold text-black">You might recognise some of these:</p>
                <div className="mt-5 space-y-4">
                  {hormoneRecognise.map((item) => (
                    <RecognitionPill key={item.label} label={item.label} text={item.text} />
                  ))}
                </div>
              </div>

              <p>Hormonal symptoms can affect women at any life stage — and they’re rarely straightforward. What looks like a hormone problem is often a whole-body conversation, and understanding that wider picture is usually where lasting change begins.</p>

              <div>
                <h3 className="font-serif text-[2.1rem] font-normal leading-tight text-black">What we look at</h3>
                <p className="mt-4">We work with the full context of your health and life stage to understand what your body needs most. This might include:</p>
                <SupportGrid items={hormoneLookAt} />
              </div>

              <p>Where appropriate, functional testing can help build a clearer picture of what’s happening beneath the surface.</p>

              <div>
                <h3 className="font-serif text-[2.1rem] font-normal leading-tight text-black">What support can look like</h3>
                <p className="mt-4">Hormonal health rarely shifts overnight — but with the right foundations in place, many women notice real improvements in energy, mood stability, sleep, and cycle regularity. The goal isn’t to override your hormones, but to give your body the conditions it needs to find its own balance.</p>
                <p className="mt-5 italic">If you’re navigating hormonal symptoms — at any life stage — I’d love to hear what’s been going on for you.</p>
              </div>

              <div className="flex justify-center">
                <Button href={siteConfig.bookingUrl} variant="secondary">Book a free discovery call</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-sage-100/70">
        <div className="w-full text-center">
          <SectionIntro
            eyebrow="Family support"
            title="Supporting Children & Families"
            tagline="Children’s symptoms rarely exist in isolation — and neither does ADHD."
            align="center"
          />

          <Reveal delay={120}>
            <div className="mt-10 w-full space-y-8 text-lg leading-8 text-black/82">
              <p>Many of the women I work with are also navigating ADHD traits, focus difficulties, emotional regulation challenges, or health concerns in their children. Sometimes a parent’s own diagnosis comes precisely because they recognised something familiar in their child. Sometimes it’s the other way around.</p>
              <p>ADHD is often a whole-family experience — and so is the process of finding support.</p>

              <div>
                <p className="font-bold text-black">You might be concerned about your child experiencing:</p>
                <div className="mt-5 space-y-4">
                  {familyRecognise.map((item) => (
                    <RecognitionPill key={item.label} label={item.label} text={item.text} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-[2.1rem] font-normal leading-tight text-black">A whole-family approach</h3>
                <p className="mt-4">Children’s bodies respond remarkably well to nutritional support — often faster than adults. Small, targeted changes to diet, gut health, and daily rhythms can make a meaningful difference to focus, behaviour, sleep, and emotional regulation.</p>
                <p className="mt-5">My approach with children is always gentle, realistic, and age-appropriate. I work closely with parents rather than placing pressure on the child — and I’m very aware that mealtimes can already feel stressful in ADHD households. The goal is always to reduce pressure, not add to it.</p>
                <p className="mt-5">Where it makes sense, I take a family-wide view. Supporting shared routines, nutrition, and nervous system regulation can bring relief for everyone — not just the individual who sought help first.</p>
                <p className="mt-5">I primarily specialise in working with women, but I do offer support for children and families where there’s a clear fit. If you’re unsure whether this is the right support for your child, the discovery call is a good place to start.</p>
                <p className="mt-5 italic">If you’re looking for support for your child, or want to explore a family approach alongside your own programme, I’d love to hear from you.</p>
              </div>

              <div className="flex justify-center">
                <Button href={siteConfig.bookingUrl} variant="secondary">Book a free discovery call</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
