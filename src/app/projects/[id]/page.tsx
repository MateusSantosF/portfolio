import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Globe,
  Github,
  Briefcase,
  Calendar,
  LightbulbIcon,
  WrenchIcon,
  CheckCircle,
  Building2,
} from "lucide-react";
import { projects } from "@/shared/data/Projects";
import { Metadata, ResolvingMetadata } from "next";
import { TechnologieIcon } from "@/features/projects/components/TechnologieIcon";
import { IProject } from "@/features/projects/interfaces/IProject";
import { personalData } from "@/shared/data/PersonalData";
import { CategoryLabel } from "@/features/projects/components/CategoryLabel";

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
    return {
      title: "Projeto não encontrado",
    };
  }
  const imagesUrl = project.images.map((image) => image.url);
  return {
    title: project.name,
    description: project.shortDescription,
    keywords: personalData.SEOKeywords.concat(project.technologies)
      .concat(project.category)
      .concat(project.name),
    openGraph: {
      images: imagesUrl,
    },
  };
}

export default async function ProjectDetails({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-4">Projeto não encontrado</h2>
          <Link
            href="/projects"
            className="text-sm text-neutral-500 hover:text-foreground flex items-center justify-center gap-2"
          >
            <ArrowLeft size={16} />
            Voltar para projetos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <Link
        href="/projects"
        className="text-sm text-neutral-500 hover:text-foreground flex items-center gap-2 mb-8"
      >
        <ArrowLeft size={16} />
        Voltar para projetos
      </Link>

      {/* Cabeçalho do Projeto */}
      <div className="mb-8">
        <div className="flex justify-between gap-6 items-start flex-wrap lg:flex-nowrap">
          <div className="flex  flex-wrap-reverse items-center gap-3 mb-4">
            <h1 className="text-3xl font-bold">{project.name}</h1>
            {project.category && (
              <span className="text-xs  border border-neutral-200 dark:border-neutral-800 px-2 py-1">
                <CategoryLabel category={project.category} />
              </span>
            )}
            {project.isInternal && (
              <span className="text-xs bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 px-2 py-1">
                Projeto Interno
              </span>
            )}
          </div>
          <div className="flex justify-center w-full lg:w-fit">
            {/* Links externos */}
            {!project.isInternal && (
              <div className="flex flex-wrap gap-4 mb-10">
                {project.url && project.url !== "#" && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-neutral-200 dark:border-neutral-800 px-4 py-2 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors rounded-md"
                  >
                    <Globe size={16} />
                    <span className="text-sm">Visitar site</span>
                  </a>
                )}

                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border border-neutral-200 dark:border-neutral-800 px-4 py-2 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors rounded-md"
                  >
                    <Github size={16} />
                    <span className="text-sm">Ver código</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        <p className="text-neutral-600 dark:text-neutral-400">
          {project.shortDescription}
        </p>
      </div>

      {/* Seção: Meu Papel no Projeto */}
      <section className="mb-10 border border-neutral-200 dark:border-neutral-800 rounded-md overflow-hidden">
        <div className="bg-neutral-50 dark:bg-neutral-800 px-6 py-3 border-b border-neutral-200 dark:border-neutral-700">
          <h2 className="font-bold">Meu Papel no Projeto</h2>
        </div>

        <div className="p-6 bg-white dark:bg-neutral-900">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Empresa */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded-full shrink-0">
                <Building2 className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h3 className="font-medium text-sm text-neutral-500">
                  Empresa
                </h3>
                {project.company?.url !== "#" ? (
                  <a
                    href={project.company?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:underline"
                  >
                    {project.company?.name}
                  </a>
                ) : (
                  <span className="text-foreground">
                    {project.company?.name}
                  </span>
                )}
              </div>
            </div>

            {/* Cargo */}
            {project.role && (
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded-full shrink-0">
                  <Briefcase className="w-5 h-5 text-neutral-500" />
                </div>
                <div>
                  <h3 className="font-medium text-sm text-neutral-500">
                    Cargo
                  </h3>
                  <span className="text-foreground">{project.role}</span>
                </div>
              </div>
            )}

            {/* Período */}
            {project.period && (
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded-full shrink-0">
                  <Calendar className="w-5 h-5 text-neutral-500" />
                </div>
                <div>
                  <h3 className="font-medium text-sm text-neutral-500">
                    Período
                  </h3>
                  <span className="text-foreground">{project.period}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Seção: Resumo do Projeto */}
      <section className="mb-10 border border-neutral-200 dark:border-neutral-800 rounded-md overflow-hidden">
        <div className="bg-neutral-50 dark:bg-neutral-800 px-6 py-3 border-b border-neutral-200 dark:border-neutral-700">
          <h2 className="font-bold">Resumo do Projeto</h2>
        </div>

        <div className="p-6 bg-white dark:bg-neutral-900">
          {project.isInternal ? (
            <div className="space-y-4">
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {project.fullDescription}
              </p>
              <div className="p-4 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-900 rounded-md">
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  Este é um projeto interno por isso suas informações são
                  limitadas. Para mais detalhes, entre em contato diretamente
                  com a empresa responsável.
                </p>
              </div>
            </div>
          ) : (
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {project.fullDescription}
            </p>
          )}
        </div>
      </section>

      {/* Seção: Minhas Contribuições */}
      {project.contributions && project.contributions.length > 0 && (
        <section className="mb-10 border border-neutral-200 dark:border-neutral-800 rounded-md overflow-hidden">
          <div className="bg-neutral-50 dark:bg-neutral-800 px-6 py-3 border-b border-neutral-200 dark:border-neutral-700">
            <h2 className="font-bold">Minhas Contribuições</h2>
          </div>

          <div className="p-6 bg-white dark:bg-neutral-900">
            <ul className="space-y-3">
              {project.contributions.map((contribution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-neutral-600 dark:text-neutral-400">
                    {contribution}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Seção: Desafios e Soluções */}
      {(project.challenges || project.solutions) && (
        <section className="mb-10 border border-neutral-200 dark:border-neutral-800 rounded-md overflow-hidden">
          <div className="bg-neutral-50 dark:bg-neutral-800 px-6 py-3 border-b border-neutral-200 dark:border-neutral-700">
            <h2 className="font-bold">Desafios e Soluções</h2>
          </div>

          <div className="p-6 bg-white dark:bg-neutral-900">
            <div className="grid md:grid-cols-2 gap-6">
              {project.challenges && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <LightbulbIcon className="w-5 h-5 text-amber-500" />
                    <h3 className="font-medium">Desafios</h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              )}

              {project.solutions && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <WrenchIcon className="w-5 h-5 text-blue-500" />
                    <h3 className="font-medium">Soluções</h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                    {project.solutions}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Seção: Tecnologias e Ferramentas */}
      <section className="mb-10 border border-neutral-200 dark:border-neutral-800 rounded-md overflow-hidden">
        <div className="bg-neutral-50 dark:bg-neutral-800 px-6 py-3 border-b border-neutral-200 dark:border-neutral-700">
          <h2 className="font-bold">Tecnologias e Ferramentas</h2>
        </div>

        <div className="p-6 bg-white dark:bg-neutral-900">
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <TechnologieIcon
                onlyIcon={false}
                size={34}
                key={index}
                technologie={tech}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Seção: Galeria de Imagens */}
      <section className="mb-10 border border-neutral-200 dark:border-neutral-800 rounded-md overflow-hidden">
        <div className="bg-neutral-50 dark:bg-neutral-800 px-6 flex justify-between flex-wrap lg:flex-nowrap py-3 border-b border-neutral-200 dark:border-neutral-700">
          <h2 className="font-bold">Galeria de Imagens</h2>
          {project.isInternal && (
            <span className="text-xs bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 px-2 py-1">
              Projeto Interno
            </span>
          )}
        </div>

        <div className="p-6 bg-white dark:bg-neutral-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="border border-neutral-200 dark:border-neutral-800 rounded-md overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={image.url}
                    alt={image.title}
                    width={500}
                    height={300}
                    className="w-full max-h-[300px] object-cover object-top"
                  />
                  {project.isInternal && (
                    <div className="absolute inset-0 bg-neutral-900/50 flex items-center justify-center">
                      <span className="text-white px-3 py-1 bg-neutral-900/70 text-sm rounded-md">
                        Visualização limitada
                      </span>
                    </div>
                  )}
                </div>
                <p className="p-4 text-sm text-center">{image.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
