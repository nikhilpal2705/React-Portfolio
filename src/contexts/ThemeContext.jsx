import { createContext, useState, useEffect, useContext } from 'react';

// Create a Context for the theme
const ThemeContext = createContext();

// Create a Provider component to wrap around the app
export const ThemeProvider = ({ children }) => {
    // Retrieve theme from localStorage or default to 'light'
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : false; // false means 'light' mode
    });

    useEffect(() => {
        // Update the document element's class and store in localStorage when theme changes
        document.documentElement.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    return (
        <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use theme
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
