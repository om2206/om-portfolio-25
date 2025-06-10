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
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'radley': ['Radley', 'serif'],
        'ibm-plex-serif': ['IBM Plex Serif', 'serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        typewriter: 'typewriter 4s steps(20) 1s 1 normal both',
        blink: 'blink 1s infinite',
        'fly': 'fly 20s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        typewriter: {
          'from': { 
            width: '0'
          },
          'to': { 
            width: '100%' 
          }
        },
        blink: {
          '0%, 50%': { 
            opacity: '1'
          },
          '51%, 100%': { 
            opacity: '0'
          }
        },
        fly: {
          '0%': {
            transform: 'translate(0, 0) rotate(0deg)',
          },
          '25%': {
            transform: 'translate(-150px, -30px) rotate(-10deg)',
          },
          '50%': {
            transform: 'translate(-280px, -20px) rotate(-5deg)',
          },
          '75%': {
            transform: 'translate(-320px, -5px) rotate(0deg)',
          },
          '100%': {
            transform: 'translate(-370px, -10px) rotate(5deg)',
          },
        },
      },
      colors: {
        'neutral-750': '#404040',
      }
    },
  },
  plugins: [],
} 