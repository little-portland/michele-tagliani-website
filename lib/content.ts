export type Programme = {
  name: string
  eyebrow: string
  subtitle: string
  summary: string
  detail: string[]
  bestFor: string[]
  includes: string[]
  price: string
  investment: string
  cadence: string
  paymentNote?: string
  featured?: boolean
}

export type FaqSegment =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }

export type Faq = { question: string; answer: FaqSegment[] }

export const home = {
  hero: {
    title: 'Balanced Mind, Nourished Body',
    kicker: 'Root-cause nutrition for women with ADHD',
    body:
      'Support for focus, emotional balance, energy, hormones and overall wellbeing — through personalised nutrition and lifestyle strategies designed for the way your brain and body actually work.',
    note:
      'If you often feel overwhelmed, mentally exhausted, or like life takes more effort than it should, you are not alone. ADHD in women rarely looks like the stereotype. It often shows up as emotional intensity, mental overload, inconsistent energy, poor sleep, and cycles of burnout.',
    credentials: 'Nutritional Therapist, Naturopath and ADHD Coach. Supporting women and families for over 10 years.'
  },
  whoFor: [
    'Feeling mentally overwhelmed even when life looks “under control”',
    'Struggling with consistency despite strong motivation',
    'Cycles of burnout, exhaustion, or emotional overload',
    'Difficulty focusing or completing tasks',
    'Worsening symptoms during hormonal shifts such as perimenopause',
    'Trying countless health strategies that never quite stick'
  ],
  whyDifferent: [
    {
      title: 'Flexible structure',
      text: 'Strategies that work with fluctuating energy and focus, rather than expecting perfect consistency.'
    },
    {
      title: 'Dopamine-friendly strategies',
      text: 'Because the issue is rarely willpower — it is how the brain regulates motivation and stimulation.'
    },
    {
      title: 'Root-cause focus',
      text: 'Looking beyond symptoms to understand how nutrition, hormones, digestion, sleep, and stress influence how your brain functions.'
    },
    {
      title: 'Hormone-aware',
      text: 'Supporting women through monthly hormonal fluctuations and life stages such as perimenopause and postpartum.'
    }
  ],
  areas: [
    {
      title: 'ADHD & focus',
      text: 'Understanding how nutrition, hormones, sleep and stress influence attention, motivation and emotional regulation.'
    },
    {
      title: 'Hormonal balance',
      text: 'Supporting PMS, PCOS, perimenopause and other hormonal changes that affect mood, energy and cognitive clarity.'
    },
    {
      title: 'Gut health & digestion',
      text: 'Addressing digestive symptoms, inflammation and nutrient absorption that influence both physical and mental wellbeing.'
    },
    {
      title: 'Stress & nervous system',
      text: 'Helping the body move out of chronic stress patterns that contribute to burnout, fatigue and emotional overwhelm.'
    },
    {
      title: 'Children & family health',
      text: 'Supporting families navigating ADHD traits, digestion, sleep and emotional regulation in children.'
    }
  ]
}

