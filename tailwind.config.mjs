/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#0a0f1c',
                'bg-secondary': '#0d1427',
                'bg-card': '#111a2e',
                'bg-elevated': '#162040',
                'surface': '#1a2744',
                'border-subtle': 'rgba(59, 130, 246, 0.15)',
                'border-glow': 'rgba(59, 130, 246, 0.4)',
                'text-primary': '#e8edf5',
                'text-secondary': '#94a3c4',
                'text-muted': '#5a6d8a',
                'accent-blue': '#3b82f6',
                'accent-cyan': '#06b6d4',
                'accent-indigo': '#6366f1',
                'accent-electric': '#60a5fa',
                'glow-blue': 'rgba(59, 130, 246, 0.5)',
                'glow-cyan': 'rgba(6, 182, 212, 0.3)',
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
                mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow-pulse': 'glow-pulse 3s ease-in-out infinite alternate',
                'blur-in': 'blur-in 0.8s ease-out forwards',
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
                'blur-in': {
                    '0%': { filter: 'blur(20px)', opacity: '0', transform: 'translateY(30px)' },
                    '100%': { filter: 'blur(0px)', opacity: '1', transform: 'translateY(0)' },
                },
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-blue': 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                'gradient-text': 'linear-gradient(135deg, #60a5fa, #06b6d4, #818cf8)',
            },
        },
    },
    plugins: [],
}
