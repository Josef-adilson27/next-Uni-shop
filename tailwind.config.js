/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
 
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize:{
        "descrideText": "var(--descrideText)",
        "buttonsText": "var(--buttonsText)",
        "buttonsPrimaryText": "var(--buttonsPrimaryText)",
        "buttonsSecondaryText": "var(--buttonsSecondaryText)",

        },
        backgroundColor:{
        "bgPrimarySlate": "var(--bgPrimarySlate)",
        "bgPrimarySlateActive": "var(--bgPrimarySlateActive)",

      },
      boxShadow:{
        "btn":"var(--btn)"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
