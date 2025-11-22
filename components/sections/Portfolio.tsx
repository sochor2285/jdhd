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
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Ukázky práce
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Podívejte se na naše realizace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden mb-4 flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-6xl mb-2 opacity-40">📸</div>
                  <div className="text-sm text-slate-500">Fotografie z realizace</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
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
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-sm hover:shadow-md"
          >
            Nezávazná poptávka
          </a>
        </div>
      </div>
    </section>
  );
}
