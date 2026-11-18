# Prompt Shelf

A Next.js prompt library for browsing and organizing reusable prompts.

Prompt Shelf is a Turborepo monorepo containing the Prompt Shelf web app — a landing/homepage experience for saving prompts, organizing them into collections, marking favourites, and managing public/private visibility with reusable prompt variables.

## What’s inside

### Apps

- `apps/web`: Next.js web app (Prompt Shelf UI)

### Packages

- `packages/ui`: shared React component library
- `packages/eslint-config`: shared ESLint configuration
- `packages/typescript-config`: shared TypeScript configuration

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Turborepo](https://turborepo.dev/)

## Prerequisites

- **Node.js**: `>=24` (see `engines` in `package.json`)
- **npm**: `11.20.0` (see `devEngines.packageManager` in `package.json`)

## Getting started

Install dependencies from the repository root:

```bash
npm install
```

> If your installed npm version differs from the project’s `devEngines` requirement, you can run installs with the pinned version via `npx --yes npm@11.20.0 install`.

## Development

Run all workspace dev tasks:

```bash
npm run dev
```

Run only the web app:

```bash
npx turbo dev --filter=web
```

The web app runs at [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Build only the web app:

```bash
npx turbo build --filter=web
```

## Quality checks

```bash
npm run lint         # Lint all workspaces
npm run check-types  # Type-check all workspaces
npm run format       # Format with Prettier
```

## Repository structure

```text
.
├─ apps/
│  └─ web/                 # Next.js app
├─ packages/
│  ├─ ui/                  # Shared UI components
│  ├─ eslint-config/       # Shared ESLint config
│  └─ typescript-config/   # Shared TS config
├─ turbo.json              # Turborepo task pipeline
└─ package.json            # Workspace root config
```

## License

No license file is currently included in this repository.
