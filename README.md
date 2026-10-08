# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focusing on high conversion, fluid animations, and mobile responsiveness.

## 🚀 Live Demo
- **Live URL:** (https://tis-homepage-omega.vercel.app/)
- **Repository:**(https://github.com/Nikhilkumar592/tis-homepage)

## 🛠️ Tech Stack
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React

## ✨ Standout Features Implemented
1. **Custom Cursor:** A customized, 60fps spring-animated circular cursor that follows the user's mouse position and scales up over interactive elements (`<a>`, `<button>`), while safely disabling itself on touch devices.
2. **Scroll-Triggered Reveals:** A reusable `<ScrollReveal>` wrapper component using Framer Motion's `whileInView` to orchestrate smooth, staggered entrance animations as elements enter the viewport.

## 📦 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone <https://github.com/your-username/tis-homepage-redesign.git>
   cd tis-homepage-redesign
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173/) in your browser.

## Component Architecture Overview
- `src/components/ui/` - Atomic UI components (Buttons, Section Titles)
- `src/components/layout/` - Shell components (Navbar, Footer)
- `src/components/sections/` - Main page sections (Hero, About, Programs)
- `src/components/animation/` - Animation drivers (Custom Cursor, Scroll Reveal)
- `src/hooks/` - Custom React hooks (useMousePosition)

## Brand Identity Retained
Primary colors, copy, and official school assets inspired by [tis.edu.in](https://tis.edu.in/)
