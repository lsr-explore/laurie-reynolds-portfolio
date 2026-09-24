This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Development

Requires Node 24 (`.nvmrc`) and pnpm via Corepack (`corepack enable`; version pinned in `package.json`).

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `pnpm format` | Format and apply safe fixes with Biome (also runs on save in VS Code) |
| `pnpm format:check` | Check formatting without writing |
| `pnpm lint` | ESLint, including `jsx-a11y` recommended rules as errors |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm e2e` | Build, start, and run the axe WCAG 2.2 AA scan on every route (Playwright) |

A Husky pre-commit hook runs `format:check`, `lint`, and `typecheck`. CI runs those plus the
axe scan on every PR and push to `main`. Dependabot opens grouped weekly updates for npm packages
and GitHub Actions.

Run `pnpm exec playwright install chromium` once before the first `pnpm e2e`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
