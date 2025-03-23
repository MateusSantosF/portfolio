import type { ReactNode } from "react";
import { TTechnologie } from "./ITechnologies";
import { TProjectCategory } from "./ICategory";



export interface IProject {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: TProjectCategory;
  url?: string;
  github?: string;
  isInternal?: boolean;
  company?: {
    name: string;
    url: string;
    icon?: ReactNode;
  };
  role?: string;
  images: {
    title: string;
    url: string;
  }[];
  isHighlighted?: boolean;
  technologies: TTechnologie[];
  period: string;
  contributions?: string[]
  challenges?: string
  solutions?: string
}
