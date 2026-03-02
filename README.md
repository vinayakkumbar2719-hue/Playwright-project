# Playwright Project

This is a minimal Playwright + TypeScript test project.

Quick start

Install dependencies and browsers:

```bash
npm install
npm run install:browsers
```

Run tests:

```bash
npm test
# headed
npm run test:headed
# show html report
npm run test:report
```

Typecheck only:

```bash
npm run typecheck
```

Project layout

- `playwright.config.ts` — Playwright configuration
- `tests/` — test files
- `tsconfig.json` — TypeScript configuration

Notes

- Add `src/pages/`, `src/fixtures/` and `src/utils/` as the suite grows.
- Add CI workflow to install browsers and run `npm test`.
