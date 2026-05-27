# Luban Creations — Landing Page

> 从一间店到连锁，我们只做这一件事。

Official landing page for **Luban Creations Sdn Bhd** (SSM 1293907-A) — Malaysia's chain incubation and commercialization firm.

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Font | Inter (Google Fonts) |
| Icons | Lucide React |
| Deployment | Vercel (recommended) |

---

## Design System

| Token | Value |
|-------|-------|
| Primary (Black) | `#1C1917` |
| Gold (CTA) | `#CA8A04` |
| Background | `#FAFAF9` |
| Secondary Text | `#44403C` |

---

## Project Structure

```text
app/
├── layout.tsx          # Metadata + Inter font
├── page.tsx            # Main landing page (7 sections)
└── globals.css         # Tailwind v4 + CSS theme tokens

components/
├── nav.tsx             # Sticky navbar with scroll blur
├── filter-section.tsx  # Section 5 — "6" count-up animation
└── scroll-reveal.tsx   # Shared scroll-triggered fade-in wrapper

public/
├── logo.png            # Luban Creations logo
├── case-bakery.jpg     # Case study — F&B
├── case-skincare.jpg   # Case study — Beauty
├── case-science.jpg    # Case study — Innovation
├── sinchew.png         # Sin Chew Daily logo
└── chinapress.svg      # China Press logo
```

---

## Page Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | Hero | Main tagline + WhatsApp CTA |
| 2 | 90% Hook | Loss aversion hook on dark background |
| 3 | What We Do | 3-line company description |
| 4 | 4 Phases | Restructure → Reposition → First Store → Scale |
| 5 | Filter | "6 projects/year" count-up — the key differentiator |
| 6 | Case Studies | 3 industry cases + media logos |
| 7 | CTA | Final WhatsApp + form CTA |

---

## Getting Started

```bash
# Clone
git clone https://github.com/mrtonymu/Luban-Creations.git
cd Luban-Creations

# Install
npm install

# Dev
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## WhatsApp CTA

All CTA buttons link to:

```text
https://wa.me/60111216693?text=你好 Eddy，我想了解 Luban Creations 的服务
```

To change the number or message, update the `WA_LINK` constant in `app/page.tsx`.

---

## Deploy

Recommended: **Vercel**

```bash
npm install -g vercel
vercel
```

Or connect the GitHub repo directly at [vercel.com/new](https://vercel.com/new).

> Don't forget to bind a custom domain (e.g. `luban.com.my`) after deployment.

---

## What's Next (Complete Version)

- [ ] Privacy Policy page (`/privacy`)
- [ ] Terms of Service page (`/terms`)
- [ ] Project assessment form (replace link to old site)
- [ ] OG image 1200×630 for WhatsApp/social previews
- [ ] GA4 analytics tracking (WhatsApp clicks, form submits)
- [ ] Custom domain binding
- [ ] Mobile testing on real devices

---

## Contact

**Luban Creations Sdn Bhd**
A-10-02, Menara The Met, Jalan Dutamas 2, 50480 Kuala Lumpur
WhatsApp: 011-1121 6693
