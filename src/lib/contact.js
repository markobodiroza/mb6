import siteMeta from '@/data/siteMeta'

export const contactTopics = [
  'AI Audit and Roadmap',
  'Team Workshop',
  'AI Process Build',
  'Monthly Advisory',
  'Hourly Advisory',
  'Something Else',
]

export const budgetRanges = [
  'Hourly or under $3,000',
  '$3,000 to $5,000',
  '$5,000 to $10,000',
  '$10,000 to $25,000',
  '$25,000 or more',
  'Not sure yet',
]

export const proficiencyLevels = [
  {
    value: 1,
    label: 'Exploring',
    description: 'We have not really started with AI yet.',
  },
  {
    value: 2,
    label: 'Experimenting',
    description: 'A few people use AI tools on their own.',
  },
  {
    value: 3,
    label: 'Adopting',
    description: 'Several teams use AI, but without shared rules or setup.',
  },
  {
    value: 4,
    label: 'Integrating',
    description: 'AI is part of a few workflows, with some standards.',
  },
  {
    value: 5,
    label: 'AI-Forward',
    description: 'AI is built into how we work, with clear ownership.',
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
