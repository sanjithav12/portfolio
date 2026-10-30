# ⚡ Sanjitha V — Cyber-Emerald Developer Portfolio

> **Role:** 2nd Year Computer Science Student @ K S Institute of Technology  
> **Theme:** Cyber-Emerald / Dark Mode (`#0d1117` matte carbon with `#10b981` neon emerald and `#a3e635` bright lime accents)  
> **Stack:** React 18, Tailwind CSS, HTML5 Canvas API

---

## 🎨 Design System & Palette

| Token | Hex Value | Application |
|---|---|---|
| **Matte Carbon Background** | `#0d1117` | Root background, terminal surfaces, high contrast canvas backing |
| **Deep Surface Card** | `#111620` | Frosted cards, highlights, credential badges |
| **Border Slate** | `#21262d` / `rgba(16, 185, 129, 0.2)` | Glassmorphism borders and dividers |
| **Neon Emerald** | `#10b981` / `#34d399` | Primary glows, status indicator, action button gradient, link accents |
| **Bright Lime** | `#a3e635` / `#bef264` | High-energy secondary accents, highlight badges, gradient endpoints |
| **Muted Text** | `#94a3b8` / `#cbd5e1` | Student bio, descriptions, and code timestamps |
| **Headings** | `#ffffff` / `#f8fafc` | Ultra-crisp typography with emerald-to-lime gradient masking |

---

## 🚀 Key Features & Interactive Architecture

### 1. 🌌 Animated Matrix-Dot Grid Canvas (`MatrixGridCanvas.jsx`)
- **Perspective Physics:** Gently tilts perspective based on cursor coordinates relative to viewport center.
- **Dynamic Repulsion:** Dots displace away smoothly within a 140px radius when the cursor hovers.
- **Luminescence:** Intersecting dots expand in radius and transition from ambient dark emerald to crisp neon emerald (`#10b981`) and bright lime (`#a3e635`).
- **Interactive Ripples:** Fast mouse movement or clicking initiates expanding wave ripples with radial decay.
- **Cyber Constellations:** Faint neon connector lines automatically trace between nearby excited dots.
- **Retina-Ready:** Scaled with `window.devicePixelRatio` for razor-sharp rendering on high-DPI displays.

### 2. 🛸 Floating Frosted-Glass Navbar (`Navbar.jsx`)
- **Pinned Top Floating Island:** Pinned fixed at the top with `backdrop-blur-xl`, `border-emerald-500/20`, and deep ambient drop shadow.
- **Monogram Brand Mark:** Cyber `SV` badge with pulsing emerald status beacon and CS @ KSIT subtitle.
- **Clean Navigation Links:** `About`, `Projects`, `Skills`, `Campus Journey`, and `Contact` with emerald hover line reveals.
- **Responsive Mobile Drawer:** Animated hamburger icon that morphs smoothly into an 'X', revealing touch-optimized navigation targets.

### 3. ⚡ Opening 'Hero' Intro Screen (`Hero.jsx`)
- **Status Badge (`StatusBadge.jsx`):** Animated multi-stage radar pulse pill: `🟢 Student Developer // Open for Internships`.
- **Main Headline:**
  > *"Hey, I am Sanjitha V — Building the Future of Tech."*  
  Rendered with a cyber-emerald to lime gradient and under-glow emphasis.
- **Student Bio:**
  > *"2nd Year Computer Science Student at K S Institute of Technology passionate about web development, AI, and building real-world projects."*
- **Action Buttons:**
  - **Primary CTA:** Glowing emerald button `View My Projects` with hover lift (`-translate-y-1`) and neon emerald drop shadow (`box-shadow: 0 0 25px rgba(16,185,129,0.45)`).
  - **Secondary CTA:** Outline button `Download Resume / CV` with cyber border and lime hover accent.

### 4. 💼 Featured Projects Showcase (`ProjectsSection.jsx` & `ProjectCard.jsx`)
- **Responsive 3-Column Grid:** Features 3 student projects positioned directly below the hero section:
  1. **Student Management System:** Web-based student records, attendance, and administrative dashboard.
  2. **Arthamitra:** Kannada-friendly financial empowerment app for the Raagigudda (Vivekananda Colony) slum community with voice input and government scheme matching.
  3. **Smart Retail Management System:** Predictive inventory restocking with sales forecasting and low-stock alerts.
