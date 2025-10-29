"use client";

import React, { useState } from 'react';
import { Button } from './ui/button.tsx';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Solutions', href: '#pillars' },
    { label: 'Labs', href: '#labs' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <nav className="fixed top-12 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-cyan-400 to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-white font-bold text-sm">QR</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent hidden sm:block">
              Quantum Rishi
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-primary hover:bg-primary/10"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-cyan-400 hover:from-cyan-400 hover:to-primary text-white shadow-lg shadow-primary/20"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-accent/50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-primary transition-colors duration-200 py-2 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full text-gray-300 hover:text-primary hover:bg-primary/10"
                >
                  Sign In
                </Button>
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-primary to-cyan-400 hover:from-cyan-400 hover:to-primary text-white shadow-lg shadow-primary/20"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
