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
        className="flex text-sm font-medium transition group text-slate-800 hover:text-emerald-500 dark:text-slate-200 dark:hover:text-emerald-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-slate-500 group-hover:fill-emerald-500" />
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
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover aspect-square rotate-3 rounded-2xl bg-slate-100 dark:bg-slate-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-5xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-5xl">
              Hello. Learn more about me.
            </h1>
            <div className="mt-6 text-lg prose space-y-7 dark:prose-invert text-slate-700 dark:text-slate-400">
              <p>
                I'm Marko Bodiroza, a marketing strategist, AI engineer, and SEO expert. I've repeatedly broken new ground in digital marketing for over a decade. I understand how optimized, human-centric content can fuel business growth.
              </p>
              <p>
              By blending my various expertise areas and creative outputs, I'm uniquely positioned to carry your business to the future. Discover the powerful difference I can bring to your marketing efforts.
              </p>
              <p>
              Born and raised in Novi Sad, Serbia, I studied at the University of Novi Sad, Faculty of Technical Sciences, where I graduated with honors in Graphic Engineering and Design. After that, I worked in software engineering and web design for over ten years. However, my primary focus shifted towards marketing, SEO and automation during the last couple of years.</p>
              <p>Additionaly, I'm a skilled UI & graphic designer, sustainability advocate, and proud mentor who loves helping others realize their ideas. I speak English, Serbian, Italian, and I'm currently learning Mandarin.</p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href={siteMeta.author.twitter} icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href={siteMeta.author.instagram} icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href={siteMeta.author.linkedin} icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${siteMeta.author.email}`}
                icon={MailIcon}
                className="pt-8 mt-8 border-t border-slate-100 dark:border-slate-700/40"
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
