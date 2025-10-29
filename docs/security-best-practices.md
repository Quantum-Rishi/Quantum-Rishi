# Security Best Practices

This document outlines security best practices for the Quantum Rishi project.

## Current Security Status

- ✅ No known vulnerabilities (npm audit clean)
- ✅ Next.js updated to latest secure version (14.2.33)
- ✅ Error boundaries implemented
- ✅ TypeScript strict mode enabled

## Security Checklist

### 1. Dependency Security

#### Regular Audits
```bash
# Check for vulnerabilities
npm audit

# Fix automatically (use with caution)
npm audit fix

# Force fix breaking changes (dangerous)
npm audit fix --force
```

#### Best Practices
- ✅ Run `npm audit` before each deployment
- ✅ Keep dependencies updated regularly
- ✅ Review dependency changes in PRs
- ⚠️ Avoid deprecated packages
- ⚠️ Minimize third-party dependencies

### 2. Environment Variables

#### Never Commit Secrets
```bash
# .gitignore includes
.env
.env.local
.env.*.local
```

#### Public vs Private Variables
- **Public** (client-side): Prefix with `NEXT_PUBLIC_`
- **Private** (server-side only): No prefix

```bash
# .env.example (committed)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# .env.local (NOT committed)
DATABASE_URL=postgresql://...
API_SECRET_KEY=secret123
```

### 3. API Security

#### Rate Limiting
Consider implementing rate limiting for API routes:

```typescript
// lib/rate-limit.ts
import { LRUCache } from 'lru-cache';

const rateLimiter = new LRUCache({
  max: 500,
  ttl: 60000, // 1 minute
});

export function rateLimit(identifier: string) {
  const count = (rateLimiter.get(identifier) as number) || 0;
  
  if (count >= 10) {
    return false;
  }
  
  rateLimiter.set(identifier, count + 1);
  return true;
}
```

#### CORS Configuration
```typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://yourdomain.com' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,PUT,DELETE' },
        ],
      },
    ];
  },
};
```

### 4. Authentication & Authorization

If implementing authentication:

```typescript
// Use secure session management
import { getServerSession } from 'next-auth';

// Use httpOnly cookies
// Implement CSRF protection
// Use secure password hashing (bcrypt, argon2)
```

### 5. Content Security Policy (CSP)

Add CSP headers to prevent XSS attacks:

```typescript
// next.config.js
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https:;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ];
  },
};
```

### 6. Input Validation & Sanitization

#### Server-Side Validation
```typescript
import { z } from 'zod';

const ContactSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(100),
  message: z.string().min(10).max(1000),
});

// Validate input
const result = ContactSchema.safeParse(data);
```

#### Client-Side Sanitization
```typescript
// Avoid dangerouslySetInnerHTML
// If necessary, use DOMPurify

import DOMPurify from 'isomorphic-dompurify';

const clean = DOMPurify.sanitize(dirty);
```

### 7. HTTPS & Secure Headers

#### Security Headers
```typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

### 8. Error Handling

- ✅ Never expose stack traces in production
- ✅ Log errors securely server-side
- ✅ Use Error Boundaries for graceful failures
- ⚠️ Sanitize error messages shown to users

### 9. File Uploads (if implemented)

```typescript
// Validate file types
const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
if (!allowedTypes.includes(file.type)) {
  throw new Error('Invalid file type');
}

// Validate file size
const maxSize = 5 * 1024 * 1024; // 5MB
if (file.size > maxSize) {
  throw new Error('File too large');
}

// Sanitize filename
const sanitized = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
```

### 10. Third-Party Integrations

- ⚠️ Review privacy policies
- ⚠️ Minimize data sharing
- ⚠️ Use subresource integrity (SRI) when possible
- ⚠️ Implement proper error handling

```typescript
<script
  src="https://cdn.example.com/script.js"
  integrity="sha384-..."
  crossOrigin="anonymous"
/>
```

## Monitoring & Incident Response

### Security Monitoring
- Set up vulnerability alerts (GitHub Dependabot)
- Monitor error logs for suspicious patterns
- Track failed authentication attempts
- Set up uptime monitoring

### Incident Response Plan
1. **Detect** - Identify security issue
2. **Contain** - Limit exposure
3. **Eradicate** - Fix vulnerability
4. **Recover** - Deploy patch
5. **Learn** - Document and improve

## Security Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/configuring/security-headers)
- [npm Security](https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities)
- [Snyk Security](https://snyk.io/)

## Compliance

For enterprise deployments, consider:
- SOC 2 compliance
- GDPR requirements
- CCPA compliance
- Data retention policies
- Privacy policy
- Terms of service

## Action Items

- [x] Enable npm audit in CI
- [x] Update all dependencies
- [ ] Implement CSP headers
- [ ] Add security headers
- [ ] Set up Dependabot
- [ ] Document incident response plan
- [ ] Review third-party scripts
- [ ] Implement rate limiting (if needed)
- [ ] Add input validation (if forms added)
- [ ] Security audit before launch

---

**Last Updated**: 2025-10-29
