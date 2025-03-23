import Link from "next/link";
import { personalData } from "@/shared/data/PersonalData";
import { SectionDescription } from "@/shared/components/SectionDescription";
import { Heading } from "@/shared/components/Heading";
import type { Metadata } from "next";
import { GoArrowLeft } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdOutlineSimCardDownload } from "react-icons/md";

export const metadata: Metadata = {
  title: `Sobre Mim - ${personalData.name}`,
  description: `Conheça mais sobre ${personalData.name}, ${personalData.mainRole} na ${personalData.currentCompany}.`,
  keywords: personalData.SEOKeywords,
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <Link
        href="/"
        className="text-sm text-neutral-500 hover:text-foreground flex items-center gap-2 mb-8"
      >
        <GoArrowLeft size={16} />
        Voltar para o início
      </Link>

      <SectionDescription descripion="SobreMim" />

      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
        <div>
          <Heading
            title={personalData.name}
            as="h1"
            className="text-3xl font-bold"
          />
          <p className="text-xl text-neutral-500 mb-6">
           {personalData.mainRole} | {personalData.mainTechStack.join(" | ")}
          </p>

          <div className="flex flex-col gap-2 mb-6">
            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <SiGmail size={16} className="text-neutral-500" />
              <a
                className="hover:text-foreground transition-colors"
                href={`mailto:${personalData.email}`}
              >
                {personalData.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <FaLinkedin size={16} className="text-neutral-500" />
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                linkedin.com/in/{personalData.linkedin}
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <FaGithub size={16} className="text-neutral-500" />
              <a
                href={`https://github.com/${personalData.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                github.com/{personalData.github}
              </a>
            </div>
          </div>
        </div>

        <a
          href="/assets/cv-mateus-ferreira.pdf"
          download
          className="flex items-center gap-2 border border-neutral-200 dark:border-neutral-800 px-4 py-3 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
        >
          <MdOutlineSimCardDownload size={16} />
          <span className="text-sm">Baixar Currículo</span>
        </a>
      </div>

      <section className="mb-12 border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
        <h2 className="text-xl font-bold mb-4">Resumo</h2>
        <div className="text-sm text-neutral-600 dark:text-neutral-400 space-y-4">
          <p>
            Atuo como Líder Técnico na BNP Soluções em TI, liderando projetos
            estratégicos que combinam tecnologia, inovação e impacto no setor
            cultural do Estado de São Paulo. Minha experiência une liderança
            técnica e prática no desenvolvimento de sistemas escaláveis e
            soluções de inteligência artificial.
          </p>
          <p>Minhas principais contribuições incluem:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Liderança Técnica:</strong> Coordeno equipes para adoção
              de boas práticas, entregas estratégicas e fortalecimento da
              cultura de aprendizado contínuo.
            </li>
            <li>
              <strong>Code Reviews e Mentoria:</strong> Realizo revisões de
              código detalhadas e capacito desenvolvedores para elevar a
              qualidade técnica dos projetos.
            </li>
            <li>
              <strong>Tradução de Requisitos:</strong> Transformo demandas de
              negócios em soluções tecnológicas intuitivas e escaláveis.
            </li>
            <li>
              <strong>Desenvolvimento de Sistemas:</strong> Experiência com
              tecnologias modernas como Next.js, C# (.NET), Azure Functions,
              FastAPI, MongoDB e TypeScript.
            </li>
            <li>
              <strong>Inteligência Artificial:</strong> Desenvolvimento de
              chatbots com IA integrados a dados geolocalizados e ferramentas
              como Azure Cognitive Search, otimizando processos e melhorando
              experiências.
            </li>
            <li>
              <strong>Métricas Avançadas:</strong> Implementação de análises com
              Google Analytics e Clarity, gerando insights valiosos sobre uso e
              comportamento.
            </li>
            <li>
              <strong>Projetos Internos:</strong> Liderança em iniciativas para
              melhorias internas da empresa.
            </li>
          </ul>
          <p>
            Sou movido por desafios e inovação contínua. Meu foco está em criar
            soluções que conectem pessoas e negócios de forma eficiente e
            transformadora.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold mb-6">Experiência Profissional</h2>

        <div className="space-y-8">
          <div className="border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold">Líder Técnico</h3>
                <p className="text-neutral-500">BNP - Soluções em TI</p>
              </div>
              <p className="text-sm text-neutral-500">
                out de 2024 - Presente (6 meses)
              </p>
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400 space-y-4">
              <p className="font-medium">Liderança Técnica</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Code Reviews: Revisões detalhadas para garantir qualidade,
                  consistência e aderência às melhores práticas.
                </li>
                <li>
                  Referência Técnica: Ponto central entre desenvolvimento e
                  negócios, alinhando objetivos estratégicos e soluções
                  tecnológicas.
                </li>
                <li>
                  Cultura Organizacional: Estímulo à colaboração, aprendizado
                  contínuo e troca de conhecimento.
                </li>
                <li>
                  Mentoria: Formação e capacitação de desenvolvedores,
                  promovendo práticas eficientes no dia a dia.
                </li>
              </ul>

              <p className="font-medium mt-4">Desenvolvimento de Projetos</p>
              <p className="font-medium">Agenda Viva SP</p>
              <p>
                Plataforma colaborativa que conecta cidadãos à diversidade
                cultural do Estado de São Paulo.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Liderança técnica e participação em reuniões de requisitos com
                  clientes.
                </li>
                <li>
                  Desenvolvimento completo das áreas pública e administrativa.
                </li>
                <li>
                  Criação de um guia turístico com IA para recomendar eventos
                  culturais baseados em geolização e outros critérios dinâmicos.
                </li>
              </ul>

              <p className="font-medium mt-4">Inteligência Artificial</p>
              <p>
                Tech Lead em soluções de IA para o ProAC Editais e ICMS, além de
                outros projetos da empresa.
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Mentoria de IA para diferentes clientes e equipes.</li>
                <li>Desenvolvimento de chatbots inteligentes.</li>
                <li>
                  Automação de análises de documentos e tarefas cotidianas.
                </li>
              </ul>

              <p className="font-medium mt-4">Projetos Internos</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  SPOT: Plataforma centralizadora de documentação corporativa,
                  garantindo acessibilidade e atualização contínua.
                </li>
                <li>
                  Milvus Widget: Widget que integra o suporte da BNP a qualquer
                  plataforma web, facilitando aberturas de chamados pelos
                  usuários.
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold">
                  Full Stack Mid Level Developer
                </h3>
                <p className="text-neutral-500">BNP - Soluções em TI</p>
              </div>
              <p className="text-sm text-neutral-500">
                set de 2023 - out de 2024 (1 ano 2 meses)
              </p>
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              <ul className="list-disc pl-6 space-y-1">
                <li>Desenvolvimento de aplicações Web.</li>
                <li>Desenvolvimento de Chatbots com IA.</li>
                <li>Desenvolvimento de APIs REST.</li>
                <li>Desenvolvimento de ferramentas internas.</li>
                <li>Gerenciamento de bancos de dados SQL e NoSQL.</li>
                <li>
                  Versionamento de código com GitFlow e Trunked Based aplicando
                  a convenção de commits semânticos.
                </li>
                <li>Documentação técnica de projetos utilizando Swagger.</li>
                <li>
                  Gerenciamento de projetos utilizando Azure DevOps, incluindo
                  pipelines, builds, releases, issues e PRs.
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold">
                  Estagiário de Chatbot Developer
                </h3>
                <p className="text-neutral-500">Take Blip</p>
              </div>
              <p className="text-sm text-neutral-500">
                mar de 2022 - set de 2023 (1 ano 7 meses)
              </p>
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Implementação e análise de conteúdo e fluxos de diálogos em
                  Chatbots.
                </li>
                <li>
                  Criação de APIs REST com foco em integrações com APIs
                  terceiras.
                </li>
                <li>
                  Versionamento de código com GitFlow, aplicando a convenção de
                  commits semânticos.
                </li>
                <li>
                  Habilidade no gerenciamento de projetos utilizando Azure
                  DevOps, incluindo pipelines, builds, releases, issues e PRs.
                </li>
                <li>
                  Utilização do SonarQube para análise de código, cobertura de
                  testes e análise de dependências.
                </li>
                <li>
                  Uso do Kubernetes para gerenciamento de aplicações em
                  containers (pods, services e deployments), disponibilizando em
                  ambientes de prod, hmg e dev.
                </li>
                <li>
                  Elaboração de relatórios pós-desenvolvimento, relatórios de
                  testes e acompanhamento da evolução do projeto.
                </li>
                <li>Documentação técnica de projetos utilizando Swagger.</li>
                <li>
                  Manutenção e desenvolvimento de novas funcionalidades
                  utilizando metodologias ágeis (Scrum e Kanban).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <section>
          <h2 className="text-xl font-bold mb-6">Formação Acadêmica</h2>
          <div className="space-y-6">
            <div className="border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
              <h3 className="text-lg font-bold">
                Bacharelado em Ciência da Computação
              </h3>
              <p className="text-neutral-500 mb-2">
                Instituto Federal de Educação, Ciência e Tecnologia de São Paulo
                - IFSP
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                2020 - 2023
              </p>
            </div>

            <div className="border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
              <h3 className="text-lg font-bold">
                Ensino Técnico em Informática
              </h3>
              <p className="text-neutral-500 mb-2">
                ETEC - Escola Técnica Estadual de São Paulo
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                2017 - 2018
              </p>
            </div>

            <div className="border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
              <h3 className="text-lg font-bold">
                Técnico em Informática para Internet
              </h3>
              <p className="text-neutral-500 mb-2">ETEC Parque Belém</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                2019
              </p>
            </div>
          </div>
        </section>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-6">Principais Competências</h2>
            <div className="border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
              <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>Gestão de equipes</li>
                <li>Azure Services</li>
                <li>Arquitetura de Software</li>
                <li>Inteligência Artificial</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-6">Certificações</h2>
            <div className="border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-900">
              <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                <li>SQL para Desenvolvedores</li>
                <li>Data Driven – Cultura</li>
                <li>Modelagem de Domínios Ricos</li>
                <li>Problem Solving (Basic)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>

      <SectionDescription descripion="SobreMim" />
    </div>
  );
}
