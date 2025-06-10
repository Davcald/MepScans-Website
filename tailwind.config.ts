import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff',
          dark: '#000000',
        },
        text: {
          light: '#000000',
          dark: '#ffffff',
        },
        primary: {
          light: '#0066cc',
          dark: '#3b82f6',
        },
        secondary: {
          light: '#f3f4f6',
          dark: '#1f2937',
        },
        accent: {
          light: '#60a5fa',
          dark: '#3b82f6',
        },
        gray: {
          light: '#e5e7eb',
          dark: '#4b5563',
        }
      },
      backgroundColor: {
        DEFAULT: 'var(--background)',
      },
      textColor: {
        DEFAULT: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};

export default config; 