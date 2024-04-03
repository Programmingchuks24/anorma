// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'itim': ['Itim', 'cursive'],
        'inter':['Inter', 'sans-serif'],
        'dancing':['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
};
