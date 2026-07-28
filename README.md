# drdonoso.dev

Personal portfolio of **David Rodríguez Donoso** — Cloud & DevOps Consultant at Microsoft, based in Barcelona.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), deployed as a fully static site.

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
```

| Command | Action |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build the static site to `dist/` |
| `npm run preview` | Preview the production build locally |

## Editing the content

Almost everything lives in a single file: **`src/config.ts`**.

| Field | What it controls |
|---|---|
| `name`, `title`, `company` | The hero heading and the page `<title>` |
| `accentColor` | Decorative accent — hero gradient, section underlines, timeline dots |
| `accentTextColor` | Darker shade used for small text so it clears WCAG AA (4.5:1) |
| `social` | Social links. Add a key and its icon appears automatically |
| `aboutMe`, `skills`, `languages` | The About section |
| `projects` | Project cards |
| `experience`, `education` | Timeline sections |
| `certifications` | Certification cards |
| `resumeUrl` | Target of the "View my CV" button |

### Adding a social network

Add the key to `social` in `src/config.ts`. Supported keys are defined in
`src/socialIcons.ts` — anything not listed there is skipped silently.

```ts
social: {
  github: "https://github.com/DrDonoso",
  bluesky: "https://bsky.app/profile/...",  // needs an icon in socialIcons.ts
}
```

## Project structure

```
src/
├── components/
│   ├── Header.astro          Sticky nav
│   ├── Hero.astro            Landing section
│   ├── About.astro           Bio, skills, languages
│   ├── Projects.astro        Project cards
│   ├── Experience.astro      Work timeline
│   ├── Education.astro       Education timeline
│   ├── Certifications.astro  Certification cards
│   ├── Footer.astro          Footer nav
│   └── SocialLinks.astro     Shared social icon row
├── config.ts                 ← all the content
├── socialIcons.ts            Brand icon paths
├── pages/index.astro         The single page
└── styles/global.css
```

## Credits

Based on the [devportfolio](https://github.com/RyanFitzgerald/devportfolio)
template by Ryan Fitzgerald (MIT), with a shared social-links component,
certifications and languages sections, location fields on experience entries
and a split accent-colour token for accessibility.

Brand icons from [Simple Icons](https://simpleicons.org) (CC0-1.0) and
[Bootstrap Icons](https://icons.getbootstrap.com) (MIT).

## License

MIT — see [LICENSE.md](LICENSE.md).
