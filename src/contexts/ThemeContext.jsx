import { createContext, useState, useEffect, useContext } from 'react';

// Create a Context for the theme
const ThemeContext = createContext();

// Create a Provider component to wrap around the app
export const ThemeProvider = ({ children }) => {
    // Initialize the theme state to include both isDarkMode and themeChangeKey
    const [themeState, setThemeState] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        const isDarkMode = savedTheme ? savedTheme === 'dark' : document.documentElement.classList.contains('dark-mode');
        return { isDarkMode, themeChangeKey: 0 };
    });

    // Effect to apply the theme class and update localStorage
    useEffect(() => {
        // Apply or remove the 'dark-mode' class based on the state
        document.documentElement.classList.toggle('dark-mode', themeState.isDarkMode);
        localStorage.setItem('theme', themeState.isDarkMode ? 'dark' : 'light'); // Store theme as 'dark' or 'light'

        // Increment the themeChangeKey every time isDarkMode changes
        setThemeState(prevState => ({
            ...prevState,
            themeChangeKey: prevState.themeChangeKey + 1
        }));
    }, [themeState.isDarkMode]);

    // Event listener to handle theme changes based on system settings
    useEffect(() => {
        const handleThemeChange = (e) => {
            localStorage.setItem(e.matches ? 'dark' : 'light');
            document.documentElement.classList.toggle('dark-mode', e.matches);
        };

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);

        // Cleanup listener on component unmount
        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange);
        };
    }, []);

    // Function to toggle the theme
    const toggleTheme = () => {
        setThemeState(prevState => ({
            ...prevState,
            isDarkMode: !prevState.isDarkMode
        }));
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode: themeState.isDarkMode, toggleTheme, themeChangeKey: themeState.themeChangeKey }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to access the theme context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
