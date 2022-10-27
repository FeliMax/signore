/** @type {import('tailwindcss').Config} */


module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'montserrat': ['Montserrat', 'sans-serif']
            },

            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'primary': '#247bbe',
                'secondary': '#123654',
            },

            maxWidth: {
                'small': '32rem',
                'medium': '50rem',
                'large': '72rem',
            },
        },
    },
    plugins: [],
}