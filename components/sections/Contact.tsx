"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Jméno musí mít alespoň 2 znaky"),
  email: z.string().email("Zadejte platný email"),
  phone: z.string().min(9, "Zadejte platné telefonní číslo"),
  serviceType: z.string().min(1, "Vyberte typ práce"),
  message: z.string().min(10, "Zpráva musí mít alespoň 10 znaků"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form data:", data);
    // Here you would send data to your backend
    alert("Formulář odeslán! (Demo - integrace s backendem bude později)");
    reset();
  };

  return (
    <section id="kontakt" className="py-32 bg-slate-950">
      <div className="mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Napište nám
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Ozveme se vám do 24 hodin
          </p>
        </motion.div>

        {/* Centered Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-10 lg:p-12 shadow-2xl shadow-blue-500/10"
        >
          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-slate-950/50 rounded-xl border border-slate-800">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-lg mb-3">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Telefon</h4>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm"
              >
                {COMPANY_INFO.phone}
              </a>
              <p className="text-xs text-slate-500 mt-1">Po - Pá: 8:00 - 17:00</p>
            </div>

            <div className="text-center p-6 bg-slate-950/50 rounded-xl border border-slate-800">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-lg mb-3">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Email</h4>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors text-sm break-all"
              >
                {COMPANY_INFO.email}
              </a>
              <p className="text-xs text-slate-500 mt-1">Odpovíme do 24 hodin</p>
            </div>

            <div className="text-center p-6 bg-slate-950/50 rounded-xl border border-slate-800">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-lg mb-3">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="font-semibold text-white mb-2">Adresa</h4>
              <address className="not-italic text-slate-400 text-sm">
                {COMPANY_INFO.address.street}
                <br />
                {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}
              </address>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-950/50 border border-slate-800 rounded-xl p-6 lg:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Jméno a příjmení
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  placeholder="Jan Novák"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="jan.novak@email.cz"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                    Telefon
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="+420 123 456 789"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-semibold text-white mb-2">
                  Typ práce
                </label>
                <select
                  {...register("serviceType")}
                  id="serviceType"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="" className="bg-slate-950">Vyberte typ práce</option>
                  <option value="interior" className="bg-slate-950">Malování interiérů</option>
                  <option value="facade" className="bg-slate-950">Fasády</option>
                  <option value="plastering" className="bg-slate-950">Stěrkování</option>
                  <option value="painting" className="bg-slate-950">Lakýrnické práce</option>
                  <option value="other" className="bg-slate-950">Jiné</option>
                </select>
                {errors.serviceType && (
                  <p className="mt-1 text-sm text-red-400">{errors.serviceType.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Vaše zpráva
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  placeholder="Popište prosím váš požadavek..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Odesílání..." : "Odeslat zprávu"}
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
