module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        myblue: {
          100: '#F1FAEE',
          200: '#A8DADC',
          300: '#457B9D',
          400: '#1D3557',
        },
        'myred': '#E63946',
        'react': '#61dafb',
        'java': '#5382A1',
      },
    }
  },
  plugins: [],
};