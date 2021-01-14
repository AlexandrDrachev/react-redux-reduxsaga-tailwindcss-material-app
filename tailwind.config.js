module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      spacing: {
        "1": "1px",
        "2": "2px",
        "3": "3px",
        "4": "4px",
        "5": "5px",
        "6": "6px",
        "7": "7px",
        "8": "8px",
        "9": "9px",
        "10": "10px",
        "15": "15px",
        "20": "20px",
        "30": "30px",
        "40": "40px",
        "50": "50px",
        "60": "60px",
        "70": "70px",
        "80": "80px",
        "90": "90px",
        "100": "100px",
        "200": "200px",
        "300": "300px",
        "400": "400px",
        "500": "500px",
        "1000": "1000px",
        "2000": "2000px",
      }
    },
    zIndex: {
      "10": 10,
      "20": 20,
      "30": 30,
      "40": 40,
      "50": 50,
      "500000": 500000,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
