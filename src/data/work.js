// Work examples. Clients stay anonymous; every number comes from Marko.
// Each diagram is a list of lanes; a lane is a row of steps read left to
// right. A step is one node, or { stack } for nodes that sit side by side
// at the same point (inputs that merge, or outputs a step fans out to).
// twoWay marks a connector that carries requests out and data back.
export const workExamples = [
  {
    slug: 'agency-ai-system',
    short: 'Agency AI System',
    client: 'B2B Marketing Agency',
    title: 'An AI System for a Whole Agency Team',
    summary:
      'Shared, tested AI skills for every department, with a review process nobody can skip.',
    situation:
      'A B2B marketing agency wanted every department using AI on real client work. Writing first drafts was the bottleneck. There was no shared way to build AI tools, check their quality or decide who approves them.',
    built: [
      'A shared library of AI skills for recurring work: copywriting, SEO audits, campaign builds, reporting and project scoping.',
      'Context files for each client, so every skill knows who the work is for.',
      'A four-gate review for every skill: draft, self-test, a test by someone who didn’t build it and final approval.',
      'A registry in the project tracker with each skill’s owner and status.',
      'A request form, start-here guides and hands-on training for each department.',
    ],
    changed: [
      'Each department works from a shared set of tested skills.',
      'No skill reaches the team until someone other than its builder has tested it.',
      'Every skill has an owner and a status in one place.',
      'AI writes the first drafts. People review them and make the calls.',
    ],
    tools: [
      'Claude',
      'Claude Code',
      'Claude plugins',
      'Confluence',
      'Jira',
      'Basecamp',
      'Zapier',
    ],
    diagram: [
      {
        label: 'How the Work Runs',
        steps: [
          {
            stack: [
              { title: 'Skill', note: 'How to do the work' },
              { title: 'Client Context', note: 'Who the work is for' },
            ],
          },
          { title: 'AI Writes the Draft', note: 'Same skill, any client' },
          {
            title: 'A Person Reviews and Decides',
            note: 'Nothing ships without it',
            highlight: true,
          },
          { title: 'Client-Ready Work' },
        ],
      },
      {
        label: 'How a Skill Goes Live',
        steps: [
          { title: 'Request Form' },
          { title: '1.\u00A0Draft' },
          { title: '2.\u00A0Self-Test' },
          { title: '3.\u00A0Independent Test', note: 'Not by the builder' },
          { title: '4.\u00A0Approval' },
          { title: 'Library and Registry', note: 'Owner and status' },
        ],
      },
    ],
  },
  {
    slug: 'content-pipeline',
    short: 'Content Pipeline',
    client: 'Large Content Agency',
    title: 'A Content Pipeline for Many Clients',
    summary:
      'AI agents research, brief, draft and stage content; one person reviews every piece.',
    situation:
      'A large agency produced content for many different clients. Every piece needed research, keyword research, AEO research, a brief and a draft before anyone could review it, and the work took a team of six.',
    built: [
      'Claude agents, plugins and skills for each stage of the work.',
      'Research, keyword research and AEO research for every piece.',
      'Briefs built from that research.',
      'Drafts written from the brief.',
      'Content staged and ready for review.',
    ],
    changed: [
      'Content that took a team of six now needs one reviewer.',
      'About $180,000 a year in team costs saved, based on about $3,000 a month for each of five roles.',
      'Every piece still goes through a person before it ships.',
    ],
    tools: ['Claude', 'Claude agents', 'Claude plugins', 'Claude skills'],
    diagram: [
      {
        label: 'Research and Brief',
        steps: [
          { title: 'Research' },
          { title: 'Keyword Research' },
          { title: 'AEO Research' },
          { title: 'Brief', note: 'Built from the research' },
        ],
      },
      {
        label: 'Draft and Review',
        steps: [
          { title: 'Draft', note: 'Written from the brief' },
          { title: 'Staging', note: 'Ready for review' },
          {
            title: 'One Reviewer',
            note: 'Approves every piece',
            highlight: true,
          },
        ],
      },
    ],
  },
  {
    slug: 'sales-follow-up',
    short: 'Sales Follow-Up',
    client: 'B2B Sales Team',
    title: 'From Booked Meeting to Second Meeting',
    summary:
      'Prep before every first meeting and a follow-up within 30 minutes. 95% of prospects book a second meeting.',
    situation:
      'Every booked sales meeting needed prep: research on the company, a set of working documents and a heads-up to the right people. After the call, the follow-up had to reach the prospect while the conversation was still fresh.',
    built: [
      'When a meeting is booked, AI researches the company across several AI tools and MCP connectors.',
      'It creates the prospect’s folders and documents in Google Drive from templates.',
      'It notifies the right people in the systems and apps they already use.',
      'After the first meeting, it uses the call recording to build custom proof points and a follow-up email.',
    ],
    changed: [
      'The team walks into every first meeting prepared.',
      'The follow-up goes out within 30 minutes of the call.',
      '95% of prospects book a second meeting.',
    ],
    teaser:
      'Prep and follow-up for a B2B sales team, so every call is ready before it starts.',
    tools: ['Email', 'Zapier', 'HubSpot', 'Google Drive', 'Slack'],
    diagram: [
      {
        label: 'Before the First Meeting',
        steps: [
          { title: 'Meeting Booked' },
          { title: 'Company Research', note: 'AI tools and MCP connectors' },
          {
            title: 'Folders and Documents',
            note: 'From templates in Google Drive',
          },
          { title: 'Right People Notified', note: 'In the apps they use' },
          { title: 'Ready for the First Meeting' },
        ],
      },
      {
        label: 'After the First Meeting',
        steps: [
          { title: 'Call Recording' },
          { title: 'Custom Proof Points', note: 'Built from the call' },
          { title: 'Follow-Up Email', note: 'Within 30 minutes of the call' },
          { title: '95% Book a Second Meeting', highlight: true },
        ],
      },
    ],
  },
  {
    slug: 'connected-operations',
    short: 'Connected Operations',
    client: 'Mid-Size Business',
    title: 'One Connected System for a Growing Business',
    summary:
      'Quotes, automations and paperwork in one system. One person now handles work that used to take ten.',
    situation:
      'A mid-size business ran its internal processes by hand, from requests for quotes to paperwork that still lived on paper. Work moved between people and tools one step at a time.',
    built: [
      'HubSpot as the one place for customers, requests and quotes.',
      'A request-to-quote process that runs from the first inquiry to the quote without manual handoffs.',
      'Zapier automations that connect HubSpot with the rest of their tools.',
      'Claude built into the steps that need writing, summaries or review.',
      'Paperwork digitized, so forms and records live in one system.',
    ],
    changed: [
      'One person now handles work that used to take ten.',
      'The team saves at least 10 hours a week.',
      'Requests, quotes and records live in one place.',
    ],
    tools: ['HubSpot', 'Zapier', 'Claude'],
    diagram: [
      {
        label: 'Request to Quote',
        steps: [
          { title: 'Request Comes In' },
          { title: 'HubSpot', note: 'Every request in one place' },
          { title: 'Zapier', note: 'Automations between tools' },
          { title: 'Claude', note: 'Writing, summaries and review' },
          { title: 'Quote Sent', note: 'Run by one person', highlight: true },
        ],
      },
      {
        label: 'Paperwork',
        steps: [
          { title: 'Paper Forms' },
          { title: 'Digitized', note: 'Forms and records' },
          { title: 'One System', note: 'Every record in one place' },
        ],
      },
    ],
  },
  {
    slug: 'google-cloud-connectors',
    short: 'Google Cloud Connectors',
    client: 'Analytics, Search and Indexing',
    title: 'Custom Connectors for Google Cloud APIs',
    summary:
      'An AI assistant that works with Google Analytics, Search Console and indexing directly.',
    situation:
      'The team’s AI assistant couldn’t reach Google’s analytics, search and indexing tools. Every question or task started with working in those tools by hand.',
    built: [
      'Custom MCP connectors for Google Cloud APIs, including Google Analytics 4, Google Search Console and the Indexing API.',
      'Written in Python and hosted on Google Cloud Run as remote servers.',
      'Google service account sign-in.',
      'Property and site are inputs on each request, so one setup serves many sites.',
    ],
    changed: [
      'The assistant works with first-party analytics and search data directly.',
      'Analytics, search and indexing tasks run from one assistant.',
      'One setup covers every property the service account can access.',
    ],
    tools: [
      'Python',
      'Google Cloud Run',
      'MCP',
      'Google Analytics 4',
      'Search Console',
      'Indexing API',
    ],
    diagram: [
      {
        label: 'Each Request',
        steps: [
          { title: 'AI Assistant', note: 'Asks a question or runs a task' },
          {
            title: 'Custom MCP Connectors',
            note: 'Python on Google Cloud Run',
            highlight: true,
            twoWay: true,
          },
          { title: 'Service Account', note: 'Google sign-in', twoWay: true },
          {
            stack: [
              { title: 'Google Analytics 4' },
              { title: 'Search Console' },
              { title: 'Indexing API' },
              { title: 'Other Google APIs', dashed: true },
            ],
          },
        ],
      },
    ],
  },
]

// The example featured on the home page
// Results across the work examples, listed under Recent Work on Home
export const workOutcomes = [
  'About $180,000 a Year in Team Costs Saved',
  '95% of Prospects Book a Second Meeting',
  'At Least 10 Hours a Week Saved',
  'Follow-Up Within 30 Minutes',
  'Revenue Grew 90% in Six Months',
]

export const featuredWorkSlug = 'sales-follow-up'
