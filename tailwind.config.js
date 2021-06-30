module.exports = {
  mode: 'jit',
  purge: ['https://dsv095335k4yr.cloudfront.net/index.html','./src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
  important: true,
}
