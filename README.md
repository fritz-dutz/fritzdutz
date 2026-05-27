# fritzdutz.com

Personal website — bio, experience, writing & media consumption.

**[→ fritzdutz.com](https://fritzdutz.com)**

---

## Stack

- **Framework** — React 18 + TypeScript
- **Styling** — Tailwind CSS + shadcn/ui
- **Build** — Vite
- **Deployment** — Vercel

## Pages

| Route | Description |
|---|---|
| `/` | Home — bio, stats & links |
| `/experience` | Work history & side projects |
| `/blogs` | Writing |
| `/consumption` | Books, podcasts & media |

## Running locally

```bash
bun install
bun dev
```

Open [http://localhost:8080](http://localhost:8080).

## Project structure

```
fritzdutz/
├── config/             # Vite, Tailwind, PostCSS, ESLint, TypeScript configs
├── public/             # Static assets (favicon, images)
└── src/
    ├── assets/         # Images used in pages
    ├── components/     # Shared components + shadcn/ui primitives
    ├── hooks/          # Custom React hooks
    ├── lib/            # Utility functions
    └── pages/
        ├── blog/       # Individual blog posts
        ├── Blogs.tsx
        ├── Consumption.tsx
        ├── Experience.tsx
        └── Index.tsx
```
