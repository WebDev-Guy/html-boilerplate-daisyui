module.exports = {
    content: ["./index.html", "./src/**/*.{html,ts,js,scss}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        defaultTheme: "coffee", // Sets Coffee as the default theme
        themes: ["coffee", "light", "dark"], // List any themes you want available
    },
};
