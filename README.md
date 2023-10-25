# Flip card implementation using TailwindCSS and NextJS 

## TailwindCSS Demo
Open In TailwindCSS playground [https://play.tailwindcss.com/8ZWdqrpZvi](https://play.tailwindcss.com/8ZWdqrpZvi)

## NextJS Demo
[https://nextjs-flip-card.vercel.app/](https://nextjs-flip-card.vercel.app/)

## Setup Guide
### Step 1: Add required custom utility classes
This project use some css properties that are not yet in tailwindcss by default. However, you can add those custom utility classes in to your ```tailwind.conf.js``` file and use anywhere in the project. After adding those utility classes your ```tailwind.conf.js``` will look the one below. learn more about adding custom plugin in the [tailwind official documentation](https://tailwindcss.com/docs/plugins)

```
/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
export default {
  theme: {
    extend: {
      // ...
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.rotate-y-180': {
          transform: 'rotateY(180deg)'
        },
        '.preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.perspective': {
          perspective: '1000px',
        },
        '.backspace-hidden': {
          'backspaceVisibility': 'hidden'
        }
      })
    })
  ],
}

```