'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ThemeToggle } from './ThemeToggle';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Syspro', href: '/syspro' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold transition-colors duration-300">
            MepScans
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300
                ${pathname === item.href
                  ? ''
                  : 'opacity-60 hover:opacity-100'
                }`}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  layoutId="navigation-underline"
                  className="absolute left-0 right-0 h-0.5 bottom-0 bg-primary-light dark:bg-primary-dark"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="ml-2 inline-flex items-center justify-center rounded-md p-2 opacity-60 hover:opacity-100 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-colors duration-300
                    ${pathname === item.href
                      ? 'bg-gray-200 dark:bg-gray-800'
                      : 'opacity-60 hover:opacity-100 hover:bg-gray-200 dark:hover:bg-gray-800'
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 