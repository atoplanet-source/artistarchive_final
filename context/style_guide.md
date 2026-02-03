# Artist Archives - Website Style Guide

## Brand Identity

Artist Archives presents itself as a premium, professional archive service. The visual language draws from photography and camera equipment aesthetics—clean, precise, and purposeful.

---

## Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Black** | `#000000` | `rgb(0, 0, 0)` | Primary text, buttons, borders |
| **White** | `#FFFFFF` | `rgb(255, 255, 255)` | Backgrounds, inverse text |
| **Accent Red** | `#e63946` | `rgb(230, 57, 70)` | Highlights, CTAs, emphasis |

### Secondary Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Dark Grey** | `rgb(35, 35, 40)` | Dark mode background, footer |
| **Light Grey** | `#F9FAFB` (gray-50) | Section backgrounds |
| **Medium Grey** | `#9CA3AF` (gray-400) | Secondary text, placeholders |
| **Border Grey** | `#E5E7EB` (gray-200) | Dividers, form borders |

### Scroll Transition

The homepage uses a dynamic background that transitions from white to dark grey as the user scrolls, creating an immersive experience that mimics adjusting camera exposure.

---

## Typography

### Font Family

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

System fonts ensure fast loading and native feel across platforms.

### Type Scale

| Element | Size | Weight | Tracking | Class |
|---------|------|--------|----------|-------|
| **H1** | 4xl–6xl | Semibold (600) | Tighter | `text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter` |
| **H2** | 3xl–4xl | Semibold (600) | Tight | `text-3xl md:text-4xl font-semibold tracking-tight` |
| **H3** | xl–2xl | Medium (500) | Tight | `text-xl md:text-2xl font-medium tracking-tight` |
| **Body Large** | lg–xl | Light (300) | Normal | `text-lg md:text-xl font-light leading-relaxed` |
| **Body** | sm–base | Normal (400) | Normal | `text-sm md:text-base` |
| **Label** | sm | Medium (500) | Widest | `text-sm tracking-widest uppercase` |
| **Caption** | sm | Normal | Normal | `text-sm opacity-60` |

### Logo Typography

The "Aa" logo uses:
- Bold "A" (`font-semibold`)
- Light "a" (`font-light`)
- Size: `text-2xl`
- Tracking: `tracking-tight`

---

## Spacing System

Using Tailwind's default spacing scale:

### Section Padding
- Vertical: `py-16 md:py-24` or `py-24 md:py-32`
- Horizontal: `px-6 md:px-8`

### Container Width
- Max width: `max-w-4xl` (content) or `max-w-6xl` (full layouts)
- Always centered: `mx-auto`

### Component Gaps
- Grid gaps: `gap-6` to `gap-12`
- Stack gaps: `space-y-6` to `space-y-8`
- Inline gaps: `gap-3` to `gap-8`

---

## Components

### Buttons

**Primary Button**
```html
<button class="px-16 py-4 bg-black text-white text-sm tracking-widest uppercase hover:bg-[#e63946] transition-colors duration-300">
  Submit
</button>
```

**Secondary Button (Outline)**
```html
<a class="text-sm tracking-wide px-6 py-2.5 border border-black text-black hover:bg-black hover:text-white transition-all duration-300">
  Contact
</a>
```

### Form Inputs

```html
<input class="w-full px-0 py-4 border-0 border-b border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 bg-transparent" />
```

Inputs use bottom-border only style with animated underline on focus.

### Cards

```html
<div class="p-6 bg-white border border-gray-200">
  <h3 class="font-medium mb-2">Title</h3>
  <p class="text-gray-600 text-sm">Description</p>
</div>
```

### Category Tags

```html
<span class="px-4 py-2 border border-gray-300 text-sm">Category</span>
```

---

## Navigation

### Desktop Navigation
- Fixed position at top
- White background with blur on scroll
- Shadow appears after 50px scroll
- Links use underline animation on hover

### Mobile Navigation
- Hamburger menu (three lines)
- Full-screen overlay
- Centered vertical links
- Animated open/close transition

### Logo Behavior
- Always links to homepage (`index.html`)
- Visible on all pages

---

## Animation & Transitions

### Standard Transition
```css
transition-all duration-300
```

### Hover States
- Buttons: Background color change
- Links: Underline animation or opacity change
- Cards: Subtle lift or border change

### Scroll Effects (Homepage)
- Background color interpolation (white → dark grey)
- Exposure meter and mode dial fade in
- Counter animation on scroll into view

### Timing Functions
- Default: `ease`
- Dial/Needle: `cubic-bezier(0.68, -0.15, 0.32, 1.15)` (slight overshoot)

---

## Layout Patterns

### Hero Section
- Full viewport height (`min-h-screen`)
- Centered content
- Animated gradient background (homepage)

### Content Sections
- Alternating backgrounds (white / gray-50 / black)
- Consistent vertical rhythm
- Clear visual hierarchy

### Grid Layouts
- 1 column on mobile
- 2-3 columns on desktop
- `gap-12` for generous spacing

---

## Photography Theme Elements

These camera-inspired UI elements appear on the homepage:

### Exposure Meter
- Fixed horizontal bar below navbar
- Shows current section as "exposure stops"
- Red needle indicates position

### Mode Dial
- Fixed on right side of viewport
- Rotates as user scrolls between sections
- Draggable for navigation

---

## Responsive Breakpoints

Using Tailwind defaults:

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets, primary breakpoint |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |

### Mobile-First Approach
Always write mobile styles first, then add responsive variants:
```html
<h1 class="text-4xl md:text-5xl lg:text-6xl">
```

---

## Accessibility

- Sufficient color contrast (black on white, white on black)
- Focus states on interactive elements
- Semantic HTML structure
- Alt text on images
- Touch-friendly tap targets (minimum 44px)

---

## File Organization

```
Artist Archive Website/
├── index.html          # Homepage
├── about.html          # About page
├── css/
│   └── styles.css      # Custom styles
├── js/
│   └── main.js         # JavaScript (homepage)
├── images/             # Local images
├── fonts/              # Custom fonts (if added)
├── context/            # Project documentation
│   ├── Artist_Archives_Deck.md
│   └── STYLE_GUIDE.md  # This file
└── .config/            # AI assistant context
```
