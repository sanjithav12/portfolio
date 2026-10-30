/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        carbon: {
          950: '#07090d',
          900: '#0d1117',
          850: '#111620',
          800: '#161b22',
          700: '#21262d',
          600: '#30363d',
        },
        cyber: {
          emerald: '#10b981',
          emeraldBright: '#34d399',
          emeraldDark: '#047857',
          lime: '#a3e635',
          limeBright: '#bef264',
          limeDark: '#65a30d',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'radar-pulse': 'radar-pulse 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'radar-pulse': {
          '0%': { transform: 'scale(0.95)', opacity: '0.9' },
          '70%': { transform: 'scale(2.2)', opacity: '0' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        }
      },
      boxShadow: {
        'neon-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.4), 0 0 10px -3px rgba(16, 185, 129, 0.2)',
        'neon-lime': '0 0 25px -5px rgba(163, 230, 53, 0.4), 0 0 10px -3px rgba(163, 230, 53, 0.2)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}

