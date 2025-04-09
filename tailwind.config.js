module.exports = {
    content: ["./index.html", "./src/**/*.{html,ts,js,scss}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        defaultTheme: "custom",
        themes: [{
            "custom": {
                "primary": "#ffb700",       // Bright gold
                "secondary": "#2b2e42",     // Blue-gray contrast
                "accent": "#96661c",        // Deep golden accent
                "neutral": "#524D47",       // Warm gray-brown
                "base-100": "#fff7e3",      // Cream background
                "base-content": "#2b2e42",  // Text color on base-100
                "info": "#66c7ff",          // Optional bright info color
                "success": "#34d399",       // Keep green for success
                "warning": "#facc15",       // Standard yellow
                "error": "#ef4444",         // Standard red
            }
        }],
    },
};
