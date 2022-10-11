/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'mobile'  : {'max' : '375px'},       // => @media (max-width: 375px) { ... }
      'tablet'  : {'max' : '640px'},       // => @media (max-width: 640px) { ... }
      'laptop'  : {'max' : '1024px'},      // => @media (max-width: 1024px) { ... }
      'desktop' : '1440px',                // => @media (min-width: 1440px) { ... }
    },
    fontFamily: {
      sans      : ['Nunito Sans', 'sans-serif'],
      serif     : ['serif'],
    },
    extend: {
      colors: {
        'dk-mode-element' : 'hsl(209, 23%, 22%)',
        'dk-mode-bg'      : 'hsl(207, 26%, 17%)',
        'lt-mode-text'    : 'hsl(200, 15%, 8%)',
        'lt-mode-input'   : 'hsl(0, 0%, 52%)',
        'lt-mode-bg'      : 'hsl(0, 0%, 98%)',
        'white': 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}
