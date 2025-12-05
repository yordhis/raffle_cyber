import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Modern green palette (use with e.g. `bg-verde-500`)
                verde: {
                    50: '#f2fbf6',
                    100: '#dcf7ea',
                    200: '#bff0cf',
                    300: '#86e4a1',
                    400: '#4fd67a',
                    500: '#18b65b',
                    600: '#0e8f44',
                    700: '#055130',
                    800: '#084f28',
                    900: '#06361a',
                },
                mint: {
                    50: '#f6fffb',
                    100: '#e6fff3',
                    200: '#c9ffe6',
                    300: '#98ffd0',
                    400: '#66f2b5',
                    500: '#3ad594',
                    600: '#22b87a',
                    700: '#17915f',
                    800: '#0f6f4b',
                    900: '#0a4f36',
                },
                lime: {
                    50: '#fbfff2',
                    100: '#f7ffd9',
                    200: '#ecffb0',
                    300: '#d7f77a',
                    400: '#bceb3f',
                    500: '#99d600',
                    600: '#78b200',
                    700: '#5e8900',
                    800: '#456600',
                    900: '#2f4400',
                },
                // convenience tokens
                primary: '#055130',
                secondary: '#18b65b',
            },
        },
    },

    plugins: [
        forms,
        require('tailwindcss-animated')
      ],
};

