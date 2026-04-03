# BillingAlign — Project Plan

## Brand Identity
- **Company**: BillingAlign | BillingAlign.com
- **Tagline**: "Aligned Billing. Accelerated Revenue."
- **Industry**: Healthcare Revenue Cycle Management (RCM) & Medical Billing
- **Contact**: hello@billingalign.com | 1-800-BILALIGN

## Tech Stack
| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, TypeScript, Server Components) |
| Styling | Tailwind CSS v3 + CSS custom properties |
| Animation | Framer Motion v11 |
| Icons | lucide-react |
| Forms | react-hook-form + zod + @hookform/resolvers |
| Fonts | next/font/google (Bricolage Grotesque + DM Sans) |
| Utilities | clsx + tailwind-merge → cn() helper |
| Components | class-variance-authority (CVA) |
| Primitives | @radix-ui/react-accordion, dialog, tabs, select |
| Images | next/image |
| SEO | generateMetadata() + JSON-LD |

## Design System
### Colors
| Token | Value | Usage |
|---|---|---|
| --navy | #0B1628 | Primary background |
| --navy-mid | #132040 | Card backgrounds |
| --navy-light | #1A2D52 | Subtle sections |
| --teal | #00C9B1 | Primary accent, CTAs, icons |
| --teal-dark | #00A896 | Hover states |
| --teal-muted | rgba(0,201,177,0.12) | Tinted backgrounds |
| --white | #FFFFFF | Primary text |
| --gray-400 | #94A3B8 | Secondary text |
| --gold | #F59E0B | Trust badges, star ratings |

### Typography
- **Headings**: Bricolage Grotesque (400–800)
- **Body**: DM Sans (300–700)

### Design Details
- Dot grid background on hero (radial-gradient, teal, 5% opacity)
- Glassmorphism cards: semi-transparent bg + 1px border rgba(255,255,255,0.06) + backdrop-blur
- Card hover: -4px translateY + teal border glow
- CTA buttons: teal bg with glow shadow, pulse animation
- Teal left-border accent on feature items
- Generous whitespace

## Project Structure
```
src/
├── app/
│   ├── layout.tsx           (root layout + metadata + fonts + JSON-LD)
│   ├── page.tsx             (home)
│   ├── globals.css          (design tokens, base styles)
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── services/page.tsx
│   ├── pricing/page.tsx
│   ├── who-we-serve/page.tsx
│   ├── about/page.tsx
│   ├── resources/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/   (Navbar, Footer)
│   ├── home/     (Hero, TrustBar, Services, WhyUs, Specialties, Testimonials, CTABanner)
│   ├── sections/ (PageHero, ServiceCard, ContactForm)
│   └── ui/       (Button, Badge, Card, AnimatedSection)
└── lib/
    ├── utils.ts
    ├── services-data.ts
    └── specialties-data.ts
```

## Pages (7 total)
| # | Path | Description |
|---|---|---|
| 1 | `/` | Home — hero, trust bar, services, why us, specialties, testimonials, CTA |
| 2 | `/services` | 21 services in 5 tabbed categories (Radix Tabs) |
| 3 | `/pricing` | 3 pricing tiers + FAQ accordion |
| 4 | `/who-we-serve` | By organization (5) + by specialty (24) |
| 5 | `/about` | Mission, values, credentials, compliance |
| 6 | `/resources` | Blog, case studies, webinars, code lookup |
| 7 | `/contact` | Contact form (react-hook-form + zod) + info |

## SEO Strategy
- `generateMetadata()` on every page with unique title/description/OG
- JSON-LD: Organization, WebSite, Service, FAQPage schemas
- `sitemap.ts` + `robots.ts`
- Semantic HTML, single `<h1>` per page
- next/font for zero layout shift
- next/image for optimized images

## Accessibility
- Skip-to-main-content link
- ARIA labels on all icon buttons
- Keyboard navigation
- Color contrast ≥ 4.5:1
- Visible focus rings (teal)

## Responsive Breakpoints
- Mobile: 375px — single column, hamburger nav
- Tablet: 768px — 2-column grids
- Desktop: 1280px — full layout
- Wide: 1536px — max-w-[1280px] centered

## Development Checklist
- [ ] plan.md
- [ ] Project init + dependencies
- [ ] Design system (globals.css + tailwind.config.ts)
- [ ] UI components (Button, Badge, Card, AnimatedSection)
- [ ] Layout (Navbar + Footer + root layout)
- [ ] Data files (services-data, specialties-data)
- [ ] Home page (all 9 sections)
- [ ] Services page (21 services, 5 tabs)
- [ ] Pricing page (3 tiers + FAQ)
- [ ] Who We Serve page
- [ ] About page
- [ ] Resources page
- [ ] Contact page (validated form)
- [ ] SEO (metadata, JSON-LD, sitemap, robots)
- [ ] Assets (favicon, robots.txt)
- [ ] Build verification (zero TS errors)