export const programmes: Programme[] = [
  {
    name: 'Foundations',
    eyebrow: 'Foundational support',
    subtitle: 'Foundational support — clear direction, space to implement',
    summary: 'A clear roadmap with light support. Expert input, a personalised plan, and space to implement at your own pace.',
    detail: [
      "Foundations gives you expert input, a clear plan, and the space to put it into practice at your own pace. You’ll leave your initial consultation with a solid roadmap and clear priorities, supported by two follow-up sessions to review progress, adjust as needed, and keep things moving.",
      "This is a good fit if you prefer to work more independently between sessions and don’t need frequent check-ins to stay on track."
    ],
    cadence: '1 initial consultation + 2 follow-ups over 3 months',
    price: '£650',
    investment: 'Investment: £650 (3 months)',
    paymentNote: 'Payment plans available',
    includes: [
      'Initial consultation, 90 minutes',
      '2 follow-up sessions over 3 months',
      'Email support between sessions',
      'Personalised nutrition and supplement plan',
      'Access to resources and recipes'
    ],
    bestFor: [
      'You want a clear plan and expert guidance to get started',
      'You prefer space to implement changes at your own pace',
      "You’re self-motivated and work well with lighter check-ins",
      'You want expert input without a high-frequency commitment'
    ]
  },
  {
    name: 'Rebalance',
    eyebrow: 'Steady support',
    subtitle: 'Steady support — regular rhythm, room to adapt',
    summary: 'Regular guidance and accountability every 2–3 weeks to help changes stick without becoming overwhelming.',
    detail: [
      'Rebalance offers consistent check-ins every 2–3 weeks — enough time to implement changes between sessions, with regular touchpoints to review what’s working, adjust the plan, and keep momentum going without feeling overwhelmed.',
      'This is a good fit if you benefit from regular accountability and a steady rhythm, but don’t need weekly sessions to stay on track.'
    ],
    cadence: '1 initial consultation + 4 follow-ups over 3 months',
    price: '£895',
    investment: 'Investment: £895 (3 months)',
    paymentNote: 'Payment plans available',
    featured: true,
    includes: [
      'Initial consultation, 90 minutes',
      '4 follow-up sessions over 3 months (every 2–3 weeks)',
      'Email support between sessions',
      'Personalised nutrition and supplement plan',
      'Plan adjustments as your needs evolve',
      'Access to resources, recipes, and meal planning tools'
    ],
    bestFor: [
      'You do well with a regular check-in rhythm',
      'You want ongoing support without weekly sessions',
      'You benefit from accountability to keep momentum going',
      'You want space between sessions to implement and reflect'
    ]
  },
  {
    name: 'Restore',
    eyebrow: 'Closer support',
    subtitle: 'Closer support — fortnightly rhythm, more room to explore',
    summary: 'Fortnightly support with more room to explore long-standing patterns, multiple symptoms and shifting priorities.',
    detail: [
      'Restore offers fortnightly sessions — more frequent than Rebalance, with enough regularity to review, adjust, and build momentum at a closer pace. With more regular touchpoints, we can respond to what’s shifting and keep refining your plan as you go.',
      'If you’re navigating several areas at once, have a longer health history to work through, or simply know you do better with less time between sessions — this rhythm is likely the right fit. Not because your situation is more serious, but because more ground to cover benefits from more frequent time together.'
    ],
    cadence: '1 initial consultation + 6 follow-ups over 3 months',
    price: '£1,095',
    investment: 'Investment: £1,095 (3 months)',
    paymentNote: 'Payment plans available',
    includes: [
      'Initial consultation, 90 minutes',
      '6 follow-up sessions over 3 months (every 2 weeks)',
      'Priority email support between sessions',
      'Personalised nutrition and supplement plan',
      'Functional testing recommendations and interpretation',
      'More frequent plan refinements',
      'Access to all resources, recipes, and tools'
    ],
    bestFor: [
      'You prefer fortnightly check-ins over longer gaps between sessions',
      'You’re working through multiple areas and want room to cover them properly',
      'You want to adjust and refine your plan regularly as things shift',
      'You have a longer health history and want time to explore it at a steady pace'
    ]
  },
  {
    name: 'Anchor',
    eyebrow: 'High-touch support',
    subtitle: 'High-touch support — weekly structure, maximum consistency',
    summary: 'The most supportive programme for burnout, transitions or periods where weekly structure helps you follow through.',
    detail: [
      'Anchor is my most supportive programme, designed for women who do best with close, consistent guidance — particularly during periods of high stress, burnout, significant life change, or when you’re feeling depleted and need more structure to stay on track.',
      'Weekly sessions provide clarity, continuity, and a steady focus each week, so progress feels manageable rather than overwhelming. If you tend to lose momentum between appointments or know that weekly accountability is what helps you follow through — this is the right fit.'
    ],
    cadence: '1 initial consultation + 8 follow-ups over 3 months',
    price: '£1,495',
    investment: 'Investment: £1,495 (3 months)',
    paymentNote: 'Payment plans available',
    includes: [
      'Initial consultation, 90 minutes',
      '8 follow-up sessions over 3 months (weekly, then bi-weekly)',
      'Priority messaging support',
      'Personalised nutrition and supplement plan',
      'Functional testing recommendations and interpretation',
      'Weekly focus and clear structure',
      'Access to all resources, recipes, and tools',
      'Flexible scheduling to match your needs'
    ],
    bestFor: [
      'You thrive with weekly structure and close accountability',
      'You tend to lose momentum between appointments and want frequent touchpoints',
      'You’re navigating burnout, high stress, or a significant life transition',
      'You feel depleted and want consistent support to rebuild stability',
      'You want the highest level of follow-through support available'
    ]
  },
  {
    name: 'Sustain',
    eyebrow: 'Monthly rolling support',
    subtitle: 'Ongoing support after completing a core programme',
    summary: 'Ongoing monthly support after completing a core programme, helping you maintain progress as life changes.',
    detail: [
      'Making changes is one thing. Maintaining them as life evolves, stress fluctuates, and energy dips — that’s often the harder part.',
      'Sustain provides a steady monthly rhythm to help you protect what you’ve built, refine what’s working, and respond to new challenges without feeling like you’re starting from scratch.'
    ],
    cadence: '1 nutrition session + 1 coaching session each month',
    price: '£225/month',
    investment: 'Investment: £225/month (rolling)',
    paymentNote: 'Available by invitation after completing a core programme',
    includes: [
      '1 Nutrition session (45 minutes) — review energy, sleep, digestion, hormones, and symptoms; adjust nutrition plan and supplements as needed',
      '1 Coaching session (30 minutes) — practical support with routines, follow-through, emotional regulation, and consistency, tailored to your current demands',
      'Ongoing plan refinements to keep support aligned with your current needs',
      'Email support between sessions for questions, clarification, or brief check-ins'
    ],
    bestFor: [
      'You find consistency easier with regular check-ins',
      'You want accountability without pressure',
      'You’re navigating changing life, work, or hormonal demands',
      'You value ongoing professional support to stay on track'
    ]
  }
]

