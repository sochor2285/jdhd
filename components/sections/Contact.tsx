"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { createLead } from "@/lib/supabase";
import { COMPANY_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

const WORK_TYPES = [
  { value: "interior", label: "Malování interiérů" },
  { value: "facade", label: "Fasáda" },
  { value: "plastering", label: "Stěrkování" },
  { value: "varnishing", label: "Lakýrnické práce" },
  { value: "other", label: "Jiné" },
];

type FormState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormState("loading");
    setErrorMessage("");

    try {
      await createLead(data);
      setFormState("success");
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState("idle");
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormState("error");
      setErrorMessage(
        "Omlouváme se, při odesílání formuláře došlo k chybě. Zkuste to prosím znovu nebo nás kontaktujte telefonicky."
      );

      // Reset error message after 5 seconds
      setTimeout(() => {
        setFormState("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <section id="kontakt" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Kontakt
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Máte zájem o naše služby?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Vyplňte formulář a my se vám ozveme do 24 hodin. Případně nás můžete
            kontaktovat přímo telefonicky nebo emailem.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Contact info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Kontaktní informace
              </h3>

              <div className="space-y-4">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Telefon</div>
                    <div className="font-medium">{COMPANY_INFO.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-primary transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email</div>
                    <div className="font-medium">{COMPANY_INFO.email}</div>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-gray-600">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Adresa</div>
                    <address className="font-medium not-italic">
                      {COMPANY_INFO.address.street}
                      <br />
                      {COMPANY_INFO.address.zip} {COMPANY_INFO.address.city}
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">
                Pracovní doba
              </h4>
              <p className="text-sm text-gray-600">
                Po - Pá: 8:00 - 17:00
                <br />
                So - Ne: Dohodou
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white p-8 rounded-xl shadow-sm space-y-6"
            >
              {/* Success message */}
              {formState === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-green-900">
                      Děkujeme za vaši poptávku!
                    </h4>
                    <p className="text-sm text-green-700 mt-1">
                      Vaše zpráva byla úspěšně odeslána. Ozveme se vám co nejdříve.
                    </p>
                  </div>
                </div>
              )}

              {/* Error message */}
              {formState === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-red-900">Chyba</h4>
                    <p className="text-sm text-red-700 mt-1">{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* Name field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Jméno a příjmení <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all",
                    errors.name && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  )}
                  placeholder="Jan Novák"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Email and Phone row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all",
                      errors.email && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    )}
                    placeholder="jan.novak@email.cz"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Telefon <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    className={cn(
                      "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all",
                      errors.phone && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    )}
                    placeholder="+420 123 456 789"
                  />
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Location field */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Lokalita / Město <span className="text-red-500">*</span>
                </label>
                <input
                  {...register("location")}
                  type="text"
                  id="location"
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all",
                    errors.location && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  )}
                  placeholder="Praha"
                />
                {errors.location && (
                  <p className="mt-2 text-sm text-red-600">{errors.location.message}</p>
                )}
              </div>

              {/* Work type select */}
              <div>
                <label
                  htmlFor="work_type"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Typ práce <span className="text-red-500">*</span>
                </label>
                <select
                  {...register("work_type")}
                  id="work_type"
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white",
                    errors.work_type && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  )}
                >
                  <option value="">Vyberte typ práce</option>
                  {WORK_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.work_type && (
                  <p className="mt-2 text-sm text-red-600">{errors.work_type.message}</p>
                )}
              </div>

              {/* Message textarea */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Zpráva <span className="text-red-500">*</span>
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={5}
                  className={cn(
                    "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none",
                    errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  )}
                  placeholder="Popište nám prosím váš požadavek..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={formState === "loading"}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary-dark transition-all",
                  formState === "loading" && "opacity-50 cursor-not-allowed"
                )}
              >
                {formState === "loading" ? (
                  <>
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Odesílám...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Odeslat poptávku
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Odesláním formuláře souhlasíte se zpracováním osobních údajů.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
