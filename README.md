# Ibrahim Bilal — Portfolio

A dark-themed, animated developer portfolio built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.

## Running it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
npm run preview   # serve the production build locally to check it
```

The built site is written to `dist/`. It's a static site — deploy the contents of `dist/` anywhere that serves static files (Vercel, Netlify, GitHub Pages, S3, etc.).

## Before you publish this

Your real GitHub, LinkedIn, email, experience, education and project details (with real screenshots) are all wired in from your resume now. One thing is still a placeholder — open `src/data/portfolio.ts`, marked with a `// Placeholder` comment:

- **Project links** — the `githubUrl` / `liveUrl` on all three projects use your real GitHub username but guessed repo names and made-up live URLs, since your resume didn't include the actual repo/deployment links. Update these once you have them.
- **Stats** — the numbers in `stats` (projects completed, years of experience, etc.) are reasonable placeholders, not figures pulled from anywhere specific — adjust if you'd like different numbers shown.

## Project structure

```
src/
  assets/            your photo
  components/
    layout/          Navbar, Footer, ScrollProgress, BackToTop
    sections/        Hero, About, Education, Skills, Projects, Experience, Services, Contact
    ui/              shared building blocks (Button, Modal, glass cards, etc.)
  data/portfolio.ts  all site copy and content lives here
  hooks/             theme, scroll-spy, and count-up animation hooks
  types/             shared TypeScript types
  index.css          design tokens (colors, fonts) via Tailwind's @theme
```

To change colors or fonts globally, edit the `@theme` block at the top of `src/index.css` — every component reads from those same CSS variables, including the light-mode theme (defined right below it under `html.light`).

## Notes on a few design choices

- **Design motif** — nav links and section headers are styled as file-path-like labels (`/about`, `/contact`) in monospace, a light nod to the API work without the GET/POST verbs or status codes that were in an earlier draft.
- **Project thumbnails** — Wheels of Australia, UpDesk and the AI Search platform all use real screenshots you provided (see `src/components/ui/ProjectThumbnail.tsx` — it renders a real `<img>` with matching browser-chrome framing when a project has a `screenshot`, and falls back to an abstract gradient mock for any project that doesn't).
- **Contact form** — the form validates and shows a success state, but isn't wired to a backend yet. Connect it to your own API, or a service like Formspree or EmailJS — see the `handleSubmit` function in `src/components/sections/Contact.tsx`.
- **Icons** — the version of `lucide-react` used here doesn't ship GitHub/LinkedIn glyphs, so those two are small hand-written SVGs in `src/components/ui/BrandIcons.tsx`.
