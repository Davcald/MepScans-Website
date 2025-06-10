'use client';

import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Force apply theme styles when theme changes
  useEffect(() => {
    if (mounted) {
      const htmlElement = document.documentElement;
      if (theme === 'dark') {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
      
      // Force refresh all CSS variables on the page
      const elementsToUpdate = document.querySelectorAll('*');
      elementsToUpdate.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.color = '';
          el.style.backgroundColor = '';
        }
      });
      
      // Force a reflow to apply the new theme
      document.body.style.display = 'none';
      setTimeout(() => {
        document.body.style.display = '';
      }, 5);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Immediately apply styles to critical elements
    document.body.style.background = newTheme === 'dark' ? '#000000' : '#ffffff';
    document.body.style.color = newTheme === 'dark' ? '#ffffff' : '#171717';
    
    // Force refresh the page after a brief delay to ensure all components update
    setTimeout(() => {
      window.location.reload();
    }, 50);
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{
            rotate: theme === 'dark' ? 90 : 0,
            opacity: theme === 'dark' ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <SunIcon className="w-6 h-6" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            rotate: theme === 'dark' ? 0 : -90,
            opacity: theme === 'dark' ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <MoonIcon className="w-6 h-6" />
        </motion.div>
      </div>
      <span className="sr-only">Toggle theme</span>
    </motion.button>
  );
} 