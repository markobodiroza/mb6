import { NextSeo } from 'next-seo';
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import  siteMeta from '@/data/siteMeta'
import { Prose } from '@/components/Prose'

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
      title="Process - Marko Bodiroza"
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
      <SimpleLayout
        title="Learn more about how I work with you."
        intro="Over the years, I have perfected my work process to allow me to go from first meeting to working prototypes &
        SEO wins faster than most think is possible."
      >
      <Prose className="mt-8">
      <h2>My process for a typical project.</h2>
      <p>
        Over the years, I have perfected my work process to allow me to go from first meeting to working prototypes &
        SEO wins faster than most think is possible.{" "}
      </p>
      <p>
        When you hire me, you hire an extended member of your digital marketing team. I work directly with you & the
        team every step of the way to grow a valuable audience and bullet-proof digital content. My goal as an SEO
        Specialist is to provide you with the best advice, the best tools, and the most efficient digital strategy
        unique to your business and its customers.
      </p>
      <p>The goal of this is to grow your organic search traffic and, ultimately, your business.</p>
      <p>Whether it’s project work, ad-hoc consultancy, or fully embedded service, my clients always get:</p>
      <ul>
        <li>Dedicated, one on one consultation</li>
        <li>Transparent and clear communication</li>
        <li>Automated performance tracking & reporting</li>
        <li>Clear Roadmap with task management tracking</li>
        <li>A focus on valuable and lasting results</li>
        <li>A “Stop-working” policy (Continue-working anytime)</li>
      </ul>

      <h3>Part 1: Discovery & Introduction</h3>
      <p>
        First, I want to know about you and your company. What problems are you trying to solve? What do you already
        have in place? At the same time, you to get to know me and how I work. My main goal here is to understand:
      </p>
      <ul>
        <li>Your current digital marketing activities</li>
        <li>Your main competitors </li>
        <li>What are your growth goals?</li>
        <li>The challenges you have with boosting your online presence</li>
        <li>Your approximate budget</li>
        <li>Your technology stack & legacy tech difficulties</li>
        <li>Your core team structure & resources</li>
      </ul>

      <h3>Part 2: Performance auditing</h3>
      <p>
        A solid, granular performance audit gives insight and data required to form a solid digital strategy. Extensive
        audits ensure there are no unpleasant surprises later on.
      </p>
      <p>
        I conduct over 250+ unique checks to discover accessibility, architectural, content, and UX issues until every
        corner of your website and user journey is covered.
      </p>
      <p>Here’s a part of the list of things I’ll examine to give you an idea of this phase:</p>
      <ul>
        <li>Render blocking JavaScript and CSS</li>
        <li>Robots.txt directives</li>
        <li>URL Parameters handling</li>
        <li>Canonical strategy</li>
        <li>Internal linking strategy</li>
        <li>Keyword targeting</li>
        <li>Backlinks profile</li>
      </ul>
      <p>
        I prioritize each issue by severity, the effort to fix it, and overall business impact. All of the problems
        found are tracked, quantified, and are used to measure performance throughout the campaign.
      </p>

      <h3>Part 3: Strategy proposal</h3>
      <p>
        Phase 1 & 2 equip me with the insight needed to create a quality strategy. Phase three focuses that insight into
        a campaign plan.
      </p>
      <p>
        I’ll allocate your budget more accurately and talk you through phase 1 & 2 findings to help set your
        expectations for the next six months of delivery. As the strategy develops and we begin to see results, I will
        continuously develop the direction to maximize the campaign’s strength.
      </p>

      <h3>Part 4: Execution & consultancy</h3>
      <p>
        In this phase, I will provide you with a timeline for each deliverable from the proposal. I will produce all of
        the work with plenty of handover support and consultancy to execute recommendations.
      </p>
      <p>
        As with the deliverables, I will also be monitoring your site as if it is my own with real-time tools, daily and
        weekly checks, and regular technical refreshing to ensure no new problems are holding us back.
      </p>
      <p> 
        Combining this with automated reporting dashboards and rank-tracking software, you will have total visibility of
        the site’s health, organic traffic performance, and actual impact on your business.
      </p>

      <h3>Part 5: Analyze, develop, scale & celebrate</h3>
      <p>
        Sometimes user search intent, competitor growth, and business landscape can all change so, and if you’ve got the
        best answer to a Google query one year, it may not be the case the following year.
      </p>

      <p>
        The data obtained following campaign execution provides good insight into bigger and better growth strategies
        and opportunities. As your firm grows, so should your SEO efforts. In other words, If it’s working, I’ll keep
        doing it. If not, I’ll find out why and adjust my method.
      </p>
      </Prose>
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
      </SimpleLayout>
    </>
  )
}
