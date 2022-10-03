/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderColor: {
        'Rectanger': 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        'w-500': '500px',
        'w-750': '750px',
      },
    },
  },
  plugins: [],
};
