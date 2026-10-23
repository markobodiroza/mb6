import siteMeta from '@/data/siteMeta'
import portraitImage from '@/images/marko-head.jpg'

export function absoluteUrl(path = '/') {
  return new URL(path, siteMeta.siteUrl).toString()
}

export function ogImage({ title, description }) {
  let params = new URLSearchParams({ title, desc: description })

  return {
    url: absoluteUrl(`/api/og?${params}`),
    width: 1200,
    height: 630,
    alt: title,
    type: 'image/png',
  }
}

export function pageOpenGraph({ path, title, description }) {
  return {
    url: absoluteUrl(path),
    images: [ogImage({ title, description })],
    siteName: 'markobodiroza.com',
  }
}

export const personSchema = {
  '@type': 'Person',
  '@id': absoluteUrl('/#person'),
  name: siteMeta.author.name,
  alternateName: 'Marko Bodiroža',
  url: siteMeta.siteUrl,
  image: absoluteUrl(portraitImage.src),
  jobTitle: siteMeta.tagline,
  description: siteMeta.description,
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Faculty of Technical Sciences, University of Novi Sad',
  },
  // The services from content.js, written out so this file (loaded on every
  // page) does not pull page content into the shared bundle
  knowsAbout: [
    'AI Strategy and Roadmap',
    'Process Analysis and Redesign',
    'AI Systems and Automation',
    'Team Enablement and Training',
    'AI Search Visibility and AEO',
    'Fractional AI Leadership',
    'Artificial intelligence',
    'Search engine optimization',
    'Marketing automation',
    'HubSpot',
    'Python',
  ],
  memberOf: { '@type': 'Organization', name: 'Serbian AI Society' },
  // Written out for the same reason as knowsAbout
  hasCredential: [
    ['Claude Certified Architect, Foundations', 'Anthropic'],
    ['Claude Code Partner Badge', 'Anthropic'],
    ['Generative AI Leader', 'Google Cloud'],
    ['AI Professional Certificate', 'Google'],
    ['Professional Data Engineer', 'Google Cloud'],
    ['Google Ads Search Certification', 'Google'],
    ['AI Expert', 'Section'],
    ['AI Proficiency', 'Section'],
    ['HubSpot Onboarding Accreditation', 'HubSpot'],
    ['Revenue Operations', 'HubSpot Academy'],
    ['Delivering Client Success', 'HubSpot Academy'],
    ['Contextual Marketing', 'HubSpot Academy'],
    ['Growth-Driven Design Agency', 'HubSpot Academy'],
    ['LinkedIn Certified Marketing Insider', 'LinkedIn'],
    ['LinkedIn Marketing Solutions Fundamentals', 'LinkedIn'],
    ['LinkedIn Content and Creative Design', 'LinkedIn'],
    ['LinkedIn Marketing Strategy', 'LinkedIn'],
    ['AI Readiness', 'Intel'],
    ['AI Cybersecurity', 'Cato Networks'],
  ].map(([name, issuer]) => ({
    '@type': 'EducationalOccupationalCredential',
    name,
    recognizedBy: { '@type': 'Organization', name: issuer },
  })),
  // Google already knows Marko as this Knowledge Graph entity; naming it here
  // ties the site to it, and every profile below corroborates it
  identifier: {
    '@type': 'PropertyValue',
    name: 'googleKgMID',
    value: '/g/11pf89037d',
  },
  sameAs: [
    'https://www.google.com/search?kgmid=/g/11pf89037d',
    siteMeta.author.linkedin,
    siteMeta.author.twitter,
    'https://medium.com/@markobodiroza',
    'https://novisadfacultytechnicalsciences.academia.edu/MarkoBodiro%C5%BEa',
    'https://www.youtube.com/@greennewperspective',
    'https://www.podchaser.com/creators/marko-bodiroza-107teks2BE',
    'https://www.crunchbase.com/person/marko-bodiro%C5%BEa',
    'https://muckrack.com/marko-bodiroza',
    'https://neuron.com/profile/5637877447/marko-bodiroza',
    'https://creativepool.com/markobodiroza',
    'https://www.pinterest.com/markobodiroza/',
  ],
}

// Breadcrumb trail from [name, path] pairs, starting at Home
export function breadcrumbSchema(trail) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [['Home', '/'], ...trail].map(([name, path], index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name,
      item: absoluteUrl(path),
    })),
  }
}
