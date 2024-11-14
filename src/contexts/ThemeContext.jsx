// ThemeContext.jsx
import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Create a Context for the theme
const ThemeContext = createContext();

// Create a Provider component to wrap around the app
export const ThemeProvider = ({ children }) => {
    const [themeState, setThemeState] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        const isDarkMode = savedTheme ? savedTheme === 'dark' : document.documentElement.classList.contains('dark-mode');
        return { isDarkMode, themeChangeKey: 0 };
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark-mode', themeState.isDarkMode);
        localStorage.setItem('theme', themeState.isDarkMode ? 'dark' : 'light');

        setThemeState(prevState => ({
            ...prevState,
            themeChangeKey: prevState.themeChangeKey + 1
        }));
    }, [themeState.isDarkMode]);

    useEffect(() => {
        const handleThemeChange = (e) => {
            localStorage.setItem('theme', e.matches ? 'dark' : 'light');
            document.documentElement.classList.toggle('dark-mode', e.matches);
        };

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange);
        };
    }, []);

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

// Define prop types
ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export { ThemeContext };
