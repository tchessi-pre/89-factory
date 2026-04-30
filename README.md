# 🍔 89 Factory
---

## 📖 About

89 Factory est un food truck halal premium à Marseille. Ce dépôt contient le code source du site (Next.js + Tailwind), adapté pour un usage client.

### 🎯 Key Features

- **🍔 Interactive Menu** - Browse our complete menu with high-quality food photography
- **📍 Location Finder** - Retrouvez-nous au 47 Cr Belsunce, 13001 Marseille
- **📱 Mobile-First Design** - Fully responsive across all devices
- **⚡ Lightning Fast** - Built with Next.js 16 and optimized for performance
- **🔍 SEO Optimized** - Comprehensive metadata and structured data for search engines
- **🌐 Multi-Language** - Version française
- **♿ Accessible** - WCAG compliant for inclusive user experience
- **🔒 RGPD** - Page “Politique de confidentialité”
- **🥩 100% Halal** - All products are Halal certified

---

## 🚀 Live Website

**Production:** [https://foodiewagon.de](https://foodiewagon.de)

### Status Monitors

- ✅ **Website:** Online
- ✅ **API Endpoints:** Operational
- ✅ **CDN:** Active
- ✅ **SSL Certificate:** Valid
- ✅ **Performance Score:** 95+/100

---

## 🛠️ Technology Stack

### Core Framework

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI component library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe development

### Styling & Design

- **[Tailwind CSS 4.1](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Iconoir React](https://iconoir.com/)** - Icon library
- **Custom Animations** - Smooth transitions and hover effects

### Development Tools

- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting

### Deployment & Hosting

- **[Vercel](https://vercel.com/)** - Edge deployment platform
- **[GitHub](https://github.com/)** - Version control and CI/CD

---

## 📦 Installation

### Prerequisites

- Node.js 18+ or 20+
- pnpm (recommended) or npm
- Git

### Quick Start

\`\`\`bash

# Clone the repository

git clone <repo_url>

# Navigate to project directory

cd 89-factory

# Install dependencies

pnpm install

# Run development server

pnpm dev

# Open http://localhost:3000 in your browser

\`\`\`

### Available Scripts

\`\`\`bash
pnpm dev # Start development server
pnpm build # Build for production
pnpm start # Start production server
pnpm lint # Run ESLint
\`\`\`

---

## 📂 Project Structure

\`\`\`
89-factory/
├── app/ # Next.js App Router pages
│ ├── page.tsx # Homepage
│ ├── layout.tsx # Root layout with metadata
│ ├── globals.css # Global styles and animations
│ ├── mentions-legales/ # Mentions légales
│ ├── politique-de-confidentialite/ # Politique de confidentialité
│ └── cgu/ # CGU
├── components/ # React components
│ ├── header.tsx # Navigation header
│ ├── hero.tsx # Hero section with CTAs
│ ├── menu-section.tsx # Menu display
│ ├── menu-category.tsx # Menu item cards
│ ├── location-section.tsx # Location and hours
│ ├── contact-section.tsx # Contact information
│ ├── footer.tsx # Footer with legal links
│ ├── sticky-cta.tsx # Sticky call-to-action bar
│ └── theme-provider.tsx # Theme provider
├── lib/ # Helpers
│ ├── structured-data.ts # JSON-LD (SEO)
│ └── utils.ts # Utilities
├── public/ # Static assets
│ ├── graphics/ # SVG logos and icons
│ ├── burgers/ # Product images
│ ├── Appetizers/ # Appetizer images
│ ├── Fried-Chicken/ # Chicken product images
│ ├── robots.txt # Search engine directives
│ ├── sitemap.xml # XML sitemap
│ └── site.webmanifest # PWA manifest
├── LICENSE # MIT License
└── README.md # This file
\`\`\`

---

## 🎨 Design System

### Color Palette

- **Primary (Golden Yellow):** `#FBB017` - Menu headers, CTAs, branding
- **Background (Dark):** `oklch(0.12 0.005 250)` - Main background
- **Foreground (White):** `oklch(0.95 0.01 90)` - Text color
- **Accent (Orange):** `oklch(0.65 0.2 30)` - Highlights and CTAs

### Typography

- **Headings:** Oswald (Bold, Black weights)
- **Body Text:** Oswald (Regular, Medium weights)
- **Monospace:** Geist Mono

### Responsive Breakpoints

\`\`\`css
sm: 640px /_ Mobile landscape _/
md: 768px /_ Tablet _/
lg: 1024px /_ Desktop _/
xl: 1280px /_ Large desktop _/
\`\`\`

---

## 🌟 Key Features Breakdown

### 1. Menu System

- Dynamic category tabs (Beef, Chicken, Veggie, Drinks)
- High-quality product images with floating animations
- Spice level indicators
- Pricing in Euro (€)
- Halal certification badges on all items

### 2. Location & Hours

- Interactive map integration
- Clear operating hours (Tous les jours, 11:00 - 20:00)
- Address: 47 Cr Belsunce, 13001 Marseille
- Catering and event booking information

### 4. Legal Compliance

- **Mentions légales** - Informations légales (France)
- **Politique de confidentialité** - Protection des données (RGPD)
- **CGU** - Conditions générales d’utilisation
- Cookie policy and data protection

### 5. SEO Optimization

- Comprehensive meta tags and Open Graph data
- JSON-LD structured data (Restaurant, Menu, MenuItem)
- XML sitemap with image tags
- robots.txt allowing all AI crawlers (GPT, Claude, Perplexity)
- Mots-clés ciblés (Marseille / France)

---

## 📱 Responsive Design

The website is fully responsive and optimized for:

- 📱 **Mobile** (320px - 767px) - Stacked layout, touch-friendly buttons
- 📱 **Tablet** (768px - 1023px) - 2-column grids, optimized spacing
- 💻 **Desktop** (1024px+) - 3-column layouts, hover effects

---

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards
- Alt text on all images
- Focus indicators on form fields

---

## 🔒 Security & Privacy

- HTTPS/SSL encryption
- RGPD : traitement des données et politique de confidentialité
- No third-party tracking without consent
- Secure contact forms
- Privacy policy and cookie notifications
- EU data protection standards

---

## 📊 Performance

### Lighthouse Scores (Target)

- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

### Optimizations

- Next.js Image optimization
- Static site generation (SSG)
- Code splitting and lazy loading
- Minified CSS and JavaScript
- Optimized font loading
- Compressed images (WebP/AVIF)

---

## 🤝 Contributions

Ce dépôt est utilisé pour un projet client. Les contributions externes ne sont pas attendues.

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### Important Note

While the code is open source, the following are proprietary:

- 89 Factory brand name and logos
- Food photography and product images
- Halal certification logos
- Menu content and pricing
- FlavorBytes GmbH company information

---

### Catering & Events

Nous proposons aussi du traiteur pour vos événements (privés, soirées, festivals). Contactez-nous pour un devis.

### Visit Us

📍 **Tous les jours**

- **Adresse :** 47 Cr Belsunce, 13001 Marseille
- **Horaires :** 11:00 - 20:00

---

## 🙏 Acknowledgments

- Built with ❤️ by the 89 Factory team
- Powered by Next.js and Vercel
- Icons from Iconoir
- Typography: Oswald font family
- Community contributors (see [Contributors](../../graphs/contributors))

---

## 📝 Changelog

### v1.0.0 (December 2025)

- ✨ Initial release
- 🍔 Complete menu system with categories
- 📍 Location and hours information
- 📱 Fully responsive design
- 🔍 SEO optimization
- 🔒 Conformité RGPD
- 📞 Contact integration
- 🥩 100% Halal certification display

---

## 🗺️ Roadmap

### Planned Features

- [ ] Online ordering system
- [ ] Menu item customization
- [ ] Loyalty program integration
- [ ] Multi-language support (English)
- [ ] Customer reviews section
- [ ] Newsletter subscription
- [ ] Special offers and promotions
- [ ] Mobile app (iOS/Android)

---

<div align="center">

**[⬆ Back to Top](#-89-factory)**

Made with 🍔 by [89 Factory](https://)

© 2026 89 Factory. Tous droits réservés.

</div>
