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
  url: siteMeta.siteUrl,
  image: absoluteUrl(portraitImage.src),
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
