'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { href: '/work', label: 'Work' },
    { href: '/#about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // If we're already on the home page, just scroll
    if (pathname === '/') {
      const aboutSection = document.getElementById('about');
      
      if (aboutSection) {
        aboutSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // If on another page, navigate to home first
      router.push('/');
      
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        
        if (aboutSection) {
          aboutSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  };

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
                onClick={link.label === 'About' ? handleAboutClick : undefined}
                className="text-sm font-semibold text-foreground"
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