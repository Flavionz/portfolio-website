import React from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.button
      whileTap={{
        scale: 0.95
      }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
      aria-label={
      theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      }>

      {theme === 'dark' ?
      <SunIcon className="h-5 w-5" /> :

      <MoonIcon className="h-5 w-5" />
      }
    </motion.button>);

};