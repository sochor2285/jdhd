import { z } from "zod";

// Zod schema for contact form validation
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Jméno musí obsahovat alespoň 2 znaky")
    .max(100, "Jméno je příliš dlouhé"),

  email: z
    .string()
    .email("Zadejte platnou emailovou adresu")
    .min(1, "Email je povinný"),

  phone: z
    .string()
    .min(9, "Zadejte platné telefonní číslo")
    .regex(/^(\+?\d{1,4}[\s-]?)?\d{3}[\s-]?\d{3}[\s-]?\d{3}$/, "Zadejte platné telefonní číslo"),

  location: z
    .string()
    .min(2, "Zadejte lokalitu (město)")
    .max(100, "Lokalita je příliš dlouhá"),

  work_type: z
    .string()
    .min(1, "Vyberte typ práce"),

  message: z
    .string()
    .min(10, "Zpráva musí obsahovat alespoň 10 znaků")
    .max(1000, "Zpráva je příliš dlouhá"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
