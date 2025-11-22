"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { COMPANY_INFO, NAVIGATION } from "@/lib/constants";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Floating Navbar - Desktop */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block">
        <nav className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-full px-10 py-4 shadow-2xl shadow-blue-500/10">
          <div className="flex items-center gap-10">
            {/* Logo */}
            <a href="#" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
              {COMPANY_INFO.name}
            </a>

            {/* Navigation */}
            <div className="flex gap-8 items-center">
              {NAVIGATION.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-colors shadow-lg shadow-blue-500/50"
            >
              <Phone className="w-4 h-4" />
              Zavolat
            </a>
          </div>
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-slate-900/95 backdrop-blur-md border-b border-white/10">
        <nav className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-white">
            {COMPANY_INFO.name}
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-slate-900/98 backdrop-blur-md">
            <div className="px-6 py-4 space-y-1">
              {NAVIGATION.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 px-3 py-2 text-base font-semibold text-blue-400 hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                Zavolat
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