export const faqs: Faq[] = [
  {
    question: 'Do I need an ADHD diagnosis to work with you?',
    answer: [
      { type: 'p', text: 'No. You don’t need a formal diagnosis to benefit from my programmes.' },
      { type: 'p', text: 'Many women come to me because they recognise ADHD traits in themselves — difficulties with focus, emotional regulation, overwhelm, or consistency — even if they haven’t been formally diagnosed. Others are newly diagnosed and unsure what to do next.' },
      { type: 'p', text: 'What matters is that you recognize yourself in the struggles—and you\'re ready for support that actually fits how your brain works. My work supports the underlying patterns commonly seen in ADHD, so it can be helpful whether you have a diagnosis or not.' }
    ]
  },
  {
    question: 'Is this suitable if I have other health conditions (PCOS, anxiety, IBS, perimenopause)?',
    answer: [
      { type: 'p', text: 'Yes. Many women with ADHD also experience other conditions, and these are often interconnected.' },
      { type: 'p', text: 'I regularly support women with ADHD alongside:' },
      {
        type: 'ul',
        items: [
          'hormonal imbalances (including PCOS and perimenopause)',
          'anxiety and low mood',
          'digestive issues such as IBS',
          'fatigue and burnout',
          'weight regulation challenges'
        ]
      },
      { type: 'p', text: 'My approach looks at the whole picture rather than treating symptoms in isolation.' }
    ]
  },
  {
    question: 'Can you help my child with ADHD?',
    answer: [
      { type: 'p', text: 'Yes. I work with families, offering gentle, evidence-informed support for children and teens around gut health, focus, emotional regulation, sleep, and nutrition—always in an age-appropriate, realistic way. Where it makes sense, I take a family-wide approach, since ADHD rarely exists in isolation.' }
    ]
  },
  {
    question: "I've tried nutrition advice before and it didn't help. How is this different?",
    answer: [
      { type: 'p', text: "Most nutrition advice wasn't designed for ADHD brains. Standard protocols assume consistent energy, strong executive function, and the ability to follow rigid plans. My approach accounts for dopamine-seeking behaviour, inconsistency, all-or-nothing thinking, and emotional eating—the real challenges ADHD people face. That's the difference." }
    ]
  },
  {
    question: 'Do you work with clients who are on ADHD medication?',
    answer: [
      { type: 'p', text: "Absolutely. Medication can be helpful for some people, and I take a balanced, non-judgmental view. Nutrition and lifestyle support help create the conditions where medication works better—and for some women, it's enough on its own to significantly improve symptoms." }
    ]
  },
  {
    question: "What if I can't afford your programmes?",
    answer: [
      { type: 'p', text: 'I understand that investment in health support can feel like a lot. If cost is a barrier, please reach out—I may be able to offer payment plans or suggest alternative options.' }
    ]
  },
  {
    question: 'Do you work virtually across the UK and abroad?',
    answer: [
      { type: 'p', text: "Yes. All consultations are delivered online via secure video call, so location isn't a barrier." }
    ]
  },
  {
    question: 'Do you offer in-person appointments?',
    answer: [
      { type: 'p', text: 'Most consultations are offered online, which many clients find flexible and easy to fit into busy lives. However, I understand that some people prefer face-to-face support.' },
      { type: 'p', text: 'I’m based in Notting Hill, and in-person appointments can be arranged by discussion, depending on availability and suitability.' }
    ]
  },
  {
    question: "What's the difference between you and a dietitian?",
    answer: [
      { type: 'p', text: 'Dietitians typically focus on clinical nutrition for specific medical conditions (diabetes, kidney disease, etc.). Nutritional therapists take a whole-body, root-cause approach—looking at how nutrition, digestion, hormones, stress, and lifestyle interact to influence health. I also bring in health coaching, ADHD-specific strategies, and naturopathic principles.' }
    ]
  },
  {
    question: 'What’s the difference between nutrition therapy and health coaching?',
    answer: [
      { type: 'p', text: 'Nutrition therapy focuses on what your body needs — food, nutrients, supplements, and physiological support.' },
      { type: 'p', text: 'Health coaching focuses on how to make changes stick — building routines, managing overwhelm, improving consistency, and working with ADHD tendencies rather than fighting them.' },
      { type: 'p', text: 'My programmes combine both. This means you receive evidence-based nutritional guidance and the practical support needed to implement it in real life.' }
    ]
  },
  {
    question: 'How quickly will I see results?',
    answer: [
      { type: 'p', text: "It depends on what we're addressing. Some changes—like blood sugar stability—can improve energy and focus within days. Others—like nutrient repletion or hormonal rebalancing—take weeks to months. The aim isn't quick fixes, but meaningful, lasting change." }
    ]
  },
  {
    question: 'Is this covered by insurance?',
    answer: [
      { type: 'p', text: 'Nutritional therapy and health coaching are not usually covered by insurance. Many clients view this work as an investment in long-term health, resilience, and symptom management.' }
    ]
  },
  {
    question: 'How do I know which programme is right for me?',
    answer: [
      { type: 'p', text: 'You don’t need to work that out on your own. During a free discovery call, we’ll talk through your goals, symptoms, and the level of support that would feel most helpful, and decide together what’s the best fit.' }
    ]
  },
  {
    question: 'How do I get started?',
    answer: [
      { type: 'p', text: 'The first step is usually to book a free discovery call, where we can talk through your goals, symptoms, and the level of support that would feel most helpful.' },
      { type: 'p', text: 'If you already know which programme is right for you, you’re welcome to go straight to the booking page and secure your place.' }
    ]
  }
]

export const resources = [
  {
    title: 'ADHD Symptom Tracker',
    type: 'Lead magnet',
    description: 'A simple tool to identify patterns in focus, energy, mood, sleep, hormones and food.'
  },
  {
    title: 'ADHD Mum Meal Kit',
    type: 'Lead magnet',
    description: 'Quick, realistic meal ideas for busy households and variable routines.'
  },
  {
    title: 'Is it ADHD or Perimenopause?',
    type: 'Guide',
    description: 'A gentle guide to understanding where ADHD symptoms and hormone changes can overlap.'
  },
  {
    title: 'Blog & notes',
    type: 'Articles',
    description: 'Newsletter-style posts about ADHD nutrition, hormones, digestion, nervous system support and family health.'
  }
]

export const testimonials = [
  {
    quote:
      'Working with Michele completely changed how I understand my ADHD. My energy is stable for the first time in years, and I finally feel like I am working with my brain instead of fighting it.',
    name: 'Sarah',
    detail: '38, placeholder testimonial'
  },
  {
    quote:
      'The support felt practical, compassionate and realistic. I stopped blaming myself and finally had steps I could follow even on busy weeks.',
    name: 'Client name',
    detail: 'placeholder testimonial'
  }
]
