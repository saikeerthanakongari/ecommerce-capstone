import React from 'react';
import useStore from '../store/useStore';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useStore();

  return (
    <button onClick={toggleTheme} className="theme-btn">
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;