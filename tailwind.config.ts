import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './sanity/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f5f7f2',
          100: '#e6ebe0',
          200: '#ccd8c4',
          300: '#aebfa5',
          400: '#8fa385',
          500: '#73896c',
          600: '#596f55',
          700: '#40543f',
          800: '#2f4232',
          900: '#203025'
        },
        cream: '#fbf8f1',
        clay: '#b8846b',
        ink: '#18322a',
        mist: '#edf1ea'
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 18px 50px rgba(30, 50, 42, 0.08)',
        card: '0 12px 32px rgba(30, 50, 42, 0.10)'
      }
    }
  },
  plugins: []
}
export default config
