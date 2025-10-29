// Use CommonJS format for PostCSS config to avoid ESM/module errors on Vercel
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    'postcss-nesting': {}
  }
};
