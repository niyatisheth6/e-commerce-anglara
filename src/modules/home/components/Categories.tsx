import HeaderTitle from "@/shared/components/header-title/HeaderTitle";
import React from "react";
import Men from "@/assets/icons/men.svg";
import Women from "@/assets/icons/women.svg";
import Kids from "@/assets/icons/kids.svg";
import Cosmetics from "@/assets/icons/Cosmetics.svg";
import Accessories from "@/assets/icons/Accessories.svg";
import Home from "@/assets/icons/Home.svg";
import Footwears from "@/assets/icons/Footwears.svg";
import Sports from "@/assets/icons/Sports.svg";

const categories = [
  {
    icon: <Men />,
    label: "Men",
  },
  {
    icon: <Women />,
    label: "Women",
  },
  {
    icon: <Kids />,
    label: "Kids",
  },
  {
    icon: <Cosmetics />,
    label: "Cosmetics",
  },
  {
    icon: <Accessories />,
    label: "Accessories",
  },
  {
    icon: <Home />,
    label: "Home",
  },
  {
    icon: <Footwears />,
    label: "Footwear",
  },
  {
    icon: <Sports />,
    label: "Sports",
  },
];

function Categories() {
  return (
    <div className="container py-20">
      <HeaderTitle title="Categories" />
      <div className="mt-[3.75rem] grid lg:grid-cols-8 sm:grid-cols-4  grid-cols-2  gap-5 ">
        {categories.map((category, index) => (
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
