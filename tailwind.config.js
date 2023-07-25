/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto Condensed", "sans-serif"],
                righteous: ["Righteous", "cursive"],
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                "primary-color": "#03045E",
                "secondary-color": "#00B4D8",
                "light-color": "#F5F5F5",
                "dark-color": "#1B1B1B",
                "facebook-color": "#3b5998",
                "insta-color": "#d6249f",
                "github-color": "#f4a261",
                "twitter-color": "#1da1f2",
                "linkedin-color": "#0E76A8",
            },
            backgroundImage: {
                "spiral-light":
                    "repeating-radial-gradient(#1B1B1B 2px, #F5F5F5 5px, #F5F5F5 100px);s",
            },
        },
    },
    plugins: [],
};
