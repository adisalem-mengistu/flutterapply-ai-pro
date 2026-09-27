/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f3f7ff',
          100: '#e6edff',
          200: '#c9d9ff',
          300: '#9eb8ff',
          400: '#728efc',
          500: '#4f67f2',
          600: '#3c4ee0',
          700: '#2f3db3',
          800: '#29378d',
          900: '#272f72',
        },
      },
      boxShadow: {
        soft: '0 20px 45px -20px rgba(79, 103, 242, 0.45)',
      },
    },
  },
  plugins: [],
};
