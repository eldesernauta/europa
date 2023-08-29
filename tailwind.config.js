module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Soligant: ['Soligant', 'serif'],
        Quizma: ['Quizma', 'sans-serif'],
      },
      screens: {
        'tall': { 'raw': '(min-height: 750px)' },
      }
    },
  },
  plugins: [],
};
