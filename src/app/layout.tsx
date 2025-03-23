import type React from "react";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/shared/components/Navbar";
import Footer from "@/shared/components/Footer";
import { Providers } from "./providers";
import { personalData } from "@/shared/data/PersonalData";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${personalData.name} | ${personalData.mainRole}`,
  description: `Bem vindo ao meu portfólio! Me chamo ${personalData.name}, atualmente trabalho como ${personalData.mainRole} na ${personalData.currentCompany}.`,
  keywords: personalData.SEOKeywords
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={jetbrainsMono.className}>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
