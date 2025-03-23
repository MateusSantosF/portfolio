import { TTechnologie } from "@/features/projects/interfaces/ITechnologies";
import { TechnologiesMap } from "../../data/Technologies";
import { cloneElement } from "react";

type LanguageIconProps = {
  technologie: TTechnologie;
  size?: number;
  onlyIcon?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export function TechnologieIcon({
  technologie,
  onlyIcon = true,
  size = 22,
  ...props
}: LanguageIconProps) {
  const { icon, name } = TechnologiesMap[technologie];

  const iconWithSize = cloneElement(
    icon.source as React.ReactElement<{ size?: number }>,
    { size }
  );

  return (
    <div className="flex items-center gap-3 justify-center" {...props}>
      {iconWithSize} {!onlyIcon && name}
    </div>
  );
}
