"use client";

import { useMemo, useState } from "react";
import ProjectRow from "../ProjectRow";
import { IProject } from "../../interfaces/IProject";
import { CategoriesMap } from "../../data/Categories";

const ALL = "Todos";

export default function ProjectsBrowser({
  projects,
}: {
  projects: IProject[];
}) {
  const [filter, setFilter] = useState<string>(ALL);

  const filters = useMemo(() => {
    const labels = projects.map((p) => CategoriesMap[p.category].label);
    return [ALL, ...Array.from(new Set(labels))];
  }, [projects]);

  const visible = useMemo(
    () =>
      filter === ALL
        ? projects
        : projects.filter((p) => CategoriesMap[p.category].label === filter),
    [projects, filter]
  );

  return (
    <>
      <div className="mb-3 flex flex-wrap gap-2">
        {filters.map((label) => {
          const active = filter === label;
          return (
            <button
              key={label}
              type="button"
              onClick={() => setFilter(label)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-2 text-sm transition-colors hover:border-ink ${
                active
                  ? "border-ink bg-ink text-white"
                  : "border-rule-strong bg-surface text-ink-muted"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col">
        {visible.map((project) => (
          <ProjectRow key={project.id} project={project} rule="top" />
        ))}
      </div>
      <div className="border-t border-rule" />
    </>
  );
}
