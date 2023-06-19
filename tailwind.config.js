module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./globalCompoents/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bgBlack': '#131415'
      },
      animation: {
        'fade': 'fade ease 3s'
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
      }
    },
    fontFamily: {
      sans: ['inter', 'sans-serif']
    }
  },
  plugins: [
  ]
}
