/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      clipPath: {
        'doctor-polygon': 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
      },
      animation: {
        pulse: 'pulse 2s infinite',
      },
      keyframes: {
        pulse: {
          '0%': {
            transform: 'scale(0.8)',
            boxShadow: '0 0 0 0 #fff',
          },
          '70%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 60px rgba(229, 62, 62, 0)',
          },
          '100%': { transform: 'scale(0.8)' },
        },
      },
      boxShadow: {
        pulse: '0 0 0 60px rgba(229, 62, 62, 0)',
      },
    },
  },
  plugins: [],
};
