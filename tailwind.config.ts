import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Inter Display"', 'var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Inter Display"', 'var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', '"Fragment Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        dp: {
          void: '#0c0c0c',
          bordeaux: '#17090d',
          plum: '#24181e',
          wineDeep: '#401823',
          wine: '#52212e',
          cream: '#efebe5',
          sand: '#d9d1ca',
          taupe: '#827470',
        },
      },
    },
  },
  plugins: [],
};

export default config;
