/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ['*'],
  theme: {
    screens: {
      sms: '180px',
      sm2: '400px',
      sm: '560px',
      md2: '1000px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'main': '#F44335',
        'lemon': '#00FF84',
        'nevi-blue': '#2D3142',
      },
      backgroundImage: { 
        'group-study':"url('/images/group-study.png')"
      }
    },
  },
  plugins: [],
}

