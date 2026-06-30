# Walkthrough - Uni Guide React Tailwind Template

We have successfully designed and built a highly polished, responsive React landing page for **Uni Guide (University Representative)** matching the exact layout and look of the **Truvik home-2 template**.

The implementation leverages **Tailwind CSS v4** for clean utility styling, Google Fonts for modern typography, and Lucide React icons for detailed info dashboards.

---

## 🎨 Design System & Colors
We configured custom design tokens directly inside `src/index.css` using Tailwind v4 standards:
* **Primary Accent Color:** `#ff5c35` (Vibrant Orange-Red used for badges, active states, key buttons, and call-to-actions).
* **Secondary Brand Color:** `#003a66` (Deep Navy Blue used for header/footer backgrounds, headings, and active tabs).
* **Muted Neutral Background:** `#f0f5fb` (Light ice blue used for alternating section backdrops).
* **Border & Text Neutrals:** `#ced7e4` and `#7a8a9e`.
* **Typography:** Heading: `Plus Jakarta Sans` (for clean, modern friendly titles), Body: `Inter` font family.

---

## 📂 Key File Changes & Additions

### Configurations & Helpers
* [NEW] [postcss.config.js](file:///c:/Users/MYPC/Desktop/projects/uni-guide/postcss.config.js) - PostCSS config enabling Tailwind CSS compilation in Vite.
* [MODIFY] [index.css](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/index.css) - Integrated Tailwind directives (`@import "tailwindcss";`), customized base themes (Plus Jakarta Sans paired with Inter), and added custom scrollbar states.
* [NEW] [utils.ts](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/lib/utils.ts) - The standard shadcn utility helper function `cn` using `clsx` and `tailwind-merge`.

### Components
All UI sections are written in modular React and styled completely using Tailwind:
1. **[Header.tsx](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/components/Header.tsx)**: Displays the logo on the left, navigation menu in the center, and a telephone card button on the right. Social icon squares have been removed, and the header and logo height scale dynamically on scroll (header height goes from `h-24` at top to `h-16` on scroll; logo height goes from `h-16` to `h-12`).
2. **[HeroSection.tsx](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/components/HeroSection.tsx)**: Displays the top university representative image slider banner with direct call-to-action triggers and arrows. Updated the first slide to use a professional university campus background image (`hero_campus_background.png`) and removed the bottom carousel indicator dots.
3. **[AboutSection.tsx](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/components/AboutSection.tsx)**: Features agency intro copy, benefits bullet-points, an interactive Mission/Vision tab switcher, and numeric success metric cards. The metrics cards now utilize a scroll-aware `AnimatedCounter` component to count up to their target values dynamically when visible.
4. **[ui/carousel.tsx](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/components/ui/carousel.tsx)**: Standard shadcn UI Carousel wrapper component built with Embla Carousel.
5. **[UniversitiesSection.tsx](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/components/UniversitiesSection.tsx)**: Renders the solid dark-navy background block featuring a search filter input and an overlapping autoplay carousel showing partner universities. Spacing above and below the cards has been tightened up by reducing padding values to make the layout more compact and professional.
6. **[ProcessSection.tsx](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/components/ProcessSection.tsx)**: Features a responsive 4-step horizontal/vertical timeline process, with top spacing adjusted to accommodate the overlapping carousel cards.
7. **[BranchesSection.tsx](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/components/BranchesSection.tsx)**: Displays a tabbed location directory mapping details of the **UK Head Office, Hyderabad, Mumbai, Delhi, and Australia branches** alongside directions triggers.
8. **[ContactForm.tsx](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/components/ContactForm.tsx)**: A comprehensive, validated intake form including Name, Email, Mobile number, Target University selector, and Program levels.
9. **[CtaSection.tsx](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/components/CtaSection.tsx)**: A premium, full-width section with a dark navy gradient background (`bg-gradient-to-br from-secondary-dark via-secondary to-secondary-dark`) and a bold primary color bottom border. The layout features centered, responsive content on the left (Get Started badge, professional header, description, and CTA actions) and a high-resolution professional student group image on the right side with subtle hover zoom and gradient-glow transitions.
10. **[Footer.tsx](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/components/Footer.tsx)**: Renders quick navigation guides, social links, newsletter input, and copyright marks.

### App Entry
* [MODIFY] [App.tsx](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/App.tsx) - Connects and scrolls to all components dynamically. Select/apply actions on university cards automatically scroll to and populate the contact form.

---

## 🔍 Verification & Integrity Checks

### 1. Build Compilation
The application compiles and packages successfully into optimized production bundles via the standard Vite build pipeline:
```bash
npm run build
# dist/assets/index.css   60.40 kB
# dist/assets/index.js   308.22 kB
# ✓ built in 3.73s
```

### 2. Browser Walkthrough Interactivity
A browser verification run was executed to check the following features:
* **Tab Switching:** The Mission/Vision toggle switches content instantly.
* **Search Filter:** Typing "London" in the universities search bar correctly filters the grid down to only institutions located in or having campuses in London.
* **Autoplay Carousel:** The partners carousel autoplays every 3 seconds, loops infinitely, supports touch swiping, and pauses whenever the cursor hovers over any card.
* **Branch Directory Tabs:** Selecting branches (e.g. Hyderabad, Australia) immediately swaps address texts and updates maps links.
* **Responsive Collapsing:** The layout wraps columns on tablet/mobile views.

