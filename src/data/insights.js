// Summaries of articles Marko wrote. sourceUrl records where each original
// lives, for checking facts; it is not shown on the site. Statistics appear
// only where the original names a source.
export const insights = [
  {
    slug: 'b2b-marketing-trends-2027',
    title: '7 B2B Marketing Trends to Plan for in 2027',
    date: '2026-10-15',
    description:
      'Buyers build their shortlist earlier, often inside AI tools. Seven shifts to plan for in 2027 and what to do about each.',
    intro:
      'Most B2B buyers decide who makes the shortlist before sales ever hears from them, and more of that research now happens inside AI tools. In 2027 marketing has two jobs: get onto that shortlist and prove its impact in pipeline, not clicks.',
    sections: [
      {
        heading: 'AI Answers Shape the Shortlist',
        body: 'Buyers ask AI tools first and often never reach your site. Specific, plain-text details such as ratings, materials and applications are what get quoted. Research from 6sense found that nearly every deal went to a vendor that was already on the shortlist on day one.',
      },
      {
        heading: 'Buyers Pick a Favorite Early',
        body: 'By the time a prospect reaches out, they usually have a favorite. Give each role on the buying committee a strong asset of its own, offer pilots and ask in discovery which other vendors they considered and how they first heard of you.',
      },
      {
        heading: 'Proof Beats Volume',
        body: 'As AI content floods every channel, buyers check claims, often with a sales rep. One original data asset a year, named experts on flagship content and a validation kit for sales do more than another batch of posts.',
      },
      {
        heading: 'Budgets Answer to the CFO',
        body: 'With flat budgets and longer cycles, report pipeline influenced, deal velocity and win rate instead of lead volume. Fund AI only where it removes a named cost.',
      },
      {
        heading: 'Measure Without the Click',
        body: 'AI chats, peer conversations and private groups are invisible to tracking tags. Ask every lead how they heard of you, join that answer to CRM data and treat branded search as a demand signal.',
      },
      {
        heading: 'Test New Channels With a Holdout',
        body: 'ChatGPT ads are live but hard to target for B2B. Keep search and LinkedIn as the core, and run any test narrow, time-boxed and measured against pipeline.',
      },
      {
        heading: 'Match the Message to Cost and Claims Rules',
        body: 'Buyers under cost pressure want total cost, supply risk and payback, backed by numbers. Lead clean energy with economics, not subsidies. Check every environmental claim against its evidence: EU rules on generic green claims apply since September 2026, so get legal review for EU markets.',
      },
    ],
    nextSteps: [
      'Test the questions your buyers actually ask in AI tools and log the answers.',
      'Publish ungated spec and comparison pages, and make sure AI crawlers can reach them.',
      'Add a required “how did you hear about us” question to every form.',
      'Report pipeline influenced and win rate instead of lead volume.',
    ],
    sourceUrl: 'https://www.npws.net/blog/b2b-marketing-trends',
  },
  {
    slug: 'llm-seo-b2b-citations',
    title: 'LLM SEO: How B2B Brands Earn Citations in AI Answers',
    date: '2026-09-24',
    description:
      'Getting cited by AI answer engines builds on SEO instead of replacing it. What actually moves citations and how to track them.',
    intro:
      'LLM SEO, answer engine optimization (AEO) and generative engine optimization (GEO) describe overlapping work, so the label matters less than the practice. Brands get cited in AI answers mostly because their SEO foundations are solid, with a layer of structural content work on top.',
    sections: [
      {
        heading: 'Foundations Decide Who Is in the Pool',
        body: 'Crawlability, speed, topical authority and earned links decide whether your pages are candidates at all. Google’s AI Overviews lean heavily on top organic results, while chat assistants draw from a much wider set of sources. Blocking AI crawlers takes you out entirely.',
      },
      {
        heading: 'Structure Makes Content Quotable',
        body: 'Passages that stand on their own, with a clear definition, a specific number or a direct recommendation, are easy for AI systems to lift. Freshness matters more than it used to: recently updated pages get cited more often.',
      },
      {
        heading: 'Schema Is Hygiene, Not a Lever',
        body: 'Structured data helps machines parse a page, but a controlled test by Ahrefs found no significant citation lift from schema alone. A consistent description of your brand across the web is the better bet.',
      },
      {
        heading: 'Measure Citations Next to Pipeline',
        body: 'Track citations by query, engine and cited page, alongside impressions and branded search. Citations are a leading signal, not revenue.',
      },
    ],
    nextSteps: [
      'Rewrite the openings of your key pages as direct answers under 60 words.',
      'Use headings phrased the way buyers ask, with one clear answer per section.',
      'Baseline about 20 pipeline-relevant prompts and check them monthly.',
      'Fix at least one directory or partner listing that describes you wrongly.',
    ],
    sourceUrl: 'https://www.npws.net/blog/llm-seo-b2b-brands',
  },
  {
    slug: 'what-ai-replaces-at-your-agency',
    title: 'What AI Replaces at Your Agency, and What It Never Will',
    date: '2026-07-23',
    description:
      'AI takes over execution work. Strategy, positioning and accountability for pipeline stay human. How to judge an agency or an in-house team.',
    intro:
      'AI now handles much of the execution work agencies bill for: first drafts, ad variations, research synthesis, reporting and personalized outreach. What it cannot do is own the strategy and answer for the results.',
    sections: [
      {
        heading: 'Most AI Rollouts Fail at Integration',
        body: 'Companies treat AI as a tool purchase instead of an integration project. Research from MIT’s Project NANDA found that most enterprise generative AI pilots showed no measurable profit impact. The ones that worked redesigned workflows, assigned ownership and measured outcomes.',
      },
      {
        heading: 'Complex B2B Raises the Bar',
        body: 'Long cycles, technical products and buying committees need positioning, content and attribution that work as one system. AI speeds up each piece without connecting them, and generic output tells technical buyers you do not know their world.',
      },
      {
        heading: 'Buyers Research With AI and Decide With People',
        body: 'Buyers fact-check AI output and trust peers, reviews and independent experts more than vendor marketing. Specific, named proof now matters more than volume.',
      },
      {
        heading: 'What a Good Partner Looks Like',
        body: 'A partner worth paying for uses AI heavily, passes the efficiency on, puts senior people on positioning and accepts accountability for qualified pipeline instead of activity.',
      },
    ],
    nextSteps: [
      'Ask your agency how AI has changed its production.',
      'Ask what its senior people focus on now.',
      'Ask how it verifies AI-assisted work.',
      'Agree on the pipeline metrics it will be measured against.',
    ],
    sourceUrl: 'https://www.npws.net/blog/ai-b2b-agency',
  },
  {
    slug: 'audit-ai-crawler-access',
    title:
      'Is ChatGPT Blocked From Your Website? How to Audit AI Crawler Access',
    seoTitle: 'How to Audit AI Crawler Access on Your Website',
    date: '2026-06-18',
    description:
      'Many B2B sites block AI crawlers without knowing it. A five-step audit of robots.txt, your CDN and what bots actually see.',
    intro:
      'Plenty of B2B sites block AI crawlers by accident. The cause is usually an old robots.txt rule, a CDN security setting or pages that only render through JavaScript, not a deliberate decision.',
    sections: [
      {
        heading: 'Know Which Bot Does What',
        body: 'AI companies run separate bots. Training bots such as GPTBot collect content for models, while search and retrieval bots such as OAI-SearchBot and ChatGPT-User put pages into answers. Google works the same way: Googlebot powers Search and AI Overviews, while Google-Extended only covers Gemini training.',
      },
      {
        heading: 'Blocking the Wrong Bot Backfires',
        body: 'Block a search bot and you disappear from the answers you want to appear in. Block a training bot and you only opt out of training.',
      },
      {
        heading: 'Check All Three Gates',
        body: 'Robots.txt is one gate. Your CDN’s bot management is another, and it can override robots.txt. The third is what a bot actually receives: if content loads only through scripts, many crawlers see an empty page.',
      },
      {
        heading: 'Access Is Only the Start',
        body: 'Once crawlers can reach you, the content still has to be useful and quotable to earn a citation.',
      },
    ],
    nextSteps: [
      'Read your robots.txt for rules aimed at AI bots.',
      'Check your CDN for a setting that blocks AI bots.',
      'View the source of key pages and confirm the text is in the raw HTML.',
      'Look for AI bot user agents in last month’s server logs.',
      'Ask ChatGPT and Perplexity about your company and see what they cite.',
    ],
    sourceUrl: 'https://www.npws.net/blog/chatgpt-ai-crawler-website',
  },
  {
    slug: 'ai-readiness-check-for-manufacturers',
    title: 'AI Search Optimization for Manufacturers: AI Readiness Check',
    date: '2026-06-11',
    description:
      'AI chatbots shape supplier shortlists before buyers call. The signals that make manufacturers citable and the order to fix them in.',
    intro:
      'AI chatbots now shape supplier shortlists before a buyer contacts anyone, so manufacturers can lose deals they never knew existed. Getting cited follows predictable signals, and those signals can be checked and improved.',
    sections: [
      {
        heading: 'What AI Tools Look For',
        body: 'Crawler access, structured product data, machine-readable specifications, ungated content, language that matches how buyers ask and a way to measure your AI visibility.',
      },
      {
        heading: 'Quotable Beats Keyword-Stuffed',
        body: 'Specific statistics, named sources and direct quotes make content easy to cite. A Princeton study presented at KDD 2024 found that each of them improved visibility in generative answers.',
      },
      {
        heading: 'Your Website Is Not Enough',
        body: 'Trade press, directories, reviews and partner pages weigh heavily in AI answers. And citation is not the same as ranking: a page can rank well and still be skipped.',
      },
    ],
    nextSteps: [
      'Run 10 to 15 buyer-style prompts in ChatGPT, Perplexity and Google AI Overviews.',
      'Fix crawler access and machine readability first.',
      'Make your company description consistent across your site, LinkedIn and directories.',
      'Add real proof to your five highest-intent pages.',
      'Build authority through trade press, partners and reviews.',
    ],
    sourceUrl: 'https://www.npws.net/blog/ai-search-optimization-manufacturers',
  },
  {
    slug: 'website-findable-in-ai-search',
    title: 'What Your Website Needs to Be Findable in AI Search',
    date: '2026-05-14',
    description:
      'AI engines write one answer and cite a few sources. Five conditions that make a manufacturing website one of them.',
    intro:
      'Search engines rank ten links. AI engines write one answer and cite a handful of sources. For manufacturers the goal shifts from ranking for a keyword to being included in the answer, and the site is first judged by a machine.',
    sections: [
      {
        heading: 'Five Conditions for Being Citable',
        body: 'Crawler access, machine-readable structured data, direct and specific answers, outside corroboration and fresh update signals. Keyword-focused sites usually miss most of them.',
      },
      {
        heading: 'Make the Site Readable',
        body: 'Confirm AI search bots can reach key pages. Add JSON-LD for your company, products and specifications, keep sitemaps accurate and avoid spec tables built as images or content that only renders in JavaScript.',
      },
      {
        heading: 'Write Answers, Not Adjectives',
        body: 'Open with a clear answer, use headings that match buyer questions, replace adjectives with numbers and say plainly who each product is and is not for. Keep one page per topic.',
      },
      {
        heading: 'Build Trust Off Your Site',
        body: 'Accurate directory listings, trade press coverage, correct distributor pages and consistent company data all help AI tools trust what your site says. No tactic guarantees a citation, but these improve the odds.',
      },
    ],
    nextSteps: [
      'Audit AI crawler access.',
      'Fix how your company is described across the web.',
      'Rewrite your top ten commercial pages.',
      'Test buyer prompts monthly and track AI referrals.',
    ],
    sourceUrl: 'https://www.npws.net/blog/ai-search-for-manufacturers',
  },
]

// The fields lists and links need, so pages do not ship full articles
export function insightSummary({ slug, title, date, description }) {
  return { slug, title, date, description }
}
