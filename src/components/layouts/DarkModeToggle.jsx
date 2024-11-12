import { useTheme } from '@/contexts/ThemeContext';
import React from 'react';

const DarkModeToggle = () => {
    const { isDarkMode, setIsDarkMode } = useTheme(); // Get the current theme and the setter
    // Toggle the theme
    const toggleDarkMode = () => { setIsDarkMode((prevMode) => !prevMode) };

    return (
        <button
            onClick={toggleDarkMode}
            className="theme-toggle"
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <i className={`bi ${isDarkMode ? 'bi-sun' : 'bi-moon'}`} aria-hidden="true"></i>
        </button>
    );
};

export default DarkModeToggle;
