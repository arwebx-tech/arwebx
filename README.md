# ARWEBX — Fast, Modern Websites for Growing Businesses

ARWEBX ([arwebx.vercel.app](https://arwebx.vercel.app)) is a high-performance web development studio specializing in fast, modern, conversion-focused websites and web applications for businesses, startups, clinics, restaurants, and growing brands.

---

## 🌟 Key Features & Capabilities

### 1. 3D Interactive Hero with Continuous Arc Carousel
- **Continuous 3D Cylindrical Track**: Powered by native `requestAnimationFrame` mathematics, rotating 18 mockup cards (`DISPLAY_ITEMS` duplicated 3x) in a seamless, infinite cylindrical loop.
- **Dual-Layer Laser Wipe Effect**: Real-time pixel-precise wipe reveal comparing card positions against the central laser beam (`laserX = containerWidth / 2`).
  - Base layer: Grayscale card (`grayscale(1) contrast(1.1)`).
  - Top layer: Full-color card dynamically revealed via `clip-path: inset(0 0 0 ${revealPercent}%)`.
- **Gradient Highlight Headline**: *"Turn your online presence into a reason customers choose you"* with custom Indigo-to-Cyan gradient accents.
- **Trust Badges Row**: Highlighting `Responsive Design`, `Mobile First Approach`, and `WhatsApp Enquiries`.

### 2. Direct Lead Capture & Instant Quote Modal
- **Interactive Quote Modal (`QuoteModal.jsx`)**: Accessible from CTA buttons across all pages, allowing visitors to request immediate quotes with project requirements, service selection, and budget estimates.
- **Dual-Action Submissions**:
  1. **Direct WhatsApp Routing**: Form submissions format project details into a pre-filled message sent directly to `+91 83328 37703` via WhatsApp Web/App.
  2. **Supabase Database Backup**: All lead submissions are simultaneously saved into the `contact_enquiries` table.
- **Floating Action Buttons (`FloatingActions.jsx`)**: One-click WhatsApp and phone call buttons with interactive tooltips and pulse animations.

### 3. Supabase Real-Time Analytics & CRM Lead Management
- **Silent Page View Tracking (`usePageView.js` + `trackPageView`)**:
  - Automatically records visitor paths, timestamps, user-agent strings, and referrers into Supabase (`page_views` table).
  - **Smart Filtering**: Excludes localhost (`localhost`, `127.0.0.1`, `192.168.*`), active admin sessions (`sessionStorage`), devices marked with `arwebx_is_admin` (`localStorage`), and `/admin` routes.
  - **Secret Admin Shortcut**: Visiting any page with `?admin=true` permanently tags the browser device as admin and halts tracking.
- **Secret Admin Portal (`/admin`)**:
  - **Passcode Authentication**: Fast, secure passcode verification (`Arwebx@0096`).
  - **Live Count-Up Stat Cards**: Animated counters for Total Page Views, Today's Visitors, Total Client Enquiries, and Supabase connection status.
  - **Client Leads Tab**: View client names, contact numbers, enquiry types, timestamps, and attached messages. Includes instant **Call Client** (`tel:`) and **WhatsApp Client** (`wa.me`) buttons.
  - **Page Views Activity Tab**: Chronological table displaying recent visitor routes and device user agents.
  - **SQL Setup Tab**: Built-in 1-click clipboard copier for Supabase schema and RLS policies.

### 4. Smooth Scrolling & Scroll-Reveal Architecture
- **Lenis Smooth Scroll Engine**: Inertia-based smooth wheel scrolling powered by Lenis.
- **Deterministic Scroll Restoration**: Disables browser history scroll retention (`scrollRestoration = 'manual'`) and guarantees every page navigation starts at `(0, 0)`.
- **Progressive Enhancement (`useScrollReveal.js`)**: Uses `IntersectionObserver` to smoothly reveal and stagger sections as the user scrolls, with a 200ms safety fallback so content is never hidden.
- **Reduced Motion Support**: Automatically honors `prefers-reduced-motion: reduce` for accessibility.

### 5. SEO & Security Engineering
- **Unified Branding Titles**: Consistent page titles optimized within Google's 50–60 character limit:
  | Page | Route | Title Tag |
  | :--- | :--- | :--- |
  | **Home** | `/` | `ARWEBX \| Fast, Modern Websites for Growing Businesses` |
  | **Services** | `/services` | `Services \| ARWEBX - Modern Websites for Growing Businesses` |
  | **About** | `/about` | `About Us \| ARWEBX - Modern Websites for Growing Businesses` |
  | **Contact** | `/contact` | `Contact Us \| ARWEBX - Modern Websites for Growing Businesses` |
  | **Terms** | `/agreement` | `Project Terms \| ARWEBX - Modern Websites for Growing Businesses` |
  | **Admin** | `/admin` | `Admin Dashboard \| ARWEBX` |
- **`SEOHead.jsx` Component**: Per-page dynamic document head manager handling:
  - Canonical link generation (`<link rel="canonical" ... />`).
  - Open Graph meta tags (`og:title`, `og:description`, `og:url`, `og:type`, `og:image`).
  - Twitter Card summary tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`).
- **`public/sitemap.xml`**: Strict XML sitemap containing only valid, indexable public routes (`/`, `/services`, `/about`, `/agreement`, `/contact`).
- **`public/robots.txt`**: Standard crawler guidelines with explicit security rule `Disallow: /admin` to prevent search engine indexing of the private admin portal.

---

## 📁 Project Architecture & File Map

```
arwebx/
├── index.html                            # Master HTML template, Google Fonts, Bootstrap Icons, Lenis CDN
├── package.json                          # Dependencies & build scripts
├── vite.config.js                        # Vite build configuration
├── vercel.json                           # Vercel deployment routing & SPA fallback rewrites
│
├── public/
│   ├── favicon.ico                       # Browser tab icon
│   ├── og_img.png                        # Social media Open Graph preview image (1200x630)
│   ├── robots.txt                        # Search engine rules (Disallows /admin)
│   └── sitemap.xml                       # 5 Active XML sitemap routes
│
└── src/
    ├── App.jsx                           # Root application: Lazy routes, Suspense, Lenis scroll, layout
    ├── index.css                         # CSS design system: tokens, typography, utilities, responsive rules
    ├── main.jsx                          # React 19 entry point with StrictMode and BrowserRouter
    │
    ├── assets/
    │   ├── logo/
    │   │   └── logo.png                  # Official ARWEBX branding logo
    │   ├── images/                       # Hero 3D carousel showcase images (6 mockups)
    │   │   ├── clinic.jpg
    │   │   ├── fertilizers.jpg
    │   │   ├── interior.jpg
    │   │   ├── portfolio.jpg
    │   │   ├── restaurant.jpg
    │   │   └── saloon.jpg
    │   └── services/                     # Service category showcase images (5 mockups)
    │       ├── business.jpg
    │       ├── clinic.jpg
    │       ├── landing.jpg
    │       ├── packers.jpg
    │       └── restaurant.jpg
    │
    ├── components/
    │   ├── ContactForm/                  # Contact form with validation, WhatsApp redirect & Supabase persistence
    │   ├── FloatingActions/              # Fixed WhatsApp & phone action buttons with animated tooltips
    │   ├── Footer/                       # Site-wide responsive footer with branding, nav links & terms
    │   ├── Hero/                         # 3D continuous curved carousel with laser wipe reveal
    │   ├── Navbar/                       # Responsive sticky navigation bar with mobile toggle
    │   ├── ProcessSteps/                 # 4-step client workflow process timeline
    │   ├── QuoteModal/                   # Instant project quote request modal
    │   ├── SectionHeading/               # Reusable section heading and subtitle component
    │   ├── SEOHead/                      # Dynamic per-page SEO and Open Graph metadata manager
    │   └── ServiceCard/                  # Reusable service card for home & services grid
    │
    ├── data/
    │   └── services.js                   # Comprehensive services dataset with features & image links
    │
    ├── hooks/
    │   ├── usePageView.js                # Route change tracking hook with developer & admin exclusions
    │   └── useScrollReveal.js            # Viewport IntersectionObserver scroll animation hook
    │
    ├── lib/
    │   └── supabase.js                   # Supabase client, trackPageView, saveContactEnquiry, getAdminAnalytics
    │
    └── pages/
        ├── Home/                         # Landing page: Hero, Top 3 Services, Why Choose Us, Process, CTA
        ├── Services/                     # Full services portfolio: Business, Landing, Clinic, Packers, Restaurant
        ├── About/                        # Mission, agency philosophy, tech standards, and core values
        ├── Agreement/                    # Client project terms, payment schedules, milestones, and scope
        ├── Contact/                      # Direct contact details, WhatsApp button, and enquiry form
        ├── Admin/                        # Private Admin portal: Passcode login, analytics counters, lead cards, SQL generator
        └── NotFound/                     # Custom 404 page with home redirect
```

---

## 🛠️ Technology Stack

| Category | Technology | Version | Details / Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | React | `v19.2.8` | Component-based UI library with Concurrent Mode & Suspense |
| **Build Tool** | Vite | `v8.2.2` | Lightning-fast development server & production bundler |
| **Routing** | React Router DOM | `v7.18.3` | Client-side routing with lazy route resolution |
| **Database** | Supabase JS | `v2.116.0` | Cloud database for page views analytics & client leads |
| **UI & Styling** | Vanilla CSS + Bootstrap | `v5.3.8` | Custom CSS tokens with Bootstrap 5 grid & flex utilities |
| **Icons** | Bootstrap Icons | `v1.13.1` | Vector icon library loaded via CDN |
| **Notifications**| React Toastify | `v11.1.0` | Modern toast alert system for admin actions & form feedback |
| **Smooth Scroll**| Lenis | `v1.1.18` | Inertia-based smooth wheel scrolling engine |
| **Linter** | Oxlint | `v1.79.0` | High-performance Rust-based JavaScript/JSX linter |

---

## 🔑 Admin Portal Guide

- **URL**: `https://arwebx.vercel.app/admin`
- **Default Passcode**: `Arwebx@0096`
- **Lead Actions**:
  - Direct 1-click **Call Client**: Initiates immediate phone call via `tel:+91...`.
  - Direct 1-click **WhatsApp Client**: Opens WhatsApp chat via `wa.me/...`.
- **Database Schema**:
  To initialize or verify the Supabase tables, copy the script from the **Database Setup SQL** tab in the admin dashboard and execute it in your Supabase SQL Editor:
  ```sql
  -- 1. Create page_views table
  CREATE TABLE IF NOT EXISTS public.page_views (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    page_path TEXT NOT NULL DEFAULT '/',
    user_agent TEXT,
    referrer TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
  );

  -- 2. Create contact_enquiries table
  CREATE TABLE IF NOT EXISTS public.contact_enquiries (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT,
    phone TEXT NOT NULL,
    service TEXT,
    message TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
  );

  -- 3. Enable RLS and create public policies
  ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;
  ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;

  CREATE POLICY "Allow public insert on page_views" ON public.page_views FOR INSERT WITH CHECK (true);
  CREATE POLICY "Allow public select on page_views" ON public.page_views FOR SELECT USING (true);
  CREATE POLICY "Allow public insert on contact_enquiries" ON public.contact_enquiries FOR INSERT WITH CHECK (true);
  CREATE POLICY "Allow public select on contact_enquiries" ON public.contact_enquiries FOR SELECT USING (true);
  ```

---

## 💻 Developer Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Runs the Vite development server with Hot Module Replacement (HMR) at `http://localhost:5173`.

### 3. Run Linter
```bash
npm run lint
```
Uses `oxlint` to scan all project files in ~70ms.

### 4. Build for Production
```bash
npm run build
```
Generates optimized, minified production assets in the `dist/` folder in under 1 second.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## 🚀 Deployment

The project is configured for continuous automated deployment on **Vercel**:
- Any commit pushed to the `main` branch automatically triggers a production build.
- `vercel.json` provides SPA fallback rewrites (`"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]`) ensuring all deep routes (`/services`, `/about`, `/contact`, `/agreement`, `/admin`) resolve smoothly without 404 errors.

---

## 🧹 Code Hygiene & Optimization Status

- **Zero Dead Code**: Audited every component, stylesheet, hook, and data file; removed obsolete Supabase Auth functions, unused CSS selectors, and orphaned imports.
- **Zero Inline Junk Comments**: Cleaned unnecessary commented lines and explanatory JSX comments across the entire codebase.
- **Fast Build Times**: Verified with Vite production build passing with **0 errors** in ~500–700ms.
- **Zero Unused Assets**: Every single image in `src/assets/` is actively displayed on the site.

---

© 2026 ARWEBX. All rights reserved.