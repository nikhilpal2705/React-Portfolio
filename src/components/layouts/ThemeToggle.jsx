import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme(); // Get the current theme and the setter
    // Toggle the theme
    const toggleDarkMode = () => { toggleTheme((prevMode) => !prevMode) };

    return (
        <button
            onClick={toggleDarkMode}
            className="theme-toggle"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
            <i className={`bi ${isDarkMode ? 'bi-sun' : 'bi-moon'}`}></i>
        </button>
    );
};

export default ThemeToggle;
