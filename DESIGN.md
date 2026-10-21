---
name: Marko Bodiroza
description: AI strategy and systems, made clear. Sharp, warm, memorable.
colors:
  pigment-ultramarine: "oklch(0.37 0.19 268)"
  blueprint-line: "oklch(0.415 0.185 268)"
  ultramarine-deep: "oklch(0.31 0.17 268)"
  lapel-citron: "oklch(0.91 0.19 117)"
  night-ink: "oklch(0.2 0.03 268)"
  cool-paper: "oklch(0.985 0.005 265)"
  sunken-paper: "oklch(0.955 0.018 265)"
  blue-rule: "oklch(0.87 0.022 265)"
  graphite: "oklch(0.33 0.025 268)"
  muted-graphite: "oklch(0.45 0.022 268)"
  pale-ultramarine: "oklch(0.88 0.045 262)"
typography:
  display:
    fontFamily: "Google Sans Flex Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1.5rem + 3.9vw, 5.25rem)"
    fontWeight: 820
    lineHeight: 0.98
    letterSpacing: "-0.04em"
    fontVariation: "'ROND' 70"
  headline:
    fontFamily: "Google Sans Flex Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.7rem + 3vw, 4.25rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.035em"
    fontVariation: "'ROND' 70"
  title:
    fontFamily: "Google Sans Flex Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.5rem + 1.8vw, 3rem)"
    fontWeight: 780
    lineHeight: 1.06
    letterSpacing: "-0.03em"
    fontVariation: "'ROND' 70"
  body:
    fontFamily: "Google Sans Flex Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Google Sans Flex Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    letterSpacing: "0.1em"
rounded:
  card: "20px"
  feature: "28px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  section: "144px"
components:
  button-primary:
    backgroundColor: "{colors.pigment-ultramarine}"
    textColor: "{colors.cool-paper}"
    rounded: "{rounded.full}"
    padding: "0 28px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.ultramarine-deep}"
  button-on-brand:
    backgroundColor: "{colors.lapel-citron}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.full}"
    padding: "0 28px"
    height: "52px"
  button-on-brand-hover:
    backgroundColor: "{colors.cool-paper}"
  button-night:
    backgroundColor: "{colors.night-ink}"
    textColor: "{colors.cool-paper}"
    rounded: "{rounded.full}"
    padding: "0 28px"
    height: "52px"
  button-secondary:
    backgroundColor: "{colors.cool-paper}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.full}"
    padding: "0 28px"
    height: "52px"
  package-card:
    backgroundColor: "{colors.cool-paper}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.card}"
    padding: "36px"
  pricing-teaser:
    backgroundColor: "{colors.lapel-citron}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.feature}"
    padding: "40px"
---

# Design System: Marko Bodiroza

## 1. Overview

**Creative North Star: "The Blueprint With a Highlighter"**

A precise engineering drawing that someone has gone over with a highlighter. Deep pigment ultramarine carries the big moments with a faint drafting grid; a sharp citron, taken from the lime pin on Marko's lapel, marks what matters; deep night ink gives the page real contrast. The result should feel confident and human, never corporate.

The site is a working tool for busy decision makers, so structure stays familiar: a sticky header, one obvious next step (Book a Call) everywhere and predictable page shapes. Every inner page opens on a blue header and closes on a blue Book a Call band over a night-ink footer, so color frames each page. Personality comes from scale (very large, rounded, heavy headings), the citron accent and strong tonal contrast between blue, night and paper sections. Motion is responsive only: 200 ms color and position feedback on hover and focus, no entrance choreography, all disabled under reduced motion.

This system explicitly rejects the **generic AI startup** look (purple gradients, glowing orbs, neon on black, robot or brain imagery), the **template portfolio** look this site started from, the **corporate agency** look (stock photos of handshakes, buzzword heroes, logo walls) and the **guru or course seller** look (countdowns, hype claims, big-number testimonials, aggressive upsells). It also rejects its own first draft: beige paper with grey-slate text and thin rules read as corporate.

**Key Characteristics:**
- Full palette with clear roles: ultramarine fields, citron highlights, night-ink sections, cool paper
- A 48px drafting grid on ultramarine as the signature motif
- Very large, heavy headings with rounded letterforms (Google Sans Flex, ROND axis)
- Pill buttons; generous 20px to 28px corners on cards and feature blocks
- Big numerals and thick 2px ink rules instead of thin grey lines
- Light first, with a designed dark mode; WCAG 2.2 AA in both

