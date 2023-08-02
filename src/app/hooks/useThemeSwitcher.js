"use client";

import { useEffect, useState } from "react";

export default function useThemeSwitcher() {
    // Get the theme hook.
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        // Get local stotage.
        const userPref = window.localStorage.getItem("mode");

        if (userPref) {
            setTheme(userPref);
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem("mode", theme);
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return [theme, setTheme];
}
