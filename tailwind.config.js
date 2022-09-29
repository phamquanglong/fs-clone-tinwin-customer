/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderColor: {
        'Rectanger': 'rgba(0, 0, 0, 0.1)',
      },
      backgroundColor: {
        'backgroundTag': 'rgba(252, 131, 45, 0.1)',
        'backgroundBreak': 'rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
};
