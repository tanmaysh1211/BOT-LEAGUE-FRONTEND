# BotLeague — Landing Page

A frontend-only recreation of the BotLeague landing page, built with **React 19 + TypeScript + Tailwind CSS v4** (Vite).

## Stack
- Vite + React + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- No backend — all data lives in `src/data/content.ts`, forms are client-side only (no network calls)

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  components/      # Navbar, Hero, CompetitionsEvents, UserJourney,
                    # WhatIsBotLeague, Categories, Disciplines,
                    # WhyRegister, JoinEcosystem, SignupForm, Sponsors, Footer
  data/content.ts  # all copy/content — edit this to change events, categories, etc.
  types/index.ts   # shared TypeScript interfaces
  index.css        # Tailwind import + design tokens (@theme)
  App.tsx
  main.tsx
```

## Notes
- All colors/fonts are design tokens in `src/index.css` under `@theme` (Tailwind v4 style) — change them there to re-theme the whole site.
- The "Join the Ecosystem" signup forms validate input and show a client-side success state; wire `handleSubmit` in `SignupForm.tsx` to a real API when you add a backend.
- No external image assets are used — visuals (arena graphic, discipline cards, bracket) are built with CSS/SVG so the project has zero image dependencies.
- Fonts (Anton, Rajdhani, Inter) load from Google Fonts in `index.html`.
