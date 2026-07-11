# Padmavati Enterprise Website

Healthcare design & print company website — Ahmedabad, India.
Built with Next.js 14 + Tailwind CSS.

## Running locally
```bash
npm install
cp .env.local.example .env.local   # fill in your keys
npm run dev
```
Open http://localhost:3000

## Updating content (no code knowledge needed)
| What to update | File to edit |
|---|---|
| Stats (customers, years, etc.) | lib/stats.ts |
| Portfolio items | lib/portfolio.ts |
| Services list | lib/services.ts |
| Testimonials | lib/testimonials.ts |
| Contact details | lib/contact.ts |
| Brand colors | tailwind.config.ts |

## Adding portfolio photos
1. Export as JPG, 800×600px minimum
2. Name it to match the `image` field in lib/portfolio.ts
3. Drop it in public/portfolio/
4. Photo appears automatically

## Deploying
Push to GitHub → Vercel auto-deploys on every push to main.
Add/update environment variables in Vercel dashboard → Settings → Environment Variables.

## Environment variables needed
```env
NEXT_PUBLIC_FORMSPREE_ID=        # from formspree.io
NEXT_PUBLIC_WHATSAPP_NUMBER=919426338720
NEXT_PUBLIC_SITE_URL=https://padmavatienterprise.com
```

