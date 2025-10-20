/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'moca-blue': '#1E3A8A',
        'moca-green': '#10B981',
        'moca-gray': '#4B5563',
        'glam-gold': '#FFD700',
        'glam-purple': '#6B46C1',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1E3A8A 0%, #6B46C1 100%)',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(16, 185, 129, 0.5)',
        'card-glow': '0 0 20px rgba(255, 215, 0, 0.3)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}