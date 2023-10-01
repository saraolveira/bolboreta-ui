/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'lavender-rose': {
            '50': '#fff4fd',
            '100': '#ffe7fb',
            '200': '#ffcff6',
            '300': '#fea2ea',
            '400': '#fc76dd',
            '500': '#f342c9',
            '600': '#d722a9',
            '700': '#b31888',
            '800': '#92166e',
            '900': '#771859',
            '950': '#500237',
        },
        'mauve': {
          '50': '#faf5ff',
          '100': '#f4e8ff',
          '200': '#ead5ff',
          '300': '#d2a2fe',
          '400': '#c484fc',
          '500': '#ae55f7',
          '600': '#9933ea',
          '700': '#8422ce',
          '800': '#7021a8',
          '900': '#5c1c87',
          '950': '#3e0764',
        },
        'anakiwa': {
          '50': '#eef5ff',
          '100': '#dfecff',
          '200': '#c6daff',
          '300': '#a2c0fe',
          '400': '#7e9dfb',
          '500': '#607af4',
          '600': '#4252e9',
          '700': '#3541cd',
          '800': '#2d38a6',
          '900': '#2c3683',
          '950': '#1a1f4c',
        },      
      },
      animation: {
        'infinite-slide': 'infinite-slide 10s linear infinite',
      },
      keyframes: {
        'infinite-slide': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}

