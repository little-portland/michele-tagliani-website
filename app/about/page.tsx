import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export const metadata = { title: 'About Michele | Michele Tagliani' }

const logos = [
  { src: '/images/bant-logo.svg', alt: 'BANT logo', className: 'h-12 sm:h-14' },
  { src: '/images/cnhc-logo.png', alt: 'CNHC logo', className: 'h-10 sm:h-12' },
  { src: '/images/nta-logo.png', alt: 'NTA logo', className: 'h-14 sm:h-16' }
]

export default function AboutPage() {
  return (
    <>
      <section className="section-panel page-top-gradient relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_0.78fr] lg:items-center xl:gap-14">
            <Reveal>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#02a5a2]">About Me</p>
                <h1 className="mt-5 font-serif text-[2.7rem] leading-[0.96] text-ink sm:text-[3.45rem] lg:text-[3.95rem] xl:text-[4.2rem]">Hi, I’m Michele.</h1>
                <div className="mt-6 h-px w-24 bg-gradient-to-r from-[#02a5a2]/70 to-[#02a5a2]/15" />
                <div className="mt-8 space-y-6 text-lg leading-8 text-black">
                  <p>Hi, I’m Michele — a fully qualified and registered Nutritional Therapist, Naturopath, and Health Coach with over 10 years of clinical experience.</p>
                  <p>My path into this work wasn’t straightforward. Originally from Brazil, I spent years working internationally as a model — long hours, constant travel, caffeine, convenience food, and eventually complete exhaustion, hormonal disruption, digestive issues, and skin problems.</p>
                  <p>Discovering nutritional therapy changed everything. By addressing root causes rather than just managing symptoms, I restored my health, conceived naturally despite a PCOS diagnosis, and shifted my focus towards long-term resilience, not quick fixes.</p>
                  <p>I have ADHD myself, and I’ve also navigated these patterns within my own family. I understand the racing thoughts, emotional intensity, inconsistency, and the experience of being highly capable in some areas while struggling with things that seem simple to others.</p>
                  <p>Over time, a clear pattern emerged in my practice. Many women coming for fatigue, digestive issues, hormonal concerns, or anxiety were also navigating underlying patterns of overwhelm, poor focus, and emotional intensity.</p>
                  <p>My work now focuses on supporting women with ADHD — diagnosed or not — using a whole-body, ADHD-informed approach that looks at blood sugar regulation, gut health, nutrient status, stress physiology, and hormonal change.</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative mx-auto w-full max-w-[25rem] lg:ml-auto xl:max-w-[27rem]">
                <div className="relative aspect-[4/5.15] overflow-hidden rounded-[2rem] border border-[#02a5a2] bg-white shadow-[0_24px_70px_rgba(2,165,162,0.16)]">
                  <Image
                    src="/images/michele-home.jpg"
                    alt="Michele Tagliani"
                    fill
                    priority
                    sizes="(max-width: 1024px) 72vw, 28vw"
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-panel bg-sage-100/70 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.28fr_0.72fr] lg:items-start xl:gap-8">
            <Reveal>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#02a5a2]">Credentials & training</p>
                <h2 className="mt-5 font-serif text-[2.5rem] leading-tight text-ink sm:text-[3rem]">Professional Background</h2>
                <div className="mt-6 h-px w-24 bg-gradient-to-r from-[#02a5a2]/70 to-[#02a5a2]/15" />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="space-y-6 text-lg leading-8 text-black">
                <p>I graduated in 2015 from the College of Naturopathic Medicine in Nutritional Therapy and Naturopathy and am registered with the British Association for Nutrition and Lifestyle Medicine (BANT) and the Complementary and Natural Healthcare Council (CNHC).</p>
                <p>I’ve completed additional training in ADHD and am a NTA Certified Advanced ADHD Coach, regularly attend conferences, and stay current with the latest research to ensure my work is evidence-informed and clinically grounded.</p>
                <p>I also work with restaurants, hotels, and hospitality venues to create nutrient-dense, futurist and functional menus and innovative non-alcoholic beverage programs.</p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {logos.map((logo) => (
                  <div
                    key={logo.alt}
                    className="flex min-h-[7.2rem] items-center justify-center rounded-[1.6rem] border border-[#02a5a2]/25 bg-white px-6 py-6 shadow-[0_18px_42px_rgba(2,165,162,0.08)]"
                  >
                    <img src={logo.src} alt={logo.alt} className={`${logo.className} w-auto max-w-full object-contain`} />
                  </div>
                ))}
              </div>

              <Button href="/hospitality-consultancy" variant="secondary" className="mt-8">
                Learn more
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-panel bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 text-center sm:px-8 lg:px-10">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#02a5a2]">How I Work</p>
            <h2 className="mt-5 font-serif text-[2.5rem] leading-tight text-ink sm:text-[3rem]">My Approach</h2>
            <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-[#02a5a2]/70 to-[#02a5a2]/15" />
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 space-y-6 text-lg leading-8 text-black">
              <p>I take a whole-person, root-cause approach, combining nutrition science, naturopathic principles, and health coaching to create strategies that actually fit into real life.</p>
              <p>Rather than treating symptoms in isolation, we look at how nutrition, hormones, digestion, stress, sleep, and lifestyle interact—and how they affect both your physical health and emotional wellbeing.</p>
              <p className="font-bold">Here's what makes my approach different for ADHD brains:</p>
              <p>Standard nutrition plans don't work for many ADHD clients—not because of lack of willpower, but because ADHD brains need flexibility, dopamine-friendly structure, and strategies that account for variable energy and focus. My approach is designed with this in mind.</p>
              <p>I create a supportive, non-judgmental space. Sustainable change doesn't come from restriction, guilt, or perfection. It comes from understanding your body, building self-compassion, and making realistic adjustments that feel manageable.</p>
              <p>For many women, food has become a way of managing emotions, stress, fatigue, or overwhelm. When that's the case, nutritional changes alone aren't enough. We also explore alternative ways to support emotional regulation and nervous system resilience, so food doesn't have to do all the work.</p>
              <p>I understand the realities of ADHD and busy lives, which is why I offer flexible consultations, practical tools, and guidance designed to integrate into everyday routines—even when those routines are, well, not very routine.</p>
              <p>Whether you're looking to restore energy, improve focus, calm emotional reactivity, or just feel more in control, my aim is to support you with clarity, encouragement, and evidence-based guidance.</p>
              <p className="font-bold">You don't have to navigate this alone.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
