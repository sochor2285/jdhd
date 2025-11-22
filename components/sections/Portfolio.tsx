"use client";

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "Moderní obývací pokoj",
    category: "Interiér",
    location: "Praha 5",
  },
  {
    id: 2,
    title: "Rodinný dům - fasáda",
    category: "Fasáda",
    location: "Brno",
  },
  {
    id: 3,
    title: "Stěrkování ložnice",
    category: "Stěrkování",
    location: "Ostrava",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-slate-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Ukázky práce
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Podívejte se na naše realizace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl overflow-hidden mb-4 flex items-center justify-center hover:scale-105 transition-transform duration-300 border border-slate-700">
                <div className="text-center">
                  <div className="text-6xl mb-2 opacity-20">📸</div>
                  <div className="text-sm text-slate-500">Fotografie z realizace</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full border border-blue-500/30">
                    {item.category}
                  </span>
                </div>
                <p className="text-sm text-slate-500">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#kontakt"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/50"
          >
            Nezávazná poptávka
          </a>
        </div>
      </div>
    </section>
  );
}
