import React from "react";

type HeadingProps = {
  title: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
};

export function Heading({ title, as = "h1", className = "" }: HeadingProps) {
  let defaultClass = "";
  switch (as) {
    case "h1":
      defaultClass = "text-4xl font-bold mb-4";
      break;
    case "h2":
      defaultClass = "text-3xl font-semibold mb-3";
      break;
    case "h3":
      defaultClass = "text-2xl font-medium mb-2";
      break;
    case "h4":
      defaultClass = "text-xl font-normal mb-2";
      break;
    case "h5":
      defaultClass = "text-lg mb-1";
      break;
    case "h6":
      defaultClass = "text-base mb-1";
      break;
    default:
      defaultClass = "";
  }

  const Component = as;

  return (
    <Component className={`${defaultClass} ${className}`}>{title}</Component>
  );
}
