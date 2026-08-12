/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#102d28',
        muted: '#58706a',
        paper: '#f6f3eb',
        cream: '#fffdf8',
        lime: '#c8ff4e',
        coral: '#ff8b6d',
        line: '#dce2d5',
        teal: '#1e5750',
        'coral-alt': '#d8664d',
        'brand-orange': '#da6b51',
        'soft-green': '#eff5e7',
        'light-bg': '#f5f6f2',
        'hero-dark': '#0d2c26',
        'hero-light': '#174e45',
        'careers-bg': '#f1eee4',
        'market-bg': '#fffaf0',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'button-lime': '5px 5px 0 #c8ff4e',
        'button-coral': '5px 5px 0 #ff8b6d',
        'card-coral': '14px 15px 0 #ff8b6d',
        'card-hover': '7px 8px 0 #d9e3d4',
        'chip-lime': '6px 6px 0 #c8ff4e',
        'finish-lime': '12px 12px 0 #c8ff4e',
        'finish-lime-sm': '7px 7px 0 #c8ff4e',
        'step-shadow': '0 10px 26px #102d2808',
        'step-hover': '0 14px 30px #102d2810',
        'detail-shadow': '0 16px 40px #102d280b',
      },
    },
  },
  plugins: [],
}
