# H.Studio

> A creative studio crafting beautiful digital experiences — branding, web design, and engineering.

## Brand Identity

- **Personality:** Bold, editorial, minimal. Confident but not flashy. Feels like a world-class creative agency.
- **Colors:** Black (#000), white (#fff), near-black (#1f1f1f), light greys for photo backgrounds
- **Fonts:** Space Grotesk (headlines + nav), DM Sans (body text), system monospace for small bracketed labels like `[ Hello i'm ]`
- **Style notes:** Large typography, mix-blend-overlay effects, bracketed labels `[ like this ]`, numbered sections (001, 002...), editorial spacing

## Pages

- **Homepage** (`/`) — Full portfolio homepage, being built section by section from Figma design

## Sections (Homepage)

1. **Hero** ✅ — Full-bleed photo background, nav, large name headline with blend effect, studio description
2. **Bio strip** — Editorial type lines: "A creative director / Photographer / Born & raised on the south side of chicago."
3. **About** — Bracketed paragraph text + tall portrait photo
4. **Full-width photo** — Atmospheric separator
5. **Services** — 4 services: Brand Discovery, Web design & Dev, Marketing, Photography
6. **Selected Work** — 2-column staggered portfolio grid (4 projects)
7. **Testimonials** — Scattered testimonial cards
8. **News** — 3-column news cards
9. **Footer** — CTA, social links, large "H.Studio" wordmark

## Components

- **Navbar** — Logo left, nav links center (About, Services, Projects, News, Contact), "Let's talk" pill button right

## Recent Changes

- 2026-04-28: Created SITE.md and built Hero section from Figma design

## How to Customize

- To change the hero photo: replace the image URL in `app/page.tsx` (note: the current URL is a temporary Figma asset — you'll want to add your own photo to the `public/` folder)
- To change the name: find "Harvey Specter" in `app/page.tsx`
- To change nav links: find the links array in the Hero section of `app/page.tsx`
- To change colors: edit `app/globals.css`
