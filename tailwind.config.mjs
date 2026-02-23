/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                // Dark backgrounds
                'bg-primary': '#0a0f1c',
                'bg-secondary': '#0d1427',
                'bg-card': '#111a2e',
                'bg-elevated': '#162040',
                'surface': '#1a2744',
                // Borders
                'border-subtle': 'rgba(59, 130, 246, 0.15)',
                'border-glow': 'rgba(59, 130, 246, 0.4)',
                // Old cream aliases (for hero compatibility)
                'cream-light': '#0a0f1c',
                'cream-medium': '#0d1427',
                'cream-dark': '#1a2744',
                // Text
                'text-main': '#e8edf5',
                'text-muted': '#7a8ba8',
                'text-secondary': '#94a3c4',
                // Accents
                'accent-gold': '#60a5fa',
                'accent-sage': '#34d399',
                'accent-blue': '#3b82f6',
                'accent-cyan': '#06b6d4',
                'accent-indigo': '#818cf8',
                'accent-electric': '#60a5fa',
                'soft-white': '#e8edf5',
                // Glows
                'glow-blue': 'rgba(59, 130, 246, 0.5)',
                'glow-cyan': 'rgba(6, 182, 212, 0.3)',
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
                sans: ['Outfit', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 3s ease-in-out infinite alternate',
                'gradient-shift': 'gradient-shift 8s ease infinite',
                'spin-slow': 'spin 20s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'glow-pulse': {
                    '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.2), 0 0 60px rgba(59, 130, 246, 0.1)' },
                    '100%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(59, 130, 246, 0.2)' },
                },
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
        },
    },
    plugins: [],
}
