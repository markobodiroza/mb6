---
name: Marko Bodiroza
description: AI strategy and systems, made clear. Sharp, warm, memorable.
colors:
  pigment-ultramarine: "oklch(0.37 0.19 268)"
  blueprint-line: "oklch(0.435 0.18 268)"
  ultramarine-deep: "oklch(0.31 0.17 268)"
  ultramarine-link: "oklch(0.4 0.19 268)"
  lapel-citron: "oklch(0.91 0.19 117)"
  night-ink: "oklch(0.2 0.03 268)"
  cool-paper: "oklch(0.985 0.005 265)"
  sunken-paper: "oklch(0.955 0.018 265)"
  blue-rule: "oklch(0.87 0.022 265)"
  field-line: "oklch(0.62 0.03 265)"
  graphite: "oklch(0.33 0.025 268)"
  muted-graphite: "oklch(0.45 0.022 268)"
  pale-ultramarine: "oklch(0.88 0.045 262)"
  danger: "oklch(0.5 0.2 25)"
  night-page: "oklch(0.23 0.09 268)"
  night-sunken: "oklch(0.27 0.105 268)"
  night-field: "oklch(0.28 0.14 268)"
  night-section: "oklch(0.34 0.13 268)"
  night-raised: "oklch(0.42 0.17 268)"
typography:
  page-title:
    fontFamily: "Google Sans Flex Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.625rem, 1.7rem + 3.3vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  page-header:
    fontFamily: "Google Sans Flex Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.375rem, 1.75rem + 2.2vw, 3.2rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.033em"
    fontVariation: "'ROND' 70"
  section:
    fontFamily: "Google Sans Flex Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, 1.6rem + 1.9vw, 2.5625rem)"
    fontWeight: 780
    lineHeight: 1.12
    letterSpacing: "-0.03em"
    fontVariation: "'ROND' 70"
  heading:
    fontFamily: "Google Sans Flex Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.5rem + 0.9vw, 2.0625rem)"
    fontWeight: 780
    lineHeight: 1.16
    letterSpacing: "-0.03em"
    fontVariation: "'ROND' 70"
  subhead:
    fontFamily: "Google Sans Flex Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.65rem"
    fontWeight: 760
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Google Sans Flex Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 720
    lineHeight: 1.25
    letterSpacing: "-0.018em"
  lead:
    fontFamily: "Google Sans Flex Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.1rem + 0.35vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Google Sans Flex Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Google Sans Flex Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1.375
  price:
    fontFamily: "Google Sans Flex Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.045em"
rounded:
  field: "12px"
  card: "16px"
  panel: "20px"
  feature: "28px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  lead: "clamp(3.5rem, 2.6rem + 3vw, 6rem)"
  section: "clamp(5rem, 3.6rem + 4.5vw, 8.5rem)"
components:
  button-book-call:
    backgroundColor: "{colors.lapel-citron}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.full}"
    padding: "0 28px"
    height: "52px"
  button-primary:
    backgroundColor: "{colors.pigment-ultramarine}"
    textColor: "{colors.cool-paper}"
    rounded: "{rounded.full}"
    padding: "0 28px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.ultramarine-deep}"
  button-send-inquiry:
    backgroundColor: "{colors.cool-paper}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.full}"
    padding: "0 28px"
    height: "52px"
  package-row:
    backgroundColor: "{colors.cool-paper}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.feature}"
    padding: "40px"
  diagram-panel:
    backgroundColor: "{colors.sunken-paper}"
    rounded: "{rounded.feature}"
    padding: "36px"
  diagram-step:
    backgroundColor: "{colors.cool-paper}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.card}"
    padding: "12px 16px"
  tool-tag:
    backgroundColor: "{colors.sunken-paper}"
    textColor: "{colors.ultramarine-link}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
  input:
    backgroundColor: "{colors.cool-paper}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.field}"
    padding: "12px 16px"
---

# Design System: Marko Bodiroza

## 1. Overview

