import Link from "next/link";
import { Metadata } from "next";
import { cloneElement } from "react";

import ProjectRow from "@/features/projects/components/ProjectRow";
import { TechnologiesMap } from "@/features/projects/data/Technologies";
import { TTechnologie } from "@/features/projects/interfaces/ITechnologies";
import { projects } from "@/shared/data/Projects";
import { personalData } from "@/shared/data/PersonalData";

const FEATURED_COUNT = 4;

const STACK: TTechnologie[] = [
  "NEXTJS",
  "REACT",
  "TYPESCRIPT",
  ".NET",
  "PYTHON",
  "REACTNATIVE",
  "POSTGRESQL",
  "DOCKER",
  "AZURE",
];

export const metadata: Metadata = {
  title: `Início - ${personalData.name}`,
  description: `Bem vindo ao meu portfólio! Me chamo ${personalData.name}, atualmente trabalho como ${personalData.mainRole} na ${personalData.currentCompany}.`,
};

export default function Home() {
  const featured = projects
    .filter((project) => project.isHighlighted)
    .slice(0, FEATURED_COUNT);

  return (
    <div className="animate-fade">
      {/* Hero */}
      <section className="shell pb-[clamp(48px,9vh,100px)] pt-[clamp(56px,12vh,140px)]">
        <div className="flex max-w-[900px] flex-col gap-[clamp(24px,4vw,36px)]">
          <p className="font-mono text-xs text-ink-faint">
            Tech Lead · Full stack · São Paulo
          </p>
          <h1 className="text-pretty text-[clamp(34px,7.5vw,60px)] font-medium leading-[1.08] tracking-[-0.035em]">
            Projeto e construo plataformas digitais de longa vida — da
            arquitetura ao código em produção.
          </h1>
          <p className="max-w-[34em] text-pretty text-[clamp(17px,2.3vw,20px)] leading-[1.65] text-ink-muted">
            Sou {personalData.name}. Lidero tecnicamente as plataformas
            culturais do Governo do Estado de São Paulo na{" "}
            {personalData.currentCompany}, e desenvolvo soluções de IA aplicadas
            a problemas reais de negócio.
          </p>
          <div className="mt-1 flex flex-wrap gap-2.5">
            <Link
              href="/projects"
              className="rounded-control bg-ink px-5 py-3 text-base font-medium text-white transition-colors hover:bg-accent"
            >
              Ver projetos
            </Link>
            <a
              href={`mailto:${personalData.email}`}
              className="rounded-control border border-rule-strong px-5 py-3 text-base font-medium text-ink transition-colors hover:border-ink"
            >
              Falar sobre um projeto
            </a>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="shell pb-[clamp(48px,9vh,96px)]">
        <div className="flex flex-wrap items-center gap-[clamp(18px,3vw,34px)] border-t border-rule pt-7">
          <span className="mb-1 w-full font-mono text-xs text-ink-faint">
            Stack principal
          </span>
          {STACK.map((tech) => {
            const { icon, name } = TechnologiesMap[tech];
            return (
              <span
                key={tech}
                className="flex items-center gap-2 text-sm text-ink-soft"
              >
                <span className="block opacity-55">
                  {cloneElement(
                    icon.source as React.ReactElement<{ size?: number }>,
                    { size: 16 }
                  )}
                </span>
                {name}
              </span>
            );
          })}
        </div>
      </section>

      {/* Trabalho selecionado */}
      <section className="shell pb-[clamp(56px,10vh,112px)]">
        <div className="flex items-baseline justify-between gap-5 border-b border-rule pb-5">
          <h2 className="text-[clamp(22px,3.2vw,27px)] font-medium tracking-[-0.02em]">
            Trabalho selecionado
          </h2>
          <Link
            href="/projects"
            className="text-[15px] text-ink-soft transition-colors hover:text-ink"
          >
            Todos ({projects.length})
          </Link>
        </div>
        <div className="flex flex-col">
          {featured.map((project) => (
            <ProjectRow key={project.id} project={project} rule="bottom" />
          ))}
        </div>
      </section>

      {/* Contato */}
      <section className="shell pb-[clamp(64px,12vh,128px)]">
        <div className="grid gap-[clamp(28px,5vw,56px)] border-t border-rule pt-[clamp(32px,6vw,48px)] [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
          <div className="flex max-w-[30em] flex-col gap-3">
            <h2 className="text-[clamp(22px,3.4vw,28px)] font-medium tracking-[-0.025em]">
              Disponível para novos projetos
            </h2>
            <p className="text-[17px] leading-[1.65] text-ink-muted">
              Consultoria técnica, desenvolvimento de plataformas ou produtos
              com IA. Respondo em até 24h.
            </p>
          </div>
          <div className="flex flex-col gap-0.5">
            <a
              href={`mailto:${personalData.email}`}
              className="flex justify-between gap-4 border-b border-rule py-4 text-base transition-colors hover:text-accent"
            >
              <span>E-mail</span>
              <span className="text-ink-faint">mateusferreira.dev</span>
            </a>
            <a
              href={`https://www.linkedin.com/in/${personalData.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between gap-4 border-b border-rule py-4 text-base transition-colors hover:text-accent"
            >
              <span>LinkedIn</span>
              <span className="text-ink-faint">{personalData.linkedin}</span>
            </a>
            <a
              href={`https://github.com/${personalData.github}`}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between gap-4 border-b border-rule py-4 text-base transition-colors hover:text-accent"
            >
              <span>GitHub</span>
              <span className="text-ink-faint">{personalData.github}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
