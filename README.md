# SILVERBACK — Website Hero & Brand Communication
**Tech Stack:** React 18 + TypeScript + Vite + Tailwind CSS  
**Prepared for:** Studio Elemento / Web Development Team  
**Brand:** Silverback Mobility (B2B Fleet & Delivery Ecosystems)

---

## 1. Client Directives Implemented

### Requirement 1: Full-Screen Blurred Grayscale Background
- **Asset:** Official Drive image [`public/assets/06-11-2026_01.png`](public/assets/06-11-2026_01.png).
- **CSS Styling:** `bg-cover bg-center`, `grayscale(100%)`, `blur(16px)`, `brightness(0.48)`, scaled by `1.08` to eliminate edge blur clipping.
- **Overlay:** Dual-layer radial & vertical dark gradient ensuring crisp typography contrast.

### Requirement 2: Kinetic Tagline Hero ("Redefining ...")
- **Static Anchor:** The word **"Redefining"** remains **completely still**.
- **Dynamic Rotator:** Trailing words cycle automatically every **2.0 seconds**:
  1. `"dignity"`
  2. `"the ride"`
  3. `"the pit stop"`
  4. `"the delivery experience"`
- **Animation:** Fluid vertical **swipe-up (slide-up)** with simultaneous **fade-in / fade-out**.
- **Typography:** **Gemunu Libre Regular** (`font-tagline font-normal`).

### Requirement 3: Three-Column Footer (Completes the Page)
- **Column 1 (Left):** Official Silverback Logo vector SVG (`public/assets/branding/logo-02.svg`) with authentic Gorilla emblem & wordmark.
- **Column 2 (Center):** Centered copyright notice (`© 2026 Silverback Mobility. All rights reserved.`) in **Space Grotesk**.
- **Column 3 (Right):** LinkedIn QR Code button:
  - Scannable with smartphone camera.
  - Hyperlinked with an `<a>` tag to `https://www.linkedin.com/company/silverback-ev` so clicking it acts directly like a button.

### Bonus Stakeholder Tools: Brand Review Drawer
- Press <kbd>D</kbd> or click **"Review Mode"** in the top header.
- Track Section 7 approval items from the handoff document.
- Test accent colors: **Industrial Ember (`#FF5A00`)**, **Volt Lime (`#10E885`)**, **Electric Cyan (`#00D4FF`)**, **Titanium Mono (`#F4F5F8`)**.

---

## 2. Brand Typography Hierarchy

| Role | Font Family | Client Directive & Usage |
| :--- | :--- | :--- |
| **Logotype & Display** | **Aldrich Regular** | Silverback logotype, technical numerals, and display badges. |
| **Tagline Typography** | **Gemunu Libre Regular** | Primary hero headline: *"Redefining [word]"*. |
| **Body & Metadata** | **Space Grotesk** | Subtitle, footer copyright, and labels. |

All web fonts are imported from Google Fonts in `src/index.css`.

---

## 3. How to Run Locally

### Development Server
```bash
npm run dev
# Running at http://localhost:3000
```

### Production Build
```bash
npm run build
npm run preview
```
