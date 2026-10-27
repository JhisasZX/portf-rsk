# Jesús Machicado — Portfolio

> **High-Performance Personal Portfolio & Technical Showcase**  
> Systems Engineer & Mobile Tech Lead (Flutter / React / Offline-First Systems)  
> 🔗 Live URL: [portf-rsk.vercel.app](https://portf-rsk.vercel.app)

---

## ⚡ Engineering & Performance Highlights

This portfolio is built with **Astro 5** and engineered from the ground up for maximum runtime fluidity, minimal network payload, and high-fidelity aesthetics:

* **100% Core Web Vitals Ready**: Zero render-blocking external resources. First Contentful Paint (FCP) and Largest Contentful Paint (LCP) optimized by serving above-the-fold content immediately with zero script delay.
* **GPU Hardware-Accelerated Aurora**: Ambient glow mesh powered by radial gradient fields isolated in hardware-composited 3D layers (`translate3d`, `will-change: transform`). Eliminates the heavy GPU rasterization penalties and thermal throttling common in high-radius Gaussian blur filters.
* **Self-Hosted Variable Fonts**: Integrated via `@fontsource-variable/onest` and `@fontsource-variable/playfair-display`. Served directly over HTTP/2 with modern `woff2` subsets and `font-display: swap` (zero third-party DNS latency or FOUT/FOIT).
* **Type-Safe i18n Architecture**: 100% DRY architecture. Content and multilingual dictionaries (`es` and `en`) are strictly typed and decoupled from presentation components in [`src/data/portfolio.ts`](src/data/portfolio.ts).
* **Controlled SPA Client Transitions**: Client-side view transitions via Astro `ClientRouter` with memory guards, unobserving elements upon intersection to prevent memory leaks during scroll.
* **Optimized Remote Media**: Responsive Cloudinary avatar asset delivering auto-compressed AVIF/WebP (`f_auto,q_auto`) with explicit dimensions to completely prevent Cumulative Layout Shift (CLS).

---

## 🛠️ Tech Stack

* **Framework**: [Astro 5](https://astro.build/) (Static Site Generation / Islands Architecture)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
* **Typography**: Onest Variable + Playfair Display Variable (`@fontsource-variable`)
* **Type Safety & Linting**: TypeScript (Strict Mode) + `@astrojs/check`
* **Deployment**: [Vercel](https://vercel.com/)

---

## 📁 Project Structure

```text
/
├── public/
│   ├── favicon.svg          # Lightweight SVG favicon
│   └── robots.txt           # SEO crawler directives
├── src/
│   ├── components/
│   │   ├── icons/           # Pure SVG icon components (GitHub, LinkedIn, Spotify, Calendar...)
│   │   ├── Experience.astro # Career timeline section
│   │   ├── header.astro     # Sticky glassmorphic header & responsive mobile drawer
│   │   ├── PortfolioView.astro # DRY master portfolio layout
│   │   ├── Projects.astro   # Featured projects showcase
│   │   ├── StackGrid.astro  # Interactive categorized tech stack
│   │   ├── Talks.astro      # Keynotes & community speaking section
│   │   └── TrustBar.astro   # Corporate experience social proof
│   ├── data/
│   │   └── portfolio.ts     # Centralized, strictly-typed multilingual data schema
│   ├── layouts/
│   │   └── Layout.astro     # Root HTML layout, SEO meta tags, and GPU aurora background
│   ├── pages/
│   │   ├── en/
│   │   │   └── index.astro  # English landing page
│   │   └── index.astro      # Spanish landing page (default)
│   └── styles/
│       └── global.css       # Core design tokens, smooth scroll, and hardware animations
├── astro.config.mjs         # Astro & Tailwind Vite plugin configuration
├── package.json             # Scripts & dependencies
└── tsconfig.json            # Strict TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js 18+
* npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/JhisasZX/portf-rsk.git

# Navigate to project directory
cd portf-rsk

# Install dependencies
npm install
```

### Development & Build Commands

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local development server at `http://localhost:4321` |
| `npm run check` | Runs Astro & TypeScript diagnostics (`@astrojs/check`) |
| `npm run build` | Compiles production-ready static assets into `./dist/` |
| `npm run preview` | Locally previews the production build |

---

## 👤 Author

**Jesús Machicado**  
*Systems Engineer & Mobile Tech Lead*  
* LinkedIn: [in/jmachruiz](https://www.linkedin.com/in/jmachruiz/)  
* GitHub: [@JhisasZX](https://github.com/JhisasZX)  
