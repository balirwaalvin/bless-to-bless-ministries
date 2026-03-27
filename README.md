# Bless to Bless Ministries

A professional, dynamic, and highly animated web platform for **Bless to Bless Ministries**.

## Features
- Dynamic animations powered by Framer Motion.
- Warm earthy palette with an accessible, responsive layout.
- Next.js App Router architecture for performance and maintainability.

## Tech Stack
- Framework: Next.js (App Router)
- Styling: Tailwind CSS v4
- Animations: Framer Motion
- Icons: Lucide React

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Static Build (DigitalOcean Ready)

This project is configured for static export in `next.config.ts` using:

- `output: "export"`
- `images.unoptimized: true`
- `trailingSlash: true`

Generate static files:

```bash
npm run build
```

The deployable output is written to the `out/` directory.

## DigitalOcean Static Site Settings

For an App Platform Static Site deployment:

- Source Directory: `site`
- Build Command: `npm install && npm run build`
- Output Directory: `out`

If you deploy from inside the `site` folder directly, omit the Source Directory value.
