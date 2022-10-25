/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '1025px',
            xl: '1440px',
        },

        fontSize:{
            '2xs': '0.60rem',
            'xs': '0.70rem',
            '3sm': '0.80rem',
            '2sm': '0.85rem',
            'sm': '0.9rem',
            'base': '1rem',
            'lg': '1.2rem',
            '2lg': '1.5rem',
            '3lg': '2rem',
            'xl': '2.5rem',
            '2xl': '3rem',
            '3xl': '4rem',

        },

        fontFamily: {
            'montserrat': ['Montserrat', 'sans-serif']
        },

        colors: {
            transparent: 'transparent',
            current: 'currentColor',


        },

        extend: {
            spacing: {
                'small': '32rem',
                'medium': '50rem',
                'large': '72rem',
            },
        },
    },
    plugins: [],
}