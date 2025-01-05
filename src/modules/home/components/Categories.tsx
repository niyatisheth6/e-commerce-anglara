import HeaderTitle from "@/shared/components/header-title/HeaderTitle";
import { categoriesData } from "@/shared/helpers/data/categoriesData";

function Categories() {
  return (
    <div className="container lg:py-20 py-10">
      <HeaderTitle title="Categories" />
      <div className="mt-[3.75rem] grid lg:grid-cols-8 sm:grid-cols-4  grid-cols-2  gap-5 ">
        {categoriesData.map((category, index) => (
          <a
            key={index}
            // href={`/category/${category.label.toLowerCase()}`}
            href="#"
            className="flex flex-col items-center gap-5"
          >
            <div className="p-5 bg-accent rounded-full">{category.icon}</div>
            <span className="font-bold text-base text-foreground">
              {category.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Categories;
