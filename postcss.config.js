// Use CommonJS format for PostCSS config to avoid ESM/module errors on Vercel
// Renamed to postcss.config.cjs for CommonJS compatibility
// Renamed to postcss.config.cjs for CommonJS compatibility
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    'postcss-nesting': {}
  }
};
