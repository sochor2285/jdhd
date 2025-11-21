import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              {COMPANY_INFO.name}
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                {COMPANY_INFO.phone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                {COMPANY_INFO.email}
              </a>
              <div className="flex items-start gap-2 text-gray-300 text-sm">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <address className="not-italic">
                  {COMPANY_INFO.address.street}
                  <br />
                  {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}
                </address>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Fakturační údaje</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>IČO: {COMPANY_INFO.ico}</p>
              <p>DIČ: {COMPANY_INFO.dic}</p>
              {COMPANY_INFO.bankAccount && (
                <p>Číslo účtu: {COMPANY_INFO.bankAccount}</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} {COMPANY_INFO.name}. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
}
