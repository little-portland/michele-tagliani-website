import { client, hasSanityConfig } from '@/sanity/lib/client'

export type PlaceholderBodyBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }

export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  category: string
  publishedAt: string
  mainImageUrl?: string
  body?: any[] | PlaceholderBodyBlock[]
  seoTitle?: string
  seoDescription?: string
}

export const fallbackBlogPosts: BlogPost[] = [
  {
    id: 'adhd-symptoms-monthly-cycle',
    title: 'Why ADHD symptoms can shift across the month',
    slug: 'why-adhd-symptoms-can-shift-across-the-month',
    excerpt: 'Focus, mood, sleep and cravings can change as hormones shift. This article explains why the pattern matters and how to start tracking it without overcomplicating things.',
    category: 'ADHD & hormones',
    publishedAt: '2026-05-20',
    mainImageUrl: '/images/blog/img01.jpg',
    body: [
      { type: 'paragraph', text: 'Many women notice that ADHD traits do not feel the same every week. Focus may be manageable for part of the month, then suddenly feel much harder. Emotional regulation may feel steadier, then more reactive. Sleep, cravings, energy and sensory tolerance can all shift too.' },
      { type: 'paragraph', text: 'This does not mean you are inconsistent or doing something wrong. It often means your brain and body are responding to changing internal conditions — including hormones, stress load, blood sugar, sleep pressure and nutrient demand.' },
      { type: 'heading', text: 'Why the pattern matters' },
      { type: 'paragraph', text: 'When symptoms are viewed only day by day, it can feel random. When you zoom out across a full cycle, patterns often become easier to see. Some women notice more impulsivity, anxiety, low mood, fatigue, cravings or difficulty starting tasks at predictable points.' },
      { type: 'paragraph', text: 'The goal is not to blame hormones for everything. The goal is to understand when your system needs more support, less friction and more realistic expectations.' },
      { type: 'heading', text: 'What to track first' },
      { type: 'list', items: ['Energy across the day', 'Sleep quality and bedtime consistency', 'Mood, reactivity and overwhelm', 'Cravings, appetite and meal timing', 'Focus, task initiation and follow-through'] },
      { type: 'paragraph', text: 'A simple note once a day is enough. You do not need a complicated spreadsheet. Over time, these small notes can show whether there are recurring windows where food, sleep, workload, movement or boundaries need adjusting.' },
      { type: 'heading', text: 'Support should change with the pattern' },
      { type: 'paragraph', text: 'For some women, the most useful support is not one perfect routine. It is a flexible rhythm: more protein and steadier meals when cravings increase, simpler planning when cognitive load is high, earlier nights when sleep becomes fragile, and fewer unnecessary demands when the nervous system is already stretched.' },
      { type: 'paragraph', text: 'You are not looking for perfection. You are looking for useful information — the kind that helps you work with your body instead of constantly feeling surprised by it.' }
    ]
  },
  {
    id: 'blood-sugar-focus-emotions',
    title: 'What blood sugar has to do with focus and emotional regulation',
    slug: 'what-blood-sugar-has-to-do-with-focus-and-emotional-regulation',
    excerpt: 'Big swings in energy can make focus, mood and patience harder to access. Here is why steady meals can be one of the most practical places to begin.',
    category: 'Energy & focus',
    publishedAt: '2026-05-12',
    mainImageUrl: '/images/blog/img03.jpg',
    body: [
      { type: 'paragraph', text: 'When blood sugar is unstable, many people feel it as mood swings, urgency, fatigue, shakiness, irritability, cravings or a sudden drop in concentration. For women with ADHD traits, those shifts can make already-demanding executive function tasks feel even harder.' },
      { type: 'paragraph', text: 'This is not about strict food rules. It is about giving your brain a more predictable supply of fuel so that focus, emotional regulation and decision-making have a better foundation.' },
      { type: 'heading', text: 'The everyday signs can be subtle' },
      { type: 'list', items: ['Needing caffeine before food', 'Feeling wired but tired', 'Crashing in the afternoon', 'Getting irritable when meals are delayed', 'Craving quick carbohydrates when overwhelmed'] },
      { type: 'paragraph', text: 'These signs do not automatically mean one single thing is happening, but they are useful clues. They suggest it may be worth looking at meal timing, protein, fibre, hydration and how long you are going between meals.' },
      { type: 'heading', text: 'A steadier starting point' },
      { type: 'paragraph', text: 'A practical place to begin is breakfast or the first meal of the day. Many women do better with a meal that includes protein, fibre and fat rather than something very sweet or very light on its own.' },
      { type: 'paragraph', text: 'This might look like eggs with vegetables, Greek yoghurt with nuts and berries, leftovers from dinner, tofu scramble, or another option that feels realistic for your appetite and routine.' },
      { type: 'heading', text: 'Why this can matter for ADHD support' },
      { type: 'paragraph', text: 'When your baseline energy is more stable, it can be easier to notice what else is going on: sleep debt, hormonal shifts, sensory overload, stress or nutrient gaps. Food is not the whole answer, but it is often a powerful place to reduce friction.' }
    ]
  },
  {
    id: 'gut-health-adhd-symptoms',
    title: 'Gut health, digestion and ADHD symptoms: where to start',
    slug: 'gut-health-digestion-and-adhd-symptoms-where-to-start',
    excerpt: 'Digestion, mood, energy and brain chemistry are deeply connected. This article looks at the first clues to notice before jumping into complicated protocols.',
    category: 'Gut health',
    publishedAt: '2026-05-05',
    mainImageUrl: '/images/blog/img02.jpg',
    body: [
      { type: 'paragraph', text: 'Gut health can sound like a vague wellness phrase, but in practice it often comes down to very concrete questions: are you digesting food well, absorbing nutrients, tolerating meals, moving your bowels regularly, and feeling comfortable after eating?' },
      { type: 'paragraph', text: 'When digestion is not working well, it can affect energy, mood, sleep, inflammation load and nutrient status. Those changes can make focus, emotional regulation and resilience harder to access.' },
      { type: 'heading', text: 'Useful clues to notice' },
      { type: 'list', items: ['Bloating or discomfort after meals', 'Constipation, loose stools or irregular bowel movements', 'Food sensitivities or feeling worse after certain meals', 'Low appetite in the morning and strong cravings later', 'A sense that digestion has never quite worked properly'] },
      { type: 'paragraph', text: 'The first step is not to remove lots of foods at once. The first step is to understand the pattern. What happens after meals? Which foods feel easy or difficult? How often are you eating? Are you rushing, grazing, skipping meals or eating very late?' },
      { type: 'heading', text: 'Support does not need to be extreme' },
      { type: 'paragraph', text: 'Often, the most useful changes are simple and consistent: regular meals, enough protein, enough fibre, more chewing, calmer eating conditions, hydration, and a realistic look at stress. Where appropriate, testing can help clarify what may be happening beneath the surface.' },
      { type: 'paragraph', text: 'Gut work should reduce guesswork, not create more anxiety. The aim is to make food and digestion feel less chaotic and more supportive of the rest of your life.' }
    ]
  },
  {
    id: 'perimenopause-hormones-adhd',
    title: 'Perimenopause, hormones and ADHD: why things can feel harder',
    slug: 'perimenopause-hormones-and-adhd-why-things-can-feel-harder',
    excerpt: 'Many women notice that familiar coping strategies stop working during perimenopause. Here is why this stage can affect focus, sleep, mood and energy.',
    category: 'Hormonal health',
    publishedAt: '2026-04-24',
    mainImageUrl: '/images/blog/img04.jpg',
    body: [
      { type: 'paragraph', text: 'Perimenopause can make life feel unexpectedly harder, even for women who were managing well before. Sleep may become lighter, anxiety may increase, cycles may change, mood can feel less predictable and focus may become more fragile.' },
      { type: 'paragraph', text: 'For women with ADHD traits, this stage can feel especially confusing because the strategies that once worked may no longer be enough. The issue is not willpower. The internal conditions have changed.' },
      { type: 'heading', text: 'Why symptoms can intensify' },
      { type: 'paragraph', text: 'Hormones influence sleep, stress response, blood sugar, neurotransmitters, inflammation and temperature regulation. When those systems are under pressure, executive function can become more difficult.' },
      { type: 'list', items: ['More difficulty switching off at night', 'Lower tolerance for stress and noise', 'Brain fog or word-finding difficulty', 'Stronger PMS or cycle-related mood changes', 'Changes in appetite, cravings or weight'] },
      { type: 'heading', text: 'A whole-body view helps' },
      { type: 'paragraph', text: 'Hormonal support is rarely just about hormones. It often means looking at blood sugar, gut health, nutrient status, stress load, sleep rhythm, alcohol tolerance, caffeine timing and the demands being placed on your nervous system.' },
      { type: 'paragraph', text: 'When the basics become more supportive, many women feel less at the mercy of the month. The goal is not to override your body. It is to understand what has changed and create conditions that help you feel steadier.' }
    ]
  },
  {
    id: 'nutrition-routines-children-families',
    title: 'Supporting children and families with realistic nutrition routines',
    slug: 'supporting-children-and-families-with-realistic-nutrition-routines',
    excerpt: 'Children’s symptoms rarely exist in isolation. Gentle nutrition routines can support the whole household without adding pressure or turning food into a battle.',
    category: 'Family support',
    publishedAt: '2026-04-15',
    mainImageUrl: '/images/blog/img05.jpg',
    body: [
      { type: 'paragraph', text: 'When a child is struggling with energy, sleep, focus, digestion, food reactions or emotional regulation, the whole household feels it. Mealtimes can become stressful, routines can become fragile, and parents can feel unsure what to try next.' },
      { type: 'paragraph', text: 'Support for children needs to be gentle, realistic and age-appropriate. The goal is not to make food another source of pressure. The goal is to make small changes that reduce friction and help the child’s body feel better supported.' },
      { type: 'heading', text: 'What can be worth noticing' },
      { type: 'list', items: ['Very limited food variety or strong food aversions', 'Energy crashes, frequent infections or disrupted sleep', 'Gut symptoms such as bloating, constipation or stomach aches', 'Difficulty with transitions, routine and emotional regulation', 'Mealtime anxiety or conflict around food'] },
      { type: 'heading', text: 'Small changes are often more sustainable' },
      { type: 'paragraph', text: 'A whole-family approach often works better than focusing only on the child. Shared routines, predictable snacks, calmer meals, small food exposures and parent support can all make a difference over time.' },
      { type: 'paragraph', text: 'Children’s bodies can respond quickly to consistent support, but the process should feel safe and manageable. Progress often comes from reducing pressure, not adding more of it.' }
    ]
  },
  {
    id: 'sleep-stress-nervous-system',
    title: 'Sleep, stress and the nervous system: why pushing harder is not the answer',
    slug: 'sleep-stress-and-the-nervous-system-why-pushing-harder-is-not-the-answer',
    excerpt: 'When your system is already overloaded, more discipline is rarely the missing piece. Nervous system support can help make change feel possible again.',
    category: 'Nervous system',
    publishedAt: '2026-04-02',
    mainImageUrl: '/images/blog/img07.jpg',
    body: [
      { type: 'paragraph', text: 'If you feel exhausted but wired, overwhelmed by ordinary demands, unable to switch off at night or constantly behind, the answer is not always to push harder. Sometimes the system underneath is already carrying too much.' },
      { type: 'paragraph', text: 'Sleep and stress physiology shape how available your brain feels for planning, focus, emotional regulation and follow-through. When sleep is poor and stress is high, even simple habits can feel strangely out of reach.' },
      { type: 'heading', text: 'Signs your nervous system may need support' },
      { type: 'list', items: ['Feeling tired but unable to rest', 'Waking during the night or too early', 'Needing constant stimulation to keep going', 'Crashing after periods of pushing through', 'Feeling reactive, tearful or unusually sensitive'] },
      { type: 'heading', text: 'Start by reducing load' },
      { type: 'paragraph', text: 'Support might include steadier meals, earlier caffeine cut-off, a more predictable evening rhythm, less intense exercise at the wrong time, more realistic planning and fewer unnecessary decisions when you are already depleted.' },
      { type: 'paragraph', text: 'Nervous system support is not about doing nothing. It is about creating enough safety and stability that your body can recover, and your brain has a better chance of cooperating.' }
    ]
  },
  {
    id: 'medication-nutrition-support',
    title: 'Medication and nutrition: creating conditions where support works better',
    slug: 'medication-and-nutrition-creating-conditions-where-support-works-better',
    excerpt: 'Medication can be helpful for many people, but food, sleep and daily rhythms still matter. Here is how nutrition support can sit alongside medical care.',
    category: 'ADHD support',
    publishedAt: '2026-03-21',
    mainImageUrl: '/images/blog/img06.jpg',
    body: [
      { type: 'paragraph', text: 'Some women come to nutrition support already taking ADHD medication. Others are considering it, waiting for assessment, newly diagnosed or unsure whether medication is right for them. Nutrition support does not replace medical care, but it can sit alongside it.' },
      { type: 'paragraph', text: 'Medication may support attention and impulse control, but the body still needs food, sleep, hydration, minerals, protein, steady energy and a manageable stress load. When those foundations are neglected, people can still feel depleted or inconsistent.' },
      { type: 'heading', text: 'What nutrition support can help with' },
      { type: 'list', items: ['Eating enough when appetite is lower', 'Reducing afternoon energy crashes', 'Supporting sleep and evening recovery', 'Looking at digestion, hormones and nutrient status', 'Creating routines that work with your actual life'] },
      { type: 'heading', text: 'Work with your medical team' },
      { type: 'paragraph', text: 'Questions about medication dose, side effects or changes should always be discussed with the clinician who prescribes it. Nutrition support can help you notice patterns, prepare useful information and create a steadier foundation around your treatment.' },
      { type: 'paragraph', text: 'The aim is not to choose between medical support and lifestyle support. For many women, the most helpful approach is integrated, practical and tailored to the realities of daily life.' }
    ]
  }
]

const postsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  "id": _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  "mainImageUrl": mainImage.asset->url,
  seoTitle,
  seoDescription
}`

const postQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  "id": _id,
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  "mainImageUrl": mainImage.asset->url,
  body,
  seoTitle,
  seoDescription
}`

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (!hasSanityConfig) return fallbackBlogPosts

  try {
    const posts = await client.fetch<BlogPost[]>(postsQuery, {}, { next: { revalidate: 60 } })
    return posts?.length ? posts : fallbackBlogPosts
  } catch {
    return fallbackBlogPosts
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  if (!hasSanityConfig) return fallbackBlogPosts.find((post) => post.slug === slug) || null

  try {
    const post = await client.fetch<BlogPost | null>(postQuery, { slug }, { next: { revalidate: 60 } })
    return post || null
  } catch {
    return fallbackBlogPosts.find((post) => post.slug === slug) || null
  }
}

export function formatDate(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value

  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
}

export function isPlaceholderBody(body: BlogPost['body']): body is PlaceholderBodyBlock[] {
  return Array.isArray(body) && body.some((block) => block?.type === 'paragraph' || block?.type === 'heading' || block?.type === 'list')
}
