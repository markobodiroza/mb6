import siteMeta from '@/data/siteMeta'
import { ogImage } from '@/lib/seo'

const defaultTitle = `${siteMeta.title}: ${siteMeta.tagline}`

const config = {
  defaultTitle,
  description: siteMeta.metaDescription,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteMeta.siteUrl}/`,
    siteName: 'markobodiroza.com',
    images: [
      ogImage({ title: defaultTitle, description: siteMeta.metaDescription }),
    ],
  },
  twitter: {
    handle: '@markobodiroza',
    site: '@markobodiroza',
    cardType: 'summary_large_image',
  },
}

export default config
