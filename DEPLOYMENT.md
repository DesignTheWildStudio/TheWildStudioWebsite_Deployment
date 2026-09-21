# The Wild Studio — deployment notes

The live site is hosted on Webtold (site "The Wild Studio", slug `the-wild-studio`):

- https://www.thewildstudio.co/ (primary)
- https://the-wild-studio.webtold.app/ (redirects to the primary domain)

This repository mirrors the hand-authored source of that site so text and code
changes are tracked in git. It is an Astro project; the portfolio pages live as
plain HTML under `public/`.

## What is in this repo

- `public/*.html` — the site pages (home, work, project, about, services, contact)
- `public/projects-data.js` — the single source of truth for every portfolio
  project: name, services, year, card image and the **overview blurb** shown on
  the project page and on work-grid hover cards
- `public/*.js`, `public/responsive.css` — shared behaviour and styles
- `src/`, `astro.config.mjs`, `package.json` — the Astro scaffold Webtold builds

## What is NOT in this repo

- `public/media/` — the image library (hundreds of `.webp` files) is managed in
  Webtold's media store
- `public/uploads/` — video, font and other uploaded binaries
- `public/fig-*/components.bundle.js` — generated Figma case-study bundles

Those files are large or binary and are kept on Webtold. Use the Webtold
`export_site` action to get a complete, buildable copy including them.

## Editing a project overview

Edit the `blurb` string for the project's entry in `public/projects-data.js`,
apply the same edit on Webtold (`edit_file` on `public/projects-data.js`), bump
the `?v=` cache-buster on the `projects-data.js` script tag in
`public/project.html` and `public/work.html`, then `publish`. Source edits on
Webtold are not live until a publish runs.