**Creative North Star: "The Blueprint With a Highlighter"**

A precise engineering drawing someone has gone over with a highlighter. Deep pigment ultramarine carries the big moments; a sharp citron, taken from the lime pin on Marko's lapel, marks what matters; night ink and cool paper give the page real contrast. It should feel confident and human, never corporate. The drafting grid lives only on the large brand fields (hero, page headers, the closing band and the Start Here package). Diagrams and cards never carry it.

The site is a working tool for busy decision makers, so structure stays familiar: a sticky header, two calls to action everywhere (Book a Call and Send Inquiry) and predictable page shapes. Every inner page opens on a blue header and closes on a blue band over a night footer, so color frames each page. Personality comes from scale (large, heavy, rounded headings), the citron accent and strong tonal steps between blue, night and paper.

This system rejects the **generic AI startup** look (purple gradients, glowing orbs, neon on black, robot or brain imagery), the **template portfolio** look this site started from, the **corporate agency** look (stock photos of handshakes, buzzword heroes, logo walls) and the **guru or course seller** look (countdowns, hype claims, big-number testimonials, aggressive upsells). It also rejects its own earlier drafts: beige paper with grey-slate text, uppercase eyebrows above every heading and decorative numerals.

**Key Characteristics:**
- Full palette with clear roles: ultramarine fields, citron highlights, night sections, cool paper
- A 48px drafting grid on brand fields only
- One sans family on a 1.25 type scale, with heavy rounded headings
- Pill buttons, and only two of them: Book a Call and Send Inquiry
- Flat surfaces, except raised cards (diagram steps), which take one soft blue-tinted shadow
- Light and a designed dark mode, both WCAG 2.2 AA

## 2. Colors

A full palette with four roles. Values are OKLCH custom properties in `src/styles/tailwind.css`; dark mode redefines the semantic layer under `.dark`.

### Primary
- **Pigment Ultramarine** (oklch(0.37 0.19 268)): hero and page-header fields, the closing band, the Start Here package, primary buttons on paper.
- **Blueprint Line** (oklch(0.435 0.18 268)): the 1px drafting grid on brand fields.
- **Ultramarine Deep** (oklch(0.31 0.17 268)): primary button hover.
- **Ultramarine Link** (oklch(0.4 0.19 268)): links, icons, check marks and arrow links on paper.
- **Pale Ultramarine** (oklch(0.88 0.045 262)): secondary text on brand fields.

### Secondary
- **Lapel Citron** (oklch(0.91 0.19 117)): the highlighter. The hero highlight, Book a Call on blue fields, the Start Here badge, the photo offset block, highlighted diagram results and labels on blue.

### Tertiary
- **Night Ink** (oklch(0.2 0.03 268)): the footer and all text on paper and citron.

### Neutral
- **Cool Paper** (oklch(0.985 0.005 265)): the page, raised cards and package rows.
- **Sunken Paper** (oklch(0.955 0.018 265)): diagram panels, the services box, hover fills and the scrolled header.
- **Blue Rule** (oklch(0.87 0.022 265)): quiet dividers and package row borders.
- **Field Line** (oklch(0.62 0.03 265)): form outlines (3:1 against paper), dashed diagram steps and the scrolled header edge.
- **Graphite** (oklch(0.33 0.025 268)) and **Muted Graphite** (oklch(0.45 0.022 268)): body copy and secondary text.

### Dark Theme: Blue Night
Dark mode is never black. Everything steps through one ultramarine family, darkest to brightest: **Night Page** (0.23) for the page, **Night Sunken** (0.27) for cards and the scrolled header, **Night Field** (0.28) for brand fields such as the hero, **Night Section** (0.34) for night sections and diagram panels, while the footer returns to Night Page so the page ends on its darkest step, and **Night Raised** (0.42) for diagram steps and tool tags. Citron takes over every action role: buttons, links, icons, arrows and focus rings.

