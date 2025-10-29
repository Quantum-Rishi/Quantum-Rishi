# Internationalization (i18n) Setup Guide

This document provides guidance for adding internationalization support to Quantum Rishi.

## Overview

While the current application is in English only, this guide will help you add multi-language support when needed.

## Recommended Approach

For Next.js App Router applications, we recommend using **next-intl** or **next-i18next**.

### Option 1: next-intl (Recommended for App Router)

```bash
npm install next-intl
```

#### Basic Setup

1. Create locale files:
```
messages/
├── en.json
├── es.json
├── fr.json
└── de.json
```

2. Configure `next.config.js`:
```javascript
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl({
  // Your existing Next.js config
});
```

3. Create i18n configuration in `i18n.ts`:
```typescript
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`./messages/${locale}.json`)).default
}));
```

4. Update app structure:
```
app/
├── [locale]/
│   ├── layout.tsx
│   └── page.tsx
```

### Option 2: App Router Native i18n

Next.js 14+ has built-in support for internationalization.

1. Configure in `next.config.js`:
```javascript
module.exports = {
  i18n: {
    locales: ['en', 'es', 'fr', 'de'],
    defaultLocale: 'en',
  },
}
```

## Translation Structure

### messages/en.json
```json
{
  "hero": {
    "title": "Autonomous teams powered by sovereign infrastructure",
    "subtitle": "Tools for builders, creators, and enterprises",
    "cta": {
      "demo": "Request Demo",
      "join": "Join Ecosystem"
    }
  },
  "services": {
    "title": "Our Services",
    "qrAI": {
      "name": "QR.AI",
      "description": "Advanced AI solutions"
    }
  }
}
```

## Best Practices

1. **Use namespaces** - Organize translations by feature/component
2. **Avoid hardcoded strings** - All user-facing text should be translatable
3. **Date/Time formatting** - Use `Intl.DateTimeFormat` for locale-aware dates
4. **Number formatting** - Use `Intl.NumberFormat` for currencies and numbers
5. **Pluralization** - Handle plural forms correctly for each language
6. **RTL support** - Consider right-to-left languages if needed

## Implementation Checklist

When ready to implement i18n:

- [ ] Choose i18n library (next-intl recommended)
- [ ] Install dependencies
- [ ] Create locale files for each language
- [ ] Update app structure for locale routing
- [ ] Extract all hardcoded strings to translation files
- [ ] Add language switcher component
- [ ] Configure date/number formatting
- [ ] Test all locales
- [ ] Add locale to sitemap/SEO
- [ ] Update documentation

## Language Switcher Example

```typescript
'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const changeLanguage = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <select value={locale} onChange={(e) => changeLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="es">Español</option>
      <option value="fr">Français</option>
      <option value="de">Deutsch</option>
    </select>
  );
}
```

## Testing

Test translations with:
```bash
# Verify all locale files have same keys
npm run i18n:validate

# Check for missing translations
npm run i18n:check
```

## Resources

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js i18n Routing](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [MDN Intl Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)

---

**Status**: Not yet implemented. This guide provides the foundation for future implementation.
