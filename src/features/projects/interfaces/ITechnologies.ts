export type TTechnologie =
  | "NEXTJS"
  | "WEBPACK"
  | "REACT"
  | "SHADCNUI"
  | "TAILWIND"
  | "TYPESCRIPT"
  | "PYTHON"
  | "SQLSERVER"
  | ".NET"
  | "MONGODB"
  | "NODEJS"
  | "PRISMA"
  | "JAVASCRIPT"
  | "HTML"
  | "CSS"
  | "PRISMA"
  | "DOCKER"
  | "FASTAPI"
  | "AZFUNCTIONS";

export type TTechnologieIcon = {
  icon: {
    source: React.ReactElement;
    alt: string;
  };
  url: string;
  name: string;
};
