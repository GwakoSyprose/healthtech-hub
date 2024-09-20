/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

const globalColors = {
  brand: {
    50: '#F2F5FE',
    100: '#E6ECFD',
    200: '#D9E2FC', //bg-primary
    300: '#BED1FE',
    400: '#80A1F8',
    500: '#3369FF',
    600: '#0038D1', //default
    700: '#003794',
    800: '#001B66',
    900: '#001C44',
  },
  neutral: {
    50: '#F9FAFB',
    100: '#F2F4F7',
    200: '#E4E7EC', //bg-sec
    300: '#D0D5DD',
    400: '#98A283',
    500: '#667085',
    600: '#475467', //default
    700: '#344054',
    800: '#1D2939',
    900: '#101828',
  },
  error: '#7A271A',
  success: '#2B5031'
}

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px'
      },
      fontFamily: {
        Roboto: ["Roboto, sans-serif"],
      },
      colors: {
        
        "brand-primary": globalColors.brand[600],
        "brand-primary-hover": globalColors.brand[700],
        "brand-onprimary": colors.white,
        "brand-secondary": globalColors.brand[100],
        "brand-secondary-hover": globalColors.brand[300],
        "brand-onsecondary": globalColors.brand[600],
        "brand-tertiary": globalColors.brand[50],
        "neutral-primary": globalColors.neutral[600],
        "neutral-secondary": globalColors.neutral[400],
        "neutral-tertiary": globalColors.neutral[300],
        "error-primary": globalColors.error,
        "error-secondary": globalColors.error[200],
        "success-primary": globalColors.success,
        "success-secondary": globalColors.success[200],
        "success-onprimary": '#FFFFFF',
        "success-onsecondary": globalColors.success,
        "neutral-onprimary": colors.white,
        "error-onprimary": '#FFFFFF',
        "error-onsecondary": globalColors.error,
        black: '#1D1B20',
      },
      container: {
        padding: '2rem'
      },
      borderRadius:{
        'large': '24px'
      }
    },
  },
  plugins: [],
}
