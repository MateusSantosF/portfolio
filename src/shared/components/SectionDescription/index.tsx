import React from "react";

type SectionDescriptionProps = {
  descripion: string;
} & React.HTMLAttributes<HTMLDivElement>;
export function SectionDescription({
  descripion,
  ...props
}: SectionDescriptionProps) {
  return (
    <div {...props} className="my-2 text-sm text-neutral-500">
      &lt;{descripion}&gt;
    </div>
  );
}
