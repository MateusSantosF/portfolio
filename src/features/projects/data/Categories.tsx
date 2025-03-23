import {
  TProjectCategory,
  TProjectCategoryLabel,
} from "../interfaces/ICategory";

export const CategoriesMap: Record<TProjectCategory, TProjectCategoryLabel> = {
  AI: {
    label: "IA",
    color: "text-red-600",
  },
  API: {
    label: "API",
    color: "text-blue-600",
  },
  LIBRARY: {
    label: "Biblioteca",
    color: "text-yellow-600",
  },
  MOBILE: {
    label: "Mobile",
    color: "text-green-600",
  },
  PACKAGE: {
    label: "Pacote",
    color: "text-indigo-600",
  },
  PLATAFORM: {
    label: "Plataforma",
    color: "text-pink-600",
  },
  PLUGIN: {
    label: "Plugin",
    color: "text-gray-600",
  },
  WEBISTE: {
    label: "Website",
    color: "text-blue-600",
  },
};
