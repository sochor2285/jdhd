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
    <section id="o-nas" className="py-32 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Proč si vybrat HRUFIA
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Spolehlivý partner pro vaše malířské a lakýrnické práce
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="text-5xl font-black text-blue-400 mb-3">200+</div>
              <div className="text-gray-400 font-semibold">Realizovaných projektů</div>
            </div>
            <div>
              <div className="text-5xl font-black text-blue-400 mb-3">8+</div>
              <div className="text-gray-400 font-semibold">Let zkušeností</div>
            </div>
            <div>
              <div className="text-5xl font-black text-blue-400 mb-3">100%</div>
              <div className="text-gray-400 font-semibold">Spokojenost zákazníků</div>
            </div>
          </div>
          <a
            href="#kontakt"
            className="inline-block px-10 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-colors uppercase tracking-wide"
          >
            Nezávazná konzultace
          </a>
        </div>
      </div>
    </section>
  );
}
