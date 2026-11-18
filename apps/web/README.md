# Prompt Shelf — Web (`apps/web`)

Next.js frontend for **Prompt Shelf**, a prompt library for saving, collecting, and reusing prompts.

## Scripts

From this directory:

```bash
npm run dev          # Start Next.js dev server on port 3000
npm run build        # Create a production build
npm run start        # Start the production server
npm run lint         # Run ESLint
npm run check-types  # Generate Next.js types and run TypeScript checks
```

From the repository root (recommended in this monorepo):

```bash
npm run dev
npx turbo dev --filter=web
npx turbo build --filter=web
npx turbo lint --filter=web
npx turbo check-types --filter=web
```

## Local development

1. Install dependencies from the repo root: `npm install`
2. Start the app: `npm run dev` (root) or `npx turbo dev --filter=web`
3. Open [http://localhost:3000](http://localhost:3000)

## Key files

- `app/page.tsx` — main Prompt Shelf homepage
- `app/layout.tsx` — root layout
- `app/globals.css` — global styles
- `public/` — static assets