- **Interactive 3D Perspective Tilt:** Cards dynamically tilt in 3D based on real-time mouse cursor position (`perspective(1000px) rotateX(...) rotateY(...)`).
- **Smooth Lift & Rim Lighting:** On hover, cards lift up smoothly (`translateY(-6px)`), activate a glowing emerald boundary shadow (`shadow-[0_16px_40px_-8px_rgba(16,185,129,0.35)]`), and illuminate an emerald top rim light.
- **Dynamic Specular Cursor Shine:** A radial lighting overlay tracks the exact cursor position within each card.
- **Category Filter Pills:** Smoothly switch between `'All'`, `'Web Apps'`, `'AI / ML'`, and `'Mini-Projects'` with live item counts.

### 5. 🛠️ Tech Stack & Skills Showcase (`SkillsSection.jsx`)
- **Categorized 3-Column Layout:**
  1. **Programming Languages:** C++, Python, JavaScript, Java, TypeScript, SQL.
  2. **Frameworks & Tools:** React, Tailwind CSS, Node.js, Git / GitHub, FastAPI, Next.js.
  3. **Core CS Concepts:** Data Structures, OOP, DBMS, Operating Systems, Algorithms, Computer Networks.
- **Official Vector Logos:** Crisp embedded vector SVGs for every technology.
- **Hover Scale (`scale-105`) & Emerald Rim Glow:** Smooth scale and border lighting on badge hover.
- **Interactive Comfort-Level Tooltip:** Hovering over any skill badge reveals a floating frosted tooltip showing:
  - 🟢 **Proficient** (Emerald beacon)
  - 🟡 **Familiar** (Lime beacon)
  - 🔵 **Currently Learning** (Teal pulsing beacon)

### 6. 🎓 Education & Campus Journey (`EducationJourneySection.jsx`)
- **KSIT Academic Banner:** Highlights 2nd Year Computer Science & Engineering status, VTU affiliation, and core focus areas.
- **Illuminated Vertical Milestone Timeline:**
  - **2026:** Selected for Smart India Hackathon (SIH) from internal inter-college screening round at KSIT.
  - **2025:** Engineered Smart Retail Management application with automated inventory restocking and ML forecasting.
  - **2025:** Competed at Utkarsh Tech Fest in algorithmic sprints and rapid prototyping.
- **Accomplishment Callouts (2x2 Grid):**
  - 🏆 **1st Place Winner:** University Hackathon Qualifier (Nominated for SIH)
  - ⚡ **150+ LeetCode Problems:** Consistent DSA problem solving in C++
  - 👥 **Tech Club Organizer:** KSIT campus peer mentorship & workshop coordinator
  - 📜 **Full-Stack Certified:** Industry-certified in modern web architecture

---

## 📁 Project Structure

```bash
sanjitha/
├── index.html                    # Vite entry point
├── preview.html                  # Standalone instant browser preview (double-clickable)
├── package.json                  # Dependencies (React 18, Tailwind CSS, Lucide)
├── vite.config.js                # Vite build and dev server config
├── tailwind.config.js            # Custom color palette and keyframe extensions
├── README.md                     # Documentation
└── src/
    ├── main.jsx                  # React DOM mount point
    ├── App.jsx                   # Main layout container & section orchestration
    ├── index.css                 # Base styles, scrollbars, and scanline effects
    └── components/
        ├── Navbar.jsx            # Floating frosted-glass navbar
        ├── Hero.jsx              # Hero intro section with headline & CTAs
        ├── ProjectsSection.jsx   # Featured projects showcase with filter pill row
        ├── ProjectCard.jsx       # 3D perspective tilt glass card with cursor shine
        ├── SkillsSection.jsx     # Categorized Tech Stack with comfort tooltips
        ├── EducationJourneySection.jsx # Milestone timeline & 2x2 achievements
        ├── MatrixGridCanvas.jsx  # Interactive HTML5 canvas matrix grid
        └── StatusBadge.jsx       # Blinking radar pulse pill
```

---

## 💻 Instant Viewing Options

### Option A: Double-Click Standalone Preview (No Node/Terminal Required)
1. Open this folder in File Explorer: `c:\Users\Harshith H\OneDrive\Desktop\sanjitha`
2. Double-click `preview.html`.
3. It opens immediately in Chrome, Edge, or Brave with full interactive 3D card tilt physics, matrix canvas, filter pills, tech stack tooltips, and the campus journey timeline!

### Option B: Run with Vite (when Node.js is installed)
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
#   p o r t f o l i o  
 