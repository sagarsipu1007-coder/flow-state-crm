# Flow State CRM

Project context (fill in / feed to the AI)

Build a marketing landing page for [Product name], a multi-tenant CRM SaaS platform for small and mid-size sales teams. Core facts to reflect accurately in the copy:

Multi-tenant architecture with role-based access control (six distinct roles, from rep to admin)

Core modules: contacts, leads, deals (pipeline), activities, invoicing, notifications, audit trail

Automation engine that reacts to CRM events in real time (stage changes, new leads, stalled deals) and can take actions on its own — send emails, create tasks, notify the right person

Live, real-time updates — when one teammate edits a deal, others viewing it see the change instantly, no refresh

Deployed on production infrastructure (Render + AWS RDS Postgres), built for reliability at scale, not a prototype

Tone: confident and modern, not corporate-stiff. Speak to a sales manager or founder evaluating CRM tools, not to a developer. Avoid CRM-industry clichés ("supercharge your pipeline", "all-in-one solution") — be specific about what the product actually does.

Page structure

Build these sections, in this order, as a single scrollable page:

1. Navbar

Logo left, links (Product, Workflow, Pricing, Resources), primary CTA button ("Start free trial" or "Book a demo") right, sticky on scroll with a subtle background/shadow change once scrolled past the hero.

2. Hero

One-sentence headline naming the specific outcome (not "manage your customers better" — something like "Your pipeline runs itself while you close deals")

One supporting sentence explaining how (automation + real-time, in plain language)

Two CTAs: primary ("Start free trial"), secondary ("Watch 2-min demo" or "See how it works")

Visual: a live-feeling product screenshot or short looping interaction showing a deal card updating in real time, or a timeline of automated actions firing (reference the "email sent immediately / 1 day later / 3 days later" pattern — same idea, but for pipeline actions: "Lead created → Auto-assigned → Follow-up task created", each with a timestamp). Image direction: a crisp, realistic dashboard mockup on a subtle floating card with soft shadow — not a flat screenshot pasted on a background. If using a photo instead, a high-resolution shot of a focused sales professional at a clean desk, warm natural light, looking at a laptop showing the product (search terms: "sales professional laptop office natural light 4k"). This is the single most important image on the page — it should be full resolution, sharp, and load first (priority).

