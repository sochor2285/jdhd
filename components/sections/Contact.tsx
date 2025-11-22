"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function Contact() {
  return (
    <section id="kontakt" className="py-32 bg-gray-900">
      <div className="w-full flex flex-col items-center px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Máte zájem o nabídku?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Napište nám a my se vám ozveme do 24 hodin
          </p>
        </div>

        {/* Contact form */}
        <div className="w-full max-w-4xl">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-2xl p-8 lg:p-12 shadow-2xl">
            <form
              action={`mailto:${COMPANY_INFO.email}`}
              method="post"
              encType="text/plain"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-300"
                  >
                    Jméno a příjmení
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-5 py-3.5 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Jan Novák"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-5 py-3.5 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="jan.novak@email.cz"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-300"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-5 py-3.5 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="+420 123 456 789"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-300"
                >
                  Vaše zpráva
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-5 py-3.5 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  placeholder="Popište prosím váš požadavek..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-3 group"
              >
                Odeslat zprávu
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            </div>

          {/* Contact info below form */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500 hover:bg-gray-800 transition-all group">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-500/20 rounded-full mb-4 group-hover:bg-blue-500 transition-all">
                <Phone className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Telefon</h3>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                {COMPANY_INFO.phone}
              </a>
              <p className="text-xs text-gray-500 mt-2">Po - Pá: 8:00 - 17:00</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500 hover:bg-gray-800 transition-all group">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-500/20 rounded-full mb-4 group-hover:bg-blue-500 transition-all">
                <Mail className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Email</h3>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-blue-400 hover:text-blue-300 font-medium break-all transition-colors"
              >
                {COMPANY_INFO.email}
              </a>
              <p className="text-xs text-gray-500 mt-2">Odpovíme do 24 hodin</p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6 text-center hover:border-blue-500 hover:bg-gray-800 transition-all group">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-500/20 rounded-full mb-4 group-hover:bg-blue-500 transition-all">
                <MapPin className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">Adresa</h3>
              <address className="not-italic text-gray-400 text-sm">
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
