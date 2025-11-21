import { Paintbrush, Building, Layers, Sparkles } from "lucide-react";
import { SERVICES } from "@/lib/constants";

// Map icon names to actual components
const iconMap = {
  Paintbrush,
  Building,
  Layers,
  Sparkles,
} as const;

export function Services() {
  return (
    <section id="sluzby" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Naše služby
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Co pro vás můžeme udělat
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nabízíme komplexní služby v oblasti malířských a lakýrnických prací
            s důrazem na kvalitu a spokojenost zákazníků.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];

            return (
              <div
                key={service.id}
                className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover effect decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* CTA below services */}
        <div className="mt-16 text-center">
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-primary-dark transition-all hover:shadow-xl"
          >
            Poptat službu
          </a>
        </div>
      </div>
    </section>
  );
}
