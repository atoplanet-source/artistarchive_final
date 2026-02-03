# CLAUDE.md — Artist Archives Website

## Project Overview

Marketing website for **Artist Archives**, a rights-cleared archive of commercial photography and video for AI training and content licensing. The site serves two audiences: **AI teams** seeking training data and **creators/photographers** looking to license their archives.

---

## Technical Rules

### Stack
- **HTML5** — Static HTML pages
- **Tailwind CSS** — Via CDN (`<script src="https://cdn.tailwindcss.com"></script>`)
- **Vanilla JavaScript** — No frameworks
- **Custom CSS** — Located in `css/styles.css`

### Deployment
- Target host: **IONOS** (Apache server)
- `.htaccess` configured for proper routing and caching

### Code Standards
- Use Tailwind utility classes for styling when possible
- Custom CSS only for complex animations or styles not available in Tailwind
- Keep JavaScript vanilla — no jQuery or frameworks
- Mobile-first responsive design
- All external assets (images, fonts) loaded via CDN

### Colors
- **Primary accent:** `#e63946` (red)
- **Text:** Black/gray scale
- **Backgrounds:** White, `gray-50`, black for dark sections

### Typography
- **System font stack:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- No custom serif fonts (previously tested Source Serif, Lora — removed)
- Headlines: `font-semibold`, large sizes (`text-4xl` to `text-6xl`)
- Body: `text-sm` to `text-lg`

---

## Global Truths

### Business
- Artist Archives licenses **offline** commercial photography (not scraped from the web)
- Content spans **2000–2025** (25 years of culture)
- Archive size: **300M+ images**, scaling to 1B+
- **100+ elite photographers** in the network
- Founder has **26+ years** in commercial photography

### Brand Voice
- Professional but not corporate
- Approachable for creators, trustworthy for enterprises
- Key differentiator: "rights-cleared" and "not scraped"
- The word "offline" is emphasized (highlighted in red on hero)

### Two Audiences
1. **AI Teams** — Need training data, care about licensing, metadata, delivery
2. **Creators** — Photographers/directors with archives, care about control, revenue share, respect

---

## Global Index

```
Artist Archive Website/
├── index.html              # Homepage
├── about.html              # About page
├── css/
│   └── styles.css          # Custom styles (animations, nav elements, meter/dial)
├── js/
│   └── main.js             # All JavaScript (scroll tracking, animations, form, nav)
├── .htaccess               # Apache config for IONOS deployment
├── .config/                # AI assistant context files
│   ├── PROJECT.md          # Project overview
│   ├── GUIDELINES.md       # Development guidelines
│   └── STYLE.md            # Style documentation
├── context/                # Reference materials
│   ├── Artist_Archives_Deck.md      # Pitch deck content
│   ├── enterprise:creator.md        # Messaging for both audiences
│   ├── STYLE_GUIDE.md               # Design system reference
│   └── artist-archives-preview OLD.html  # Original single-file version (reference)
├── WEBSITE_COPY.md         # All website text for copy review
├── WEBSITE_COPY.html       # HTML version of copy doc
├── WEBSITE_COPY.pdf        # PDF version of copy doc
└── CLAUDE.md               # This file
```

---

## Key Components

### Navigation Elements
- **Exposure Meter** — Horizontal bar at top (below navbar), shows current section, clickable
- **Mode Dial** — Circular dial on right side, rotates with scroll, draggable
- Both hidden on mobile, appear after scrolling past hero

### Sections (in order)
1. **Hero** — Animated gradient background, logo image, tagline
2. **Stats** — Three counters (images, photographers, years)
3. **How It Works** — Dual-path diagram for AI teams and creators
4. **For AI Teams** — Large headline left, numbered features right
5. **For Creators** — Features left, large headline right (mirrored layout)
6. **Team** — Three team member cards
7. **Contact** — Dark section with form
8. **Footer** — Copyright, links

### JavaScript Features
- Hero color wheel animation (HSL rotation)
- Scroll-based section tracking
- Exposure meter needle positioning
- Mode dial rotation
- Counter animation on scroll into view
- Mobile hamburger menu
- Smooth scroll for anchor links

---

## Notes for Future Development

- Logo image hosted on Cloudinary
- No backend — form submission shows alert only (needs integration)
- Team photos are placeholder SVGs (need real images)
- Privacy/Terms pages not yet created
- Consider adding: press logos, FAQ section, case studies
