# HFU Enterprise — Homepage Redesign Concept

A responsive homepage concept for **HFU Enterprise Ltd**, created for the website redesign contest brief.

## Design approach

The concept is intentionally conversion-led rather than a generic logistics template. The homepage uses:

- A clear hero message focused on UK logistics reliability and delivery speed.
- Strong primary actions for **Get a Quote** and **Book a Delivery**.
- HFU's existing brand colours, logo and fleet imagery.
- Service cards for same-day, scheduled, overnight, international, warehousing, pallet delivery and home moves.
- A dedicated fleet section with real vehicle categories and capacities from the current HFU website.
- A prominent quote form placed close to the fleet section.
- UK coverage and business-logistics sections to support both B2C and B2B enquiries.
- Trust signals, customer feedback, company experience and job-volume statistics.
- A simple four-step conversion journey: quote → booking → collection → delivery.
- Mobile navigation and a persistent mobile call/quote bar.

## Recommended production technology

For the complete website I would recommend **Next.js + a headless CMS** (such as Sanity or WordPress used headlessly) for a fast, SEO-friendly and scalable build.

That production stack would support:

- Individual SEO landing pages for services and UK locations
- Structured data / schema
- Optimised images and Core Web Vitals
- Quote/enquiry form integrations
- CRM or email routing
- Analytics and conversion tracking
- Reusable page sections for future expansion

For this contest demo, plain **HTML, CSS and JavaScript** are used so it loads quickly and can be hosted easily on GitHub Pages.

## Demo notes

The project currently includes:

- `index.html`
- `styles.css`
- `script.js`
- `.github/workflows/pages.yml`

The contact/quote form is a front-end demonstration. A production build should connect the form to HFU's preferred email, CRM or booking workflow.

## Content source

Company information, services, fleet categories, contact details and customer feedback are based on the existing HFU Enterprise website:

https://hfuenterprise.com/

## GitHub Pages

To publish:

1. Open **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. The included workflow will publish the site from `main`.

Expected URL:

https://haroonzia1234.github.io/client-demo/
