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
    extend: {},
    colors: {
      'pure-white': 'hsl(0, 0%, 100%)',
      'greyish-blue': 'hsl(223, 23%, 46%)',
      'semi-dark-blue': 'hsl(223, 36%, 14%)',
      'dark-blue': 'hsl(223, 30%, 9%)',
      'primary-red': 'hsl(0, 97%, 63%)',
    },
    fontSize: {
      'heading-l': '2rem',
      'heading-m': '1.5rem',
      'heading-s': '1.5rem',
      'heading-xs': '1.125rem',
      'body-md': '0.9375rem',
      'body-s': '0.8125rem',
    },
  },
  plugins: [],
};
