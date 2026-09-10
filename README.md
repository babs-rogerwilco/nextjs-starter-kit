# nextjs-starter-kit

A feature-based Next.js starter — App Router, TypeScript, Sass, Storybook,
Vitest + React Testing Library, Radix UI (primitives only, no theme
package), Zod, pnpm. Layout inspiration: isuzu.co.za, restructured as
`(vehicles)` / `(shopping-tools)` route groups.

## Prerequisites

- Node.js ≥ 20.9 (required by Next.js 16)
- pnpm ≥ 9 — `corepack enable && corepack prepare pnpm@latest --activate`

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm storybook  # http://localhost:6006
pnpm test       # vitest watch mode
```

---

## How this project was built, step by step

### Step 1. Scaffold with create-next-app

```bash
pnpm create next-app@latest nextjs-starter-kit \
  --typescript \
  --no-tailwind \
  --eslint \
  --app \
  --no-src-dir \
  --import-alias "@/*" \
  --use-pnpm

cd nextjs-starter-kit
```

| Flag | Why |
|---|---|
| `--typescript` | TypeScript project |
| `--no-tailwind` | Styling with Sass instead |
| `--eslint` | Next's flat ESLint config |
| `--app` | App Router |
| `--no-src-dir` | Keep `app/`, `features/`, `components/` at the root |
| `--import-alias "@/*"` | Clean absolute imports (`@/features/...`) |
| `--use-pnpm` | Locks the CLI to pnpm |

### Step 2. Add Sass

```bash
pnpm add -D sass
```

You might see a prompt from pnpm about approving build scripts (some packages run native/postinstall scripts, and pnpm blocks them by default for safety). If that happens:

```bash
pnpm approve-builds
```

Use the space bar to select sass (and anything else listed), then Enter to confirm.

- Rename `app/globals.css`-> `app/globals.scss`
- Update import in `app/layout.tsx`

### Step3. Create shared Sass abstracts

Every component's .module.scss should be able to reference the same color/spacing tokens without writing ../../../styles/variables relative paths everywhere.

Create this structure in the root folder:

```
styles/
└── _variables.scss
    _mixins.scss
    globals.scss
```

Now open `next.config.ts` and update it to:

```typescript
import type { NextConfig } from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')],
  },
};

export default nextConfig;
```

### Step 4: Install Radix UI (primitives only, no theme package)

```bash
pnpm add radix-ui
```

Used like this:

```bash
import { Dialog, Slot } from 'radix-ui';
```

---

The CLI will also ask about the React Compiler and whether to generate an
`AGENTS.md` — both are safe to accept or skip; neither affects anything
below.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