## 2. Colors

A full palette with four deliberate roles. All values are OKLCH custom properties in `src/styles/tailwind.css`; dark mode redefines only the semantic layer under `.dark`.

### Primary
- **Pigment Ultramarine** (oklch(0.37 0.19 268)): hero and page-header fields, the closing Book a Call band, primary buttons, big numerals and links on paper.
- **Blueprint Line** (oklch(0.415 0.185 268)): the 1px drafting grid on ultramarine fields and the hover fill for outline buttons on them.
- **Ultramarine Deep** (oklch(0.31 0.17 268)): hover for primary buttons.
- **Pale Ultramarine** (oklch(0.88 0.045 262)): body text and outline borders on ultramarine (7.8:1).

### Secondary
- **Lapel Citron** (oklch(0.91 0.19 117)): the highlighter. Eyebrows and the highlighted phrase in the hero, the Book a Call button on blue fields, step numbers on night ink, the offset block behind the portrait, the pricing teaser block and the "Start Here" badge. 8.8:1 on ultramarine, 14.3:1 on night ink.

### Tertiary
- **Night Ink** (oklch(0.2 0.03 268)): the How I Work section, the hourly rate block, the footer and all text on paper and on citron (17.4:1 on paper).

### Neutral
- **Cool Paper** (oklch(0.985 0.005 265)): page background, tinted toward the brand.
- **Sunken Paper** (oklch(0.955 0.018 265)): hover fills.
- **Blue Rule** (oklch(0.87 0.022 265)): card borders and quiet dividers.
- **Graphite** (oklch(0.33 0.025 268)): body copy (11.7:1).
- **Muted Graphite** (oklch(0.45 0.022 268)): dates, units and labels (7.1:1).

### Dark Theme: Blue Night
Dark mode is not black. The page itself turns deep ultramarine (oklch(0.23 0.09 268)), blue fields sit slightly brighter (oklch(0.38 0.19 268)) so they lift off the page without drifting toward neon, night-ink sections sink deeper (oklch(0.15 0.055 268)) and citron takes over every action role: buttons, links, numerals, the active nav mark and focus rings. Text is a near-white tinted toward the brand.

### Named Rules
**The Highlighter Rule.** Citron is a background or a color on ultramarine and night ink. It is never text on light paper, where it would fail contrast. In dark mode the paper is blue, so citron becomes the link and action color.

**The Committed Field Rule.** Ultramarine appears as large solid fields or as action color. Never as a gradient wash, glow or text gradient. The drafting grid is the only pattern allowed on it.

**The No Pure Values Rule.** No #000 and no #fff. Every neutral is tinted toward hue 265 to 268.

**The Light Tint Hue Rule.** Blue tints lighter than L 0.7 shift to hue 262 so they never drift toward lavender.

## 3. Typography

**Display and Body Font:** Google Sans Flex (self-hosted from `@fontsource-variable/google-sans-flex`, weight and roundness axes only, about 71 KB for Latin)

**Character:** One flexible family. Headings use heavy weights (780 to 850) with the roundness axis at 70, which makes them friendly and memorable instead of corporate. Body text stays at roundness 0 for crisp reading.

### Hierarchy
- **Display** (820, fluid 2.75rem to 5.25rem, line-height 0.98, -0.04em, ROND 70): the homepage hero headline and the closing Book a Call heading.
- **Page Title** (800, fluid 2.5rem to 4.25rem, 1.02, -0.035em): one H1 per inner page, on the blue header.
- **Section** (780, fluid 2rem to 3rem, 1.06, -0.03em): section headings.
- **Title** (720 to 760, 1.375rem to 1.625rem, 1.2 to 1.25): service names, steps, package names.
- **Lead** (400, 1.1875rem to 1.3125rem, 1.55): intros under headings.
- **Long-form** (400, 1.125rem, 1.65 to 1.7): reading text on About, Insights summaries, Process steps and the mobile menu, capped at 60ch (about 75 characters).
- **Body** (400, 1.0625rem, 1.65): paragraphs and FAQ answers, capped at 60ch.
- **UI** (500 to 700, 0.9375rem): buttons, nav, footer links, form hints, dates and small supporting text.
- **Label** (700, 0.8125rem, 0.1em, uppercase): eyebrows such as "What I Do" and "Process".
- **Numeral** (700, 0.9375rem, tabular figures): dates, small list numbers and step counters.
- **Big Numeral** (850, 3.25rem, ROND 100, tabular figures): service numbers on Home and Services.
- **Price** (850, 3rem, -0.045em): package and hourly prices on Pricing.

