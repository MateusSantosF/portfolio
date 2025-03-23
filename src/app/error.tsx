"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  RefreshCcw,
  Home,
  FolderOpen,
  User,
  AlertTriangle,
} from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center">
              <AlertTriangle size={40} className="text-red-500" />
            </div>
          </div>
          <div className="text-neutral-300 dark:text-neutral-700 font-mono text-7xl font-bold">
            500
          </div>
          <h1 className="text-2xl font-bold mt-4 mb-2">Erro no servidor</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-4">
            Ocorreu um erro inesperado no servidor. Nossa equipe foi notificada
            e está trabalhando para resolver o problema.
          </p>
          <div className="text-sm text-neutral-500 bg-neutral-50 dark:bg-neutral-800 p-4 rounded-md">
            <p>Erro: {error.message || "Erro desconhecido"}</p>
            {error.digest && <p className="text-xs mt-1">ID: {error.digest}</p>}
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => reset()}
            className="w-full flex items-center justify-center gap-2 p-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
          >
            <RefreshCcw size={16} />
            <span>Tentar novamente</span>
          </button>

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
      </div>
    </div>
  );
}
