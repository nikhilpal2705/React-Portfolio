import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        return true;
    }

    if (savedTheme === 'light') {
        return false;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);
    const themeChangeKey = isDarkMode ? 'dark' : 'light';

    useEffect(() => {
        document.documentElement.classList.toggle('dark-mode', isDarkMode);
    }, [isDarkMode]);

    useEffect(() => {
        if (localStorage.getItem('theme')) {
            return undefined;
        }

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleThemeChange = (event) => {
            setIsDarkMode(event.matches);
        };

        mediaQuery.addEventListener('change', handleThemeChange);

        return () => {
            mediaQuery.removeEventListener('change', handleThemeChange);
        };
    }, []);

    const toggleTheme = () => {
        setIsDarkMode((currentMode) => {
            const nextMode = !currentMode;
            localStorage.setItem('theme', nextMode ? 'dark' : 'light');
            return nextMode;
        });
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, themeChangeKey }}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export { ThemeContext };
