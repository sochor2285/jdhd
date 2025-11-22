"use client";

import { Phone, CalendarCheck, Paintbrush2, CheckCircle } from "lucide-react";

const STEPS = [
  {
    number: "1",
    icon: Phone,
    title: "Kontakt",
    description: "Zavolejte nebo vyplňte poptávkový formulář",
  },
  {
    number: "2",
    icon: CalendarCheck,
    title: "Nezávazná konzultace",
    description: "Proměříme prostor a připravíme cenovou nabídku zdarma",
  },
  {
    number: "3",
    icon: Paintbrush2,
    title: "Realizace",
    description: "Naši zkušení pracovníci provedou kvalitní a čistou práci",
  },
  {
    number: "4",
    icon: CheckCircle,
    title: "Předání",
    description: "Kontrola kvality a poskytnutí záruky",
  },
];

export function Process() {
  return (
    <section className="py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Jak postupujeme
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Od prvního kontaktu až po předání díla
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 text-white rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-black">{step.number}</span>
                </div>

                <div className="flex justify-center mb-4">
                  <Icon className="w-10 h-10 text-blue-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
