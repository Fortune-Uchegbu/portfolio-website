import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState, useEffect } from "react";


const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    } else return window.matchMedia('prefers-color-scheme: dark').matches;    
  });

  useEffect(() => {
    // Apply theme on component mount and theme changes
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="p-3 rounded-full hover:bg-neutral-light hover:cursor-pointer dark:hover:bg-neutral-dark active:bg-neutral-light  dark:active:bg-neutral-dark"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? 
      <MdLightMode className="w-5 h-5 lg:w-6 lg:h-6" /> :
      <MdDarkMode className="w-5 h-5 lg:w-6 lg:h-6" />
      }
    </button>
  )
}

export default ThemeToggle