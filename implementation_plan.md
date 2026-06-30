# Implementation Plan - Uni Guide React Template

We will design a React template for **Uni Guide (University Representative)** matching the premium aesthetic of the **Truvik home-2 template** (using vibrant primary orange-red `#ff5c35`, dark navy blue `#003a66`, and clean alternating backgrounds). We will implement it using React, Tailwind CSS, and Lucide React for modern, clean, responsive components.

## Proposed Changes

### Setup & Configurations

#### [MODIFY] [package.json](file:///c:/Users/MYPC/Desktop/projects/uni-guide/package.json)
- Add dependencies for Tailwind CSS, PostCSS, Autoprefixer, and Lucide React icons.
- Install standard packages to enable Shadcn-like components (such as `clsx`, `tailwind-merge`, `framer-motion`).

#### [NEW] [tailwind.config.js](file:///c:/Users/MYPC/Desktop/projects/uni-guide/tailwind.config.js)
- Define custom colors, animations, and typography tokens matching the Truvik layout:
  - Primary Accent Orange-Red: `#ff5c35`
  - Secondary Brand Navy Blue: `#003a66`
  - Muted Neutral Background: `#f0f5fb`
  - Dark/Text Neutral: `#222222` and `#7a8a9e`

#### [NEW] [postcss.config.js](file:///c:/Users/MYPC/Desktop/projects/uni-guide/postcss.config.js)
- Configure PostCSS with Tailwind CSS and Autoprefixer.

### Assets & Styling

#### [MODIFY] [index.css](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/index.css)
- Reset base styles, import Tailwind directives, and configure font pairings (Poppins).

#### [COPY] [logo.jpg](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/assets/logo.jpg)
- Copy the uploaded logo asset from the conversation artifacts to the project assets folder.

### Components Development

We will organize the layout into dedicated, modular React components within a `components/` folder:

#### [NEW] [Header](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/components/Header.tsx)
- Top Bar: Social links (Instagram, Facebook, LinkedIn, Twitter) + Office hours/general info.
- Main Header: Custom logo (Uni Guide) on the left, navbar in the center, callout button for "Apply Now" with contact phone on the right.

#### [NEW] [HeroSection](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/components/HeroSection.tsx)
- Premium slideshow-like banner section with key headlines, background graphics, slide toggles, and direct links to application.

#### [NEW] [UniversitiesSection](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/components/UniversitiesSection.tsx)
- Displays the 13 partner universities in a clean grid/carousel format using custom card wrappers:
  - Northumbria University
  - University of East London
  - Derby University
  - Regent College London
  - York St Johns University London
  - Arden University
  - University of Law
  - BPP University
  - Teesside University
  - Wallbrook Institute London
  - University College Birmingham
  - Ulster University
  - Greenwich University

#### [NEW] [AboutSection](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/components/AboutSection.tsx)
- Left-side textual information (agency story, custom bullets) and right-side interactive tab/accordion toggling "Our Mission" and "Our Vision".
- Highlights stats counters showing success metrics (Success Rate, Universities Served, Visas Processed, Global Offices).

#### [NEW] [ProcessSection](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/components/ProcessSection.tsx)
- Interactive visual mapping the 4 key steps of student university admissions:
  1. Complete Online Form
  2. Documents & Eligibility Review
  3. Shortlisting & Admission Guidance
  4. Receive Admission Letter

#### [NEW] [BranchesSection](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/components/BranchesSection.tsx)
- Modern tabbed layout or responsive card grid mapping the details of the offices:
  - **UK Head Office** (Romford Road, London)
  - **Hyderabad Office** (Himayath Nagar Main Road)
  - **Mumbai Office** (Dheeraj Heritage S.V Road)
  - **Delhi Office** (Kanchanjunga Building Barakhamba Road)
  - **Australia Office** (Faraday Court Victoria Melbourne)
- Displays Addresses, Contacts, and Emails for each branch in a premium dashboard style.

#### [NEW] [ContactForm](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/components/ContactForm.tsx)
- "Apply Now" form component with name, email, mobile number, and target university selections, styled with clean validation, smooth hover micro-animations, and success alert states.

#### [NEW] [Footer](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/components/Footer.tsx)
- Links, quick contact widgets, logo placement, newsletter subscribe box, and copyright bar.

#### [MODIFY] [App.tsx](file:///c:/Users/MYPC/Desktop/projects/uni-guide/src/App.tsx)
- Integrate all sections into a single-page scrolling experience, managing theme state and interactive components.

---

## Verification Plan

### Automated Tests & Compilation
- Run `npm run build` to verify standard build pipeline and typescript definitions.
- Run `npm run dev` and test locally.

### Manual Verification
- Verify responsiveness across Desktop, Tablet, and Mobile layouts.
- Test interactive accordion tabs (Mission/Vision), Carousel/Grid sliders, and validation in the Contact Form.
- Ensure colors match the template palette, and images/icons display correctly.
