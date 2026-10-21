// Page content. Kept apart from siteMeta so the header and footer, which
// load on every page, do not pull all of it into the shared bundle.
import logoNP from '@/images/logos/nplogo.svg'
import logoRTRK from '@/images/logos/rt.svg'
import logoNetInfo from '@/images/logos/netinfo.svg'
export const resume = [
  {
    company: 'New Perspective Marketing',
    title: 'Director of Marketing and Innovation',
    logo: logoNP,
    start: '2020',
    end: { label: 'Present', dateTime: new Date().getFullYear() },
    summary:
      'I lead marketing and innovation and run AI projects end to end: designing AI workflows, building automations and connecting the tools a team uses every day.',
  },
  {
    company: 'Independent Practice',
    title: 'Founder',
    monogram: 'MB',
    start: '2010',
    end: { label: 'Present', dateTime: new Date().getFullYear() },
    summary:
      'My own practice in digital strategy, SEO, web and design for clients, which today focuses on AI strategy and building AI systems.',
  },
  {
    company: 'RT-RK',
    title: 'Senior Web Developer',
    logo: logoRTRK,
    start: '2016',
    end: '2020',
    summary:
      'Designed and built websites, custom WordPress themes and plugins in HTML, PHP and React, with SEO built in from the start.',
  },
  {
    company: 'moxom studio',
    title: 'Web Development Specialist and Security Advisor',
    monogram: 'mx',
    start: '2014',
    end: '2019',
    summary:
      'Advised on front-end technology, marketing automation and web security, using data to guide development decisions.',
  },
  {
    company: 'NET Informatika',
    title: 'Web Developer and UX Designer',
    logo: logoNetInfo,
    start: '2012',
    end: '2016',
    summary:
      'Redesigned the NetCab app interface and built a reusable component system that sped up development across client projects.',
  },
]

export const services = [
  {
    title: 'AI Strategy and Roadmap',
    summary:
      'Where AI fits in your business, what to do first and how it pays off.',
    description:
      'I look at your goals, your team and your current work, then turn the AI opportunities into a prioritized plan. You know what to do first, what it takes and what it should change.',
    deliverables: [
      'Opportunities scored by value, risk and effort',
      'Quick wins and longer-term projects in a clear order',
      'Owners, tools and success measures for each step',
    ],
    goodFit: 'You know AI matters but have no plan for it yet.',
    package: 'audit',
  },
  {
    title: 'Process Analysis and Redesign',
    summary:
      'A clear map of how work really runs, redesigned with AI in the right places.',
    description:
      'I map how your team works today, where the hours go and which decisions need a person. Then we redesign the process so AI handles the volume and people keep the judgment calls.',
    deliverables: [
      'Interviews with the people doing the work',
      'A map of your current process and where time goes',
      'A redesigned process with AI built into the right steps',
    ],
    goodFit: 'Your team is busy, but it is not clear where the time goes.',
    package: 'audit',
  },
  {
    title: 'AI Systems and Automation',
    summary:
      'Working AI systems for your recurring work, built in the tools you already use.',
    description:
      'I build the AI workflows, agents and integrations behind your recurring work, from reporting and content to research and meeting follow-ups. That includes choosing the right tools and connecting them to your stack.',
    deliverables: [
      'Tool selection for your real use cases',
      'Workflows and automations built and tested on real work',
      'Documentation and a handover session',
    ],
    goodFit: 'One recurring process eats hours of your team’s week.',
    package: 'process-build',
  },
  {
    title: 'Team Enablement and Training',
    summary:
      'Hands-on training and shared setups that turn AI tools into team habits.',
    description:
      'Your team learns AI on its own tasks, not generic demos. We set up shared prompts, context and usage rules, so good results do not depend on one power user.',
    deliverables: [
      'Hands-on sessions built on your real work',
      'Shared prompt libraries, context and usage rules',
      'Recordings and reference guides your team keeps',
    ],
    goodFit: 'Your team has the tools but not the habits.',
    package: 'workshop',
  },
  {
    title: 'AI Search Visibility and AEO',
    summary:
      'Answer engine optimization (AEO): get your brand cited in ChatGPT, Google AI Overviews and other AI answers.',
    description:
      'Answer engine optimization (AEO) that helps your brand show up when buyers ask AI tools about your category. I track how you appear, audit your site and shape content and structure so AI tools can find and quote it.',
    deliverables: [
      'Tracking of how AI tools describe your brand',
      'An audit of your site for AI and search visibility',
      'Content and structured data fixes that get you cited',
    ],
    goodFit:
      'Buyers ask ChatGPT about your category and you are not in the answer.',
    package: 'advisory',
  },
  {
    title: 'Fractional AI Leadership',
    summary:
      'Ongoing strategic guidance while your team adopts AI, without a full-time hire.',
    description:
      'I act as your part-time head of AI: setting priorities, making tool decisions, reviewing what gets built and keeping the roadmap current as your needs and the tools change.',
    deliverables: [
      'Regular strategy check-ins with your leadership',
      'Tool, vendor and build decisions reviewed',
      'A roadmap that stays current',
    ],
    goodFit: 'You are rolling out AI and want senior guidance on call.',
    package: 'advisory',
  },
]

