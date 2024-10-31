/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
        "./utils/**/*.{js,jsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                body: ["Inter", "Sans Serif"],
                title: ["Inter", "Sans Serif"]
            },
            fontSize: {
                body: [
                    "1rem",
                    {
                        lineHeight: "1.5rem"
                    }
                ],
                h1: [
                    "3.5rem",
                    {
                        lineHeight: "3.75rem"
                    }
                ],
                h2: [
                    "2.25rem",
                    {
                        lineHeight: "2.625rem"
                    }
                ],
                h3: [
                    "1.875rem",
                    {
                        lineHeight: "2.25rem"
                    }
                ],
                h4: [
                    "1.5rem",
                    {
                        lineHeight: "2rem"
                    }
                ],
                h5: [
                    "1.25rem",
                    {
                        lineHeight: "1.75rem"
                    }
                ],
                h6: [
                    "1.125rem",
                    {
                        lineHeight: "1.5rem"
                    }
                ],
                mini: [
                    "0.75rem",
                    {
                        lineHeight: "1.5rem"
                    }
                ]
            },
            colors: {
                black: {
                    DEFAULT: "#000000",
                    50: "#E6E6E6",
                    100: "#CCCCCC",
                    200: "#999999",
                    300: "#666666",
                    400: "#333333",
                    500: "#000000",
                    600: "#000000",
                    700: "#000000",
                    800: "#000000",
                    900: "#000000"
                },
                white: {
                    DEFAULT: "#FFFFFF",
                    50: "#FFFFFF",
                    100: "#FCFCFC",
                    200: "#FCFCFC",
                    300: "#FAFAFA",
                    400: "#FAFAFA",
                    500: "#F7F7F7",
                    600: "#C7C7C7",
                    700: "#949494",
                    800: "#636363",
                    900: "#303030"
                },
                primary: {
                    50: "#FCFCFC",
                    100: "#FCFCFC",
                    200: "#FCFCFC",
                    300: "#FCFCFC",
                    400: "#FAFAFA",
                    500: "#FAFAFA",
                    600: "#E3E3E3",
                    700: "#C7C7C7",
                    800: "#A6A6A6",
                    900: "#787878",
                    950: "#595959"
                },
                secondary: {
                    50: "#F9F5E8", // Very light shade
                    100: "#F1E7C6", // Light shade
                    200: "#E3D4A3", // Lighter shade
                    300: "#D5B680", // Medium light shade
                    400: "#C2AC82", // Base color
                    500: "#A58B68", // Medium shade
                    600: "#8D6B51", // Medium dark shade
                    700: "#73512B", // Darker shade
                    800: "#5C3C1B", // Dark shade
                    900: "#4A2E15", // Very dark shade
                    950: "#3A2410" // Deepest shade
                },
                tertiary: {
                    50: "#E7EBF0", // Very light shade
                    100: "#C2CCDA", // Light shade
                    200: "#97A9C0", // Lighter shade
                    300: "#708AA8", // Medium light shade
                    400: "#516A8A", // Base color
                    500: "#3D5471", // Medium shade
                    600: "#31425A", // Medium dark shade
                    700: "#263543", // Darker shade
                    800: "#1D2934", // Dark shade
                    900: "#141D25", // Very dark shade
                    950: "#0E151B" // Deepest shade
                },

                badge: "#F1F5F9",
                badgeText: "#475569"
            }
        }
    },
    plugins: []
};
