/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html","./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["poppins", "sans-serif"],
        cursive: ["Birthstone Bounce", "cursive"]
      },
      colors: {
        primary: "#f5f5f5",
        secondary: "#333",
        r0: '#D50000',
        r1: '#B71C1C',
        r2: '#FF5252',
        r3: '#E53935',
        b0: '#0D47A1',
        b1: '#1A237E',
        b2: '#304FFE',
        b3: '#283593',
      },
      container: {
        center:true,
        // padding: {
        //   DEFAULT: "1rem",
        //   sm: "2rem",
        //   lg: "4rem",
        //   xl: "5rem",
        // },
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};

export default config;