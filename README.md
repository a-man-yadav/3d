# 🪐 Aman Yadav — 3D Interactive Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-🚀_Click_Here-cfa355?style=for-the-badge&logo=vercel&logoColor=white)](https://amanyadav8957.vercel.app/)

> **"Building modern web applications with clean code, scalable systems, and thoughtful user experiences."**

Welcome to the repository of **Aman Yadav's 3D Interactive Portfolio** — a modern, motion-rich web application built with cutting-edge 3D graphics, fluid physics-based scrolling, and sophisticated animation design patterns.

---

## 🔗 Live Experience

* **Deployed Link**: https://amanyadav8957.vercel.app/ *(Replace `YOUR_DEPLOYED_URL_HERE` with your actual Vercel / Netlify live URL)*

---

## ⚡ Engine & Technological Foundation

This project is built using a modern JavaScript/React ecosystem focused on 3D graphics rendering, smooth animation timelines, and utility-first styling.

```
┌──────────────────────────────────────────────────────────────────────────┐
│                             PORTFOLIO ENGINE                             │
├───────────────────┬──────────────────────┬───────────────────────────────┤
│ 3D Rendering      │ React & Architecture │ Motion & Interactions         │
│ • Three.js        │ • React 19           │ • GSAP (ScrollTrigger/Observer│
│ • React Three     │ • Vite 7             │ • Lenis Smooth Scroll         │
│   Fiber & Drei    │ • React Scroll       │ • Framer Motion               │
│ • GLTF/GLB Models │ • React Responsive   │ • Tailwind CSS v4             │
└───────────────────┴──────────────────────┴───────────────────────────────┘
```

### Core Libraries & Utilities
* **3D & Graphics**:
  * [`@react-three/fiber`](https://github.com/pmndrs/react-three-fiber) — React renderer for Three.js scenes and camera controls.
  * [`@react-three/drei`](https://github.com/pmndrs/drei) — Advanced helpers including `Environment`, `Float`, `Lightformer` studio lighting, and GLTF model loaders (`useGLTF`).
  * `three` & `maath` — Low-level 3D math and WebGL primitives.
* **Animation & Motion Design**:
  * `gsap` & `@react-three/gsap` — GreenSock Animation Platform powering scroll triggers, clip-path reveals, stagger effects, and mouse tracking (`quickTo`).
  * `GSAP ScrollTrigger & Observer` — Speed-aware marquee scrolling and scroll-bound timeline controls.
  * `lenis` (`lenis/react`) — Smooth inertia scrolling across the entire web application.
* **UI & Styling**:
  * `Tailwind CSS v4` — Utility styling with custom CSS `@theme` design tokens (custom colors like `#cfa355` Gold, `#393632` Dark Lava, `#8b8b73` Sage Gray, and `#e5e5e0` Primary).
  * `Amiamie` & `Amiamie-Round` — Custom typography across Light, Regular, Black, and Italic weights.
  * `react-icons` & `@iconify/react` — Vector icon sets for social links, tech logos, and UI indicators.

---

## ✨ Signature Design & Architectural Innovations

What sets this portfolio apart from conventional web showcases:

1. **Real-Time 3D Hero Canvas**:
   * Features a floating 3D planet model rendered live in WebGL with ambient lighting and circular studio `Lightformer` reflections.
   * Viewport-adaptive 3D scale adjustments seamlessly bridging desktop and mobile screens.

2. **Cursor-Tracking Live Work Previews**:
   * Desktop users experience an interactive floating thumbnail preview window that follows cursor movements (`GSAP quickTo`) while hovering over project entries.

3. **Velocit-Aware Scroll Banners**:
   * Integrated infinite marquee banners that dynamically respond to mouse scroll speed and scroll direction using `GSAP Observer`.

4. **Sticky Stacking Service Cards**:
   * The services section utilizes calculated sticky positioning (`calc(10vh + index * 5em)`) to create a stacked card deck effect as the user scrolls downward.

5. **Clip-Path Polygon Reveals & Staggers**:
   * Text lines, images, navigation drawers, and card hover overlays utilize custom SVG/CSS `clip-path` animations (`polygon(...)`) for cinematic entry effects.

6. **Micro-Interactions & One-Touch Actions**:
   * Interactive bento-box tech grid with hover-revealed labels, dynamic navigation overlay with outside-click dismissal, and 1-click email copying to clipboard with live icon status updates.

---

## 🧭 Core Sections & System Functionalities

### 1. Navigation Overlay (`src/sections/Navbar.jsx`)
* Slide-out drawer menu animated via GSAP timeline.
* Displays section links (`Home`, `About`, `Services`, `Work`, `Contact`) with smooth scroll target navigation.
* Includes 1-click email copy helper (`aman17yadav2004@gmail.com`) and social media links (Instagram, LinkedIn, GitHub).
* Smart click-outside detector to close the drawer automatically.

### 2. 3D Interactive Hero (`src/sections/Hero.jsx`)
* Full-screen WebGL Canvas hosting a floating interactive planet model (`Planet.jsx`).
* Custom responsive typography banner revealing the developer's mission statement.

### 3. Animated Service Typography (`src/sections/ServiceSummary.jsx`)
* Horizontal scrub typography displaying core capabilities (`Architecture`, `Development`, `Deployment`, `APIs`, `Scalability`) moving in opposing directions on scroll.

### 4. Story & Background (`src/sections/About.jsx`)
* Personal statement section with clip-path image reveal of developer avatar.
* Background scaling container animation integrated with GSAP ScrollTrigger.

### 5. Categorized Tech Matrix (`src/sections/TechStack.jsx`)
* Structured bento-grid layout displaying developer toolkit:
  * **Frontend**: HTML, CSS, JavaScript, React, Tailwind CSS, Framer Motion, GSAP
  * **Backend**: Node.js, Express.js, REST APIs, WebSockets, JWT
  * **Databases**: MongoDB, Redis
  * **Tools**: Git, GitHub, Docker, Vercel, Cloudinary, Postman
  * **Other Languages**: C, C++, Python

### 6. Services & Capabilities (`src/sections/Services.jsx`)
* Sticky stacked deck presenting specialized solutions:
  * Full-Stack Web Applications
  * Authentication & Security (JWT, OAuth, Role-Based Access)
  * Performance Optimization & Smooth UX
  * Exploration Areas (React Native, System Design, Caching)

### 7. Portfolio Showcase (`src/sections/Work.jsx`)
* Interactive list of featured full-stack projects:
  * **Restaurant Website** — Full-stack ordering platform (React, GSAP, Node.js, MongoDB, Tailwind).
  * **MyFit Gym** — Fitness membership & workout platform (React, Framer Motion, Tailwind).
  * **Mojito Landing Page** — Cocktail bar landing page with modern interface (React, GSAP, Tailwind).
  * **Zentry Inspired Website** — Animation-heavy promotional webpage with bento cards (React, Vite, GSAP, Tailwind).
* Desktop cursor-following image preview & mobile card visuals.

### 8. Contract & Inspiration Banner (`src/sections/ContractSummary.jsx`)
* Pinned scroll section featuring dual infinite marquee banners and animated contract quote.

### 9. Contact Channel (`src/sections/Contact.jsx`)
* Dark-themed contact section with email clipboard copy button, phone number, and social links.

---

## 🚀 Local Development Setup

Follow these steps to run the portfolio locally on your machine:

### Prerequisites
* **Node.js** (v18.0.0 or higher recommended)
* **npm** or **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/a-man-yadav/3d-portfolio.git
   cd 3d-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` (or the port specified in terminal).

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information. Developed with ❤️ by **Aman Yadav**.
