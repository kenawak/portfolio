const path = require('path');
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include paths to all relevant files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // Add this line
  ],
};
