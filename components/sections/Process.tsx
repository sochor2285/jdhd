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
    <section className="py-32 bg-slate-950 flex justify-center">
      <div className="w-full max-w-7xl px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Jak postupujeme
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Od prvního kontaktu až po předání díla
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-full mb-4 font-bold text-2xl shadow-lg shadow-blue-500/50">
                  {step.number}
                </div>

                <div className="flex justify-center mb-3">
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
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
