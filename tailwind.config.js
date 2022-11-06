/** @type {import("tailwindcss").Config} */

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },

            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                primary: '#6d96b0',
                secondary: '#447db6',
            },

            maxWidth: {
                small: '32rem',
                medium: '50rem',
                large: '70rem',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography', 'prettier-plugin-tailwindcss'),
    ],
};
