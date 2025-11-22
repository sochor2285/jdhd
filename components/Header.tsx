"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { COMPANY_INFO, NAVIGATION } from "@/lib/constants";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="text-2xl font-black text-white hover:text-blue-400 transition-colors">
            {COMPANY_INFO.name}
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {NAVIGATION.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-gray-300 hover:text-blue-400 uppercase tracking-wide transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#kontakt"
            className="px-6 py-2.5 text-sm font-bold text-white bg-blue-500 hover:bg-blue-600 rounded-full transition-colors uppercase tracking-wide"
          >
            Konzultace zdarma
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-800 bg-gray-900">
          <div className="px-6 py-4 space-y-2">
            {NAVIGATION.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-base font-semibold text-gray-300 hover:text-white hover:bg-gray-800 rounded transition-colors uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="block px-3 py-2 text-base font-bold text-blue-400 hover:bg-gray-800 rounded transition-colors uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              Konzultace zdarma
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
