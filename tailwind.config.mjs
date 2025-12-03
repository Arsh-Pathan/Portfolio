/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'cream-light': '#FDFBF7',
                'cream-medium': '#F5F0E6',
                'cream-dark': '#E6DCC8',
                'text-main': '#2C3E50',
                'text-muted': '#5D6D7E',
                'accent-gold': '#D4AF37',
                'accent-sage': '#8FA38F',
                'accent-blue': '#5DADE2',
                'soft-white': '#FFFFFF',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { textShadow: '0 0 20px rgba(0, 212, 255, 0.5)' },
                    '100%': { textShadow: '0 0 30px rgba(0, 212, 255, 1)' },
                },
            },
        },
    },
    plugins: [],
}
