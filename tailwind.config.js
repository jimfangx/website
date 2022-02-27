module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./globalCompoents/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bgBlack': '#0f0f0f'
      }
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    }
  },
  plugins: [
  ]
}
