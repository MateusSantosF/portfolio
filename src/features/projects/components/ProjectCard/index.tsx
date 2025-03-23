import Link from "next/link";
import { TechnologieIcon } from "@/features/projects/components/TechnologieIcon";
import { CategoryLabel } from "../CategoryLabel";
import { IProject } from "../../interfaces/IProject";

interface ProjectCardProps {
  project: IProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="block">
      <div className="project-card h-full border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900 hover:shadow-lg">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        <div className="flex justify-between items-center mt-auto">
          <div className="flex space-x-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <TechnologieIcon key={index} technologie={tech} />
            ))}
          </div>

          <CategoryLabel category={project.category} />
        </div>
      </div>
    </Link>
  );
}
