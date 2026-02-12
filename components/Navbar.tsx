'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {

  const navLinks = [
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav>
      <div className="max-w-[95%] mx-auto px-6 lg:px-8 border-b md:border-b-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-sm text-foreground uppercase"
          >
            Avenoir Films
          </Link>

          <div className="flex items-center space-x-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-foreground "
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}