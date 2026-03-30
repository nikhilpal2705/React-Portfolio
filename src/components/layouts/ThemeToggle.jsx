import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <i className={`bi ${isDarkMode ? 'bi-sun' : 'bi-moon'}`}></i>
        </button>
    );
};

export default ThemeToggle;
