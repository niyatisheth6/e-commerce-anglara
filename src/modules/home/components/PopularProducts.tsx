import Button from "@/shared/components/button/Button";
import HeaderTitle from "@/shared/components/header-title/HeaderTitle";
import React from "react";
import ProductCard from "./ProductCard";

function PopularProducts() {
  return (
    <div className="container py-20">
      <div className="flex justify-between flex-wrap gap-5">
        <HeaderTitle title="Most Popular Products" />
        <Button variant="primary">View All</Button>
      </div>
      <div className="mt-10 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default PopularProducts;
