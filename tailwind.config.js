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
                'primary': '#355874',
                'secondary': '#123654',
            },

            maxWidth: {
                'small': '32rem',
                'medium': '50rem',
                'large': '70rem',
            },
        },
    },
    plugins: [],
}