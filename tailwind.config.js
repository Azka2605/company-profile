import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            // Di bagian theme.extend:
            fontFamily: {
                sans: ['Nunito', 'sans-serif'],
                heading: ['Sora', 'sans-serif'],
            },
        },
    },

    plugins: [forms],
};
