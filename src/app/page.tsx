import ProjectsList from "@/features/projects/components/ProjectList";
import PersonalInfo from "@/shared/components/PersonalInfo";
import { SectionDescription } from "@/shared/components/SectionDescription";
import { personalData } from "@/shared/data/PersonalData";
import { Metadata } from "next";

const PREVIEW_LIST_SIZE = 3;

export const metadata: Metadata = {
  title: `Início - ${personalData.name}`,
  description: `Bem vindo ao meu portfólio! Me chamo ${personalData.name}, atualmente trabalho como ${personalData.mainRole} na ${personalData.currentCompany}.`,
};

export default function Home() {
  return (
    <div>
      <div className="grid md:grid-cols-2 min-h-[calc(100vh-4rem)]">
        <section className="bg-white dark:bg-neutral-900 p-8 md:p-16 flex items-center">
          <PersonalInfo />
        </section>
        <section className="bg-neutral-100 dark:bg-black p-8 md:p-16 flex flex-col justify-center">
          <SectionDescription descripion="Projetos" />
          <ProjectsList
            onlyHighlighted
            className="grid grid-cols-1 gap-6"
            maxProjects={PREVIEW_LIST_SIZE}
          />
          <SectionDescription descripion="Projetos" />
        </section>
      </div>
    </div>
  );
}
