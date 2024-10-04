/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'shadow-medium' : '0 4 8 rgba(0, 0, 0, 0.06) , 0 0 4 rgba(0, 0, 0, 0.04) '
      },
      colors:{
        'green-primary':'rgba(0, 133, 60, 1)',
        'slate-primary':'rgba(248, 248, 249, 1)'
      },
      borderWidth:{
        '1':'1px'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

