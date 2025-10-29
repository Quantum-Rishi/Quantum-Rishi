# Performance Optimization Guide

This document outlines performance optimization strategies for Quantum Rishi.

## Current Performance

- **First Load JS**: 87.4 kB (excellent, target < 100 kB)
- **Build Output**: Static generation enabled
- **Lighthouse Score**: Target ≥90

## Implemented Optimizations

### 1. Static Generation
All pages are pre-rendered at build time for optimal performance.

### 2. Code Splitting
Next.js automatically splits code by route, reducing initial bundle size.

### 3. Image Optimization
Consider using Next.js Image component instead of `<img>` tags for:
- Automatic WebP conversion
- Lazy loading
- Responsive images
- Size optimization

## Recommended Optimizations

### 1. Dynamic Imports

For heavy components, use dynamic imports with loading states:

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false, // if client-side only
});
```

### 2. Font Optimization

Use `next/font` for optimal font loading:

```typescript
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
```

### 3. Image Optimization

Replace `<img>` with Next.js Image:

```typescript
import Image from 'next/image';

<Image
  src="/assets/logo.svg"
  alt="Logo"
  width={200}
  height={50}
  priority // for above-the-fold images
/>
```

### 4. Bundle Analysis

Analyze bundle size:

```bash
npm install --save-dev @next/bundle-analyzer
```

```javascript
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  // your config
});
```

Run analysis:
```bash
ANALYZE=true npm run build
```

### 5. Lazy Loading Below-the-Fold Content

```typescript
import { lazy, Suspense } from 'react';

const Footer = lazy(() => import('./Footer'));

<Suspense fallback={<FooterSkeleton />}>
  <Footer />
</Suspense>
```

### 6. Reduce Third-Party Scripts

Minimize external scripts and load them efficiently:

```typescript
import Script from 'next/script';

<Script
  src="https://example.com/script.js"
  strategy="lazyOnload" // or 'afterInteractive'
/>
```

### 7. Optimize CSS

- Use Tailwind's purge feature (already enabled)
- Remove unused CSS
- Consider CSS-in-JS for critical CSS

### 8. Prefetching

Next.js automatically prefetches links in viewport. Optimize with:

```typescript
<Link href="/page" prefetch={false}> // disable if not needed
```

### 9. Compression

Enable compression in production:

```javascript
// next.config.js
module.exports = {
  compress: true, // enabled by default
};
```

### 10. Edge Caching

Configure appropriate cache headers:

```typescript
export const revalidate = 3600; // revalidate every hour
```

## Monitoring Performance

### Core Web Vitals

Track these metrics:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **INP (Interaction to Next Paint)**: < 200ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Tools

1. **Lighthouse** (Chrome DevTools)
2. **WebPageTest**
3. **Google PageSpeed Insights**
4. **Vercel Analytics** (if deployed on Vercel)

## Performance Budget

Maintain these targets:

| Metric | Target | Current |
|--------|--------|---------|
| First Load JS | < 100 kB | 87.4 kB ✓ |
| LCP | < 2.5s | TBD |
| INP | < 200ms | TBD |
| CLS | < 0.1 | TBD |
| Total Page Size | < 500 kB | TBD |

## Action Items

- [ ] Replace `<img>` tags with Next.js Image
- [ ] Add dynamic imports for heavy components
- [ ] Implement font optimization
- [ ] Set up bundle analyzer
- [ ] Configure monitoring (Vercel Analytics or similar)
- [ ] Add loading states for async content
- [ ] Optimize third-party scripts
- [ ] Measure Core Web Vitals
- [ ] Set up performance CI checks

## Best Practices

1. **Measure first** - Use profiling before optimizing
2. **Prioritize** - Focus on user-facing optimizations
3. **Test** - Verify improvements with real metrics
4. **Monitor** - Track performance over time
5. **Iterate** - Continuously improve based on data

---

**Last Updated**: 2025-10-29
