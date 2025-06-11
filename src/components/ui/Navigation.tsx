'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

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
    <nav className="bg-gradient-to-r from-purple-800 via-orange-400 to-green-500 p-[4px] rounded-2xl mx-auto max-w-7xl mt-4">
      <div className="bg-white dark:bg-black rounded-xl flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <span className="text-purple-500">MepScans</span>
        </div>
        {/* Nav Links */}
        <ul className="hidden md:flex gap-8 font-bold flex-1 justify-center">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`relative px-3 py-2 text-sm font-bold rounded transition-colors duration-300
                  ${pathname === item.href
                    ? 'bg-white text-black'
                    : 'hover:bg-black hover:text-black hover:bg-white dark:hover:text-black'}
                `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link href="/contact"
            className="hidden md:inline-flex bg-white text-black dark:bg-black dark:text-white px-5 py-2 rounded-lg font-semibold items-center gap-2 border border-neutral-300 dark:border-neutral-700 hover:bg-orange-400 hover:text-white dark:hover:bg-orange-400 dark:hover:text-white transition">
            Request Demo
          </Link>
        </div>
      </div>
  
    </nav>
  );
} 