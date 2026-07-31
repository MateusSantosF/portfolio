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
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiStrapi,
  SiGrafana,
  SiOpentelemetry,
  SiMqtt,
} from "react-icons/si";
import { TbBrandCSharp, TbBrandReactNative, TbBrandAzure } from "react-icons/tb";
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
  PHP: {
    icon: {
      source: <SiPhp size={18} className="text-indigo-500" />,
      alt: "PHP",
    },
    url: "https://www.php.net/",
    name: "PHP",
  },
  REACTNATIVE: {
    icon: {
      source: <TbBrandReactNative size={18} className="text-blue-400" />,
      alt: "React Native",
    },
    url: "https://reactnative.dev/",
    name: "React Native",
  },
  POSTGRESQL: {
    icon: {
      source: <SiPostgresql size={18} className="text-blue-700" />,
      alt: "PostgreSQL",
    },
    url: "https://www.postgresql.org/",
    name: "PostgreSQL",
  },
  MYSQL: {
    icon: {
      source: <SiMysql size={18} className="text-sky-700" />,
      alt: "MySQL",
    },
    url: "https://www.mysql.com/",
    name: "MySQL",
  },
  STRAPI: {
    icon: {
      source: <SiStrapi size={18} className="text-violet-600" />,
      alt: "Strapi",
    },
    url: "https://strapi.io/",
    name: "Strapi",
  },
  GRAFANA: {
    icon: {
      source: <SiGrafana size={18} className="text-orange-500" />,
      alt: "Grafana",
    },
    url: "https://grafana.com/",
    name: "Grafana",
  },
  OPENTELEMETRY: {
    icon: {
      source: <SiOpentelemetry size={18} className="text-indigo-400" />,
      alt: "OpenTelemetry",
    },
    url: "https://opentelemetry.io/",
    name: "OpenTelemetry",
  },
  MQTT: {
    icon: {
      source: <SiMqtt size={18} className="text-fuchsia-600" />,
      alt: "MQTT",
    },
    url: "https://mqtt.org/",
    name: "MQTT",
  },
  AZURE: {
    icon: {
      source: <TbBrandAzure size={18} className="text-blue-500" />,
      alt: "Microsoft Azure",
    },
    url: "https://azure.microsoft.com/",
    name: "Azure",
  },
};
