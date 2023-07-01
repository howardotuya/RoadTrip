/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
       
        'myellow': {
          DEFAULT: '#F6B847',
        },
        'mblack': {
          DEFAULT: '#231F20',
        },
        'mwhite': {
          DEFAULT: '#F9F4E8',
        },
        
      },
    },
  },
  plugins: [],
}
