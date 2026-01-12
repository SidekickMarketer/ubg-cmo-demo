# CMO Vision for UB Greensfelder

A demonstration project by Kyle Naughtrip for the Chief Marketing Officer position at UB Greensfelder LLP.

**Live Site:** Deployed via Vercel (auto-deploys from GitHub)
**Repository:** https://github.com/SidekickMarketer/ubg-cmo-demo.git

## Overview

This project demonstrates strategic thinking, technical capability, and execution speed through a fully functional website that showcases a CMO vision for UB Greensfelder. The approach is grounded in research about how law firms actually grow—through referrals, attorney visibility, and client relationships—not vanity metrics.

### Key Research Insights Driving the Strategy

- **86%** of General Counsel find outside counsel through peer referrals
- **70%** choose their lawyer over the firm brand
- **70%** recommend firms based on service quality and responsiveness

## What's Included

| Page | Description |
|------|-------------|
| **Homepage** (`/`) | Strategic vision overview with research-backed messaging |
| **AI Content Tool** (`/tool`) | Working attorney thought leadership generator demo |
| **Referral Intel** (`/referrals`) | Referral tracking and cross-sell pipeline dashboard demo |
| **90-Day Plan** (`/roadmap`) | Strategic roadmap: Listen First → Build Engine → Connect to Revenue |
| **About Kyle** (`/about`) | Experience mapping to UB Greensfelder's needs |

## Quick Deploy

### Option 1: One-Click Deploy (Recommended)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 3: Run Locally

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Project Structure

```
ubg-cmo-demo/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── tool/page.tsx         # AI Content Tool Demo
│   │   ├── referrals/page.tsx    # Referral Intelligence Dashboard
│   │   ├── roadmap/page.tsx      # 90-Day Plan
│   │   ├── about/page.tsx        # About Kyle
│   │   ├── layout.tsx            # Root layout with navigation
│   │   └── globals.css           # Global styles
│   └── components/
│       └── Navigation.tsx        # Site navigation
├── docs/
│   ├── CONTENT.md                # All page text content
│   ├── STRATEGY.md               # Research insights and approach
│   └── PROJECT-SUMMARY.md        # Development session summary
├── package.json
└── README.md
```

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (auto-deploy from GitHub)
- **Brand Colors**: Navy (#1a2744), Gold (#c9a227), Light Blue (#4a6fa5)

## Documentation

See the `/docs` folder for detailed documentation:

- **[CONTENT.md](docs/CONTENT.md)** - Complete text content from all pages
- **[STRATEGY.md](docs/STRATEGY.md)** - Research insights and strategic approach
- **[PROJECT-SUMMARY.md](docs/PROJECT-SUMMARY.md)** - Development session summary

## What This Demonstration Proves

1. **Strategic Thinking** - Deep research on firm, merger, and competitive landscape
2. **Technical Capability** - Working AI tool prototypes, not just concepts
3. **Execution Speed** - From idea to deployed solution
4. **Revenue Focus** - Marketing connected to business development, not vanity metrics
5. **AI Fluency** - Built with Claude, demonstrating practical AI application

## Contact

Kyle Naughtrip
Founder, Sidekick Marketer

---

*This is a portfolio demonstration piece for the CMO position at UB Greensfelder LLP*
