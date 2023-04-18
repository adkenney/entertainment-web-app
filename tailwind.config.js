/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    flex: {
      0: '0 0 auto',
      2: '1 1 200%',
    },
    extend: {},
    colors: {
      'pure-white': 'hsl(0, 0%, 100%)',
      'greyish-blue': 'hsl(223, 23%, 46%)',
      'semi-dark-blue': 'hsl(223, 36%, 14%)',
      'dark-blue': 'hsl(223, 30%, 9%)',
      'primary-red': 'hsl(0, 97%, 63%)',
    },
    fontFamily: {
      sans: ['var(--font-outfit)'],
    },
    fontSize: {
      'heading-l': '2rem',
      'heading-m': '1.5rem',
      'heading-s': '1.25rem',
      'heading-xs': '1.125rem',
      'body-md': '1rem',
      'body-s': '0.875rem',
      'body-xs': '0.875rem',
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
