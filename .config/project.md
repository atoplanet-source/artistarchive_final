# Artist Archives Website

## Project Overview

A single-page marketing website for Artist Archives - a rights-cleared archive of offline commercial photography and video built for AI training and content licensing.

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styles in `/css/styles.css`
- **JavaScript** - Vanilla JS in `/js/main.js`
- **Tailwind CSS** - Utility classes via CDN

## Folder Structure

```
Artist Archive Website/
├── index.html          # Main entry point
├── css/
│   └── styles.css      # Custom styles
├── js/
│   └── main.js         # All JavaScript functionality
├── images/             # Local images (if needed)
├── fonts/              # Custom fonts (if needed)
└── .config/            # AI assistant context
    ├── PROJECT.md      # This file
    ├── GUIDELINES.md   # Development principles
    └── STYLE.md        # Design system reference
```

## Key Features

1. **Hero Section** - Animated color gradient background with logo
2. **Exposure Meter** - Fixed navigation element styled like camera UI
3. **Mode Dial** - Interactive scroll navigation control
4. **Stats Section** - Animated counters for metrics
5. **Team Section** - Team member cards
6. **Contact Form** - Artist/Business toggle with form

## External Dependencies

- Tailwind CSS (CDN): https://cdn.tailwindcss.com
- Logo image (Cloudinary): https://res.cloudinary.com/dts0guj2b/image/upload/v1767908906/ArtistArchiveWhiteText_qt9ffd.png

## Deployment (IONOS)

1. Upload all files maintaining folder structure
2. Set `index.html` as default document
3. No build step required - static files only
