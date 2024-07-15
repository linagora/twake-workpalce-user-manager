import formsPlugin from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme'


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        coolgray: '#EDEEF0',
        'coolgray-400': '#818C99',
        disabled: 'rgba(28, 27, 31, 0.12)',
        'disabled-text': '#1C1B1F',
        primary: '#0A84FF',
        error: '#FF3347',
        blueGray: '#8C9CAF',
        inputOutline: '#AEAEC0'
      },
      backgroundPosition: {
        layout: 'top left 600px, left 100px bottom -140px'
      },
      backgroundSize: {
        layout: 'auto, 20%'
      },
      zIndex: {
        '-1': '-1'
      },
      transformOrigin: {
        0: '0%'
      }
    },
    screens: {
      xs: { max: '300px' },
      large: { raw: '(min-height: 800px;min-width: 1024px)' },
      ...defaultTheme.screens,
      "3xl": { min: '1930px' },
      "4xl": { min: '2100px' }
    }
  },
  plugins: [
    formsPlugin({
      strategy: 'class'
    })
  ]
};
