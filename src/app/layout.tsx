import type React from "react";
import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/shared/components/Navbar";
import Footer from "@/shared/components/Footer";
import { Providers } from "./providers";
import { personalData } from "@/shared/data/PersonalData";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personalData.name} | ${personalData.mainRole}`,
  description: `Bem vindo ao meu portfólio! Me chamo ${personalData.name}, atualmente trabalho como ${personalData.mainRole} na ${personalData.currentCompany}.`,
  keywords: personalData.SEOKeywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${interTight.variable} ${jetbrainsMono.variable} font-sans flex min-h-screen flex-col`}
      >
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
