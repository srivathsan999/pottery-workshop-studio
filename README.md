# Earth & Clay Studio - Pottery Workshop Studio Website Template

A professional, frontend-only HTML template for pottery workshop studios. Built with TailwindCSS, vanilla JavaScript, and designed with a calm, tactile aesthetic perfect for showcasing handcrafted pottery and workshops.

## 🌟 Features

- **Two Homepage Variants** - Different layouts for variety
- **Fully Responsive** - Mobile-first design that works on all devices
- **Light/Dark Mode** - Seamless theme switching with CSS variables
- **11 Complete Pages** - All essential pages included
- **Clean & Modern Design** - Calm, earthy aesthetic with tactile feel
- **Accessibility Focused** - WCAG AA compliant, respects prefers-reduced-motion
- **ThemeForest Ready** - Professional quality suitable for marketplace

## 📁 File Structure

```
pottery-workshop-studio/
│
├── assets/
│   ├── css/
│   │   ├── tailwind.css          # Tailwind base configuration
│   │   ├── theme.css             # Theme variables and custom styles
│   │   ├── animations.css        # Subtle animation definitions
│   │   └── output.css             # Compiled Tailwind CSS (generate this)
│   ├── js/
│   │   ├── theme-toggle.js       # Dark/light mode functionality
│   │   └── navbar.js             # Navbar interactions and mobile menu
│   └── images/                   # Placeholder for your images
│
├── index.html                     # Home v1
├── home-2.html                   # Home v2 (alternate layout)
├── about.html                    # Studio story & philosophy
├── workshops.html                # Workshop listings
├── workshop-details.html         # Individual workshop page
├── gallery.html                  # Student creations gallery
├── blog.html                     # Blog listing
├── blog-details.html             # Individual blog post
├── contact.html                  # Contact form and info
├── login.html                    # Login page (UI only)
├── signup.html                   # Sign up page (UI only)
├── 404.html                      # Error page
├── tailwind.config.js            # Tailwind configuration
├── package.json                  # NPM dependencies
└── README.md                     # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- Basic knowledge of HTML/CSS

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Build CSS**
   ```bash
   npm run build-css-prod
   ```
   
   Or for development with watch mode:
   ```bash
   npm run build-css
   ```

3. **Open in Browser**
   - Simply open any HTML file in your browser
   - Or use a local server like Live Server in VS Code

## 🎨 Design System

### Color Palette

**Light Mode:**
- Background: `#F5F1EC` (Warm clay white)
- Surface: `#FFFFFF`
- Primary Text: `#2B2B2B`
- Secondary Text: `#6B6B6B`
- Accent Terracotta: `#B56A4A`
- Accent Sage: `#7A8F7A`

**Dark Mode:**
- Background: `#1A1A1A`
- Surface: `#242424`
- Primary Text: `#F2F2F2`
- Secondary Text: `#B8B8B8`
- Accent Terracotta: `#C9825E`
- Accent Sage: `#9BB49A`

### Typography

- **Headings:** Cormorant Garamond (artistic, elegant)
- **Body/UI:** Inter (clean, readable)
- **Line Height:** 1.65 for body, 1.3 for headings

### Border Radius

- Cards: `16px`
- Buttons: `12px`
- Inputs: `12px`

### Animations

- Page load: Gentle fade (opacity only)
- Section reveal: Fade + 6px translateY
- Image hover: Slow zoom (1.03 scale)
- Button hover: Color shift only
- Respects `prefers-reduced-motion`

## 📄 Pages Overview

### Home Pages
- **index.html** - Main homepage with hero, featured workshops, studio story, testimonials
- **home-2.html** - Alternate layout with full-width hero, features grid, workshop showcase

### Content Pages
- **about.html** - Studio story, philosophy, team members
- **workshops.html** - Grid of all available workshops
- **workshop-details.html** - Detailed workshop information with booking
- **gallery.html** - Image gallery of student creations
- **blog.html** - Blog post listings
- **blog-details.html** - Individual blog post with related articles
- **contact.html** - Contact form and studio information

### User Pages
- **login.html** - Login form (UI only)
- **signup.html** - Registration form (UI only)
- **404.html** - Custom error page

## 🛠️ Customization

### Changing Colors

Edit `assets/css/theme.css` to modify the color variables:

```css
:root {
  --bg-primary: #F5F1EC;
  --accent-terracotta: #B56A4A;
  /* ... */
}
```

### Adding Images

Replace placeholder Unsplash URLs with your own pottery images. Recommended:
- Hands shaping clay
- Potter's wheel in action
- Finished ceramic pieces
- Studio interiors
- Natural lighting

### Modifying Content

All content is in HTML files. Simply edit the text directly in each file.

## 📱 Responsive Breakpoints

- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px

## ⚙️ JavaScript Features

### Theme Toggle
- Saves preference to localStorage
- Respects system preference
- Smooth transitions

### Navbar
- Sticky on scroll
- Mobile menu toggle
- Dropdown menus
- Smooth animations

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Notes

- **Images:** Currently using Unsplash placeholder URLs. Replace with your own pottery images.
- **Forms:** All forms are UI-only. No backend functionality included.
- **Theme Toggle:** Fully functional, saves user preference.

## 🔧 Development

### Building for Production

```bash
npm run build-css-prod
```

This generates a minified `output.css` file.

### Development Mode

```bash
npm run build-css
```

This watches for changes and rebuilds CSS automatically.

## 📄 License

This template is designed for ThemeForest/Creative Market. Check your marketplace's license requirements.

## 🎨 Design Philosophy

This template follows a calm, tactile design philosophy:
- **No loud colors** - Earthy, natural palette
- **Subtle animations** - Almost invisible, never distracting
- **Generous spacing** - Breathing room for content
- **Warm textures** - Inviting, human feel
- **Accessibility first** - Readable, usable by everyone

## 📞 Support

For customization help or questions, refer to:
- TailwindCSS Documentation: https://tailwindcss.com/docs
- Google Fonts: https://fonts.google.com

---

**Built with care for pottery enthusiasts everywhere.** 🏺

