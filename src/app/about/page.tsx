import { Metadata } from "next";
import { personalData } from "@/shared/data/PersonalData";

export const metadata: Metadata = {
  title: `Sobre - ${personalData.name}`,
  description: personalData.bio,
  keywords: personalData.SEOKeywords,
};

const JOBS = [
  {
    period: "out 2024 — presente",
    company: "BNP Soluções em TI",
    role: "Tech Lead",
    text: "Referência técnica entre desenvolvimento e negócio: definição de arquitetura, code review, mentoria e cultura de aprendizado contínuo. Coordeno um time de 7 pessoas em 5 frentes simultâneas — DirectLuz, FaceGuard, Agenda Viva SP, Vitrine de Projetos e produtos internos.",
  },
  {
    period: "set 2023 — out 2024",
    company: "BNP Soluções em TI",
    role: "Desenvolvedor Full Stack",
    text: "Aplicações web, APIs REST, chatbots com IA e ferramentas internas. Bancos SQL e NoSQL, GitFlow e Trunk Based Development com commits semânticos, documentação em Swagger e gestão em Azure DevOps.",
  },
  {
    period: "mar 2022 — set 2023",
    company: "Take Blip",
    role: "Chatbot Developer · estágio",
    text: "Fluxos de diálogo e integrações com APIs de terceiros, análise de código com SonarQube, aplicações em containers no Kubernetes em desenvolvimento, homologação e produção.",
  },
];

const EDUCATION = [
  { course: "Ciência da Computação — IFSP", period: "2020—2023" },
  { course: "Técnico em Informática — ETEC", period: "2017—2019" },
];

const SKILLS = [
  "Arquitetura de software",
  "Sistemas distribuídos de alta volumetria",
  "IA aplicada e RAG",
  "Observabilidade (OpenTelemetry, Grafana)",
  "Cloud e DevOps (Azure, Docker, CI/CD)",
  "Liderança técnica e mentoria",
];

const CERTIFICATIONS =
  "SQL para Desenvolvedores · Data Driven – Cultura · Modelagem de Domínios Ricos · Problem Solving";

export default function About() {
  return (
    <div className="animate-fade gutter pb-[clamp(64px,12vh,120px)] pt-[clamp(40px,8vh,96px)]">
      {/* Intro */}
      <div className="flex max-w-[40em] flex-col gap-5">
        <p className="font-mono text-xs text-ink-faint">Sobre</p>
        <h1 className="text-[clamp(30px,6vw,46px)] font-medium leading-[1.1] tracking-[-0.035em]">
          Liderança técnica com mão no código
        </h1>
        <p className="text-[clamp(16px,2.3vw,18px)] leading-[1.7] text-ink-body">
          Comecei em fluxos de chatbot como estagiário na Take Blip, entrei na{" "}
          {personalData.currentCompany} como desenvolvedor full stack e assumi a
          liderança técnica em pouco mais de um ano. Formado em Ciência da
          Computação pelo IFSP, com base técnica na ETEC.
        </p>
        <p className="text-[clamp(16px,2.3vw,18px)] leading-[1.7] text-ink-body">
          Hoje coordeno projetos que combinam tecnologia e impacto no setor
          público: traduzo demanda de negócio em arquitetura, faço code review e
          mentoria, e continuo escrevendo o código que sustenta as decisões que
          tomo.
        </p>
        <div className="mt-1.5 flex flex-wrap gap-2.5">
          <a
            href={`https://www.linkedin.com/in/${personalData.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-control bg-ink px-5 py-3 text-[15px] font-medium text-white transition-colors hover:bg-accent"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalData.email}`}
            className="rounded-control border border-rule-strong px-5 py-3 text-[15px] font-medium text-ink transition-colors hover:border-ink"
          >
            E-mail
          </a>
        </div>
      </div>

      {/* Experiência */}
      <h2 className="mb-2 mt-[clamp(40px,8vw,72px)] font-mono text-[11px] font-normal text-ink-faint">
        Experiência
      </h2>
      {JOBS.map((job) => (
        <div
          key={`${job.company}-${job.role}`}
          className="grid gap-y-2 gap-x-[clamp(24px,4vw,56px)] border-t border-rule py-[clamp(22px,4vw,30px)] [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]"
        >
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs text-ink-faint">
              {job.period}
            </span>
            <span className="text-sm text-ink-soft">{job.company}</span>
          </div>
          <div className="flex max-w-[44em] flex-col gap-2.5 [grid-column:span_2]">
            <h3 className="text-[clamp(18px,2.6vw,21px)] font-medium tracking-[-0.02em]">
              {job.role}
            </h3>
            <p className="text-[15px] leading-[1.7] text-ink-muted">
              {job.text}
            </p>
          </div>
        </div>
      ))}
      <div className="border-t border-rule" />

      {/* Formação, competências e certificações */}
      <div className="mt-[clamp(40px,8vw,72px)] grid gap-[clamp(28px,5vw,56px)] [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
        <section className="flex flex-col gap-2.5">
          <h2 className="font-mono text-[11px] font-normal text-ink-faint">
            Formação
          </h2>
          {EDUCATION.map((item) => (
            <div key={item.course}>
              <p className="text-base">{item.course}</p>
              <p className="text-sm text-ink-faint">{item.period}</p>
            </div>
          ))}
        </section>

        <section className="flex flex-col gap-2.5">
          <h2 className="font-mono text-[11px] font-normal text-ink-faint">
            Competências
          </h2>
          {SKILLS.map((skill) => (
            <p key={skill} className="text-[15px] text-ink-body">
              {skill}
            </p>
          ))}
        </section>

        <section className="flex flex-col gap-2.5">
          <h2 className="font-mono text-[11px] font-normal text-ink-faint">
            Certificações
          </h2>
          <p className="text-[15px] leading-[1.8] text-ink-body">
            {CERTIFICATIONS}
          </p>
        </section>
      </div>
    </div>
  );
}
