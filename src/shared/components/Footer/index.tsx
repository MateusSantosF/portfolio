import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 text-center text-sm">
        <p className="text-neutral-500">
          © {new Date().getFullYear()} - Mateus Ferreira
        </p>
        <div className="mt-2">
          <Link
            href="/privacy-policy"
            className="text-xs text-neutral-500 hover:text-foreground transition-colors"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
