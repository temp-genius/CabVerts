# CabVerts

A single-page marketing website for CabVerts — a Dublin-based taxi advertising platform that pays drivers a monthly fee to display brand advertising on their vehicle.

## Tech Stack

- **React + Vite** — fast modern frontend
- **Tailwind CSS** — utility-first styling
- **Supabase** — backend database for driver sign-up form submissions
- **Vercel** — deployment platform

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/temp-genius/CabVerts.git
cd CabVerts
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example env file and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

### 4. Create the Supabase table

In your Supabase dashboard, run this SQL to create the `driver_signups` table:

```sql
create table driver_signups (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default now(),
  full_name text not null,
  email text not null,
  phone text not null,
  vehicle_make_model text not null,
  vehicle_year integer,
  operating_area text not null,
  pco_licence text
);

-- Enable Row Level Security
alter table driver_signups enable row level security;

-- Allow inserts from anon users (for the public form)
create policy "Allow anon inserts" on driver_signups
  for insert to anon
  with check (true);
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

## Deployment on Vercel

1. Push the repo to GitHub
2. Connect to [Vercel](https://vercel.com) and import the repository
3. Add environment variables in Vercel project settings:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy — Vercel auto-detects the Vite build config

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx            # Orange gradient hero section
│   ├── HowItWorks.jsx      # 3-step process section
│   ├── WhatYouEarn.jsx     # Earnings stats and cards
│   ├── WhatsInvolved.jsx   # 4-item grid with icons
│   ├── AboutCabverts.jsx   # Company info + trust badges
│   ├── WhatHappensNext.jsx # Post-registration steps
│   ├── FAQs.jsx            # Accordion FAQ section
│   ├── SignUpForm.jsx      # Driver registration form (Supabase)
│   └── Footer.jsx          # Footer
├── lib/
│   └── supabase.js         # Supabase client
├── App.jsx
├── main.jsx
└── index.css
```
