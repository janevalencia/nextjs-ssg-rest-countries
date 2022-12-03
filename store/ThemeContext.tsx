import { createContext, ReactElement, useEffect, useState } from "react";

// Create context for the theme-switcher.
const ThemeContext = createContext({
    isDarkMode: false,
    toggleThemeHandler: () => {},
});

// Define props for component.
type ThemeContextProps = {
    children?: JSX.Element | Array<JSX.Element>;
};

// Set context provider.
export const ThemeContextProvider = (
    props: ThemeContextProps
): ReactElement => {
    
    // Define initial state of dark mode.
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    // Setup local storage for storing theme.
    useEffect(() => {
        if (!localStorage.getItem("isDarkMode")) {
            // Create local storage with item called isDarkMode = false.
            localStorage.setItem("isDarkMode", "false");
            setIsDarkMode(false);
        } else {

            // Fetch the existing theme data from the local storage.
            const darkTheme: boolean = JSON.parse(
                localStorage.getItem("isDarkMode")!
            );

            // Given darkTheme = true, add the dark class to the body.
            if (darkTheme) {
                document!.querySelector("body")!.classList.add("dark");
                setIsDarkMode(darkTheme)
            }
        }
    }, []);

    // Handle the theme toggle: enable or disable dark mode.
    const toggleThemeHandler = () : void => {

        // Fetch existing data from the local storage.
        const darkTheme: boolean = JSON.parse(
            localStorage.getItem("isDarkMode")!
        );

        // Set the state of theme.
        setIsDarkMode(!darkTheme);

        // Toggle the dark class from the body.
        document!.querySelector("body")!.classList.toggle("dark");

        // Update local storage value.
        localStorage.setItem("isDarkMode", `${isDarkMode}`);
    }

    // Render context provider.
    return (
        <ThemeContext.Provider
            value={{ isDarkMode: false, toggleThemeHandler }}
        >
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