A thin trust bar beneath the fold: "Trusted by teams at [logos]" or a stat ("500+ deals automated last month" style — use only if real, don't fabricate numbers)

3. Problem → solution

Two or three short columns naming a specific pain (leads going cold because no one followed up, reps forgetting to update deal stages, managers finding out a deal died a week too late) paired with how the product solves each — one line each, not paragraphs. Each column gets a small, simple line-icon (not a photo) — this section stays visually quiet so the imagery weight lands on sections 4 and 6.

4. How it works (the workflow section)

This is the section that should do the most convincing. Show the actual event → decide → act loop in visual, not technical, language:

Capture — a lead comes in from a form, import, or manual entry

Organize — it's automatically placed in the right pipeline stage, assigned to the right rep based on your rules

Nurture, automatically — the system sends the right message at the right time, creates follow-up tasks, and flags anything going stale — without a rep having to remember

Track live — every teammate watching a deal sees updates the second they happen

Close & report — invoicing and reporting happen from the same record, no re-entry

Render this as a horizontal step diagram or numbered cards with a short icon each — this is exactly the multi-step timeline pattern you've already seen work well (like the "email sent immediately / 1 day later / 3 days later" sequence), applied to the full deal lifecycle instead of just email. As the user scrolls into this section, each step should reveal in sequence (fade + slight upward slide, staggered ~100ms apart) rather than all appearing at once — this is where scroll-triggered motion earns its place, since it mirrors the actual sequential nature of the workflow.

5. Core features / modules

Grid of 6-8 cards, one per module: Contacts, Leads, Deal pipeline, Activity timeline, Invoicing, Automation, Notifications, Audit & permissions. Each card: short label, one-line description of the concrete thing it does (not a feature-list of adjectives). Icons only here, no photography — keep this section fast and scannable.

6. Automation highlight (dedicated section — this is the differentiator)

Give this more visual weight than a feature card. Show, concretely:

An example rule in plain English ("When a deal sits untouched for 3 days, automatically create a follow-up task for the owner")

A short "you set the goal, the system handles the how" framing — this is where you can mention the automation is intelligent/adaptive without over-claiming

A small live-looking activity feed mockup (reuse the timeline UI pattern already built for the lead detail page) showing 3-4 automated actions firing with timestamps, each entry animating in with a subtle pulse as if arriving live — same "Live" indicator treatment as the actual product

7. Real-time collaboration

Short section, one strong visual: two avatars looking at the same deal, one edits, the other's screen updates live. Headline like "No more 'is this still current?' Slack messages." Image direction: either a clean product mockup showing two cursor/avatar indicators on the same card, or a candid, high-resolution photo of two colleagues collaborating at a shared screen (search terms: "colleagues collaborating screen office candid 4k") — avoid generic stock-photo handshake or thumbs-up imagery.

8. Security & trust

Sales teams handle sensitive customer data — address this directly, not as a footnote:

Multi-tenant data isolation (your data never touches another company's)

Role-based permissions (reps see what they need, managers see everything)

Full audit trail of who changed what

Where data is hosted / infrastructure reliability, in one sentence

Small lock/shield line-icons only — no stock photography of padlocks or servers, which read as cliché.

9. Pricing

Three tiers, structured around what actually changes as teams grow — seats, automation volume, and support level are natural CRM pricing levers:

	Starter	Growth	Enterprise

Best for	Small teams getting started	Growing sales teams	Larger orgs, custom needs

Seats	Up to 5	Up to 25	Unlimited

Pipelines	1	Unlimited	Unlimited

Automation	Basic rules	Full automation engine	Full automation + custom rules

Real-time collaboration	✓	✓	✓

Roles & permissions	Basic	Full RBAC	Full RBAC + custom roles

Support	Email	Priority email + chat	Dedicated success manager

Price	$[X]/mo	$[X]/mo	Talk to sales

Include a monthly/annual toggle, and put "Most popular" on the Growth tier. Add one line of reassurance under the pricing table ("No credit card required to start" / "Cancel anytime") — removes friction at the exact decision point.

10. Services provided

A short section separate from pricing, covering what a customer gets beyond the software itself: onboarding & data migration, integration support (email, calendar, existing tools), training for the team, ongoing support tiers. This reassures buyers who are worried about switching-cost, which is the #1 objection for CRM buyers specifically.

11. Testimonials / social proof

3 short quotes (or placeholders marked [TESTIMONIAL — replace before launch]) with name, role, and company — specific outcomes beat generic praise ("cut our follow-up time in half" > "great tool"). Each testimonial gets a real-feeling headshot-style photo (high-resolution, natural lighting, diverse — search terms: "professional headshot portrait natural light 4k") rather than cartoon avatars or initials-only circles.

12. FAQ

5-6 questions addressing real objections: data migration difficulty, what happens to existing spreadsheets, whether automation can be turned off/adjusted, security certifications if any, cancellation policy. Accordion-style, collapsed by default.

13. Final CTA

Repeat the primary CTA with a slightly different framing than the hero ("Ready to stop losing deals to a full inbox?") plus the secondary "Book a demo" option for people who want to talk to a human before buying. Subtle background treatment (soft gradient or a faded, blurred version of the hero product shot) — nothing that competes with the text.

14. Footer

Standard: product links, company links, legal, social — nothing unusual needed here.

Design requirements

Don't default to generic SaaS-template look (centered hero, three icon columns, purple gradient) — pick a distinctive color pairing and stick to it throughout, and give the automation/real-time sections real visual weight since they're the differentiator, not just another feature card

Use real product-shaped visuals (deal cards, pipeline stages, activity timelines) rather than generic illustrations — this product already has a real UI; the marketing page should look like it belongs to the same product, not a stock template

Typography: one strong display font for headlines, one clean sans for body — avoid the default system-font look

Fully responsive; the workflow and pricing sections are the two most likely to break on mobile — design those mobile-first

Imagery

Every photo must be genuinely high-resolution (source from Unsplash or Pexels at full/original size, never a thumbnail) and specific to the moment described in that section — no interchangeable "team smiling around a laptop" stock filler repeated across sections

Maintain one consistent color-grade/treatment across all photos (a subtle warm or cool tone matching the brand palette) so the page feels like one shoot, not a stock-photo grab bag

Every image gets explicit width/height (or aspect-ratio) so nothing shifts as it loads — no layout jump as images pop in

Product mockups (dashboard, activity feed, deal cards) should look like real UI, not vague illustrations — reuse the actual card/timeline visual language from the product where possible

Smooth scrolling & motion

Implement smooth scrolling site-wide (library like Lenis, or CSS scroll-behavior: smooth as a lighter-weight fallback) — scrolling should feel weighted and continuous, not the default browser jump

Sections reveal on scroll with a consistent, subtle pattern: fade + 20-30px upward translate, ~400-500ms ease-out, triggered once each section enters the viewport (not on every scroll direction change)

The workflow section (4) and automation activity feed (6) get staggered, sequential reveals as described above — these are the two places motion should do real explanatory work

Sticky/pinned behavior is fine for the hero visual or workflow steps if it reinforces the scroll narrative, but nothing should trap or delay the user from reaching content below

Respect prefers-reduced-motion — fall back to a simple fade with no translate/parallax for users who've set that preference

Nothing should block first paint or delay Largest Contentful Paint — motion libraries load after critical content, never before

Technical requirements

Next.js + Tailwind CSS, matching the existing product stack

Component-per-section structure, not one giant page file

Semantic HTML and proper heading hierarchy for SEO and accessibility

Meta title/description, Open Graph tags, and a clear H1 in the hero

All CTAs wired to real destinations (signup flow, demo booking, or a mailto:/form as a placeholder — never a dead # link)

Performance

Use Next.js Image (or equivalent optimized image component) for every photo — automatic WebP/AVIF with responsive srcset, never a raw unoptimized JPEG/PNG

Only the hero image loads with priority; every other image lazy-loads as it approaches the viewport

Fonts loaded with font-display: swap and subset to the characters actually used — no render-blocking font requests

Code-split anything non-critical to first view (pricing toggle logic, FAQ accordion, any animation library) via dynamic import so it doesn't inflate the initial bundle

Preconnect/dns-prefetch to the image CDN and any third-party font host

Target a Lighthouse performance score above 95, not just 90 — this page's entire job is to convert a first-time visitor in the first few seconds, so slow load directly costs signups

No autoplaying hero video; if motion is needed in the hero, use a lightweight looping SVG/CSS animation instead of video weight

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c5a14160-c100-412c-a6ff-1cbd877ac892).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
