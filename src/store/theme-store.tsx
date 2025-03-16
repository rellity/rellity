import { Store } from "@tanstack/store";
import { useEffect, useState } from "react";

const themeStore = new Store({
    theme: localStorage.getItem("theme") || "light",
});

export const useTheme = () => {
    const [state, setState] = useState(themeStore.state);

    useEffect(() => {
        return themeStore.subscribe((newState) => {
            setState({ theme: newState.currentVal.theme });
        });
    }, []);

    const setTheme = (theme: string) => {
        themeStore.setState((prev) => {
            localStorage.setItem("theme", theme);
            if (theme === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            return { ...prev, theme };
        });
    };

    return { theme: state.theme, setTheme };
};
