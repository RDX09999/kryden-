# KRYDEN Travel Platform

A premium travel-booking web experience for KRYDEN built with Next.js 15 App Router, TypeScript, Tailwind CSS, Framer Motion, Prisma, PostgreSQL, and Clerk-ready authentication.

## What is included

- Premium white-first UI with subtle blue and purple gradients
- Sticky navigation, theme switcher, hero slider, destination carousel, package cards, category blocks, world map, FAQs, blog previews, newsletter section, and footer
- Black KRYDEN logo asset generated from your uploaded logo and wired into the navbar, loading screen, favicon, and footer
- Prisma schema for users, destinations, packages, bookings, wishlist, invoices, currencies, blogs, FAQs, banners, offers, and homepage sections
- API route for exchange rates
- Admin dashboard and auth page scaffold
- No PHP

## Important notes

- Browser devtools cannot be reliably blocked on the web. You can deter casual tampering, but you cannot securely prevent inspect tools in a normal browser.
- Testimonials are intentionally empty until you provide real reviews.
- This scaffold uses fallback content so the UI can render before the database is connected.
- Replace `https://kryden.example` with your real domain in `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`, and `lib/seo.ts`.

## Setup

```bash
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
```

## Environment variables

Create `.env`:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DB"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=""
CLERK_SECRET_KEY=""
NEXT_PUBLIC_APP_URL="https://your-domain.com"
```

If you connect Clerk, configure Google login in the Clerk dashboard and route the `/sign-in` page to your auth flow.

## Deployment

### Vercel
1. Push the repository to GitHub.
2. Import it in Vercel.
3. Set the environment variables.
4. Run Prisma migrations on your production database.
5. Deploy.

### Other Node.js hosts
- Node 20+ recommended
- Build command: `npm run build`
- Start command: `npm run start`

## Recommended next steps

- Hook the sections to database queries in `lib/content.ts`
- Replace hardcoded fallback data with Prisma queries
- Build the real admin CRUD screens
- Add payment and invoice flows
- Add rate sync jobs for currencies
- Add image upload with Cloudinary
- Add validation with Zod for every mutation
