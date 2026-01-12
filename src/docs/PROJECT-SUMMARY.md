# UBG CMO Demo — Project Context

A CMO application website for UB Greensfelder LLP, built by Kyle Naughtrip.

---

## What This Is

This is a **personal pitch site** — not a product demo, not a portfolio. It's Kyle introducing himself as a CMO candidate and showing how he thinks by building working examples of what he'd actually do.

**Live Site:** Deployed on Vercel (auto-deploys from GitHub)
**Repository:** https://github.com/SidekickMarketer/ubg-cmo-demo.git

---

## Positioning & Tone

### The Vibe
**Confident outsider + collaborative partner.** Not defensive about lacking law firm experience. Not arrogant about bringing fresh perspective. Just: "Here's how I think, here's what I'd do."

### Key Framing
- This is a person introducing themselves, not software being sold
- The tools/demos are proof of thinking, not the main event
- Research informs the approach but doesn't dominate with stat-dropping
- No highlighting experience gaps — let interviewers bring that up

### What We're NOT Doing
- Not being defensive ("I know I don't have law firm experience, but...")
- Not overclaiming ("I'll transform everything!")
- Not insulting their current marketing ("What if your marketing actually worked?")
- Not drowning in stats to seem credible

---

## Site Structure

| Page | Route | Purpose |
|------|-------|---------|
| **Homepage** | `/` | Personal intro: "I'm Kyle Naughtrip. I want to be your next CMO." |
| **AI Content Tool** | `/tool` | Working demo — generate attorney thought leadership content |
| **Referral Intel** | `/referrals` | Working demo — referral tracking dashboard concept |
| **90-Day Plan** | `/roadmap` | Research-backed roadmap: Listen → Build → Connect to Revenue |
| **About Kyle** | `/about` | Experience mapped to what the CMO role requires |

---

## The Homepage Hero

The intro sets the tone for everything:

> **I'm Kyle Naughtrip.**
>
> I want to be your next CMO—so I built this to show you how I think.
>
> The tools, the strategy, the 90-day plan. Everything here is what I'd actually do.

Kyle's headshot appears on the right. Clean, personal, direct.

---

## Research Foundation

The strategy is grounded in research about how law firms actually grow:

| Stat | Source | Implication |
|------|--------|-------------|
| 86% of GC relationships start with peer referrals | BTI Consulting | Focus on enabling referrers, not content volume |
| 70% choose the lawyer, not the firm | BTI/Thomson Reuters | Attorney visibility > firm brand campaigns |
| 70% recommend based on service quality | BTI Consulting | Service experience drives growth more than cost |
| Only 7% of firms use CRM effectively | GavelGrow | Huge operational opportunity |

Full citations in `STATISTICS-SOURCES.md`.

---

## The 90-Day Plan Structure

**Phase 1: Listen First (Days 1-30)**
- Stakeholder interviews, CRM audit, referral mapping

**Phase 2: Build the Engine (Days 31-60)**
- Fix foundations, create scalable systems

**Phase 3: Connect to Revenue (Days 61-90)**
- Cross-sell campaigns, attorney visibility programs, measurable pipeline

Each phase has Foundation tasks (fix what's broken) and Elevation tasks (build what's new).

---

## Tech Stack

| Component | Details |
|-----------|---------|
| Framework | Next.js 16 with App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Deployment | Vercel (auto-deploys from main branch) |
| Built With | Claude (AI-assisted development) |

### Brand Colors (UBG)
- **Navy:** #1a2744 (primary)
- **Gold:** #c9a227 (accent)
- **Light Blue:** #4a6fa5 (secondary)

---

## Key Files

```
src/app/
├── page.tsx              # Homepage
├── tool/page.tsx         # AI Content Tool
├── referrals/page.tsx    # Referral Intelligence Dashboard
├── roadmap/page.tsx      # 90-Day Plan
├── about/page.tsx        # About Kyle
├── layout.tsx            # Root layout
└── globals.css           # Global styles + animations

src/components/
├── Navigation.tsx        # Site navigation
└── Footer.tsx            # Site footer

src/docs/
├── PROJECT-SUMMARY.md    # This file
├── STATISTICS-SOURCES.md # Stat citations for interview prep
├── CONTENT.md            # Original content reference
├── STRATEGY.md           # Strategic approach documentation
└── deep research/        # Source research documents

public/
└── kyle.jpeg             # Headshot for homepage
```

---

## Design Philosophy

1. **Personal over product** — This is Kyle introducing himself, not a SaaS landing page
2. **Show, don't just tell** — Working tools demonstrate capability
3. **Research-informed, not research-heavy** — Stats support the approach but don't dominate
4. **Clean and confident** — Professional without being stiff, modern without being trendy

---

## Deployment

- **GitHub:** Push to `main` branch
- **Vercel:** Auto-deploys on push
- **Build:** `npm run build` to verify before pushing

---

## For Anyone Reviewing This

If you're looking at this project to understand what Kyle built:

1. **Start at the homepage** — It frames everything
2. **Try the tools** — They're functional demos, not mockups
3. **Read the 90-day plan** — It shows strategic thinking grounded in research
4. **Check the About page** — Experience mapped to the role

The whole site was built with AI assistance (Claude) — which itself demonstrates one of the capabilities Kyle would bring to the CMO role.

---

*Last updated: January 2025*
