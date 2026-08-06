# Evergreen Tree Service Website

A single-page website for Evergreen Tree Service — a local arborist company based in Hamilton, Ontario.

## Structure

```
evergreen-tree-service/
├── index.html        ← Main page
├── style.css         ← All styles
├── script.js         ← Carousel, FAQ accordion, forms, nav
└── images/
    ├── hero.jpg              ← Hero background image
    ├── logo-monogram.svg     ← Small logo for nav
    ├── logo-full.svg         ← Full logo for hero
    ├── logo-footer.svg       ← Footer logo
    └── carousel/
        ├── t1.jpg – t5.jpg   ← About section carousel
        └── t6.jpg – t9.jpg   ← Story section carousel
```

## Images needed

Replace placeholder images with real photos:

- `images/hero.jpg` — a dramatic landscape/tree photo (recommended: 1920×1080)
- `images/logo-monogram.svg` — monogram logo (used in nav)
- `images/logo-full.svg` — full horizontal logo (used in hero)
- `images/logo-footer.svg` — footer version of logo
- `images/carousel/t1.jpg` through `t9.jpg` — job photos, team shots, before/after

If no logo SVGs are provided, the site gracefully falls back to text.

## Sections

1. **Hero** — full-screen with tagline and CTA
2. **About** — description + image carousel
3. **Services** — 6 service cards with icons
4. **Mailing List** — email subscribe form
5. **Location** — map embed + contact details
6. **Pricing** — 3-tier pricing cards
7. **FAQs** — accordion
8. **Our Story** — founder bio + second carousel
9. **Our Commitment** — rules/values list
10. **Contact** — quote request form
11. **Footer** — social links, legal

## Customisation

- Update contact details in `index.html` (email, address, phone, social handles)
- Replace the Google Maps embed URL with your actual location
- Update booking/quote links
- Swap placeholder prices with real pricing
