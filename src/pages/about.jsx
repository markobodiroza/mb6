import Image from 'next/future/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon
} from '@/components/SocialIcons'
import portraitImage from '@/images/marko-head.jpg'
import siteMeta from '@/data/siteMeta'
import { NextSeo } from 'next-seo';


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

export default function About() {
  return (
    <>
      <NextSeo
        title="About - Marko Bodiroza"
        description={siteMeta.description}
        canonical="https://markobodiroza.com/about"
        openGraph={{
          url: 'https://markobodiroza.com/about',
          images: [
            {
              url: `https://og.markobodiroza.com/api/og?title=About&desc=${siteMeta.description}`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            }
          ],
          siteName: 'markobodiroza.com',
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-xl">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover aspect-square rotate-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-5xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 sm:text-5xl">
             Get to know me better.
            </h1>
            <div className="mt-6 text-lg prose space-y-7 dark:prose-invert text-neutral-700 dark:text-neutral-400">
              <p>
                Hi there! I'm Marko Bodiroza. At the heart of digital marketing innovation for 14 years, I’ve pioneered strategies in AI, SEO, and web and content development. 
              </p>
              <p>
            As the Director of Marketing and Innovation at New Perspective, I blend my expertise in engineering, content, and design with a creative spark to propel our business and revenue growth .

              </p>
              <p>
             I'm passionate about creating optimized, personalized, human-centric content that drives results. Beyond the office, I produce the Green New Perspective Podcast, diving into how sustainability, technology, and marketing intersect.</p>
              <p>Born in Novi Sad, Serbia, I graduated with honors in Graphic Engineering and Design from the University of Novi Sad. Although my focus has recently shifted to marketing, AI, and automation, I also enjoy tackling UI/UX design challenges, coding in Python, and championing sustainability.
</p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={siteMeta.author.twitter} icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href={siteMeta.author.linkedin} icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${siteMeta.author.email}`}
                icon={MailIcon}
                className="pt-8 mt-8 border-t border-neutral-100 dark:border-neutral-700/40"
              >
                {siteMeta.author.email}
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
