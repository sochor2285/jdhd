"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { COMPANY_INFO, NAVIGATION } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-primary">
              {COMPANY_INFO.name}
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Otevřít menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {NAVIGATION.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            <Phone className="h-4 w-4" />
            {COMPANY_INFO.phone}
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden transition-all duration-300 ease-in-out overflow-hidden",
          mobileMenuOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="space-y-2 px-6 pb-6 pt-2">
          {NAVIGATION.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-base font-semibold text-primary hover:bg-gray-50"
          >
            <Phone className="h-5 w-5" />
            {COMPANY_INFO.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
