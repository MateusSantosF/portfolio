import Image from "next/image";
import Link from "next/link";
import { cloneElement } from "react";
import { Metadata, ResolvingMetadata } from "next";

import { projects } from "@/shared/data/Projects";
import { personalData } from "@/shared/data/PersonalData";
import { IProject } from "@/features/projects/interfaces/IProject";
import { CategoriesMap } from "@/features/projects/data/Categories";
import { TechnologiesMap } from "@/features/projects/data/Technologies";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id } = await params;

  const project: IProject | undefined = projects.find((p) => p.id === id);
  if (!project) {
    return { title: "Projeto não encontrado" };
  }
  const imagesUrl = project.images.map((image) => image.url);
  return {
    title: project.name,
    description: project.shortDescription,
    keywords: personalData.SEOKeywords.concat(project.technologies)
      .concat(project.category)
      .concat(project.name),
    openGraph: { images: imagesUrl },
  };
}

/** Linha rótulo/valor usada no bloco de metadados do case. */
function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-3 border-b border-rule py-4 text-[15px]">
      <span className="text-ink-faint">{label}</span>
      <span className="text-right">{value}</span>
    </div>
  );
}

export default async function ProjectDetails({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="animate-fade shell flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-[clamp(24px,4vw,32px)] font-medium tracking-[-0.025em]">
          Projeto não encontrado
        </h1>
        <Link
          href="/projects"
          className="text-[15px] text-ink-faint transition-colors hover:text-ink"
        >
          ← Projetos
        </Link>
      </div>
    );
  }

  const { label: categoryLabel } = CategoriesMap[project.category];

  return (
    <article className="animate-fade shell pb-[clamp(64px,12vh,120px)] pt-[clamp(28px,5vh,56px)]">
      <Link
        href="/projects"
        className="inline-block pb-[clamp(28px,5vw,44px)] text-[15px] text-ink-faint transition-colors hover:text-ink"
      >
        ← Projetos
      </Link>

      {/* Cabeçalho */}
      <header className="flex max-w-[46em] flex-col gap-[18px]">
        <p className="font-mono text-xs text-ink-faint">{categoryLabel}</p>
        <h1 className="text-[clamp(30px,6vw,48px)] font-medium leading-[1.08] tracking-[-0.035em]">
          {project.name}
        </h1>
        <p className="text-[clamp(17px,2.4vw,20px)] leading-[1.55] text-ink-muted">
          {project.shortDescription}
        </p>
      </header>

      {/* Metadados */}
      <div className="my-[clamp(32px,6vw,52px)] grid gap-x-[clamp(24px,4vw,48px)] [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
        {project.company && (
          <MetaRow label="Cliente" value={project.company.name} />
        )}
        {project.role && <MetaRow label="Papel" value={project.role} />}
        <MetaRow label="Período" value={project.period} />
      </div>

      {/* Links e stack */}
      <div className="mb-[clamp(36px,7vw,64px)] flex flex-wrap items-center gap-x-6 gap-y-4 border-b border-rule pb-[clamp(28px,5vw,44px)]">
        {project.url && project.url !== "#" && !project.isInternal && (
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-control bg-ink px-5 py-3 text-base font-medium text-white transition-colors hover:bg-accent"
          >
            Visitar plataforma
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-control border border-rule-strong px-5 py-3 text-base font-medium transition-colors hover:border-ink"
          >
            Código
          </a>
        )}
        <div className="flex flex-wrap items-center gap-4">
          {project.technologies.map((tech, i) => {
            const { icon, name } = TechnologiesMap[tech];
            return (
              <span
                key={`${tech}-${i}`}
                className="flex items-center gap-2 text-sm text-ink-soft"
              >
                <span className="block opacity-55">
                  {cloneElement(
                    icon.source as React.ReactElement<{ size?: number }>,
                    { size: 15 }
                  )}
                </span>
                {name}
              </span>
            );
          })}
        </div>
      </div>

      {/* Contexto */}
      <p className="mb-[clamp(36px,7vw,64px)] max-w-[46em] text-[17px] leading-[1.75] text-ink-body">
        {project.fullDescription}
      </p>

      {/* Problema / solução */}
      {(project.challenges || project.solutions) && (
        <div className="mb-[clamp(36px,7vw,64px)] grid gap-[clamp(28px,5vw,64px)] [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {project.challenges && (
            <section className="flex flex-col gap-3">
              <h2 className="text-[clamp(19px,2.6vw,22px)] font-medium tracking-[-0.02em]">
                O problema
              </h2>
              <p className="text-[17px] leading-[1.75] text-ink-body">
                {project.challenges}
              </p>
            </section>
          )}
          {project.solutions && (
            <section className="flex flex-col gap-3">
              <h2 className="text-[clamp(19px,2.6vw,22px)] font-medium tracking-[-0.02em]">
                A solução
              </h2>
              <p className="text-[17px] leading-[1.75] text-ink-body">
                {project.solutions}
              </p>
            </section>
          )}
        </div>
      )}

      {/* Entregas */}
      {project.contributions && project.contributions.length > 0 && (
        <section className="mb-[clamp(36px,7vw,64px)]">
          <h2 className="mb-5 text-[clamp(19px,2.6vw,22px)] font-medium tracking-[-0.02em]">
            Entregas
          </h2>
          <div className="grid gap-px overflow-hidden rounded-panel border border-rule bg-rule [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
            {project.contributions.map((item, i) => (
              <div key={i} className="flex bg-surface p-6">
                <p className="text-base leading-[1.65] text-ink-body">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Galeria */}
      {project.images.length > 0 && (
        <section className="mb-[clamp(40px,8vw,72px)] grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {project.images.map((image, i) => (
            <figure
              key={i}
              className="overflow-hidden rounded-panel bg-surface-sunken"
            >
              <div className="relative">
                <Image
                  src={image.url}
                  alt={image.title}
                  width={500}
                  height={300}
                  className="max-h-[300px] w-full object-cover object-top"
                />
                {project.isInternal && (
                  <div className="absolute inset-0 flex items-center justify-center bg-ink/50">
                    <span className="rounded-control bg-ink/70 px-3 py-1 text-sm text-white">
                      Visualização limitada
                    </span>
                  </div>
                )}
              </div>
              <figcaption className="p-4 text-center font-mono text-[11px] text-ink-faint">
                {image.title}
              </figcaption>
            </figure>
          ))}
        </section>
      )}

      {/* CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-7">
        <span className="text-[clamp(18px,2.6vw,21px)] font-medium tracking-[-0.02em]">
          Precisa de algo parecido?
        </span>
        <a
          href={`mailto:${personalData.email}`}
          className="rounded-control bg-ink px-5 py-3 text-base font-medium text-white transition-colors hover:bg-accent"
        >
          Falar comigo
        </a>
      </div>
    </article>
  );
}
