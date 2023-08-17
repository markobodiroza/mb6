import { NextSeo } from 'next-seo';
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { PageLayout } from '@/components/PageLayout'
import siteMeta from '@/data/siteMeta'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Process() {
  return (
    <>
      <NextSeo
        title="Process & How I Work - Marko Bodiroza"
        description={siteMeta.description}
        canonical="https://markobodiroza.com/process"
        openGraph={{
          url: 'https://markobodiroza.com/process',
          images: [
            {
              url: `https://og.markobodiroza.com/api/og?title=Speaking&desc=Learn more about how I work with you.`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            }
          ],
          siteName: 'markobodiroza.com',
        }}
      />
      <PageLayout
        title="Embrace the future with the right marketing partner."
        intro="Navigating the digital world can seem confusing, so let me guide your transformation in 4 easy steps."
      >
        <h2>1. Insight gathering</h2>
        <p>
        A detailed analysis of your business, market, and industry.
        </p>
        <h2>2. Strategy mapping</h2>
        <p>
        Data-informed planning leveraging powerful AI tools.
        </p>
        <h2>3. Implementation</h2>
        <p>
        Deploying cutting-edge techniques that align with your business goals.
        </p>
        <h2>4. Data analysis and refinement</h2>
        <p>
        Continued enhancements to keep us ahead and maximize your ROI.
        </p>
        <p>Start our journey together today</p>
        <div className="space-y-20">
          <SpeakingSection title="Conferences">
            <Appearance
              href="https://www.youtube.com/watch?v=MzTcsI6tn-0"
              title="Code Like the Go Team"
              description="Tips, tricks, and best practices for writing Go code that's idiomatic, readable, and maintainable."
              event="GopherCon Russia 2018"
              cta="Watch video"
            />
            <Appearance
              href="https://www.youtube.com/watch?v=mxlJqrVSalY"
              title="Bringing Go to the Enterprise"
              description="In this talk I'll share my unique experiences as a trainer and author bringing Go to enterprise companies. We'll talk about what works well, what needs improvement, and what we can do as a community to foster Go adoption in more companies. In 2016 I quit my job and set out to train the world on how to use Go and Kubernetes. Over the course of the last 18 months I've learned a lot of things about Go, and I want to share them with you in this talk."
              event="Golang UK Conference 2017"
              cta="Watch video"
            />
          </SpeakingSection>
          <SpeakingSection title="Podcasts">
            <Appearance
              href="https://popcast-d9f7b6dc.simplecast.com/episodes/episode-76-go-roadhouse-with-microsofts-brian-ketelsen"
              title="

              Episode 76 - GO Roadhouse with Microsoft's Marko Bodiroza"
              description="Go, Guitars, Roadhouse, and so much more with Dan Papandrea."
              event="The POPCAST, July 7, 2021"
              cta="Listen to podcast"
            />

          </SpeakingSection>
        </div>
      </PageLayout>
    </>
  )
}
