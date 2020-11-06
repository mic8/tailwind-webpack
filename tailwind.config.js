require('dotenv').config();

const enablePurge = process.env.ENABLE_PURGE || true;

module.exports = {
    purge: {
        enable: enablePurge,
        content: [
            './src/**/*.html',
            './src/**/*.scss',
            './src/**/*.css',
        ],
    },
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        fontFamily: {
            display: ['IBM Plex Sans', 'sans-serif'],
            body: ['IBM Plex Sans', 'sans-serif'],
            sans: ['IBM Plex Sans', 'sans-serif'],
        },
        borderWidth: {
            default: '1px',
            '0': '0',
            '2': '2px',
            '4': '4px',
        },
        extend: {
            colors: {
                primary: '#15406a',
                secondary: '#eee',
                success: '#28a745',
                info: '#deebff',
                warning: '#ffc107',
                danger: '#dc3545',
                light: '#f4f5f7',
                dark: '#343a40',
                tosca: '#26a59a',
            },
            spacing: {
                px: '1px',
                '0': '0',
                '1': '0.25rem',
                '2': '0.5rem',
                '3': '0.75rem',
                '4': '1rem',
                '5': '1.25rem',
                '6': '1.5rem',
                '8': '2rem',
                '10': '2.5rem',
                '12': '3rem',
                '16': '4rem',
                '20': '5rem',
                '24': '6rem',
                '32': '8rem',
                '40': '10rem',
                '48': '12rem',
                '56': '14rem',
                '64': '16rem',
            },
            borderRadius: {
                'none': '0',
                'sm': '.125rem',
                default: '.25rem',
                'lg': '.5rem',
                'full': '9999px',
            },
        }
    },
    variants: {},
    plugins: [],
}