### Named Rules
**The Highlighter Rule.** Citron is a background or a color on blue and night fields. It is never text on light paper.

**The Committed Field Rule.** Ultramarine appears as large solid fields or as an action color, never as a gradient, glow or text gradient. The drafting grid is the only pattern allowed on it, and only on brand fields.

**The Even Steps Rule.** In dark mode each surface sits on its own lightness step (0.23, 0.27, 0.28, 0.34, 0.42). Two adjacent surfaces closer than one step will blend, so they are forbidden next to each other.

**The No Pure Values Rule.** No #000 and no #fff. Every neutral is tinted toward hue 265 to 268.

## 3. Typography

**Display and Body Font:** Google Sans Flex (self-hosted from `@fontsource-variable/google-sans-flex`; weight and roundness axes)

**Character:** One flexible family. Headings use heavy weights (720 to 800) with the roundness axis at 70, friendly and memorable rather than corporate. Body text stays crisp at roundness 0.

### Hierarchy
A 1.25 ratio from a 17px body. Fixed steps for text and UI, fluid steps for headings.
- **Page Title** (800, 42 to 64px fluid, 1.08): the Home hero headline only.
- **Page Header** (800, 38 to 51px fluid, 1.1): interior page titles, in a shorter blue header.
- **Section** (780, 34 to 41px fluid, 1.12): section headings and the closing band.
- **Heading** (780, 28 to 33px fluid, 1.16): service and work example titles, the How I Work strip on Home, Pricing at a Glance and the Not Sure band.
- **Subhead** (760, 26.5px, 1.2): package names, Process steps and article section headings.
- **Title** (720, 21px, 1.25): small headings such as The Situation, What Happens Next and the Home service names; also FAQ questions and insight titles.
- **Lead** (400, 19 to 21px, 1.55): intros under headings.
- **Body** (400, 17px, 1.65 to 1.7): all reading text, capped at 60ch.
- **Label** (700, 15px, Title Case): in-card labels such as You Get, Good Fit For, Priced As, Included and Tools; also notes, chips, nav and small print.
- **Price** (800, 48px, -0.045em): package and hourly prices.
- **Caption** (13px): the AI-level tile labels only.

### Named Rules
**The 1.25 Rule.** Every step is at least 25% larger than the one below. Sizes between steps are forbidden; if something needs to stand out, change its weight, not its size.

**The Spacing Rule.** Section headings sit 20px above an intro and 32px above content. Headings and subheads sit 12 to 16px above their text, 8px above a one-line note. Small titles sit 16px above a list and 8px above a one-line summary.

**The Title Case Label Rule.** Labels are Title Case, bold and small. No uppercase, letter-spaced eyebrows above headings.

**The ExtraBold Ceiling Rule.** Nothing heavier than 800.

## 4. Elevation

Mostly flat. Depth comes from tonal blocks: paper, sunken paper, ultramarine, night and citron. There is one exception, the **raised card**: diagram steps (including highlighted results), the Good Fit For box on Services, the Results card on Work, the principles card on Pricing and the article sidebar card. It is a soft, blue-tinted lift that marks something as an object to look at or follow.

### Shadow Vocabulary
- **Card** (`0 1px 2px oklch(0.2 0.03 268 / 0.08), 0 12px 28px -14px oklch(0.37 0.19 268 / 0.4)`; dark: `0 1px 2px oklch(0.1 0.05 268 / 0.5), 0 14px 30px -14px oklch(0.08 0.05 268 / 0.85)`): raised diagram steps and the Services fit box. Exposed as the `shadow-card` utility.

### Named Rules
**The One Lift Rule.** Only raised cards cast a shadow, and only the card shadow. If a second shadow style appears, or a large container gets a shadow, it is wrong.

## 5. Components

