export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#0a0a0a',
                'bg-secondary': '#111111',
                'bg-card': '#171717',
                'bg-elevated': '#1f1f1f',
                'surface': '#262626',
                'border-subtle': 'rgba(255, 255, 255, 0.15)',
                'border-glow': 'rgba(255, 255, 255, 0.4)',
                'cream-light': '#0a0a0a',
                'cream-medium': '#111111',
                'cream-dark': '#262626',
                'text-main': '#ffffff',
                'text-muted': '#a3a3a3',
                'text-secondary': '#d4d4d4',
                'accent-gold': '#ffffff',
                'accent-sage': '#ffffff',
                'accent-blue': '#ffffff',
                'accent-cyan': '#ffffff',
                'accent-indigo': '#ffffff',
                'accent-electric': '#ffffff',
                'soft-white': '#ffffff',
                'glow-blue': 'rgba(255, 255, 255, 0.5)',
                'glow-cyan': 'rgba(255, 255, 255, 0.3)',
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
