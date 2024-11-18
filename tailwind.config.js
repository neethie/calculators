/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundColor: {
                blue: {
                    primary: "#1d283a",
                    secondary: "#0f1722",
                    selected: "#eaeff0",
                    selectedSecondary: "#6b62fa",
                    noSelectedSecondary: "#161e2b",
                    noSelected: "#344454",
                },
            },
            textColor: {
                white: {
                    primary: "#eaeff0",
                },
            },
        },
    },
    plugins: [],
};
