"use client";

import { ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen flex items-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full py-32 lg:py-40">
        <div className="flex items-center justify-center min-h-[60vh]">
          {/* Center - Content */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-12 border border-blue-500/30">
              Profesionální malířské služby od roku 2017
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-10">
              Malířské práce,
              <br />
              <span className="text-blue-400">
                které mluví za vás.
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-6 leading-relaxed">
              Proměníme váš prostor v místo, kde budete rádi žít.
            </p>

            <p className="text-lg text-slate-400 mb-14 leading-relaxed">
              Profesionální malířské a lakýrnické služby s garancí kvality od roku 2017.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#kontakt"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-all"
              >
                Konzultace zdarma
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-slate-700 hover:border-blue-500 text-white font-bold rounded-full transition-all"
              >
                Nejdřív kouknu na ukázky
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-slate-500 uppercase tracking-wider">Další</span>
          <div className="w-px h-16 bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </div>
    </section>
  );
}
