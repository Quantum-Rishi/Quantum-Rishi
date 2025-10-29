// Use direct import for types, and ensure your tsconfig uses "moduleResolution": "node16" or "nodenext"
// Local Config type to avoid TypeScript errors
type Config = {
  content: string[];
  theme: object;
  plugins: any[];
};

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
