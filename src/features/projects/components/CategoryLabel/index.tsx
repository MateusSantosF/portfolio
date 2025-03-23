import { CategoriesMap } from "../../data/Categories";
import { TProjectCategory } from "../../interfaces/ICategory";

export function CategoryLabel({ category }: { category: TProjectCategory }) {
  const { color, label } = CategoriesMap[category];

  return (
    <span
      className={`${color}  text-xs font-medium px-2.5 py-1 rounded-full`}
    >
      {label}
    </span>
  );
}
