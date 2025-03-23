import ProjectsList from "@/features/projects/components/ProjectList";
import { Heading } from "@/shared/components/Heading";
import { SectionDescription } from "@/shared/components/SectionDescription";
import { personalData } from "@/shared/data/PersonalData";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: `Projetos - ${personalData.name}`,
  description: `Projetos desenvolvidos por ${personalData.name}`,
  keywords: personalData.SEOKeywords
};

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <SectionDescription descripion="Projetos" />
      <Heading
        title="Meus Projetos"
        as="h1"
        className="text-3xl font-bold mb-8"
      />
      <ProjectsList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" />
      <SectionDescription descripion="Projetos" />
    </div>
  );
}
