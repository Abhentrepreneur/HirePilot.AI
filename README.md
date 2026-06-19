# HirePilot AI

Production-ready landing page for HirePilot AI — an AI-powered career platform for software engineers.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Shadcn UI**
- **Framer Motion**
- **Supabase** (waitlist storage)
- **Zod** + **React Hook Form** (form validation)

## Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file:

```env
# Supabase (required for waitlist)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_PROJECT_ID=your_clarity_project_id
NEXT_PUBLIC_POSTHOG_KEY=phc_your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com

# Site
NEXT_PUBLIC_SITE_URL=https://hirepilot.ai
```

## Supabase Setup

1. Create a project at [supabase.com](https://supabase.com)
2. Run the SQL in `supabase/schema.sql` in the SQL Editor
3. Copy your project URL and keys to `.env.local`

## Deploy to Vercel

```bash
npm run build
```

Push to GitHub and import to Vercel, or:

```bash
npx vercel
```

Add environment variables in the Vercel dashboard.

## Project Structure

```
app/
  api/waitlist/     # Waitlist API route
  privacy/          # Privacy policy page
  terms/            # Terms of service page
  layout.tsx        # Root layout with SEO
  page.tsx          # Landing page
components/
  analytics.tsx     # GA, Clarity, PostHog
  landing/          # Page sections
  layout/           # Navbar, Footer
  shared/           # Reusable components
  ui/               # Shadcn UI primitives
hooks/              # Custom React hooks
lib/                # Utils, constants, validations
types/              # TypeScript types
supabase/           # Database schema
```

## Features

- Dark mode premium SaaS design
- Animated hero with dashboard mockup
- Problem / Solution / How It Works sections
- Animated social proof statistics
- Waitlist form with validation & Supabase storage
- FAQ accordion
- SEO metadata, Open Graph, JSON-LD structured data
- Analytics integrations (GA, Clarity, PostHog)
- Fully responsive & accessible

## License

Private — HirePilot AI
