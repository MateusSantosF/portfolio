import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-between gap-3 gutter border-t border-rule py-6 font-mono text-[11px] text-ink-faint">
      <span>© {new Date().getFullYear()} Mateus Ferreira</span>
      <Link
        href="/privacy-policy"
        className="transition-colors hover:text-ink"
      >
        Política de Privacidade
      </Link>
      <span>São Paulo, BR</span>
    </footer>
  );
}
