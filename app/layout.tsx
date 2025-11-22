import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { COMPANY_INFO } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${COMPANY_INFO.name} - Malířské a lakýrnické práce`,
  description: `${COMPANY_INFO.tagline}. Profesionální malování interiérů, fasády, stěrkování a lakýrnické práce. Kvalita a preciznost.`,
  keywords: ["malířské práce", "lakýrnické práce", "fasády", "stěrkování", "malování interiérů", "Praha"],
  openGraph: {
    title: `${COMPANY_INFO.name} - Malířské a lakýrnické práce`,
    description: COMPANY_INFO.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans bg-slate-950 text-slate-200`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
