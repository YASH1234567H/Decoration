# Maison Aurea: decoration studio site (React + Vite)

    npm install
    npm run dev      # local dev server
    npm run build    # production build in /dist

## Replace the imagery
All images are generated placeholders in `public/images/` (SVG, so nothing is ever missing).
Drop real photos in with the same file names (or edit the paths in `src/data/content.js`).
For production, export WebP/AVIF at 800w / 1200w / 1920w and use `srcset` on the `<img>` tags.

## Edit content
Brand name, contact details, services, packages, gallery and testimonials all live in `src/data/content.js`.
