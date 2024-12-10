import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg hover-transition hover:bg-gray-200 dark:hover:bg-gray-800"
    >
      {darkMode ? (
        <Sun className="w-6 h-6 text-gray-800 dark:text-white" />
      ) : (
        <Moon className="w-6 h-6 text-gray-800 dark:text-white" />
      )}
    </button>
  );
}