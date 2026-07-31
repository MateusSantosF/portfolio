import Link from "next/link";

export default function Footer() {
  return (
    // A régua sangra a largura toda; só o conteúdo é limitado pelo shell.
    <footer className="border-t border-rule">
      <div className="shell flex flex-wrap justify-between gap-3 py-7 font-mono text-xs text-ink-faint">
        <span>© {new Date().getFullYear()} Mateus Ferreira</span>
        <Link href="/privacy-policy" className="transition-colors hover:text-ink">
          Política de Privacidade
        </Link>
        <span>São Paulo, BR</span>
      </div>
    </footer>
  );
}
