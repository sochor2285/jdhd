/**
 * Company information and constants for HRUFIA S.R.O.
 */

export const COMPANY_INFO = {
  name: "HRUFIA S.R.O.",
  tagline: "8 let tradice v malířských a lakýrnických pracích",
  email: "info@hrufia.cz",
  phone: "+420 123 456 789",

  // Company registration details
  ico: "12345678",
  dic: "CZ12345678",
  address: {
    street: "Příkladová 123",
    city: "Praha",
    zip: "110 00",
  },

  // Bank details (optional, for invoice purposes)
  bankAccount: "1234567890/0100",
} as const;

export const SERVICES = [
  {
    id: "painting",
    title: "Malování interiérů",
    description: "Profesionální malování bytů, domů a kanceláří s důrazem na čistotu a preciznost.",
    icon: "Paintbrush",
  },
  {
    id: "facade",
    title: "Fasády",
    description: "Komplexní renovace a nátěry fasád budov s použitím kvalitních materiálů.",
    icon: "Building",
  },
  {
    id: "plastering",
    title: "Stěrkování",
    description: "Odborné stěrkování stěn a stropů pro dokonale hladký povrch.",
    icon: "Layers",
  },
  {
    id: "varnishing",
    title: "Lakýrnické práce",
    description: "Precizní lakování dřevěných povrchů, dveří, oken a nábytku.",
    icon: "Sparkles",
  },
] as const;

export const NAVIGATION = [
  { label: "Služby", href: "#sluzby" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "O nás", href: "#o-nas" },
  { label: "Kontakt", href: "#kontakt" },
] as const;
