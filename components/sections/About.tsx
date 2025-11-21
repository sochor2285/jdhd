import { CheckCircle, Award, Users, Clock } from "lucide-react";

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
    icon: Clock,
    title: "Dodržování termínů",
    description: "Vaší spokojenosti dosahujeme včasným a kvalitním dokončením prací.",
  },
];

export function About() {
  return (
    <section id="o-nas" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left column - Content */}
          <div>
            <h2 className="text-base font-semibold leading-7 text-primary">
              O firmě
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              HRUFIA S.R.O. - Tradiční řemeslo s moderním přístupem
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Již 8 let se věnujeme malířským a lakýrnickým pracím s důrazem
              na kvalitu, preciznost a spokojenost našich zákazníků.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600">
              Naše firma si zakládá na profesionálním přístupu, používání
              kvalitních materiálů a respektu k tradičním řemeslným postupům.
              Každý projekt bereme jako příležitost ukázat naši odbornost
              a péči o detail.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-primary">200+</div>
                <div className="mt-2 text-sm text-gray-600">
                  Spokojených zákazníků
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">100%</div>
                <div className="mt-2 text-sm text-gray-600">
                  Kvalitní materiály
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Features */}
          <div className="space-y-6">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust banner */}
        <div className="mt-20 bg-primary/5 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            Proč si vybrat právě nás?
          </h3>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Kombinujeme tradiční řemeslnou preciznost s moderními postupy
            a materiály. Váš projekt je pro nás prioritou a garantujeme
            kvalitu, na kterou se můžete spolehnout.
          </p>
          <div className="mt-8">
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg hover:bg-primary-dark transition-all"
            >
              Poptat nezávazně
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
