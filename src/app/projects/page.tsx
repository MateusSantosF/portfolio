import { Metadata } from "next/types";

import ProjectsBrowser from "@/features/projects/components/ProjectsBrowser";
import { projects } from "@/shared/data/Projects";
import { personalData } from "@/shared/data/PersonalData";

export const metadata: Metadata = {
  title: `Projetos - ${personalData.name}`,
  description: `Projetos desenvolvidos por ${personalData.name}`,
  keywords: personalData.SEOKeywords,
};

/** Intervalo coberto pelos projetos, exibido no eyebrow. */
function periodRange() {
  const years = projects
    .flatMap((p) => p.period.match(/\d{4}/g) ?? [])
    .map(Number);
  if (years.length === 0) return "";
  return `${Math.min(...years)}—${Math.max(...years)}`;
}

export default function Projects() {
  return (
    <div className="animate-fade gutter pb-[clamp(64px,12vh,120px)] pt-[clamp(40px,8vh,96px)]">
      <div className="mb-[clamp(32px,6vw,56px)] flex max-w-[46em] flex-col gap-4">
        <p className="font-mono text-xs text-ink-faint">
          Projetos · {periodRange()}
        </p>
        <h1 className="text-[clamp(30px,6vw,46px)] font-medium leading-[1.1] tracking-[-0.035em]">
          {projects.length} produtos em produção
        </h1>
        <p className="text-[clamp(16px,2.2vw,18px)] leading-[1.6] text-ink-muted">
          Plataformas públicas, soluções de IA e ferramentas internas.
        </p>
      </div>

      <ProjectsBrowser projects={projects} />
    </div>
  );
}
