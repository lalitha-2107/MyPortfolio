# Animated Portfolio

A minimal, dark-themed portfolio built with React, Framer Motion, and Tailwind CSS. Mobile-first, with smooth page-load and scroll-based animations.

## Tech stack

- **React** (functional components)
- **Framer Motion** (variants, stagger, `whileHover`, `whileInView`)
- **Tailwind CSS** (utility-first, dark theme)
- **Vite** (dev server and build)

## Folder structure

```
my app/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx
│   │   ├── Hero/
│   │   │   └── Hero.jsx
│   │   ├── Projects/
│   │   │   └── Projects.jsx
│   │   ├── About/
│   │   │   └── About.jsx
│   │   └── Contact/
│   │       └── Contact.jsx
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview   # optional: preview production build
```

## Sections

- **Navbar** — Fixed top nav with smooth appear; mobile hamburger with AnimatePresence.
- **Hero** — Staggered text reveal, intro line, headline, and CTA buttons.
- **Projects** — Scroll-triggered section; cards with hover lift and tag styling.
- **About** — Copy + skills grid; scroll-triggered stagger.
- **Contact** — CTA copy and email/LinkedIn links with hover states.

## Customization

- **Projects**: Edit `src/data/projects.js`.
- **Skills / about copy**: Edit `src/data/skills.js`.
- **Theme**: Adjust `tailwind.config.js` (e.g. `accent`, `dark.*`).
- **Fonts**: Change `index.html` preconnect and `tailwind.config.js` `fontFamily`.
