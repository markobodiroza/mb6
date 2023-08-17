import Image from 'next/future/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'


import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'
import  siteMeta, {resume} from '@/data/siteMeta'
import { NextSeo } from 'next-seo';


function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-neutral-100 stroke-neutral-400 dark:fill-neutral-100/10 dark:stroke-neutral-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-neutral-400 dark:stroke-neutral-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-neutral-100 stroke-neutral-400 dark:fill-neutral-100/10 dark:stroke-neutral-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-neutral-400 dark:stroke-neutral-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/blog/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-neutral-500 transition group-hover:fill-neutral-700 dark:fill-neutral-400 dark:group-hover:fill-neutral-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-neutral-100 p-6 dark:border-neutral-700/40"
    >
      <h2 className="flex text-sm font-semibold text-neutral-900 dark:text-neutral-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Don't miss out</span>
      </h2>
      <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-neutral-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-neutral-800/5 placeholder:text-neutral-400 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 dark:border-neutral-700 dark:bg-neutral-700/[0.15] dark:text-neutral-200 dark:placeholder:text-neutral-500 dark:focus:border-emerald-400 dark:focus:ring-emerald-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume() {

  return (
    <div className="rounded-2xl border border-neutral-100 p-6 dark:border-neutral-700/40">
      <h2 className="flex text-sm font-semibold text-neutral-900 dark:text-neutral-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-neutral-800/5 ring-1 ring-neutral-900/5 dark:border dark:border-neutral-700/50 dark:bg-neutral-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-neutral-900 dark:text-neutral-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-neutral-500 dark:text-neutral-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-neutral-500 dark:text-neutral-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="https://linkedin.com/in/markobodiroza" variant="secondary" className="group mt-6 w-full">
               Connect with me on LinkedIn
        <ArrowDownIcon className="h-4 w-4 stroke-neutral-400 transition group-active:stroke-neutral-700 dark:group-hover:stroke-neutral-50 dark:group-active:stroke-neutral-50" />
      </Button>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
    <NextSeo
      title="Marko Bodiroza: Marketing Engineer, SEO Expert"
      description={siteMeta.description}
      canonical="https://markobodiroza.com/"
      openGraph={{
        url: 'https://markobodiroza.com',
        images: [
          {
            url: `https://og.markobodiroza.com/api/og?title=${siteMeta.title}&desc=${siteMeta.description}`,
            width: 1200,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          }
        ],
        siteName: 'markobodiroza.com',
      }}
    />
      <Container className="mt-9">
        <div className="max-w-2xl text-lg">
          <h1 className="text-5xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 sm:text-5xl">
           Helping innovative companies fuel growth with next-gen digital marketing.
          </h1>
          <p className="mt-6 prose dark:prose-invert">
           I'm Marko, a marketing strategist, AI engineer, and SEO expert. I build systems & create content that people want to engage with.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href={siteMeta.author.twitter}
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href={siteMeta.author.instagram}
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href={siteMeta.author.linkedin}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
