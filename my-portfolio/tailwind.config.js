/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        // Add backdrop blur utilities
        backdropBlur: {
          xs: '2px',
          sm: '4px',
          md: '8px',
          lg: '12px',
          xl: '16px',
          '2xl': '24px',
        },
        // Add any custom colors or extensions here
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          'gray': {
            950: '#030712',
          },
        },
      },
    },
    plugins: [],
  }