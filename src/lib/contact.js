import siteMeta from '@/data/siteMeta'

export const contactTopics = [
  'AI Audit and Roadmap',
  'Team Workshop / AI Training',
  'AI Process Build',
  'Monthly Advisory',
  'Hourly Advisory',
  'Something Else',
]

export const budgetRanges = [
  'Hourly or under $2,000',
  '$2,000 to $5,000',
  '$5,000 to $10,000',
  '$10,000 to $25,000',
  '$25,000 or more',
  'Not sure yet',
]

export const proficiencyLevels = [
  {
    value: 1,
    label: 'Not Yet',
    description: 'The team does not use AI tools yet.',
  },
  {
    value: 2,
    label: 'Individual Use',
    description: 'A few people use AI tools on their own.',
  },
  {
    value: 3,
    label: 'Shared Workflows',
    description: 'Teams share AI workflows, prompts or usage rules.',
  },
  {
    value: 4,
    label: 'Connected to Business Systems',
    description: 'AI is connected to your CRM, project tools or other systems.',
  },
  {
    value: 5,
    label: 'Not Sure',
    description: 'That is fine. We can work it out on the call.',
  },
]

export function contactHref(topic) {
  return topic ? `/contact?topic=${encodeURIComponent(topic)}` : '/contact'
}

export function emailHref(subject, body) {
  let params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  let query = params.toString().replace(/\+/g, '%20')
  return `mailto:${siteMeta.author.email}${query ? `?${query}` : ''}`
}

export function bookingHref() {
  return siteMeta.bookingUrl ?? contactHref()
}

export function isExternal(href) {
  return /^https?:\/\//.test(href)
}
