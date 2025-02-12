import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("ChatNest-theme") || "luxury",
    setTheme: (theme) => {
        localStorage.setItem("ChatNest-theme", theme);
        set({ theme });
    },
}));