import Link from "next/link";
import { IProject } from "../../interfaces/IProject";
import { CategoriesMap } from "../../data/Categories";
import { TechnologiesMap } from "../../data/Technologies";
import { cloneElement } from "react";

type ProjectRowProps = {
  project: IProject;
  /** Índice 1-based exibido como "01", "02"… Omitido nos destaques da home. */
  index?: number;
  /** `top` na listagem completa, `bottom` nos destaques da home. */
  rule?: "top" | "bottom";
};

export default function ProjectRow({
  project,
  index,
  rule = "bottom",
}: ProjectRowProps) {
  const { label } = CategoriesMap[project.category];

  return (
    <Link
      href={`/projects/${project.id}`}
      className={`group grid w-full gap-2.5 py-[clamp(20px,3.5vw,30px)] transition-colors hover:bg-surface-hover ${
        rule === "top" ? "border-t border-rule" : "border-b border-rule"
      }`}
    >
      <span className="flex flex-wrap items-baseline gap-3">
        {index !== undefined && (
          <span className="font-mono text-[11px] text-ink-fainter">
            {String(index).padStart(2, "0")}
          </span>
        )}
        <span className="text-[clamp(19px,3.2vw,23px)] font-medium tracking-[-0.02em] text-ink">
          {project.name}
        </span>
        <span className="font-mono text-[11px] text-ink-faint">{label}</span>
      </span>

      <span className="max-w-[46em] text-[15px] leading-[1.6] text-ink-muted">
        {project.shortDescription}
      </span>

      <span className="mt-1 flex items-center gap-2.5">
        {project.technologies.map((tech, i) => {
          const { icon, name } = TechnologiesMap[tech];
          return (
            <span
              key={`${tech}-${i}`}
              title={name}
              aria-label={name}
              className="block opacity-50 transition-opacity group-hover:opacity-75"
            >
              {cloneElement(
                icon.source as React.ReactElement<{ size?: number }>,
                { size: 15 }
              )}
            </span>
          );
        })}
      </span>
    </Link>
  );
}
