import Head from 'next/head'
import { generateDefaultSeo, generateNextSeo } from 'next-seo/pages'

// next-seo 7 dropped its Pages Router components and only exports the tag
// generators, so these wrap them in <Head> with the same props as before
export function DefaultSeo(props) {
  return <Head>{generateDefaultSeo(props)}</Head>
}

export function NextSeo(props) {
  return <Head>{generateNextSeo(props)}</Head>
}
