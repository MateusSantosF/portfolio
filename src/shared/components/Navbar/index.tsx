"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { personalData } from "@/shared/data/PersonalData";

const navLinks = [
  { href: "/projects", label: "Projetos" },
  { href: "/about", label: "Sobre" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    // A barra sangra a largura toda; só o conteúdo é limitado pelo shell.
    <header className="sticky top-0 z-20 bg-surface/[0.86] backdrop-blur-[14px]">
      <div className="shell flex items-center justify-between gap-4 py-4">
        <Link href="/" className="text-base font-medium text-ink">
          {personalData.name}
        </Link>

        <nav className="flex items-center gap-[clamp(16px,3vw,30px)]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] transition-colors hover:text-ink ${
                pathname.startsWith(link.href) ? "text-ink" : "text-ink-soft"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`mailto:${personalData.email}`}
            className="text-[15px] text-ink-soft transition-colors hover:text-ink"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
