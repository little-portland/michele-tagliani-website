import Image from 'next/image'
import Link from 'next/link'
import { Section } from '@/components/ui/Section'
import { Reveal } from '@/components/ui/Reveal'
import { siteConfig } from '@/lib/site'
import { ChevronRightIcon, CheckIcon } from '@/components/ui/icons'

export const metadata = {
  title: 'Consulting & Collaborations | Michele Tagliani',
  robots: { index: false, follow: false }
}

const offerItems = [
  'Menu development and optimization',
  'Non-alcoholic beverage program creation',
  'Ingredient sourcing and supplier recommendations',
  'Staff training on nutrition and ingredients',
  'ADHD-friendly menu design'
]

const subsections = [
  'Functional menu design',
  'Non-alcoholic drink development',
  'Nutritional consulting for hospitality',
  'Wellness concepts for restaurants / hotels'
]

export default function HospitalityConsultancyPage() {
  return (
    <>
      <Section className="top-gradient-soft">
        <Reveal>
          <div className="w-full text-center">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#02a5a2]">Consulting</p>
            <h1 className="mt-4 font-serif text-[2.8rem] font-normal leading-tight text-black sm:text-[3rem]">Consulting &amp; Collaborations</h1>
            <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-[#02a5a2]/70 to-[#02a5a2]/15" />
            <p className="mt-7 text-xl leading-9 text-black/82">
              Michele also collaborates with restaurants, clubs, and hospitality projects to develop nutritionally intelligent menus, functional drinks, and wellbeing-focused dining concepts.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {subsections.map((item, index) => (
            <Reveal key={item} delay={80 * index}>
              <div className="h-full text-center sm:text-left">
                <div className="mx-auto mb-5 h-12 w-14 sm:mx-0 sm:h-14 sm:w-16">
                  <Image
                    src="/images/flower.png"
                    alt=""
                    width={300}
                    height={253}
                    className="h-full w-full object-contain"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="font-serif text-[1.55rem] font-normal leading-[1.05] text-black sm:text-[2rem]">{item}</h2>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-sage-50">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#02a5a2]">Hospitality Consultancy</p>
              <h2 className="mt-4 font-serif text-[2.5rem] font-normal leading-tight text-black sm:text-[3rem]">Functional menus, drinks and wellbeing concepts.</h2>
              <div className="mt-5 h-px w-24 bg-gradient-to-r from-[#02a5a2]/70 to-[#02a5a2]/15" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-8 text-lg leading-8 text-black/82">
              <p>I work with restaurants, hotels, bars, and wellness venues to create innovative, nutrient-dense menu options and non-alcoholic beverage programs that support focus, energy, and wellbeing.</p>
              <div>
                <h3 className="font-serif text-[2rem] font-normal leading-tight text-black">What I offer</h3>
                <ul className="mt-5 grid gap-4">
                  {offerItems.map((item) => (
                    <li key={item} className="flex gap-4 text-black/82">
                      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#d6ece0] text-[#02a5a2]"><CheckIcon className="h-3.5 w-3.5" /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#02a5a2]">Recent projects</p>
              <h2 className="mt-4 font-serif text-[2.5rem] font-normal leading-tight text-black sm:text-[3rem]">Recent hospitality work.</h2>
              <div className="mt-5 h-px w-24 bg-gradient-to-r from-[#02a5a2]/70 to-[#02a5a2]/15" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-[#02a5a2]/25 bg-[linear-gradient(135deg,#d6ece0_0%,#edf5f1_52%,#ffffff_100%)] p-8 shadow-[0_18px_48px_rgba(2,165,162,0.08)]">
              <ul className="grid gap-5 text-lg leading-8 text-black/82">
                <li className="flex gap-4"><span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#02a5a2]"><CheckIcon className="h-3.5 w-3.5" /></span><span>[Brief description of hotel project]</span></li>
                <li className="flex gap-4"><span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#02a5a2]"><CheckIcon className="h-3.5 w-3.5" /></span><span>[Brief description of restaurant/club work]</span></li>
              </ul>
              <Link href={`mailto:${siteConfig.contactEmail}`} className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#02a5a2] px-6 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_14px_32px_rgba(2,165,162,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#018f8c]">
                Interested in working together?
                <ChevronRightIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
