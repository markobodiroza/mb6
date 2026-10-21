import siteMeta from '@/data/siteMeta'

export function absoluteUrl(path = '/') {
  return new URL(path, siteMeta.siteUrl).toString()
}

export function ogImage({ title, description }) {
  let params = new URLSearchParams({ title, desc: description })

  return {
    url: `https://og.markobodiroza.com/api/og?${params}`,
    width: 1200,
    height: 600,
    alt: title,
    type: 'image/jpeg',
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
  url: siteMeta.siteUrl,
  image: absoluteUrl('/favicon.png'),
  jobTitle: siteMeta.tagline,
  description: siteMeta.description,
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Faculty of Technical Sciences, University of Novi Sad',
  },
  knowsAbout: [
    'Artificial intelligence',
    'AI strategy',
    'AI training',
    'Process improvement',
    'Workflow automation',
    'Answer engine optimization',
    'Search engine optimization',
    'Marketing automation',
    'HubSpot',
    'Python',
  ],
  sameAs: [siteMeta.author.linkedin, siteMeta.author.twitter],
}
