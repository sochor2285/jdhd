"use client";

import { Paintbrush, Building, Layers, Sparkles } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";

const iconMap = {
  Paintbrush,
  Building,
  Layers,
  Sparkles,
} as const;

export function Services() {
  return (
    <section id="sluzby" className="py-32 bg-slate-950">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Naše služby
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Komplexní řešení pro bytové i nebytové prostory
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all text-center"
              >
                <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#kontakt"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/50"
          >
            Poptat službu
          </a>
        </div>
      </div>
    </section>
  );
}