### Named Rules
**The One Family Rule.** One typeface, flexed through weight and roundness. No second family.

**The Title Case Rule.** Headings use Title Case with short words lowercase, never end with a period and are balanced with `text-wrap: balance`.

## 4. Elevation

Flat. No shadows. Depth comes from tonal blocks (paper, ultramarine, night ink, citron) and from one deliberate offset: a citron block shifted 16px behind the hero portrait.

### Named Rules
**The No Shadow Rule.** Stand out with tone, color or a thicker border, never a drop shadow.

## 5. Components

### Buttons
Friendly and decisive: full pills, bold labels, solid fills.
- **Shape:** fully rounded (9999px); 52px tall with 28px side padding, 44px for the header.
- **Primary:** ultramarine with paper text; hover deepens to Ultramarine Deep.
- **On Blue:** citron with night-ink text, used for Book a Call on every ultramarine field; hover turns paper. Its outline partner uses a pale ultramarine border.
- **Night:** night ink with paper text, used on citron blocks; hover turns ultramarine.
- **Secondary:** paper with a 2px ink outline; hover fills with ink and flips the text to paper.
- **Focus:** 2px ring offset 3px; ultramarine on paper, citron on ultramarine and night ink.
- **Book a Call:** links to `siteMeta.bookingUrl`, or opens a pre-addressed email until it is set.

### Cards / Containers
- **Package cards (Pricing only):** 28px corners, 36px padding, each in its own color world so packages are told apart at a glance: AI Audit and Roadmap on an ultramarine blueprint field with a citron "Start Here" badge, Team Workshop on citron, AI Process Build on night ink (with a rule ring in dark mode), Monthly Advisory on paper with a 2px ink outline. Each card leads with a "Best for" line. A "Which Package Fits?" guide above links to each card with a matching color dot.
- **Hourly block:** paper with a 2px dashed ink outline, so it reads as the flexible option and stays visible in both themes.
- **Feature blocks:** 28px corners. The citron pricing teaser on the homepage and the night-ink hourly rate block on Pricing.

### Forms
- **Inputs:** 12px corners, 2px field-colored border (oklch(0.62 0.03 265) light, oklch(0.58 0.08 262) dark, at least 3:1 against the page), paper fill; hover darkens the border, focus turns it link-colored. Labels sit above in bold, with optional hints on the right.
- **Required fields:** only name, email and project details; website, topic, budget and AI level are optional and say so.
- **Errors:** danger tokens (oklch(0.5 0.2 25) text and oklch(0.55 0.2 25) outline in light, oklch(0.82 0.12 25) and oklch(0.72 0.17 25) in dark).
- **Validation:** checked on submit; each problem shows a friendly sentence under its field, the field is marked invalid and focus moves to the first one.
- **Success:** a citron panel with a drawn check mark. Until `siteMeta.formEndpoint` is set, the form opens the visitor's email app with the message filled in.

### Navigation
- **Header:** sticky, solid paper with a rule bottom edge, 72px tall. A 44px round portrait in a 3px link-colored ring (ultramarine in light mode, citron in dark) links home (no name text; it tilts slightly on hover). Nav starts with Home; links in graphite, ink on hover with a sunken pill; current page in ink with a 3px link-colored mark; 44px theme toggle; pill Book a Call button.
- **Mobile:** a menu button opens a full-width panel with large links and a full-width Book a Call button.
- **Footer:** night ink with citron email and LinkedIn links, page links on the right and the privacy line below.

### Numbered Lists
The signature structure. Services use big ultramarine numerals over 2px ink rules; homepage steps use citron numerals on night ink; Process page steps are 72px citron discs joined by a thin rule, each with a short italic note; after step 5 the rail turns dashed and ends in a looping arrow back to step 2. The steps appear once, never as a separate diagram.

