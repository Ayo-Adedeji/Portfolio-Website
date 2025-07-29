// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',
        secondary: '#112240',
        accent: '#64ffda',
        textMain: '#ccd6f6',
        textMuted: '#8892b0',
        border: '#233554',
        accentSoft: ''
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hover-gradient': 'linear-gradient(135deg, #64ffda, #0a192f)',
        'section-gradient': 'linear-gradient(135deg, #0a192f 0%, #112240 70%, #233554 100%)',
      },
    },
  },
  plugins: [],
};
