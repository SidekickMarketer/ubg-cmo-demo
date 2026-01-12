# CMO Vision for UB Greensfelder

A demonstration project by Kyle Naughtrip for the Chief Marketing Officer position at UB Greensfelder LLP.

## What's Included

1. **Homepage** - Overview of the strategic vision and key opportunities
2. **AI Tool Demo** - Working attorney thought leadership generator
3. **90-Day Roadmap** - Strategic plan tailored to UB Greensfelder
4. **About Kyle** - How my experience maps to UB Greensfelder's needs

## Quick Deploy to Vercel

### Option 1: One-Click Deploy (Recommended)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Click "Deploy"

That's it! Vercel will automatically detect Next.js and deploy.

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI if you don't have it
npm install -g vercel

# Deploy (from this directory)
vercel

# Follow the prompts - accept defaults
```

### Option 3: Run Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Project Structure

```
ubg-cmo-demo/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Homepage
│   │   ├── tool/page.tsx     # AI Tool Demo
│   │   ├── roadmap/page.tsx  # 90-Day Roadmap
│   │   ├── about/page.tsx    # About Kyle
│   │   ├── layout.tsx        # Root layout with navigation
│   │   └── globals.css       # Global styles
│   └── components/
│       └── Navigation.tsx    # Site navigation
├── package.json
└── README.md
```

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## About This Demonstration

This project was built to demonstrate:

1. **Strategic Thinking** - Tailored roadmap informed by market understanding
2. **Technical Capability** - Working AI tool prototype, not just a concept
3. **Execution Speed** - From idea to deployed solution
4. **Modern Marketing** - Leveraging AI for content creation at scale

## Contact

Kyle Naughtrip

---

*This is a portfolio demonstration piece for the CMO position at UB Greensfelder LLP*