### Page Header
Every inner page opens on an ultramarine field with the drafting grid, a citron eyebrow, a large page title and a pale ultramarine intro.

### Delight
Playful but quick, never blocking.
- **Highlighter sweep:** a citron marker stroke draws under "AI to Work" in the hero on load (900 ms, ease-out-expo, 400 ms delay). Disabled under reduced motion; the stroke is simply there.
- **Highlighter hover:** text links (Insights titles, About contact links) get a marker pass behind the words on hover: citron in light mode, ultramarine in dark mode.
- **Tactile buttons:** every button presses down 1px and scales to 97% on click; arrows inside buttons nudge forward on hover.
- **404 page:** "This Page Isn’t on the Roadmap" on a blueprint field with a huge citron 404 and a way back.

### Motion
Quick, confident and never blocking. Easing is ease-out-expo (cubic-bezier(0.16, 1, 0.3, 1)); nothing bounces.
- **Hero entrance:** eyebrow, intro, buttons and proof line rise in on load with a 90 ms stagger (700 ms each). The headline only rises 14px and is never hidden, so the largest paint is not delayed. The citron block behind the portrait settles into its offset.
- **Scroll reveals:** blocks marked `data-reveal` fade up 26px over 750 ms as they enter the viewport, staggered 70 ms within a group. They are only hidden when an inline script has confirmed IntersectionObserver support and no reduced-motion preference, so content is never lost without JavaScript.
- **Process loop:** the loop arrow at the end of the Process steps draws itself when it scrolls into view.
- **Feedback:** button press (1px down, 97% scale), arrow nudges, highlighter hovers, a pop on the chosen AI proficiency tile and a drawn check on form success.
- **Reduced motion:** every entrance, reveal and pop is off; content is simply there.

### Spacing Rhythm
Two fluid tokens set the big gaps: lead space from a page header to its first content (clamp 3.5rem to 6rem) and section space between major blocks (clamp 5rem to 8.5rem). Inside blocks, spacing stays tight (8px to 32px) so groups read clearly.

### FAQ
Native details and summary rows (keyboard accessible, no JavaScript needed) under a 2px ink rule, with a plus icon in a sunken circle that turns into an x when open. The first question opens by default. Marked up as FAQPage structured data. Lives on Pricing and covers timeline, scope, changes, what the team provides, where to start, tools and currency.

### Blueprint Band
The closing call to action on every page: an ultramarine field with the drafting grid, a display-size "Book a Call" heading, one sentence, a citron Book a Call button and an email button. It sits flush against colored sections and directly above the night-ink footer.

## 6. Do's and Don'ts

### Do:
- **Do** keep the small uppercase label above page and section headings (Label style, citron on blue, link color on paper). It is a deliberate wayfinding choice: the detector's hero-eyebrow-chip and kicker-above-heading warnings are accepted for this site.
- **Do** make Book a Call the most visible action on every page: header, hero and closing band.
- **Do** frame every page with color: blue header, blue closing band, night-ink footer.
- **Do** use citron to highlight one thing per view: a phrase, a number, a button.
- **Do** keep body text at 1.0625rem (1.125rem for long-form reading), Graphite or darker, and 60ch maximum.
- **Do** meet WCAG 2.2 AA in both themes, including text on ultramarine, citron and night ink.
- **Do** follow the copy rules in PRODUCT.md: Title Case headings, no em dashes, no serial comma before "and", no invented numbers.

### Don't:
- **Don't** use the generic AI startup look: purple gradients, glowing orbs, neon on black or robot and brain imagery.
- **Don't** fall back to the template portfolio look this site started from, interchangeable with thousands of developer blogs.
- **Don't** use the corporate agency look: stock photos of handshakes, buzzword heroes or logo walls.
- **Don't** use the guru or course seller look: countdowns, hype claims, big-number testimonials or aggressive upsells.
- **Don't** return to beige paper, grey-slate text and thin grey rules; that combination read as corporate.
- **Don't** put citron text on paper, use gradient text, glassmorphism, drop shadows, side-stripe borders or grids of identical icon cards.
- **Don't** animate on page load; motion only answers hover, focus and state changes.
