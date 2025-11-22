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
    <section id="sluzby" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Naše služby
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Komplexní řešení pro bytové i nebytové prostory
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];

            return (
              <div
                key={service.id}
                className="group bg-white border border-slate-200 p-6 rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#kontakt"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-sm hover:shadow-md"
          >
            Poptat službu
          </a>
        </div>
      </div>
    </section>
  );
}
