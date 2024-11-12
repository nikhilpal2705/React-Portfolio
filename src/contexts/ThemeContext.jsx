import { createContext, useState, useEffect, useContext } from 'react';

// Create a Context for the theme
const ThemeContext = createContext();

// Create a Provider component to wrap around the app
export const ThemeProvider = ({ children }) => {
    // Initialize the theme as a boolean based on localStorage or the current theme in the document
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme !== null) {
            return savedTheme === 'dark'; // Convert string to boolean
        }
        // Default to dark theme if 'dark-mode' class is present, else light theme
        return document.documentElement.classList.contains('dark-mode');
    });

    // Effect to apply the theme class and update localStorage
    useEffect(() => {
        // Apply or remove the 'dark-mode' class based on the state
        document.documentElement.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light'); // Store theme as 'dark' or 'light'
    }, [isDarkMode]);

    // Function to toggle theme between light and dark
    const toggleTheme = () => {
        setIsDarkMode((prevTheme) => !prevTheme);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
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
