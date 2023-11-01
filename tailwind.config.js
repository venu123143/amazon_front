// function withOpacity(variableName) {
//   return ({ opacityValue }) => {
//     if (opacityValue !== undefined) {
//       return `rgba(var(${variableName}),${opacityValue})`
//     }
//     return `rgb(var(${variableName}))`
//   }
// }

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ['Poppins', "sans-serif"],
      serief: ['ui-sans-serif'],
      sans: ['Helvetica', 'Arial', 'sans-serif'],
      Rubik: ['Rubik']
    },
    extend: {
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "480px": "480px",
        "400px": "400px"
      },
      scale: {
        '-100': '-1',
      },
      textColor: {
        skin: {
          base: `var(--text-color-base)`,
          textLight: `var(--text-color-text-light)`,
          textBase: `var(--text-color-text-base)`,
          background: `var(--text-color-background)`,
          backgroundLight: `var(--text-color-background-light)`,
          backgroundHover: `var(--text-color-background-hover)`,
          main: `var(--text-color-main)`,
          light: `var(--text-color-light)`,
        }
      },
      backgroundColor: {
        skin: {
          base: `var(--color-base)`,
          textLight: `var(--color-text-light)`,
          textBase: `var(--color-text-base)`,
          background: `var(--color-background)`,
          backgroundLight: `var(--color-background-light)`,
          backgroundHover: `var(--color-background-hover)`,
          main: `var(--color-main)`,
          light: `var(--color-light)`,
        }
      },
    },
  },
  plugins: [

  ],
}

