import type { Config } from 'tailwindcss';

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
        './constants/**/*.{ts,tsx}',
        './src/**/*.{html,js}',
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                fill: {
                    1: 'rgba(19, 19, 25, 1)',
                },
                bankGradient: '#0179FE',
                indigo: {
                    500: '#6172F3',
                    700: '#3538CD',
                },
                success: {
                    25: '#F6FEF9',
                    50: '#ECFDF3',
                    100: '#D1FADF',
                    600: '#039855',
                    700: '#027A48',
                    900: '#054F31',
                },
                pink: {
                    25: '#FEF6FB',
                    100: '#FCE7F6',
                    500: '#EE46BC',
                    600: '#DD2590',
                    700: '#C11574',
                    900: '#851651',
                },
                blue: {
                    100: 'rgba(74, 150, 255, 1)',
                },
                sky: {
                    1: '#F3F9FF',
                },
                black: {
                    1: '#00214F',
                    2: '#344054',
                },
                gray: {
                    100: 'rgba(107, 108, 112, 1)',
                    200: 'rgba(127, 128, 132, 1)',
                },
                white: {
                    100: 'rgba(255, 255, 255, 1)',
                    200: 'rgba(197, 199, 202, 1)',
                },
            },
            borderWidth: {
                DEFAULT: '1px',
                '0': '0px',
                '1': '1.5px',
                '2': '2px',
            },
            borderColor: {
                DEFAULT: 'rgba(0, 0, 0, 0.1)',
                '100': 'rgba(53, 55, 59, 1)',
            },
            borderImage: {
                source: {
                    DEFAULT: 'none',
                    gradient: 'linear-gradient(129.59deg, #969696 0%, #343434 98.18%)',
                },
            },
            backgroundImage: {
                'bank-gradient': 'linear-gradient(90deg, #0179FE 0%, #4893FF 100%)',
                'card-gradient': 'linear-gradient(129.59deg, #969696 0%, #343434 98.18%)',
                'gradient-mesh': "url('/icons/gradient-mesh.svg')",
                'bank-green-gradient': 'linear-gradient(90deg, #01797A 0%, #489399 100%)',
            },
            backgroundColor: {
                'bg-1': 'rgba(19, 19, 25, 1)',
                'bg-2': 'rgba(39, 41, 45, 1)',
                'bg-3': 'rgba(25, 25, 32, 1)',
                'bg-4': 'rgba(39, 41, 45, 1)',
            },
            boxShadow: {
                form: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
                chart: '0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)',
                profile: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
                creditCard: '8px 10px 16px 0px rgba(0, 0, 0, 0.05)',
            },
            fontSize: {
                '28': '1.75rem', // 28px
            },
            lineHeight: {
                '28': '1.2rem', // 33.6px
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
                inherit: 'inherit',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            height: {
                '2/5': '40%',
            },
            maxHeight: {
                'fit-content': 'fit-content',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
