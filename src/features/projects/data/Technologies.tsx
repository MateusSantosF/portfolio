import {
  SiReact,
  SiNextdotjs,
  SiPrisma,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiAwslambda as SiAzurefunctions,
  SiPython,
  SiTailwindcss,
  SiWebpack,
  SiShadcnui,
  SiDocker,
  SiFastapi,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";

import { TTechnologie, TTechnologieIcon } from "../interfaces/ITechnologies";

export const TechnologiesMap: Record<TTechnologie, TTechnologieIcon> = {
  REACT: {
    icon: {
      source: <SiReact size={18} className="text-blue-400" />,
      alt: "React",
    },
    url: "https://reactjs.org/",
    name: "React",
  },
  ".NET": {
    icon: {
      source: <TbBrandCSharp size={18} className="text-purple-700" />,
      alt: ".NET",
    },
    url: "https://dotnet.microsoft.com/",
    name: ".NET",
  },
  NEXTJS: {
    icon: {
      source: <SiNextdotjs size={18} className="text-black dark:text-white" />,
      alt: "NextJS",
    },
    url: "https://nextjs.org/",
    name: "Next",
  },
  SQLSERVER: {
    icon: {
      source: <DiMsqlServer size={18} className="text-red-600" />,
      alt: "SQL Server",
    },
    url: "https://www.microsoft.com/pt-br/sql-server",
    name: "SQL Server",
  },
  PRISMA: {
    icon: {
      source: <SiPrisma size={18} className="text-purple-500" />,
      alt: "Prisma",
    },
    url: "https://www.prisma.io/",
    name: "Prisma",
  },
  MONGODB: {
    icon: {
      source: <SiMongodb size={18} className="text-green-600" />,
      alt: "MongoDB",
    },
    url: "https://www.mongodb.com/",
    name: "MongoDB",
  },
  JAVASCRIPT: {
    icon: {
      source: <SiJavascript size={18} className="text-yellow-400" />,
      alt: "JavaScript",
    },
    url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    name: "JavaScript",
  },
  TYPESCRIPT: {
    icon: {
      source: <SiTypescript size={18} className="text-blue-600" />,
      alt: "TypeScript",
    },
    url: "https://www.typescriptlang.org/",
    name: "TypeScript",
  },
  HTML: {
    icon: {
      source: <SiHtml5 size={18} className="text-red-400" />,
      alt: "HTML",
    },
    url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    name: "HTML",
  },
  CSS: {
    icon: {
      source: <SiCss3 size={18} className="text-blue-400" />,
      alt: "CSS",
    },
    url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    name: "CSS",
  },
  NODEJS: {
    icon: {
      source: <SiNodedotjs size={18} className="text-green-600" />,
      alt: "NodeJS",
    },
    url: "https://nodejs.org/en/",
    name: "NodeJS",
  },
  AZFUNCTIONS: {
    icon: {
      source: <SiAzurefunctions size={18} className="text-blue-600" />,
      alt: "Azure Functions",
    },
    url: "https://azure.microsoft.com/pt-br/services/functions/",
    name: "Azure Functions",
  },
  PYTHON: {
    icon: {
      source: <SiPython size={18} className="text-yellow-600" />,
      alt: "Python",
    },
    url: "https://www.python.org/",
    name: "Python",
  },
  SHADCNUI: {
    icon: {
      source: <SiShadcnui size={18} className="text-black" />,
      alt: "ShadcnUI",
    },
    url: "https://shadowui.com/",
    name: "ShadcnUI",
  },
  TAILWIND: {
    icon: {
      source: <SiTailwindcss size={18} className="text-blue-500" />,
      alt: "TailwindCSS",
    },
    url: "https://tailwindcss.com/",
    name: "TailwindCSS",
  },
  WEBPACK: {
    icon: {
      source: <SiWebpack size={18} className="text-blue-600" />,
      alt: "Webpack",
    },
    url: "https://webpack.js.org/",
    name: "Webpack",
  },
  DOCKER: {
    icon: {
      source: <SiDocker size={18} className="text-blue-600" />,
      alt: "Docker",
    },
    url: "https://www.docker.com/",
    name: "Docker",
  },
  FASTAPI: {
    icon: {
      source: <SiFastapi size={18} className="text-green-600" />,
      alt: "FastAPI",
    },
    url: "https://fastapi.tiangolo.com/",
    name: "FastAPI",
  },
};
