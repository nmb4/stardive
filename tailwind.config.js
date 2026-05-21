/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        stardive: {
          base: '#fcfcfd',
          panel: 'rgba(255, 255, 255, 0.7)',
          border: 'rgba(9, 9, 11, 0.06)',
          text: '#09090b',
          muted: '#71717a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        float: 'float 8s cubic-bezier(0.37, 0, 0.63, 1) infinite',
        'float-delayed': 'float 8s cubic-bezier(0.37, 0, 0.63, 1) 4s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-shift': 'glowShift 10s ease-in-out infinite alternate',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowShift: {
          '0%': { opacity: '0.15', transform: 'scale(1)' },
          '100%': { opacity: '0.35', transform: 'scale(1.2)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
