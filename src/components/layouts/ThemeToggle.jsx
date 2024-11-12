import { useTheme } from '@/contexts/ThemeContext';
import React from 'react';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme(); // Get the current theme and the setter
    // Toggle the theme
    const toggleDarkMode = () => { toggleTheme((prevMode) => !prevMode) };

    return (
        <div className="container">
            <button
                onClick={toggleDarkMode}
                className="theme-toggle"
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
                <i className={`bi ${isDarkMode ? 'bi-sun' : 'bi-moon'}`} aria-hidden="true"></i>
            </button>
        </div>
    );
};

export default ThemeToggle;
