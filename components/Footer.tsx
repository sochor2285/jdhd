import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              {COMPANY_INFO.name}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {COMPANY_INFO.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Kontakt</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-gray-400 hover:text-white transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Adresa</h4>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
              <address className="not-italic text-gray-400">
                {COMPANY_INFO.address.street}
                <br />
                {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}
              </address>
            </div>
          </div>

          {/* Company Details */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Fakturační údaje</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>IČO: {COMPANY_INFO.ico}</p>
              <p>DIČ: {COMPANY_INFO.dic}</p>
              {COMPANY_INFO.bankAccount && (
                <p>Účet: {COMPANY_INFO.bankAccount}</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} {COMPANY_INFO.name}. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
}