### Buttons
Decisive full pills with bold labels. Only two calls to action exist.
- **Shape:** fully rounded (9999px); 52px tall with 28px side padding, 44px in the header.
- **Book a Call:** citron with night text on blue fields; ultramarine on paper in light mode, citron in dark mode. Opens the Cal.com booking page.
- **Send Inquiry:** the outline partner on blue fields (pale ultramarine border), or a 2px ink outline on paper. Goes to /contact, with the topic preselected from a package.
- **Feedback:** every button presses down 1px and scales to 97%; arrows nudge forward on hover.
- **Focus:** 2px ring offset 3px; ultramarine on paper, citron on blue and night.

### Arrow Links
Everything that is not one of the two calls to action is an arrow link: bold link-colored text with a trailing arrow that nudges on hover, and a highlighter pass behind the words on paper. Labels are verb-led ("See All Services", "Read All Insights", "Compare All Packages").

### Tool Tags
Small pills (15px, semibold): a 14% ultramarine tint with ultramarine text in light mode, Night Raised with white text in dark mode.

### Package Rows (Pricing)
Full-width rows with 28px corners: name, price and Send Inquiry on the left (Best For and timing live in the table above); a two-column Included list on the right, behind a 1px divider on wide screens. The Start Here package sits on a plain brand field with no grid. Prices read in USD. The other packages are paper with a 2px Blue Rule border that firms to ink on hover. Included checks pop in one after another as a row scrolls into view.

### Jump Menus
Work and Services open with a Jump To row of 44px pill links (paper with a Blue Rule outline, Night Raised in dark) to each example or service.

### Home Layout
Hero, services, then Recent Work and How I Work side by side above the full-bleed diagram (outcomes as check pills on the left, the five steps as numbered pills on the right, each in one column, split by a 1px rule), then testimonials and the closing band. No insights list on Home.

### Widows
Running text uses text-wrap: pretty site-wide, so no single word sits alone on a last line; short table cells balance.

### Testimonials
Home shows What Clients Say: three quotes, each on its own surface (ultramarine, sunken, citron) so the row reads as three voices, with the role underneath. Work carries one wide ultramarine quote after the agency story. No review schema, since self-written reviews are not eligible.

### Closing Band
Every page ends on the blue band with its own title and line (for example Want a System Like These? on Work); Home uses Put AI to Work in Your Team.

### Pricing at a Glance
A card table above the packages, four equal columns (Package, Price, Best For, Timing): an ultramarine header row (Night Raised in dark), the Start Here row tinted citron with its pill, prices large in link color with the USD unit underneath, and a sunken hover on other rows. Each package name links to its full row; Hourly Advisory is included. Under 768px each row stacks.

