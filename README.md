# ARWEBX — Modern Web Development Studio

ARWEBX (`https://arwebx.in`) is a high-performance web development studio specializing in fast, modern, conversion-focused websites and web applications for growing businesses.

---

## 🚀 Today's Work Summary (Pin-to-Pin Log)

### 1. 3D Hero Carousel & Visual Effects (React Bits Pro Hero 7 Inspired)
- **Continuous 3D Arc Loop**: Built a 3D cylindrical track powered by continuous `requestAnimationFrame` animation.
- **Seamless Infinite Scrolling**: Rendered 18 items (`DISPLAY_ITEMS` duplicated 3x) with off-screen wrapping and smooth edge fading for non-stop rotation (hover-pause disabled per requirement).
- **Laser Wipe Reveal Effect**: Implemented pixel-precise dual-layer card structure:
  - Base layer: `.layer-grayscale` (`grayscale(1) contrast(1.1)`).
  - Top layer: `.layer-color` (`grayscale(0)`).
  - Real-time `clip-path: inset(0 0 0 ${revealPercent}%)` calculation against the central vertical laser beam (`laserX = containerWidth / 2`).
- **Hero Title Highlight**: Title updated to *"Turn your online presence into a reason customers choose you"* with custom Indigo-to-Cyan gradient highlight.
- **Hero Feature Highlights Row**: Added three key feature badges below CTA buttons:
  - Green Checkmark: `Responsive Design`
  - Blue Mobile Icon: `Mobile First Approach`
  - Green WhatsApp Icon: `WhatsApp Enquiries`

### 2. Branding & Asset Updates
- **Logo Integration**: Replaced text logo (`ARWEBX`) in both **Navbar** and **Footer** with the official WebP logo from `src/assets/logo/logo.png`.
- **Favicon & Tab Icon**: Updated browser tab favicon to `/favicon.ico` and `/favicon.svg`.
- **Open Graph & Social Preview**: Configured Open Graph (`og:image`) and Twitter Card (`twitter:image`) meta tags pointing to `/og_img.png` (`https://arwebx.in/og_img.png`).
- **Global Meta Title**: Updated site title across `index.html` and `SEOHead` component to:
  `ARWEBX | Modern Websites for Growing Businesses`

### 3. Services Page & Data Offerings (`/services`)
- **Updated Services Dataset** (`src/data/services.js`):
  1. **Business Websites** → `business.jpg`
  2. **Landing Pages** → `landing.jpg` (Custom generated SaaS mockup)
  3. **Clinic Websites** → `clinic.jpg`
  4. **Packers & Movers Websites** → `packers.jpg`
  5. **Restaurant Websites** → `restaurant.jpg`
- **Real Website Mockup Cards**: Replaced icon placeholders on the Services page with interactive mockup cards (`.service-image-card`).
- **Cleaned Layout**: Removed redundant top grid cards, keeping the detailed section layout.

### 4. Home Page Improvements (`/`)
- **Top 3 Services Preview**: Configured "What Arwebx Can Build" section to display only the top 3 cards (`services.slice(0, 3)`).
- **Header Alignment & Action**: Removed "Learn more →" links inside `ServiceCard` and added a clean `"View All →"` button aligned opposite to the left-aligned section title.

### 5. Layout Standardization & Responsive Alignment
- **Full-Width Edge Alignment**: Upgraded section containers across **Navbar**, **Home**, **Services**, **About**, **Agreement**, **Contact**, and **Footer** to `container-fluid px-3 px-md-5`.
- **Left-Aligned Headings**: Standardized section titles across all pages to left alignment (`align="start"`).
- **Footer Theme Matching**: Styled Footer with the same clean, light surface background (`var(--color-bg)`) and top border (`var(--color-border)`) as the Navbar.

### 6. Floating Action Buttons & WhatsApp Routing
- **Hover Tooltips**: Added interactive tooltips with white background and black text on hover:
  - WhatsApp: `Chat on WhatsApp👋`
  - Call: `Call Now🤙`
- **WhatsApp Form Integration**: Configured contact form submission to format user project details into a pre-filled WhatsApp message sent directly to `wa.me/918332837703`.

### 7. Performance & Optimization Architecture
- **React.lazy & Suspense Code-Splitting**: Split top-level page routes (`Home`, `Services`, `About`, `Agreement`, `Contact`, `NotFound`) into separate lazy-loaded chunks wrapped in `<Suspense fallback={<PageLoader />}>`.
- **Native Image Lazy Loading**: Added `loading="lazy"` across all `<img>` elements.
- **Scroll Reveal Animations**: Created a lightweight `useScrollReveal()` hook utilizing `IntersectionObserver` to trigger smooth fade & slide-up animations as sections enter the viewport.
- **Code Hygiene**: Cleaned up unused imports, dead comments, and unused CSS rules.
- **Production Build**: Verified with Vite production build (`npm run build`) passing cleanly with **0 errors** (68 modules transformed).

---

## 🛠️ Tech Stack & Structure

- **Framework**: React 19 + Vite 8
- **Routing**: React Router DOM v7
- **Styling**: Vanilla CSS with Design Tokens + Bootstrap 5 Layout Utilities
- **Icons**: Bootstrap Icons (CDN)
- **Typography**: Plus Jakarta Sans (Headings) & Inter (Body)
- **Deployment Build Output**: `dist/` (HTML, JS bundles, CSS, assets)

---

## 📁 Key File Map

```
d:/arwebx_website/arwebx/
├── index.html                    # Title, OG meta tags, Google Fonts, Bootstrap Icons
├── public/
│   ├── favicon.svg
│   ├── og_img.png                # Social media preview image
│   ├── favicon.ico               # Browser tab icon
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── App.jsx                   # Lazy routes, Suspense, ScrollToTop, useScrollReveal
│   ├── index.css                 # Design tokens, CSS reset, scroll-reveal classes
│   ├── assets/
│   │   ├── logo/logo.png         # Brand logo
│   │   ├── images/               # Hero 3D carousel jpg images
│   │   └── services/             # Service detail jpg images
│   ├── components/
│   │   ├── Navbar/               # Header navbar with logo and links
│   │   ├── Footer/               # Footer matched to light navbar theme
│   │   ├── Hero/                 # 3D Arc carousel + Laser wipe reveal
│   │   ├── ServiceCard/          # Reusable service card component
│   │   ├── ContactForm/          # Form with WhatsApp redirect
│   │   ├── FloatingActions/      # Floating call/WhatsApp buttons + tooltips
│   │   ├── SectionHeading/       # Section header component
│   │   └── SEOHead/              # Per-page head metadata manager
│   ├── data/
│   │   └── services.js           # Services dataset with images & features
│   ├── hooks/
│   │   └── useScrollReveal.js    # IntersectionObserver scroll reveal hook
│   └── pages/
│       ├── Home/                 # Hero, Services preview, Why Us, Process, CTA
│       ├── Services/             # Detailed service offerings with mockup images
│       ├── About/                # Company story, values & approach
│       ├── Agreement/            # Project working terms & agreement
│       ├── Contact/              # Enquiry form & direct contact details
│       └── NotFound/             # Custom 404 page
```

---

## 💻 Commands

### Development Server
```bash
npm run dev
```

### Production Build Verification
```bash
npm run build
```

---
© 2026 ARWEBX. All rights reserved.
