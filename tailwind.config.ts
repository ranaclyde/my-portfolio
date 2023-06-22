// From https://tailwindcss.com/blog/tailwindcss-v3-3
import type { Config } from 'tailwindcss'

export default {
  // darkMode: 'class',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    //'./plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
