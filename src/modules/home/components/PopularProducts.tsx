"use client";

import { useQuery } from "@tanstack/react-query";

import Button from "@/shared/components/button/Button";
import HeaderTitle from "@/shared/components/header-title/HeaderTitle";
import Loader from "@/shared/components/loader/Loader";

import { getProducts } from "../api";
import { GetProductsResponse } from "../types";
import ProductCard from "./ProductCard";

function PopularProducts() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <div className="bg-muted">
      <div className="container lg:py-20 py-10">
        <div className="flex justify-between flex-wrap gap-5">
          <HeaderTitle title="Most Popular Products" />
          <Button variant="primary">View All</Button>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="mt-10 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {data?.slice(5, 13).map((product: GetProductsResponse) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PopularProducts;
