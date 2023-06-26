module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/*.{js,ts,jsx,tsx}',
  ],
  purge: {
    enabled: true,
    content: ['./src/components/**/*.{js,ts,jsx,tsx}',
      './src/*.{js,ts,jsx,tsx}',],
  },
  theme: {
    extend: {
      fontFamily: {
        Soligant: ['Soligant', 'serif'],
      },
    },
  },
  plugins: [],
};
