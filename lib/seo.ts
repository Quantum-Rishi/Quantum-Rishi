// SEO utilities (JSON-LD, meta tags, etc.)
export function getJsonLdSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Quantum Rishi",
    "url": "https://quantumrishi.com",
    "logo": "/assets/logo.svg",
    "sameAs": [
      "https://linkedin.com/company/quantum-rishi",
      "https://github.com/Quantum-Rishi"
    ]
  };
}
