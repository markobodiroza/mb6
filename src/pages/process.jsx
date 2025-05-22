import { NextSeo } from 'next-seo';
import { PageLayout } from '@/components/PageLayout'
import siteMeta from '@/data/siteMeta'
import clsx from 'clsx'
import Link from 'next/link'


function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-neutral-800 hover:text-emerald-500 dark:text-neutral-200 dark:hover:text-emerald-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-neutral-500 group-hover:fill-emerald-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}


function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}


export default function Process() {
  return (
    <>
      <NextSeo
        title="Process & How I Work - Marko Bodiroza"
        description="Navigating the digital world can seem confusing, so let me guide your transformation in 4 easy steps"
        canonical="https://markobodiroza.com/process"
        openGraph={{
          url: 'https://markobodiroza.com/process',
          images: [
            {
              url: `https://og.markobodiroza.com/api/og?title=Process&desc=Learn more about how I work with you.`,
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8">
          <div className="rounded-2xl border border-neutral-100 p-6 dark:border-neutral-700/40">
            <h2 className="dark:text-emerald-400">1. Insight gathering</h2>
            <p> A detailed analysis of your business, market, and industry.</p>
          </div>
          <div className="rounded-2xl border border-neutral-100 p-6 dark:border-neutral-700/40">
            <h2 className="dark:text-emerald-400">2. Strategy mapping</h2>
            <p> Data-informed planning leveraging powerful AI tools.</p>
          </div>
          <div className="rounded-2xl border border-neutral-100 p-6 dark:border-neutral-700/40">
            <h2 className="dark:text-emerald-400">3. Implementation</h2>
            <p>  Deploying cutting-edge techniques that align with your business goals.</p>
          </div>
          <div className="rounded-2xl border border-neutral-100 p-6 dark:border-neutral-700/40">
            <h2 className="dark:text-emerald-400">4. Data analysis and refinement</h2>
            <p> Continued enhancements to keep us ahead and maximize your ROI.</p>
          </div>
        </div>
        <h2 className="max-w-2xl font-bold">Ready for a major digital transformation?</h2>
        <p>Send me an email, and let's elevate your marketing.</p>
        <ul className="pt-8 mt-4 border-t border-neutral-100 dark:border-neutral-700/40">
          <SocialLink
            href={`mailto:${siteMeta.author.email}`}
            icon={MailIcon}
          >
            {siteMeta.author.email}
          </SocialLink>
        </ul>
      </PageLayout>
    </>
  )
}
