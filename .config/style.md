# Design System Reference

## Colors

| Name | Value | Usage |
|------|-------|-------|
| Primary Red | `#e63946` | Accents, highlights, CTAs |
| Black | `#000000` | Text, borders |
| Dark Grey | `rgb(35, 35, 40)` | Dark mode background |
| White | `#ffffff` | Light background |
| Grey 200 | Tailwind default | Borders, dividers |
| Grey 400 | Tailwind default | Secondary text |

## Typography

- **Font Family**: System fonts (`-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)
- **Logo**: "Aa" with bold "A" and light "a"
- **Headings**: `font-semibold tracking-tighter`
- **Body**: `font-light` with generous `leading-relaxed`
- **Labels**: `tracking-widest uppercase text-sm`

## Spacing

Using Tailwind scale:
- Section padding: `py-24 md:py-32`
- Container max-width: `max-w-6xl`
- Grid gaps: `gap-12 md:gap-16`

## Animation

- **Transitions**: 300ms ease for hover states
- **Scroll effects**: 500ms for color transitions
- **Cubic bezier**: `cubic-bezier(0.68, -0.15, 0.32, 1.15)` for dial/needle

## Components

### Buttons
```html
<!-- Primary -->
<button class="px-16 py-4 bg-black text-white text-sm tracking-widest uppercase hover:bg-[#e63946] transition-colors duration-300">
  Submit
</button>

<!-- Secondary -->
<a class="text-sm tracking-wide px-6 py-2.5 border border-black text-black hover:bg-black hover:text-white transition-all duration-300">
  Contact
</a>
```

### Form Inputs
```html
<input class="form-input w-full px-0 py-4 border-0 border-b border-gray-200 focus:border-black focus:outline-none transition-colors duration-300 bg-transparent" />
```

## Breakpoints

Using Tailwind defaults:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
