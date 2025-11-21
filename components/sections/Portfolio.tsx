"use client";

import Image from "next/image";
import { useState } from "react";

// Sample portfolio data - user can replace with actual images
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Malování obývacího pokoje",
    category: "Interiér",
    before: "/placeholder-before.jpg",
    after: "/placeholder-after.jpg",
  },
  {
    id: 2,
    title: "Renovace fasády rodinného domu",
    category: "Fasáda",
    before: "/placeholder-before.jpg",
    after: "/placeholder-after.jpg",
  },
  {
    id: 3,
    title: "Stěrkování a malování ložnice",
    category: "Stěrkování",
    before: "/placeholder-before.jpg",
    after: "/placeholder-after.jpg",
  },
  {
    id: 4,
    title: "Lakování dřevěných dveří",
    category: "Lakování",
    before: "/placeholder-before.jpg",
    after: "/placeholder-after.jpg",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Portfolio
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Naše realizace
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Podívejte se na ukázky naší práce. Každý projekt dokládá naši preciznost a péči o detail.
          </p>
        </div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {PORTFOLIO_ITEMS.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({
  item,
}: {
  item: (typeof PORTFOLIO_ITEMS)[0];
}) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
      {/* Image container with before/after toggle */}
      <div
        className="relative h-80 bg-gray-100 cursor-pointer"
        onMouseEnter={() => setShowAfter(true)}
        onMouseLeave={() => setShowAfter(false)}
      >
        {/* Placeholder for images - using colored boxes as placeholders */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            showAfter ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
            <span className="text-gray-600 font-semibold">PŘED</span>
          </div>
        </div>

        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            showAfter ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white font-semibold">PO</span>
          </div>
        </div>

        {/* Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
          {item.category}
        </div>

        {/* Toggle indicator */}
        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-medium text-white">
          {showAfter ? "Po" : "Před"}
        </div>
      </div>

      {/* Content */}
      <div className="bg-white p-6">
        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
        <p className="mt-2 text-sm text-gray-600">
          Najeďte myší pro zobrazení výsledku
        </p>
      </div>
    </div>
  );
}
