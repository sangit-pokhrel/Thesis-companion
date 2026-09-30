# Thesis Companion

Thesis Companion is a Next.js application for thesis and research support.

## Architecture

This project uses a single Next.js application. Frontend pages, Server Components, Client Components, and backend API endpoints all run from the same Next.js project and can be deployed as one Vercel project.

```text
Thesis-Companion-main/
├── app/
│   ├── api/
│   │   ├── contact/route.ts
│   │   └── health/route.ts
│   ├── about/
│   ├── contact/
│   ├── guidelines/
│   ├── resources/
│   ├── services/
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── lib/
├── public/
│   └── images/
├── package.json
├── next.config.ts
└── tsconfig.json
```

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm start
```

## Vercel

Use the repository root (`.`) as the Vercel Root Directory. No separate Express/Node backend project is required.

Next.js API endpoints are available under `/api/*`.
