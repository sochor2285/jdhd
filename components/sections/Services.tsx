"use client";

import { Paintbrush, Building, Layers, Sparkles } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  Paintbrush,
  Building,
  Layers,
  Sparkles,
} as const;

export function Services() {
  return (
    <section id="sluzby" className="py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Naše služby
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Komplexní řešení pro bytové i nebytové prostory
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];

            return (
              <div
                key={service.id}
                className="group bg-gray-800/50 border border-gray-700 p-8 rounded-2xl hover:border-blue-500 hover:bg-gray-800 transition-all"
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors">
                  <Icon className="w-7 h-7 text-blue-400 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#kontakt"
            className="inline-block px-10 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-colors uppercase tracking-wide"
          >
            Poptat službu
          </a>
        </div>
      </div>
    </section>
  );
}
