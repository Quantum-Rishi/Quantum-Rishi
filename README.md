# Quantum Rishi

**Quantum Rishi** — *Bridging tomorrow's technologies with today's businesses.*

A production-ready Next.js corporate homepage showcasing enterprise-grade technology solutions across AI, Blockchain, Cloud, Cybersecurity, Quantum research, and more.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14.2 (App Router), TypeScript, Tailwind CSS, and Framer Motion
- **10 Service Divisions**: Comprehensive showcase of QR.AI, QR.Block, QR.Cloud, QR.Cyber, QR.Quantum, QR.IoT, QR.Digi, QR.EduTech, QR.Labs, and QR.Stream
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth scrolling, mobile menu with animations
- **Engagement Models**: Multiple business engagement options (Consulting, Fixed-Scope, SaaS, Retainers, MVPs)
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Complete metadata, Open Graph tags, Twitter cards, and JSON-LD structured data
- **Google Analytics**: Ready-to-use analytics integration with event tracking
- **Performance**: 87.4 kB First Load JS, optimized assets, and efficient code splitting
- **Enterprise Polish**: Professional animations, hover effects, and visual hierarchy
- **Testing**: Comprehensive test suite with Jest and React Testing Library
- **CI/CD**: GitHub Actions for automated linting, testing, and building
- **Error Handling**: React Error Boundary for graceful failure recovery
- **Security**: Regular security audits, no vulnerabilities, latest dependencies
- **Dynamic Content**: JSON-based data structure for easy content updates

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

# Copy environment variables (optional)
cp .env.example .env.local
# Edit .env.local with your Google Analytics ID

# Run development server
npm run dev

# Run tests
npm test

# Run linter
npm run lint

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

```bash
quantum-rishi/
├── __tests__/               # Test files
│   └── components/          # Component tests
├── app/
│   ├── (site)/
│   │   ├── layout.tsx       # Site-specific layout
│   │   └── page.tsx         # Homepage
│   └── layout.tsx           # Root layout with metadata & SEO
├── components/
│   ├── ui/                  # UI primitives (Badge, Button, Card)
│   ├── ErrorBoundary.tsx    # Error boundary component
│   ├── Footer.tsx           # Footer component
│   ├── HeroSection.tsx      # Hero section
│   ├── Navigation.tsx       # Navigation bar
│   └── ...                  # Other components
├── data/
│   ├── services.json        # Services data
│   ├── team.json           # Team members data
│   └── engagement.json     # Engagement models data
├── docs/
│   ├── i18n-setup.md       # i18n implementation guide
│   ├── performance-optimization.md
│   └── security-best-practices.md
├── lib/
│   ├── analytics.ts        # Google Analytics utilities
│   ├── seo.ts             # SEO utilities (JSON-LD)
│   └── utils.ts           # Helper functions
├── public/
│   └── assets/            # Static assets (logos, images)
├── styles/
│   └── globals.css        # Global styles
├── .github/
│   ├── workflows/         # CI/CD workflows
│   └── ISSUE_TEMPLATE/    # Issue templates
├── jest.config.cjs        # Jest configuration
├── jest.setup.ts          # Jest setup
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── CONTRIBUTING.md        # Contribution guidelines
└── package.json           # Dependencies
```

## 📝 Customization

### Update Content

- **Services**: Edit `data/services.json` for easy content updates
- **Team**: Update `data/team.json` to modify team members
- **Engagement Models**: Edit `data/engagement.json`
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
- **Bundle Size**: 87.4 kB First Load JS (excellent!)
- **Performance Guide**: See `docs/performance-optimization.md` for more details

## 🧪 Testing

- **Framework**: Jest with React Testing Library
- **Coverage**: 25+ tests for critical components
- **CI/CD**: Automated testing on every push

```bash
# Run all tests
npm test

# Watch mode for development
npm run test:watch

# Generate coverage report
npm run test:coverage
```

Test files are located in `__tests__/` directory.

## 🔒 Security

- **No Vulnerabilities**: Clean npm audit report
- **Latest Dependencies**: Next.js 14.2.33 (patched security issues)
- **Error Boundaries**: Graceful error handling
- **TypeScript**: Strict mode enabled for type safety
- **Security Guide**: See `docs/security-best-practices.md`

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

We welcome contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:

- Code of conduct
- Development workflow
- Pull request process
- Coding standards
- Testing guidelines
- Commit message format

## 🌍 Internationalization

For adding multi-language support, see our [i18n setup guide](docs/i18n-setup.md).

## 📚 Documentation

- [Performance Optimization Guide](docs/performance-optimization.md)
- [Security Best Practices](docs/security-best-practices.md)
- [i18n Setup Guide](docs/i18n-setup.md)

---

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Framer Motion.
