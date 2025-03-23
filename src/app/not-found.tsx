import Link from "next/link";
import { ArrowLeft, Home, FolderOpen, User } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="text-neutral-300 dark:text-neutral-700 font-mono text-9xl font-bold">
            404
          </div>
          <h1 className="text-2xl font-bold mt-4 mb-2">
            Página não encontrada
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            Parece que você tentou acessar uma página que não existe ou foi
            movida.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-4 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <div className="mb-2 text-sm text-neutral-500">
              &lt;Navegação&gt;
            </div>
            <div className="space-y-3">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 p-3 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                <Home size={16} />
                <span>Voltar para o início</span>
              </Link>

              <Link
                href="/projects"
                className="flex items-center justify-center gap-2 p-3 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                <FolderOpen size={16} />
                <span>Ver projetos</span>
              </Link>

              <Link
                href="/about"
                className="flex items-center justify-center gap-2 p-3 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                <User size={16} />
                <span>Sobre mim</span>
              </Link>
            </div>
            <div className="mt-2 text-sm text-neutral-500">
              &lt;/Navegação&gt;
            </div>
          </div>
        </div>

        <div className="mt-8 inline-block">
          <Link
            href="javascript:history.back()"
            className="text-sm text-neutral-500 hover:text-foreground flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Voltar para a página anterior
          </Link>
        </div>
      </div>
    </div>
  );
}
