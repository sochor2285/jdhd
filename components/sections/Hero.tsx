import { ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-navy/90 z-0">
        {/* Placeholder for background image - user will replace this with actual photo */}
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 text-center">
        <div className="mx-auto max-w-3xl">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-medium text-white">
              8 let na trhu
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
            Malířské a lakýrnické práce
            <span className="block text-accent mt-2">s tradicí od roku 2017</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg leading-8 text-gray-100 max-w-2xl mx-auto">
            Profesionální přístup, kvalitní materiály a precizní provedení.
            Váš domov si zaslouží to nejlepší.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap gap-y-4">
            <a
              href="#kontakt"
              className="group rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-lg hover:bg-gray-50 transition-all hover:shadow-xl flex items-center gap-2"
            >
              Nezávazná poptávka
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="rounded-full bg-white/10 backdrop-blur-sm px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-all"
            >
              Zobrazit realizace
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">8+</div>
              <div className="text-sm text-gray-200 mt-1">Let zkušeností</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">200+</div>
              <div className="text-sm text-gray-200 mt-1">Spokojených zákazníků</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-gray-200 mt-1">Kvalitní práce</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