export const processSteps = [
  {
    title: '1. Understand the Work',
    note: 'where the time goes',
    description:
      'I start with your team’s recurring work, tools and data, and with the decisions that need a person.',
    detail:
      'We talk to the people doing the work, look at the tools and data you already have and map where the hours go. I also note which decisions must stay with a person, so AI never takes over something it should not.',
    outcome: 'A clear map of how the work runs today',
  },
  {
    title: '2. Plan the Roadmap',
    note: 'scored and ordered',
    description:
      'We pick the highest-value opportunities and turn them into a roadmap with clear steps and owners.',
    detail:
      'Every opportunity gets scored by time saved, risk and effort. We sort them into quick wins and longer projects, and give each one an owner, a tool and a next step.',
    outcome: 'A prioritized AI roadmap your team can act on',
  },
  {
    title: '3. Pilot With Real Work',
    note: 'one real workflow first',
    description:
      'We start with one workflow, test it on real tasks and fix what does not work before scaling.',
    detail:
      'We pick one workflow and run it on real tasks with the people who will use it every day. Whatever breaks or feels clumsy gets fixed before anything scales.',
    outcome: 'One working workflow, tested on real tasks',
  },
  {
    title: '4. Roll Out and Train',
    note: 'the whole team, with guides',
    description:
      'Your team gets hands-on training, simple guides and clear rules for using AI.',
    detail:
      'The workflow goes to the whole team with hands-on training, start-here guides and simple rules for what AI can and cannot touch. People learn on their own work, not on generic demos.',
    outcome: 'A trained team and guides they can come back to',
  },
  {
    title: '5. Review and Refine',
    note: 'keep, cut, repeat',
    description:
      'We look at what changed, improve what works and drop what nobody uses.',
    detail:
      'We look at what changed, keep what works and retire what nobody uses. Then we pick the next item from the roadmap, so the system keeps getting better instead of going stale.',
    outcome: 'A system that keeps improving after launch',
  },
]

// The short list shown first on About; the full list sits behind a toggle
export const coreTools = [
  'ChatGPT',
  'Claude',
  'Gemini',
  'Perplexity',
  'NotebookLM',
  'Zapier',
  'Make',
  'n8n',
  'HubSpot',
  'Notion',
]

export const tools = [
  {
    category: 'AI',
    items: [
      'ChatGPT',
      'Claude',
      'Gemini',
      'Perplexity',
      'Grok',
      'DeepSeek',
      'Mistral',
      'NotebookLM',
      'Claude Code',
      'Cursor',
      'Lovable',
      'Midjourney',
      'Runway',
      'ElevenLabs',
      'HeyGen',
    ],
  },
  {
    category: 'Automation',
    items: [
      'Zapier',
      'Make',
      'n8n',
      'Power Automate',
      'HubSpot Workflows',
      'MCP (Model Context Protocol)',
      'Python',
      'Google Apps Script',
    ],
  },
  {
    category: 'Marketing and Data',
    items: [
      'HubSpot',
      'Google Analytics 4',
      'Google Search Console',
      'Semrush',
      'Ahrefs',
      'Databox',
      'Screaming Frog',
      'Lucky Orange',
      'Apollo',
    ],
  },
  {
    category: 'Work Management',
    items: [
      'Notion',
      'Asana',
      'ClickUp',
      'Monday.com',
      'Jira',
      'Confluence',
      'Trello',
      'Basecamp',
      'Airtable',
      'Slack',
      'Google Workspace',
      'Avoma',
    ],
  },
]

export const hourlyRate = {
  price: 175,
  currency: 'USD',
  description:
    'For advisory calls, second opinions and smaller requests that do not need a full package.',
}

