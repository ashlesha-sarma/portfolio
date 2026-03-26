# Portfolio Website v1

A premium personal portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Design Language

- **Minimal editorial** — clean off-white canvas with subtle grid overlay
- **Liquid glass UI** — Apple-style semi-transparent surfaces on navbar, buttons, and modals
- **Scrapbook aesthetic** — tape strips, wax seal, paper textures (used sparingly)
- **macOS folder UI** — interactive project folders with modal drill-down
- **Typography** — Cormorant Garamond (display) × DM Sans (body) × DM Mono (labels)

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Components | Radix UI primitives |
| Icons | Lucide React |
| Language | TypeScript |

## Color Palette

| Token | Value | Use |
|---|---|---|
| `--bg` | `#FAFAF7` | Page background |
| `--grid` | `#DCEBFF` | Grid lines, borders |
| `--accent` | `#AFCBFF` | Primary accent |
| `--accent-2` | `#6B8FB3` | Secondary accent, text |
| `--ink` | `#1A1A1A` | Body text |
| `--muted` | `#BFC7D5` | Soft grey |

## Sections

1. **Navbar** — Sticky, liquid glass, transparent-to-visible on scroll
2. **Hero** — Typewriter role animation, wax seal decoration, CTA buttons
3. **About** — Paper card with pinned tape, focus areas grid
4. **Skills** — macOS folder grid (6 categories)
5. **Projects** — macOS folder UI → liquid glass modal with project details
6. **Experience** — Vertical timeline with paper cards
7. **Contact** — Two-column layout, form with live validation + API
8. **Footer** — Minimal, clean

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Contact API

The contact form POSTs to `/api/contact` and validates:
- Name (≥ 2 characters)
- Email (valid format)
- Message (≥ 10 characters)

To enable email delivery, integrate a service like [Resend](https://resend.com) or [Nodemailer](https://nodemailer.com) in `app/api/contact/route.ts`.

## Customization

1. **Personal info** — Update name, bio, roles in each section component
2. **Projects** — Edit the `folders` array in `components/sections/Projects.tsx`
3. **Experience** — Edit the `jobs` array in `components/sections/Experience.tsx`
4. **Skills** — Edit the `skills` array in `components/sections/Skills.tsx`
5. **Colors** — Adjust tokens in `tailwind.config.ts` and `globals.css`
6. **Fonts** — Change Google Fonts import in `globals.css` + update `tailwind.config.ts`

## License

MIT — feel free to use as a base for your own portfolio.
