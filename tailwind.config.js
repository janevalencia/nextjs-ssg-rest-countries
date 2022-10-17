/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'mobile'  : {'max' : '375px'},       // => @media (max-width: 375px) { ... }
      'tablet'  : '640px',                 // => @media (min-width: 640px) { ... }
      'laptop'  : '1024px',                // => @media (min-width: 1024px) { ... }
      'desktop' : '1440px',                // => @media (min-width: 1440px) { ... }
    },
    fontFamily: {
      sans  : ['Nunito Sans', 'sans-serif'],
      serif : ['serif'],
    },
    fontSize: {
      xs    : ['12px', '16px'],
      sm    : ['14px', '20px'],
      base  : ['16px', '24px'],
      lg    : ['20px', '28px'],
      xl    : ['24px', '32px'],
      '2xl' : ['36px', '32px'],
      '3xl' : ['48px', '32px'],
    },
    fontWeight: {
      'light'  : 300,
      'normal' : 600,
      'bold'   : 800,
    },
    extend: {
      colors: {
        'dk-mode-element' : 'hsl(209, 23%, 22%)',
        'dk-mode-bg'      : 'hsl(207, 26%, 17%)',
        'lt-mode-text'    : 'hsl(200, 15%, 8%)',
        'lt-mode-input'   : 'hsl(0, 0%, 52%)',
        'lt-mode-bg'      : 'hsl(0, 0%, 98%)',
        'white'           : 'hsl(0, 0%, 100%)',
      }
    },
  },
  plugins: [],
}
