import { NextSeo } from 'next-seo';
import siteMeta from '@/data/siteMeta'
import { SimpleLayout } from '@/components/SimpleLayout'
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

export default function Services() {
  return (
    <>
      <NextSeo
        title="Services - Marko Bodiroza"
        description={siteMeta.description}
        canonical="https://markobodiroza.com/services"
        openGraph={{
          url: 'https://markobodiroza.com/services',
          images: [
            {
              url: `https://og.markobodiroza.com/api/og?title=Services&desc=Things I use every day to get my work done.`,
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
        title="Let’s future-proof your business together."
        intro="Here’s a list of some of the services I offer:"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8">
          <div className="rounded-2xl border border-neutral-100 p-6 dark:border-neutral-700/40">
            <h3 className="dark:text-emerald-400">Next-gen marketing strategies</h3>
            <p> I keep you ahead of the competition by creating next-gen marketing strategies optimized for your industry.</p>
          </div>
          <div className="rounded-2xl border border-neutral-100 p-6 dark:border-neutral-700/40">
            <h3 className="dark:text-emerald-400">Advanced marketing consulting</h3>
            <p>Experience my advanced marketing consulting services, where I join your team for a period of time to learn, analyze, and provide you with rare business insights.</p>
          </div>
          <div className="rounded-2xl border border-neutral-100 p-6 dark:border-neutral-700/40">
            <h3 className="dark:text-emerald-400">Data analysis</h3>
            <p>I turn your raw data into actionable insights, guiding your strategic planning and fueling revenue growth.</p>
          </div>
          <div className="rounded-2xl border border-neutral-100 p-6 dark:border-neutral-700/40">
            <h3 className="dark:text-emerald-400">AI prompt engineering</h3>
            <p> Leverage the power of AI with me to create prompts tailored just for your business, product, or service.</p>
          </div>
          <div className="rounded-2xl border border-neutral-100 p-6 dark:border-neutral-700/40">
            <h3 className="dark:text-emerald-400">AI-powered forecasting</h3>
            <p>Try AI-powered forecasting to anticipate future trends and make data-informed decisions.</p>
          </div>
          <div className="rounded-2xl border border-neutral-100 p-6 dark:border-neutral-700/40">
            <h3 className="dark:text-emerald-400">Marketing & sales automation</h3>
            <p> I use automation to simplify your marketing and sales processes, making every interaction count.</p>
          </div>
          <div className="rounded-2xl border border-neutral-100 p-6 dark:border-neutral-700/40">
            <h3 className="dark:text-emerald-400">Advanced SEO</h3>
            <p>My SEO methods maximize your online visibility, ensuring you’re found first and rank fast.</p>
          </div>
          <div className="rounded-2xl border border-neutral-100 p-6 dark:border-neutral-700/40">
            <h3 className="dark:text-emerald-400">Schema & entity optimization</h3>
            <p>I'll enhance your website's discoverability by optimizing schema and entity markup, making it easily intelligible to search engines.</p>
          </div>
          <div className="rounded-2xl border border-neutral-100 p-6 dark:border-neutral-700/40">
            <h3 className="dark:text-emerald-400">High-intent content strategy</h3>
            <p>Rely on my high-intent content strategy to attract and convert your most valuable customers, capturing engaged audiences throughout their journey.</p>
          </div>

          <div className="rounded-2xl border border-neutral-100 p-6 dark:border-neutral-700/40">
            <h3 className="dark:text-emerald-400">Process mapping</h3>
            <p> Thorough process mapping methods unveil hidden opportunities to optimize your business operations.</p>
          </div>
          <div className="rounded-2xl border border-neutral-100 p-6 dark:border-neutral-700/40">
            <h3 className="dark:text-emerald-400">HubSpot audits</h3>
            <p> In-depth HubSpot portal audits that identify and unlock untapped potential within your CRM ecosystem</p>
          </div>
          <div className="rounded-2xl border border-neutral-100 p-6 dark:border-neutral-700/40">
            <h3 className="dark:text-emerald-400">Analytics and reporting</h3>
            <p>Unlock the story behind your data with insightful analytics and clear reporting, offering a holistic view of your marketing performance.</p>
          </div>
        </div>
        <h2 className="max-w-2xl font-bold">Ready for a major digital transformation?</h2>
        <p>Send me an email, and let's elevate your marketing.</p>
        <SocialLink
          href={`mailto:${siteMeta.author.email}`}
          icon={MailIcon}
          className="pt-8 mt-4 border-t border-neutral-100 dark:border-neutral-700/40"
        >
          {siteMeta.author.email}
        </SocialLink>
      </SimpleLayout>
    </>
  )
}
