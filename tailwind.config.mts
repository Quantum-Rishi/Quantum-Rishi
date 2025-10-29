// ESM compatible Tailwind config
const config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-nesting')
  ]
};

export default config;
