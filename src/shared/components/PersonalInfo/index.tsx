import { personalData } from "@/shared/data/PersonalData";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "../Heading";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function PersonalInfo() {
  return (
    <div className="w-full max-w-7xl">
      <Heading
        title={personalData.name}
        as="h1"
        className="!text-6xl font-bold"
      />

      <div className="text-md text-neutral-500 space-y-1 mb-8">
        <p className="text-pink-600">{personalData.mainRole}</p>
        <p>{personalData.role}</p>
      </div>

      <div className="mb-12">
        <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          {personalData.bio}
        </p>
      </div>

      <div className="flex items-center space-x-4 mb-8">
        <div className="w-12 h-12 relative rounded-full overflow-hidden">
          <Image
            src={personalData.imageURL || "/placeholder.svg"}
            alt={personalData.name}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>

        <div className="flex space-x-3">
          <a
            href={`mailto:${personalData.email}`}
            className="text-neutral-500 hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <SiGmail size={18} />
          </a>

          <a
            href={`https://www.linkedin.com/in/${personalData.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href={`https://github.com/${personalData.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>

      <Link
        href="/projects"
        className="text-sm text-blue-500 hover:text-foreground transition-colors"
      >
        VER TODOS OS PROJETOS →
      </Link>
    </div>
  );
}