### How I Work (on Pricing)
The process lives below the packages on Pricing (/process redirects to /pricing#process): five steps with icons in citron discs on a rail, then a loop back to planning, beside a raised ultramarine card of principles.

### About: Credentials, Tools and Latest Insights
Credentials and Memberships follows Work History: eight small badge tiles in one row on wide screens (Sunken Paper in light mode, Night Raised in dark with each badge on a light disc so its own colors hold), then issuer rows of chips (Google, HubSpot, Intel, LinkedIn) and the Serbian AI Society membership. Tool chips split into two near-equal rows per category on wide screens. The page ends with Latest Insights: three article rows, then a See More Insights expand for the rest.

### Services Rows
Icon and title, the description and You Get on the left; on the right, a raised card (Pigment Ultramarine in light mode, Night Raised in dark) holding Good Fit For (roles, then the situation) and a citron Priced As link.

### Work Diagrams
Flows drawn in HTML. Each diagram is a full-bleed band (edge to edge, 56 to 80px top and bottom, lanes held to the 1440px container), Sunken Paper in light mode and Night Section in dark mode, with no grid. Steps are raised cards (Cool Paper in light, Night Raised in dark) that share one height within a lane; results are citron; optional steps are dashed Field Line outlines. Each example then tells its story in three parts: Start, What I Built and Results, with Results on a raised ultramarine card. Lanes run left to right on wide screens and stack top to bottom on phones, with centered text and down arrows. Numbered steps keep their number and word together.

### Inputs / Fields
- **Style:** 12px corners, 2px Field Line outline, paper fill; hover darkens the outline, focus turns it link-colored and adds the 2px focus ring.
- **Order:** name, email, website (bare domains accepted, https added), project details, then topic, budget and the AI level dropdown (1 to 5, with the chosen level explained underneath).
- **Required:** only name, email and project details. Website, topic, budget and AI level are marked Optional.
- **Errors:** a friendly sentence under the field, the field marked invalid and focus moved to the first problem.
- **Success:** a citron panel with a drawn check mark.

### Page Width
Every section that is not full-bleed sits in one container: up to 1440px wide including its 20px (32px from 640px) side padding. Header, footer, diagram lanes and testimonials share this edge; running text keeps its own measure.

### Navigation
- **Header:** sticky, 80px tall, paper at the top of the page; once scrolled it switches to Sunken Paper with a Field Line edge so it never blends into paper sections. A 44px round portrait in a link-colored ring links home. Links (Services, Work, Pricing, About, Contact; Insights live on About; Home is the portrait) are 44px tall, graphite, ink on hover with a sunken pill; the current page gets a 3px link-colored mark. The full menu shows from 1024px; below that a menu button opens a full-width panel.
- **Footer:** night ink in light mode; in dark mode it drops to Night Page with a rule on top, so the page always ends on its darkest surface. Name, tagline and page links.

### Numbered Lists and Icons
Numbers appear only where order matters: the 1 to 4 review gates inside a diagram. Services and Process steps use custom line icons (24px grid, 1.75 stroke, round ends) in link color. Short lists use check marks.

### FAQ
Native details rows under a 2px ink rule (Field Line in dark mode, as for every decorative divider), closed by default, with a plus icon that turns into an x. Pricing covers cost, scope and timing; Services covers tools, data, agencies and remote work. Both are marked up as FAQPage data.

### Motion
Quick and never blocking, with ease-out-expo (cubic-bezier(0.16, 1, 0.3, 1)). The hero rises in on load with a short stagger and a citron highlighter block sweeps in behind "AI to Work", turning its text to ink; blocks fade up just before they scroll into view. Feedback runs at 200ms. Everything is off under reduced motion, and content is never hidden without JavaScript.

## 6. Do's and Don'ts

### Do:
- **Do** use only two buttons: Book a Call and Send Inquiry. Every other action is an arrow link.
- **Do** keep type on the 1.25 scale: 15, 17, 21 and 26.5px, then the fluid heading, section and page title steps.
- **Do** frame every page with color: blue header, blue closing band, night footer.
- **Do** keep the dark-mode surfaces on their own steps (0.23, 0.27, 0.28, 0.34, 0.42) so nothing disappears.
- **Do** use citron to highlight one thing per view: a phrase, a result, a button.
- **Do** keep body text at 17px, Graphite or darker, and 60ch maximum.
- **Do** follow the copy rules in PRODUCT.md: Title Case headings, no em dashes, no serial comma before "and", no invented numbers.

### Don't:
- **Don't** use the generic AI startup look: purple gradients, glowing orbs, neon on black or robot and brain imagery.
- **Don't** fall back to the template portfolio look this site started from, interchangeable with thousands of developer blogs.
- **Don't** use the corporate agency look: stock photos of handshakes, buzzword heroes or logo walls.
- **Don't** use the guru or course seller look: countdowns, hype claims, big-number testimonials or aggressive upsells.
- **Don't** put the drafting grid on diagrams, cards or anything smaller than a full-width brand field.
- **Don't** add uppercase eyebrows above headings or decorative numerals beside items that have no order.
- **Don't** let dark mode go black, or reuse the light-mode blue on dark-mode brand fields.
- **Don't** put citron text on paper, or use gradient text, glassmorphism, side-stripe borders or grids of identical icon cards.
- **Don't** add shadows beyond the single card shadow on raised cards.
