/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",      // Light theme
      "retro",      // Retro theme
      "dark",       // Dark theme
      "cupcake",    // Cupcake theme
      "emerald",    // Emerald theme
      "corporate",  // Corporate theme
      "synthwave",  // Synthwave theme
      "cyberpunk",  // Cyberpunk theme
      "valentine",  // Valentine theme
      "halloween",  // Halloween theme
      "garden",     // Garden theme
      "forest",     // Forest theme
      "aqua",       // Aqua theme
      "lofi",       // Lofi theme
      "pastel",     // Pastel theme
      "fantasy",    // Fantasy theme
      "wireframe",  // Wireframe theme
      "black",      // Black theme
      "luxury",     // Luxury theme
      "dracula",    // Dracula theme
      "cmyk",       // CMYK theme
      "autumn",     // Autumn theme
      "business",   // Business theme
      "acid",       // Acid theme
      "lemonade",   // Lemonade theme
      "night",      // Night theme
      "coffee",     // Coffee theme
      "winter",     // Winter theme
      "dim",        // Dim theme
      "nord",       // Nord theme
      "sunset",     // Sunset theme
    ],
  },
};



