# Piratica - Mermaid & Pirate Character Entertainment

## Project Overview
Piratica is a premium HTML/CSS/JS template designed for children's entertainment businesses specializing in Mermaid and Pirate characters. It features a "Whimsical Nautical Adventure" aesthetic with pure black and pure white themes, RTL support, and a responsive design system.

## Features
- **Design System**: Built with CSS variables for easy customization.
- **Theme Toggle**: Light and Dark mode toggle with a pure black/white background constraint.
- **RTL Support**: Native RTL support triggered by `dir="rtl"` attribute.
- **Responsive Navigation**: Full horizontal navbar on desktop, seamless slide-out drawer on tablet/mobile.
- **Animations**: Parallax ocean backgrounds, floating bubbles, staggered fade-ins, and typewriter effects.
- **Multi-step Booking Form**: Client-side validated, multi-step booking process with nautical progress indicators.
- **Gallery**: Masonry grid layout with category filtering and a responsive lightbox.

## File Structure
- `index.html`: Main home page.
- `home2.html`: Alternative home page with a different layout.
- `characters.html`: Character showcase with filtering.
- `packages.html`: Tiered packages and comparison table.
- `party-types.html`: Split layout for Pool vs Land parties.
- `gallery.html`: Filterable masonry gallery with lightbox.
- `blog.html` & `blog-single.html`: Blog templates.
- `booking.html`: Multi-step booking form.
- `contact.html`: Contact info, map, and form.
- `login.html` & `register.html`: Authentication pages.
- `404.html`: Custom 404 page.
- `coming-soon.html`: Countdown page.
- `assets/css/style.css`: Global styles and dark mode overrides.
- `assets/css/rtl.css`: RTL specific overrides.
- `assets/js/main.js`: Main interactivity script.

## Setup Instructions
1. Open the project folder.
2. Serve the directory using a local server (e.g., Live Server in VSCode or `python -m http.server`) or open `index.html` in your browser.
3. No build steps required. Everything runs natively using vanilla web technologies.

## Integrations
- **Icons**: [Phosphor Icons](https://phosphoricons.com/) via CDN.
- **Fonts**: Google Fonts (`Cinzel Decorative`, `Lora`, `Nunito`).
- **Forms**: Forms are setup to use Formspree endpoints (replace `action="https://formspree.io/f/placeholder"` with your own).
- **Newsletter**: Mailchimp embed placeholder included in `coming-soon.html`.

## Development Notes
- The dark mode overrides are defined in `style.css` under the `[data-theme="dark"]` selector.
- RTL overrides are isolated in `rtl.css`. Toggle RTL via the button in the navigation or drawer.
- The Javascript file `main.js` handles navigation, themes, forms validation, and basic interactive elements. Specific logic for certain pages (like gallery filtering or countdowns) is included within inline script tags on those respective pages.