export const pricingPackages = [
  {
    name: 'AI Audit and Roadmap',
    slug: 'audit',
    question: 'Where should AI start in our business?',
    theme: 'brand',
    bestFor: 'You know AI matters but not where it fits in your work.',
    price: 4000,
    unit: 'per project',
    description:
      'The best place to start. I find where AI fits in your team’s work and give you a clear, prioritized plan to act on.',
    includes: [
      'Kickoff call to agree on goals and scope',
      'Interviews with key people on your team',
      'Review of your current processes, tools and data',
      'Map of where time goes and which tasks AI can take on',
      'Prioritized roadmap of quick wins and longer-term projects',
      'Tool recommendations and AI usage rules',
      'Written report and a walkthrough session with your team',
    ],
  },
  {
    name: 'Team Workshop',
    slug: 'workshop',
    question: 'How do we get our team using AI well?',
    theme: 'citron',
    bestFor: 'Your team has AI tools but not the habits to use them well.',
    price: 3500,
    unit: 'per day',
    description:
      'Hands-on AI training built around your team’s real work, so people leave with skills they use the next day.',
    includes: [
      'Prep call to learn your team, tools and goals',
      'Agenda tailored to your team’s roles and skill levels',
      'Hands-on practice on your own tasks and documents',
      'Shared prompt library for the topics covered',
      'Recording of the session',
      'Reference guides your team keeps',
      'Follow-up Q&A session after the workshop',
    ],
  },
  {
    name: 'AI Process Build',
    slug: 'process-build',
    question: 'Can AI take this recurring process off our plate?',
    theme: 'night',
    bestFor: 'One recurring process is eating hours of your team’s week.',
    price: 8000,
    unit: 'per process',
    description:
      'A complete AI-powered process for recurring work, such as monthly reporting, content production or client onboarding. I map how it runs today, rebuild it with AI and hand it over ready to run.',
    includes: [
      'Mapping of the current process, steps and owners',
      'Process redesign with AI built into the right steps',
      'Build and setup in your tools: prompts, templates, automations and integrations',
      'Testing on real work with your team before rollout',
      'Step-by-step documentation and process guides',
      'Training for the people who run the process',
      'Handover session and support after launch',
    ],
  },
  {
    name: 'Monthly Advisory',
    slug: 'advisory',
    term: '3-month minimum, then month to month',
    question: 'Who keeps our AI work on track month to month?',
    theme: 'paper',
    bestFor: 'You are already rolling out AI and want a steady guide.',
    price: 3000,
    unit: 'per month',
    description:
      'Ongoing guidance while your team adopts AI, with time to review and improve what you build.',
    includes: [
      'Regular check-ins with your team',
      'Email support between sessions',
      'Reviews of new tools, processes and AI output',
      'Help prioritizing what to build next',
      'Roadmap updates as your needs change',
      'Guidance on AI usage rules and team adoption',
    ],
  },
]

export const faqs = [
  {
    question: 'How long does a project take?',
    answer:
      'An AI Audit and Roadmap takes 4 to 6 weeks from kickoff to the final walkthrough. An AI Process Build takes 6 to 10 weeks per process, from mapping to handover. Workshops are booked by the day, with a prep call beforehand. Monthly Advisory starts with a 3-month minimum and then continues month to month.',
  },
  {
    question: 'What exactly is in scope?',
    answer:
      'Each package lists what is included. Before any work starts, I confirm the scope, timeline and price in writing.',
  },
  {
    question: 'What if the scope changes once we start?',
    answer:
      'It happens, and that is fine. We agree on the change, its timeline and its cost before the work continues. No surprise invoices.',
  },
  {
    question: 'What do you need from our team?',
    answer:
      'Time with the people who do the work, access to the tools involved and one person on your side who owns the project. I handle the rest.',
  },
  {
    question: 'Where should we start?',
    answer:
      'Most teams start with the AI Audit and Roadmap. It shows where AI will make the biggest difference, and the roadmap tells you which package, if any, to do next. Nothing locks you into a second project.',
  },
  {
    question: 'Which AI tools do you work with?',
    answer:
      'Whatever fits your team and your work: ChatGPT, Claude, Gemini, Perplexity and the automation tools you already use. I am not tied to one vendor.',
  },
  {
    question: 'What currency are prices in?',
    answer: 'All prices are in US dollars.',
  },
]
