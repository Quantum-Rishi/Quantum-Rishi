# Quantum Rishi

**Quantum Rishi** — *Bridging tomorrow's technologies with today's businesses.*

A production-ready Next.js corporate homepage showcasing enterprise-grade technology solutions across AI, Blockchain, Cloud, Cybersecurity, Quantum research, and more.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion
- **10 Service Divisions**: Comprehensive showcase of QR.AI, QR.Block, QR.Cloud, QR.Cyber, QR.Quantum, QR.IoT, QR.Digi, QR.EduTech, QR.Labs, and QR.Stream
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth scrolling, mobile menu with animations
- **Engagement Models**: Multiple business engagement options (Consulting, Fixed-Scope, SaaS, Retainers, MVPs)
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Complete metadata, Open Graph tags, and JSON-LD structured data
- **Performance**: Lighthouse scores ≥90, optimized assets, and efficient code splitting
- **Enterprise Polish**: Professional animations, hover effects, and visual hierarchy

## 🎨 Design Highlights

- Light mesh gradient background with subtle particle effects
- Soft card styling with backdrop blur
- Blue/violet gradient accents on brand elements
- Smooth animations and micro-interactions
- Trust bar with partner logos
- Professional footer with social links

## 🛠️ Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Quantum-Rishi/Quantum-Rishi.git
cd Quantum-Rishi

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at `http://localhost:3000`

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Other Platforms

The site is built as a standalone Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render
- Any platform supporting Node.js

## 🏗️ Project Structure

```
quantum-rishi/
├── app/
│   ├── (site)/
│   │   ├── layout.tsx       # Site-specific layout
│   │   └── page.tsx         # Homepage
│   └── layout.tsx           # Root layout with metadata
├── components/
│   ├── ui/                  # UI primitives (Badge, Button, Card)
│   ├── BackToTop.tsx        # Back to top button
│   ├── CTA.tsx              # Call-to-action section
│   ├── Contact.tsx          # Contact section
│   ├── Engagement.tsx       # Engagement models
│   ├── Footer.tsx           # Footer component
│   ├── Hero.tsx             # Hero section
│   ├── Mission.tsx          # Mission statement
│   ├── Navigation.tsx       # Navigation bar
│   ├── Services.tsx         # Services grid
│   └── TrustBar.tsx         # Trust logos bar
├── lib/
│   ├── seo.ts              # SEO utilities (JSON-LD)
│   └── utils.ts            # Helper functions
├── public/
│   └── assets/             # Static assets (logos, images)
├── styles/
│   └── globals.css         # Global styles
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 📝 Customization

### Update Content

- **Services**: Edit `components/Services.tsx` to modify the 10 divisions
- **Engagement Models**: Update `components/Engagement.tsx`
- **Contact Info**: Change email/LinkedIn in `components/Contact.tsx`, `components/CTA.tsx`, and `components/Footer.tsx`
- **Branding**: Replace `public/assets/logo.svg` with your brand logo

### Styling

- Global styles: `styles/globals.css`
- Theme colors: `tailwind.config.ts` and CSS variables in `globals.css`
- Component-specific styles: Within each component file

### SEO & Metadata

- Update `app/layout.tsx` for site-wide metadata
- Modify `lib/seo.ts` for JSON-LD schema

## 🎯 Sections

1. **Hero** - Main headline with gradient, CTAs, trust bar, and scroll indicator
2. **Mission** - Company mission statement
3. **Services** - Grid of 10 vertical divisions with icons
4. **Engagement** - 5 flexible engagement models
5. **CTA** - Call-to-action band with contact buttons
6. **Contact** - Email/LinkedIn cards + demo form
7. **Footer** - Brand info, quick links, social media

## 📊 Performance

- **Static Generation**: Pre-rendered at build time for optimal performance
- **Code Splitting**: Automatic chunking by Next.js
- **Image Optimization**: Next.js Image component with lazy loading
- **CSS Optimization**: Tailwind CSS with PurgeCSS
- **Bundle Size**: ~143 KB First Load JS

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management in mobile menu
- Reduced motion support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Website**: [quantumrishi.com](https://quantum-rishi.com)
- **Email**: [hello@quantumrishi.com](mailto:hello@quantum-rishi.com)
- **LinkedIn**: [Quantum Rishi](https://linkedin.com/company/quantum-rishi)
- **GitHub**: [Quantum-Rishi](https://github.com/Quantum-Rishi)

## 🤝 Contributing

This is a public repository. Feel free to fork, customize, and use for your own projects.

---

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion.
