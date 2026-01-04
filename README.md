# 🦄 Unicorn Mafia Brand Guide

An interactive brand style guide built with **Svelte 5**, **Vite**, and **Motion One animations**.

---

## Who We Are

850+ elite developers from Amazon, Anthropic, Apple, Cambridge, Google, Imperial, Meta, Nvidia, OpenAI, Oxford, UCL, and Y Combinator. We're cracked devs who ship fast, win hackathons, and build companies. Professional in execution, raw in ambition.

---

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```
Visit http://localhost:5173 (or the port shown in terminal)

### Production Build
```bash
npm run build      # Builds to /dist
npm run preview    # Preview production build
```

---

## ✨ Features

### Interactive Brand Guide
- 🎨 **Colors** - Click-to-copy color palette with visual feedback
- ✍️ **Typography** - Live type specimens and scale examples
- 🦄 **Logo** - Download logos in SVG/PNG/JPG formats at multiple sizes
- 📖 **About** - Brand identity, positioning, and voice & tone

### Design & UX
- 🌓 **Light/Dark Mode** - Persistent theme with smooth transitions
- ⚡ **Smooth Animations** - Motion One powered entrance effects
- 🎯 **Hover Effects** - Interactive micro-interactions throughout
- 📱 **Responsive Design** - Mobile-optimized layouts

### Technical Highlights
- Built with **Svelte 5** (with runes)
- **Vite** for lightning-fast development
- **Motion One** for smooth, hardware-accelerated animations
- **Pure CSS** with CSS variables for theming
- **Zero external dependencies** for core functionality

---

## 📁 Project Structure

```
UM-branding/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   └── Nav.svelte          # Navigation with theme toggle
│   │   ├── pages/
│   │   │   ├── Overview.svelte     # 4-quadrant landing page
│   │   │   ├── About.svelte        # Brand identity page
│   │   │   ├── Colors.svelte       # Color palette page
│   │   │   ├── Typography.svelte   # Typography system page
│   │   │   └── Logo.svelte         # Logo downloads page
│   │   ├── stores.js               # Theme store
│   │   └── utils.js                # Helper functions
│   ├── App.svelte                  # Main app component
│   ├── main.js                     # Entry point
│   └── app.css                     # Global styles
├── public/
│   └── images/                     # Logo assets
├── index.html                      # HTML entry point
├── vite.config.js                  # Vite configuration
├── svelte.config.js                # Svelte 5 config
└── package.json                    # Dependencies
```

---

## 🎨 Brand Essentials

### Positioning
- Elite but not elitist
- Technical but accessible
- Professional but raw
- Community-first always

### Voice & Tone
**Confident.** Direct. Technical. Community-focused.

### Colors
- **Primary:** Off-Black `#1A1A1A`, Off-White `#F8F8F8`
- **Accents:** Turquoise `#4EF9BD`, Red `#EE1701`, Purple `#B307EB`, Blue `#3198F1`

### Typography
- **Primary:** Inter (400, 600, 700, 800)
- **Monospace:** Fira Code

### Logo Usage
- Regular version (black unicorn) for light backgrounds
- Inverse version (white unicorn) for dark backgrounds
- Minimum size: 50px width
- Clear space: 25% of logo width

---

## 🛠️ Tech Stack

- **Framework:** Svelte 5
- **Build Tool:** Vite 5
- **Animations:** Motion One
- **Styling:** Pure CSS with CSS Variables
- **Fonts:** Inter + Fira Code (Google Fonts)
- **State Management:** Svelte stores

---

## 📝 Usage Guidelines

### For Partners & Collaborators
Use official brand assets for sponsorships, events, and collaborations. Maintain our voice: direct, technical, confident. Follow visual guidelines for co-branded materials. Emphasize community over individual achievements.

### For Members
Use the logo on your personal site, LinkedIn, portfolios. Tag and credit Unicorn Mafia when sharing wins. Maintain standards that reflect the community's quality. Build in public and share what you're learning.

---

## 🎯 Key Highlights

✅ **4-quadrant landing page** with animated entrance  
✅ **Theme toggle** on every page  
✅ **Working logo downloads** (SVG/PNG/JPG)  
✅ **Click-to-copy colors** with visual feedback  
✅ **Responsive design** for all devices  
✅ **Smooth animations** throughout  
✅ **Clean, minimal code** with no duplication  
✅ **Fast performance** with Vite  

---

## 🔧 Customization

### Colors
Edit CSS variables in `src/app.css`:
```css
:root {
  --um-black: #1A1A1A;
  --um-white: #F8F8F8;
  --um-turquoise: #4EF9BD;
  /* etc. */
}
```

### Animations
Adjust Motion One parameters in component files:
```js
animate(element, 
  { opacity: [0, 1], y: [30, 0] },
  { duration: 0.6, delay: 0.1 }
);
```

---

## 🔗 Links

- **Website:** [unicrnmafia.com](https://www.unicrnmafia.com)
- **Contact:** stable@unicrnmafia.com

---

## 📄 License

**UNICORN MAFIA © 2025**  
*Highest signal, zero noise.*
