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
    <header className="sticky top-0 z-20 flex items-center justify-between gap-4 gutter bg-surface/[0.86] py-4 backdrop-blur-[14px]">
      <Link href="/" className="text-[15px] font-medium text-ink">
        {personalData.name}
      </Link>

      <nav className="flex items-center gap-[clamp(14px,3vw,28px)]">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm transition-colors hover:text-ink ${
              pathname.startsWith(link.href) ? "text-ink" : "text-ink-soft"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={`mailto:${personalData.email}`}
          className="text-sm text-ink-soft transition-colors hover:text-ink"
        >
          Contato
        </a>
      </nav>
    </header>
  );
}
