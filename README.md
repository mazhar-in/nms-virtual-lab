# ⚛️ National Model Schools — Senior Secondary Virtual Physics Laboratory

[![GitHub Pages Deployment](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen?logo=github&style=for-the-badge)](https://mazhar-in.github.io/nms-virtual-lab/)
[![HTML5 / Vanilla JS](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS-blue?logo=javascript&style=for-the-badge)](https://developer.mozilla.org/)
[![KaTeX Math](https://img.shields.io/badge/Math-KaTeX%20v0.16.9-38bdf8?style=for-the-badge)](https://katex.org/)
[![Curriculum](https://img.shields.io/badge/Curriculum-CBSE%20%2F%20NCERT%20Classes%20XI%20%26%20XII-orange?style=for-the-badge)](https://cbse.gov.in/)
[![Touch Optimized](https://img.shields.io/badge/Mobile-Touch%20%26%20Fullscreen%20Ready-purple?style=for-the-badge)](#features)

> **Live Hub:** [https://mazhar-in.github.io/nms-virtual-lab/](https://mazhar-in.github.io/nms-virtual-lab/)  
> **Practical Manuals Compendium:** [https://mazhar-in.github.io/nms-virtual-lab/manuals.html](https://mazhar-in.github.io/nms-virtual-lab/manuals.html)

A next-generation, browser-based **Virtual Physics Laboratory** engineered for **National Model Schools**. It provides senior secondary students (Grades XI & XII) and educators with realistic, interactive simulations of 12 core physics laboratory experiments, paired with complete academic practical manuals, step-by-step procedures, observation recording tables, and viva-voce preparation.

---

## 🌟 Key Features

- **🎯 12 Interactive Physics Simulators**: Covers classical mechanics, measurements, vector addition, harmonic motion, friction, and electric bridge circuits.
- **📖 Complete Practical Manual Suite (`manuals.html`)**: Complete with NCERT/CBSE standardized Aim, Apparatus, Mathematical Theory, Observation Tables, Precautions, and Viva-Voce Q&A.
- **📐 High-Precision KaTeX Mathematical Rendering**: All formulas, fractions, square roots, and Greek symbols are rendered in vector math typesetting.
- **📱 Touchscreen & Smartboard Ready**: Gesture-friendly sliders, draggable masses, virtual ratchets, and sliding keys optimized for tablets, iPads, smartboards, and desktops.
- **⛶ Immersive Fullscreen Experience**: Native auto-fullscreen prompt on launch to minimize browser distractions during experiments.
- **🖨️ Print-Ready Laboratory Manuals**: Clean print media stylesheets (`@media print`) allowing students to print clean records for their practical notebooks.
- **⚡ 100% Client-Side Architecture**: Zero server dependencies or heavy build steps. Works offline and loads instantaneously.
- **🎨 Modern Dark Mode Design**: Ambient glow styling, glassmorphic HUD panels, and micro-interactions.

---

## 🧪 Experiments Catalog

| # | Experiment Name | Class | Physics Domain | Simulator Link | Practical Manual |
|---|---|:---:|---|:---:|:---:|
| **01** | **Vernier Callipers** | XI | Precision Measurements | [Launch Lab](https://mazhar-in.github.io/nms-virtual-lab/vernier-callipers-virtual-lab.html) | [Manual #01](https://mazhar-in.github.io/nms-virtual-lab/manuals.html#exp1) |
| **02** | **Screw Gauge (Micrometer)** | XI | Precision Measurements | [Launch Lab](https://mazhar-in.github.io/nms-virtual-lab/screw-gauge-micrometer-virtual-lab.html) | [Manual #02](https://mazhar-in.github.io/nms-virtual-lab/manuals.html#exp2) |
| **03** | **Spherometer** | XI | Precision Measurements | [Launch Lab](https://mazhar-in.github.io/nms-virtual-lab/spherometer-virtual-lab.html) | [Manual #03](https://mazhar-in.github.io/nms-virtual-lab/manuals.html#exp3) |
| **04** | **Volume of Irregular Lamina** | XI | Mensuration & Mechanics | [Launch Lab](https://mazhar-in.github.io/nms-virtual-lab/volume-of-irregular-lamina-virtual-lab.html) | [Manual #04](https://mazhar-in.github.io/nms-virtual-lab/manuals.html#exp4) |
| **05** | **Physical Beam Balance** | XI | Statics & Moments | [Launch Lab](https://mazhar-in.github.io/nms-virtual-lab/beam-balance-virtual-lab.html) | [Manual #05](https://mazhar-in.github.io/nms-virtual-lab/manuals.html#exp5) |
| **06** | **Parallelogram Law of Vectors** | XI | Vector Mechanics | [Launch Lab](https://mazhar-in.github.io/nms-virtual-lab/parallelogram-law-of-vectors-virtual-lab.html) | [Manual #06](https://mazhar-in.github.io/nms-virtual-lab/manuals.html#exp6) |
| **07** | **Simple Pendulum ($L - T^2$)** | XI | Oscillations & Gravity | [Launch Lab](https://mazhar-in.github.io/nms-virtual-lab/simple-pendulum-virtual-lab.html) | [Manual #07](https://mazhar-in.github.io/nms-virtual-lab/manuals.html#exp7) |
| **08** | **Limiting Friction ($F_s - R$)** | XI | Mechanics & Friction | [Launch Lab](https://mazhar-in.github.io/nms-virtual-lab/limiting-friction-virtual-lab.html) | [Manual #08](https://mazhar-in.github.io/nms-virtual-lab/manuals.html#exp8) |
| **09** | **Inclined Plane Roller** | XI | Newtonian Mechanics | [Launch Lab](https://mazhar-in.github.io/nms-virtual-lab/inclined-plane-roller-virtual-lab.html) | [Manual #09](https://mazhar-in.github.io/nms-virtual-lab/manuals.html#exp9) |
| **10** | **Ohm's Law ($V - I$ Curve)** | XII | Current Electricity | [Launch Lab](https://mazhar-in.github.io/nms-virtual-lab/ohms-law-virtual-lab.html) | [Manual #10](https://mazhar-in.github.io/nms-virtual-lab/manuals.html#exp10) |
| **11** | **Meter Bridge (Slide Wire)** | XII | Circuit Networks | [Launch Lab](https://mazhar-in.github.io/nms-virtual-lab/meter-bridge-virtual-lab.html) | [Manual #11](https://mazhar-in.github.io/nms-virtual-lab/manuals.html#exp11) |
| **12** | **Wheatstone Bridge Network** | XII | Electrical Bridges | [Launch Lab](https://mazhar-in.github.io/nms-virtual-lab/wheatstone-bridge-virtual-lab.html) | [Manual #12](https://mazhar-in.github.io/nms-virtual-lab/manuals.html#exp12) |

---

## 📂 Repository Structure

```plaintext
nms-virtual-lab/
├── index.html                                  # Central Portal & Lab Showcase Hub
├── manuals.html                                # Complete Practical Laboratory Manuals Suite
├── .nojekyll                                   # GitHub Pages static asset bypass
│
├── vernier-callipers-virtual-lab.html          # Exp 01: Vernier Callipers
├── screw-gauge-micrometer-virtual-lab.html     # Exp 02: Screw Gauge
├── spherometer-virtual-lab.html                # Exp 03: Spherometer
├── volume-of-irregular-lamina-virtual-lab.html # Exp 04: Irregular Lamina Volume
├── beam-balance-virtual-lab.html               # Exp 05: Physical Beam Balance
├── parallelogram-law-of-vectors-virtual-lab.html # Exp 06: Parallelogram Law
├── simple-pendulum-virtual-lab.html            # Exp 07: Simple Pendulum
├── limiting-friction-virtual-lab.html          # Exp 08: Limiting Friction
├── inclined-plane-roller-virtual-lab.html      # Exp 09: Inclined Plane
├── ohms-law-virtual-lab.html                   # Exp 10: Ohm's Law
├── meter-bridge-virtual-lab.html               # Exp 11: Meter Bridge
├── wheatstone-bridge-virtual-lab.html          # Exp 12: Wheatstone Bridge
│
├── archive/                                    # Raw initial source files archive
└── README.md                                   # Comprehensive Project Documentation
```

---

## 🚀 Getting Started Locally

Because the entire lab suite is built with pure, self-contained HTML5, CSS3, and JavaScript, **no build tools, compilation, or package installations are required**.

### Option A: Direct Browser Launch
Simply clone or download the repository, then double-click `index.html` to open it in any modern browser (Chrome, Edge, Firefox, Safari).

### Option B: Local HTTP Server (Recommended)
Running through a lightweight local server ensures full compatibility with browser security policies for fullscreen requests and external CDN assets:

```bash
# Clone repository
git clone https://github.com/mazhar-in/nms-virtual-lab.git
cd nms-virtual-lab

# Using Python 3 built-in server:
python -m http.server 8080

# Or using Node.js 'serve' or 'live-server':
npx serve .
```

Then navigate to `http://localhost:8080` in your web browser.

---

## 🌐 Deployment to GitHub Pages

The repository is configured for automated hosting on **GitHub Pages**:

1. In your GitHub repository settings, go to **Settings** → **Pages**.
2. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `gh-pages` (or `main`), folder: `/ (root)`
3. Save. The site will be instantly available at:
   ```
   https://mazhar-in.github.io/nms-virtual-lab/
   ```

To sync changes between `main` and `gh-pages`:
```bash
git push origin main
git push origin main:gh-pages --force
```

---

## 🛠️ Technology Stack

- **Markup & Layout**: HTML5 Semantic Elements (`<article>`, `<header>`, `<aside>`, `<main>`, `<table>`)
- **Styling**: Vanilla CSS3 Custom Properties (Design Tokens, Glassmorphism, CSS Grid, Responsive Flexbox, Ambient Glow Filters)
- **Math Typesetting**: [KaTeX v0.16.9](https://katex.org/) (CDN loaded with auto-render extension)
- **Typography**: [Google Fonts](https://fonts.google.com/) — *Plus Jakarta Sans* & *JetBrains Mono*
- **Icons**: Accessible Unicode and UTF-8 Emoji glyphs
- **Interactivity**: Pure Vanilla ES6+ JavaScript (HTML5 Canvas 2D, Drag & Drop Event Handlers, Touch Events API, Fullscreen API, IntersectionObserver)

---

## 👨‍🏫 Pedagogical Applications

- **Interactive Classroom Smartboards**: Teachers can project individual experiments during physics lectures to dynamically explain zero error, parallax correction, or balancing conditions.
- **Flipped Classroom & Pre-Lab Work**: Students review the theoretical equations and simulate the steps prior to physical wet-lab sessions.
- **Practical Record Preparation**: Students utilize the standardized observation tables and sample data calculations to cross-check their manual logs.
- **Viva-Voce Exam Preparation**: Dedicated board-level Q&A sections reinforce conceptual mastery on instrument sensitivity, circuit rules, and systematic errors.

---

## 👤 Developer & Institutional Attribution

- **Institution**: **National Model Schools**
- **Developed & Maintained by**: **Syed Mazhar Ali**
  - **GitHub**: [@mazhar-in](https://github.com/mazhar-in)
  - **Repository**: [nms-virtual-lab](https://github.com/mazhar-in/nms-virtual-lab)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free for educational, academic, and non-commercial institutional use.
