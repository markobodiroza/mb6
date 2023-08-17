import { NextSeo } from 'next-seo';
import { PageLayout } from '@/components/PageLayout'
import siteMeta from '@/data/siteMeta'



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
      </PageLayout>
    </>
  )
}
