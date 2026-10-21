import Head from 'next/head'

export function JsonLd({ id, data }) {
  return (
    <Head>
      <script
        key={`jsonld-${id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({ '@context': 'https://schema.org', ...data }),
        }}
      />
    </Head>
  )
}
