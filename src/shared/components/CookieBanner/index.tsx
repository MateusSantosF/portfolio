"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { useMicrosoftClarity } from "@/shared/hooks/useMicrosoftClarity";

const COOKIE_KEY = "cookie-consent";
export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const { acceptClarityCookies, clearClarityConsent } = useMicrosoftClarity();

  useEffect(() => {
    const cookieConsent = localStorage.getItem(COOKIE_KEY);
    if (cookieConsent === null) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setShowBanner(false);
    acceptClarityCookies();
  };

  const declineCookies = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setShowBanner(false);
    clearClarityConsent();
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm mb-2">Este site utiliza cookies</p>
            <p className="text-xs text-neutral-500">
              Ao clicar em &quot;Aceitar&quot;, você concorda com o uso de
              cookies conforme descrito em nossa{" "}
              <Link
                href="/privacy-policy"
                className="underline hover:text-foreground"
              >
                Política de Privacidade
              </Link>
              .
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={declineCookies}
              className="text-sm border border-neutral-200 dark:border-neutral-800 px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Recusar
            </button>
            <button
              onClick={acceptCookies}
              className="text-sm bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2 hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors"
            >
              Aceitar
            </button>
          </div>

          <button
            onClick={declineCookies}
            className="absolute top-4 right-4 md:hidden text-neutral-500 hover:text-foreground"
            aria-label="Fechar"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
