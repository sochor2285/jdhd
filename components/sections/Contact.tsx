"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function Contact() {
  return (
    <section id="kontakt" className="py-32 bg-gray-900">
      <div className="w-full flex flex-col items-center">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
            Kontaktujte nás
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ozveme se vám do 24 hodin
          </p>
        </div>

        {/* Centered contact form */}
        <div className="w-full max-w-3xl px-4">
            <div className="bg-gray-800 border border-gray-700 rounded-3xl p-10 lg:p-16">
            <h3 className="text-3xl font-black text-white mb-12 text-center">
              Poptávkový formulář
            </h3>

            <form
              action={`mailto:${COMPANY_INFO.email}`}
              method="post"
              encType="text/plain"
              className="space-y-8"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide"
                >
                  Jméno a příjmení *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Jan Novák"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="jan.novak@email.cz"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide"
                  >
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="+420 123 456 789"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold text-gray-300 mb-2 uppercase tracking-wide"
                >
                  Zpráva *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Popište prosím váš požadavek..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-colors uppercase tracking-wide text-lg"
              >
                Odeslat poptávku
              </button>

              <p className="text-xs text-gray-500 text-center">
                * Povinné údaje
              </p>
            </form>
            </div>

          {/* Contact info below form */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-5xl px-4">
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 text-center hover:border-blue-500 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Telefon</h3>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-blue-400 hover:text-blue-300 font-semibold text-lg"
              >
                {COMPANY_INFO.phone}
              </a>
              <p className="text-sm text-gray-500 mt-2">Po - Pá: 8:00 - 17:00</p>
            </div>

            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 text-center hover:border-blue-500 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-blue-400 hover:text-blue-300 font-semibold break-all"
              >
                {COMPANY_INFO.email}
              </a>
              <p className="text-sm text-gray-500 mt-2">Odpovíme do 24 hodin</p>
            </div>

            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 text-center hover:border-blue-500 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Adresa</h3>
              <address className="not-italic text-gray-400">
                {COMPANY_INFO.address.street}
                <br />
                {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
