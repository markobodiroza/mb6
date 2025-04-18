import { NextSeo } from 'next-seo';
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import  siteMeta  from '@/data/siteMeta'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blog/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  const headline = 'Notes from the Frontline of AI and Digital Strategy.'
  const intro="My thoughts on Generative AI, digital marketing strategies, advanced SEO, sustainability, marketing automation, HubSpot, and more."

  return (
    <>
    <NextSeo
      title="Blog - Marko Bodiroza"
      description="My thoughts on Generative AI, digital marketing strategies, advanced SEO, sustainability, marketing automation, HubSpot, and more."
      canonical="https://markobodiroza.com/blog"
      openGraph={{
        url: 'https://markobodiroza.com/blog',
        images: [
          {
            url: `https://og.markobodiroza.com/api/og?title=Articles&desc=${headline}`,
            width: 1200,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          }
        ],
        siteName: 'markobodiroza.com',
      }}
    />
      <SimpleLayout
        title={headline}
        intro={intro}
      >
        <div className="md:border-l md:border-neutral-100 md:pl-6 md:dark:border-neutral-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
