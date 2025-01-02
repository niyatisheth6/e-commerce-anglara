import Button from "@/shared/components/button/Button";
import HeaderTitle from "@/shared/components/header-title/HeaderTitle";
import React from "react";
import ProductCard from "./ProductCard";

function FeatureProducts() {
  return (
    <div className="bg-muted">
      <div className="container py-20">
        <div className="flex justify-between flex-wrap gap-5">
          <HeaderTitle title="Feature Products" />
          <Button variant="primary">View All</Button>
        </div>
        <div className="mt-10 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}

export default FeatureProducts;
