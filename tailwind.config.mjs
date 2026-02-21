/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        surface: {
          0: '#09090b',
          1: '#111113',
          2: '#18181b',
          3: '#1f1f23',
          4: '#27272a',
        },
        accent: {
          DEFAULT: '#818cf8',
          light: '#a78bfa',
          dim: '#6366f1',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
