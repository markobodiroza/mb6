import { NextSeo } from 'next-seo';
import  siteMeta from '@/data/siteMeta'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
    <NextSeo
      title="Uses - Marko Bodiroza"
      description={siteMeta.description}
      canonical="https://markobodiroza.com/uses"
      openGraph={{
        url: 'https://markobodiroza.com/uses',
        images: [
          {
            url: `https://og.markobodiroza.com/api/og?title=Uses&desc=Things I use every day to get my work done.`,
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
        title="Let’s future-proof your business"
        intro="Here’s a list of some of the services I offer:"
      >
        <div className="space-y-20">
          <ToolsSection title="Digital Marketing">
            <Tool title="Next-gen marketing strategies">
            I keep you ahead of the competition by creating next-gen marketing strategies optimized for your industry.
            </Tool>
            <Tool title="Advanced marketing consulting">
            Experience my advanced marketing consulting services, where I join your team for a period of time to learn, analyze, and provide you with rare business insights.
            </Tool>
            <Tool title="Data analysis">
            I turn your raw data into actionable insights, guiding your strategic planning and fueling revenue growth.
            </Tool>
          </ToolsSection>
          <ToolsSection title="AI & automation">
            <Tool title="AI prompt engineering">
            Leverage the power of AI with me to create prompts tailored just for your business, product, or service.
            </Tool>
            <Tool title="AI-powered forecasting">
            Try AI-powered forecasting to anticipate future trends and make data-informed decisions.
            </Tool>
            <Tool title="Marketing & sales automation">
            I use automation to simplify your marketing and sales processes, making every interaction count.
            </Tool>
          </ToolsSection>
          <ToolsSection title="SEO">
            <Tool title="Advanced SEO">
            My SEO methods maximize your online visibility, ensuring you’re found first and rank fast.
            </Tool>
            <Tool title="Schema & entity optimization">
            I'll enhance your website's discoverability by optimizing schema and entity markup, making it easily intelligible to search engines.
            </Tool>
            <Tool title="High-Intent Content Strategy">
            Rely on my high-intent content strategy to attract and convert your most valuable customers, capturing engaged audiences throughout their journey.
            </Tool>
          </ToolsSection>
          <ToolsSection title="HubSpot & RevOps">
            <Tool title="Process mapping">
            Thorough process mapping methods unveil hidden opportunities to optimize your business operations.
            </Tool>
            <Tool title="HubSpot audits">
            In-depth HubSpot portal audits that identify and unlock untapped potential within your CRM ecosystem.
            </Tool>
            <Tool title="Analytics and reporting">
            Unlock the story behind your data with insightful analytics and clear reporting, offering a holistic view of your marketing performance.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
