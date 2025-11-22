"use client";

import { CheckCircle, Award, Users, Shield } from "lucide-react";

const FEATURES = [
  {
    icon: Award,
    title: "8 let zkušeností",
    description: "Od roku 2017 poskytujeme profesionální malířské a lakýrnické služby.",
  },
  {
    icon: CheckCircle,
    title: "Kvalitní materiály",
    description: "Používáme pouze osvědčené materiály od renomovaných výrobců.",
  },
  {
    icon: Users,
    title: "Profesionální tým",
    description: "Náš zkušený tým garantuje precizní provedení každého projektu.",
  },
  {
    icon: Shield,
    title: "Záruka kvality",
    description: "Na všechny naše práce poskytujeme záruční servis.",
  },
];

export function About() {
  return (
    <section id="o-nas" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Proč si vybrat HRUFIA
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Spolehlivý partner pro vaše malířské a lakýrnické práce
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-xl mb-4">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-slate-600 font-medium">Realizovaných projektů</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">8+</div>
              <div className="text-slate-600 font-medium">Let zkušeností</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-slate-600 font-medium">Spokojenost zákazníků</div>
            </div>
          </div>
          <a
            href="#kontakt"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-sm hover:shadow-md"
          >
            Nezávazná konzultace
          </a>
        </div>
      </div>
    </section>
  );
}
