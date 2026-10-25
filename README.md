# ARWEBX — Fast, Modern Websites for Growing Businesses

ARWEBX ([arwebx.in](https://arwebx.in)) is a high-performance web development studio specializing in fast, modern, conversion-focused websites and web applications for businesses, startups, clinics, restaurants, and growing brands.

---

## 🌟 Key Features & Capabilities

### 1. 3D Interactive Hero with Continuous Arc Carousel
- **Continuous 3D Cylindrical Track**: Powered by native `requestAnimationFrame` mathematics, rotating 18 mockup cards in a seamless, infinite cylindrical loop.
- **Dual-Layer Laser Wipe Effect**: Real-time pixel-precise wipe reveal comparing card positions against the central laser beam (`laserX = containerWidth / 2`).
  - Base layer: Grayscale card (`grayscale(1) contrast(1.1)`).
  - Top layer: Full-color card dynamically revealed via `clip-path: inset(0 0 0 ${revealPercent}%)`.
- **Gradient Highlight Headline**: *"Turn your online presence into a reason customers choose you"* with custom Indigo-to-Cyan gradient accents.
- **Trust Badges Row**: Highlighting `Responsive Design`, `Mobile First Approach`, and `WhatsApp Enquiries`.

### 2. Direct Lead Capture & Instant Quote Modal
- **Interactive Quote Modal (`QuoteModal.jsx`)**: Accessible from CTA buttons across all pages, allowing visitors to request immediate quotes with project requirements, service selection, and contact details.
- **Dual-Action Submissions**:
  1. **Direct WhatsApp Routing**: Form submissions format project details into a pre-filled message sent directly to WhatsApp.
  2. **Database Persistence**: All lead submissions are simultaneously saved into the Supabase database.
- **Floating Action Buttons (`FloatingActions.jsx`)**: One-click WhatsApp and phone call buttons with interactive tooltips and pulse animations.

### 3. Real-Time Analytics & CRM Lead Management
- **Silent Page View Tracking (`usePageView.js`)**:
  - Automatically records visitor paths, timestamps, user-agent strings, and referrers into Supabase (`page_views` table).
  - Excludes localhost, internal IPs, active admin sessions, and administrative routes.
- **Secure Admin Portal (`/admin`)**:
  - **Supabase Authentication**: Protected via Supabase Built-in Auth with secure session listeners.
  - **Row Level Security (RLS)**: Enforces database-level isolation — public visitors can only insert leads/page views; only authenticated admin can query, edit, or delete leads.
  - **Live Stat Cards**: Animated counters for Total Page Views, Today's Visitors, and Total Client Enquiries.
  - **Client Leads CRM**: View, filter by status (Pending, In Progress, Completed), edit project details, and manage client enquiries with 1-click Call and WhatsApp actions.

### 4. Smooth Scrolling & Scroll-Reveal Architecture
- **Lenis Smooth Scroll Engine**: Inertia-based smooth wheel scrolling powered by Lenis.
- **Deterministic Scroll Restoration**: Disables browser history scroll retention (`scrollRestoration = 'manual'`) and guarantees every page navigation starts at `(0, 0)`.
- **Progressive Enhancement (`useScrollReveal.js`)**: Uses `IntersectionObserver` to smoothly reveal and stagger sections as the user scrolls, with fallback safety.
- **Reduced Motion Support**: Automatically honors `prefers-reduced-motion: reduce` for accessibility.

### 5. SEO & Performance Engineering
- **Optimized Bundle Splitting**: Rolldown/Vite manual chunking splits React, Supabase, and UI libraries for parallel loading and permanent browser caching. Initial application code is under 55 kB (18 kB gzipped).
- **Route-Level Code Splitting**: All pages lazy-loaded via `React.lazy()` & `Suspense`.
- **Dynamic SEO Head (`SEOHead.jsx`)**: Per-page dynamic metadata manager handling Title, Meta Description, Canonical URLs, Open Graph, and Twitter Cards.
- **Search Engine Guidelines**: XML sitemap (`sitemap.xml`) and crawler instructions (`robots.txt`) with `Disallow: /admin` and `noindex` protection on administrative routes.
- **Structured Data**: Schema.org JSON-LD markup for `WebSite` and `ProfessionalService`.

---

## 📁 Project Architecture & File Map

```
arwebx/
├── index.html                            # Master HTML template, Google Fonts, Bootstrap Icons, Lenis CDN
├── package.json                          # Dependencies & build scripts
├── vite.config.js                        # Vite build configuration with Rolldown chunk splitting
├── vercel.json                           # Vercel deployment routing & SPA fallback rewrites
│
├── public/
│   ├── favicon.ico                       # Browser tab icon
│   ├── og_img.png                        # Social media Open Graph preview image (1201x630)
│   ├── robots.txt                        # Search engine rules (Disallows /admin)
│   └── sitemap.xml                       # Active XML sitemap routes
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
    │   └── services/                     # Service category showcase images (5 mockups)
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
        ├── Home/                         # Landing page: Hero, Top Services, Why Choose Us, Process, CTA
        ├── Services/                     # Full services portfolio: Business, Landing, Clinic, Packers, Restaurant
        ├── About/                        # Mission, agency philosophy, tech standards, and core values
        ├── Agreement/                    # Client project terms, payment schedules, milestones, and scope
        ├── Contact/                      # Direct contact details, WhatsApp button, and enquiry form
        ├── Admin/                        # Private Admin portal: Supabase Auth, analytics counters, leads CRM
        └── NotFound/                     # Custom 404 page with home redirect and noindex protection
```

---

## 🛠️ Technology Stack

| Category | Technology | Version | Details / Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | React | `v19` | Component-based UI library with Concurrent Mode & Suspense |
| **Build Tool** | Vite | `v8` | High-performance build tool with Rolldown chunk optimization |
| **Routing** | React Router DOM | `v7` | Client-side routing with lazy route resolution |
| **Database & Auth** | Supabase JS | `v2` | Cloud Postgres database & Authentication with Row Level Security |
| **UI & Styling** | Vanilla CSS + Bootstrap | `v5.3` | Custom CSS design tokens with Bootstrap 5 grid & flex utilities |
| **Icons** | Bootstrap Icons | `v1.13` | Vector icon library loaded via CDN |
| **Notifications**| React Toastify | `v11` | Modern toast alert system for admin actions & form feedback |
| **Smooth Scroll**| Lenis | `v1.1` | Inertia-based smooth wheel scrolling engine |

---

## 🔒 Security Architecture

1. **Row Level Security (RLS)**:
   - `contact_enquiries`: Public visitors can only submit (`INSERT`) enquiries. Reading (`SELECT`), modifying (`UPDATE`), or deleting (`DELETE`) records requires valid Supabase Authentication.
   - `page_views`: Public visitors can only log visits (`INSERT`). Querying traffic metrics (`SELECT`) is strictly restricted to authenticated administrators.
2. **Authentication**:
   - Built-in Supabase Authentication (`supabase.auth.signInWithPassword`). Passwords are cryptographically salted and verified in the cloud.
   - Zero hardcoded passwords, passcodes, or credentials in client bundles or public repositories.
3. **Frontend Hardening**:
   - Anti-autofill protections on authentication forms.
   - External links protected with `rel="noopener noreferrer"`.
   - Admin and 404 routes flagged with `noindex, nofollow` meta tags and blocked via `robots.txt`.

---

## 💻 Developer Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Start Local Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## 🚀 Deployment

The project is configured for continuous automated deployment on **Vercel**:
- Any commit pushed to the `main` branch automatically triggers an optimized production build.
- `vercel.json` provides SPA fallback rewrites ensuring all deep routes resolve smoothly without 404 errors.

---

© 2026 ARWEBX. All rights reserved.