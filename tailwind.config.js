/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                "dark": {
                    900: "#1a1a1a",
                    800: "#1e1e1e",
                    700: "#242424",
                    600: "#323232"
                }
            }
        },
    },
    plugins: [],
}

