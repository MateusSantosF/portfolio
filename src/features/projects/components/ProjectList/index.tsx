import { projects } from "@/shared/data/Projects";
import ProjectCard from "../ProjectCard";

type ProjectsListProps = {
  maxProjects?: number;
  onlyHighlighted?: boolean;
} & React.HTMLAttributes<HTMLUListElement>;

export default function ProjectsList({
  maxProjects,
  onlyHighlighted,
  ...props
}: ProjectsListProps) {
  let filteredProjects = projects;

  if (onlyHighlighted) {
    filteredProjects = filteredProjects.filter(
      (project) => project.isHighlighted
    );
  }

  filteredProjects = filteredProjects.slice(
    0,
    maxProjects || filteredProjects.length
  );

  return (
    <ul {...props}>
      {filteredProjects.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
