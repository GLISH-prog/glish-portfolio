/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Source Serif 4"', 'serif'],
      },
      colors: {
        ink: 'hsl(var(--ink))',
        ash: 'hsl(var(--ash))',
        ember: 'hsl(var(--ember))',
        sea: 'hsl(var(--sea))',
        glow: 'hsl(var(--glow))',
      },
      boxShadow: {
        soft: '0 20px 60px -40px rgba(15, 23, 42, 0.7)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        rise: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        rise: 'rise 0.9s ease-out both',
      },
    },
  },
  plugins: [],
}
