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
        'gradient-custom': 'radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(#44B77B var(--tw-value), #F3F4FA 0)',
        'gradient-meter': 'conic-gradient(from 125deg,white 30%, #EBEDF5 0)',
        'gradient-meter-range': 'linear-gradient(270deg, #44B77B 0%, #FFD033 47.9%, #FF3B3F 100%), conic-gradient(white 50%, transparent 0)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      corePlugins: {
        preflight: false,
      },
      keyframes: {
        slide_right: {
          '0%': {
            'opacity': '0',
          },
          '100%': {
            'opacity': '100'
          }
        }
      }
    },
    animation: {
      "silde-right": "slide_right 0.5s linear infinite alternate"
    }
  },
  plugins: [],
}
