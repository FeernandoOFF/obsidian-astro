/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#075985',

          secondary: '#38BDF8',

          accent: '#F58382',

          neutral: '#1f2937',

          'base-100': '#E7E6E6',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272',
        },
        dark: {
          primary: '#17223C',

          secondary: '#38BDF8',

          accent: '#F58382',

          neutral: '#191D24',

          'base-100': '#0B1222',

          info: '#3ABFF8',

          success: '#36D399',

          warning: '#FBBD23',

          error: '#F87272',
        },
      },
    ],
  },
};
