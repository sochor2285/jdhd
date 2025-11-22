import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-slate-400 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              {COMPANY_INFO.name}
            </h3>
            <p className="text-sm text-slate-500">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="hover:text-white transition-colors"
            >
              {COMPANY_INFO.phone}
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hover:text-white transition-colors"
            >
              {COMPANY_INFO.email}
            </a>
            <span>
              {COMPANY_INFO.address.city}
            </span>
          </div>

          <div className="pt-6 border-t border-slate-900">
            <p className="text-xs text-slate-600">
              © {currentYear} {COMPANY_INFO.name}. Všechna práva vyhrazena.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
