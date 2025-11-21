import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { COMPANY_INFO } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
