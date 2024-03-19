/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './components/ui/Typography.tsx',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        '2xl': '1200px',
      },
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      base2: ['16px', '20px'],
      lg: ['18px', '22px'],
      xl: ['24px', '29px'],
      xxl: ['32px', '38px'],
      xxxl: ['89px', '94px'],
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
        'pulso': ['var(--font-pulso)'],
        'inter': ['var(--font-inter)'],
        'testing3': ['var(--font-roboto)'],
      },
      colors: {
        transparent: 'transparent',
        white: '#FFFFFF',
        yellow: '#EDE6CE',
        gray: {
          light: '#F5F2FA',
          DEFAULT: '#E3E5EB',
          dark: '#BEBABA'
        },
        primary: {
          light: '#6428FF',
          DEFAULT: '#3C01A0',
          dark: '#29285A'
        },
        secondary: {
          light: '#4A4A68',
          DEFAULT: '#55338A',
          dark: '#0E0E2C'
        },
        dotGray: '#D9D9D9',
        linearGradientStartHome: '#CBF4FF',
        linearGradientEndHome: '#B9E5FD',
        linearGradientStartTicket: '#4D88F2',
        linearGradientEndTicket: '#CBF4FF',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
