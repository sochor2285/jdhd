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
    <section id="portfolio" className="py-32 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Ukázky práce
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Nejdřív kouknu na ukázky
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500 transition-all"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border-b border-gray-700">
                <div className="text-center">
                  <div className="text-6xl mb-2 filter grayscale">📸</div>
                  <div className="text-sm text-gray-500">Fotografie z realizace</div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30">
                    {item.category}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#kontakt"
            className="inline-block px-10 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-colors uppercase tracking-wide"
          >
            Nezávazná poptávka
          </a>
        </div>
      </div>
    </section>
  );
}
