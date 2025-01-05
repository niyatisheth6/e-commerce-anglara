// "use client"
import { useRouter } from "next/navigation";

import Image from "next/image";
import { Heart } from "lucide-react";

import Button from "@/shared/components/button/Button";
import productImg from "@/assets/images/product-1.png";
import StarSelected from "@/assets/icons/star-selected.svg";

import { GetProductsResponse } from "../types";

type ProductCardProps = {
  product : GetProductsResponse
}

function ProductCard({product}:ProductCardProps) {
  const router = useRouter()

  return (
    <div className="shadow-lg border border-accent-background rounded">
      <div className="relative">
        <button className="bg-white border border-muted-background absolute top-2.5 right-2.5 p-[0.6875rem] rounded-full">
          <Heart size={16} className="text-muted-background" />
        </button>
        <Image
          src={product?.image || productImg}
          alt="product"
          width={295}
          height={240}
          className="rounded-t-xl h-[15.625rem] object-contain mx-auto "
        />
        <div className="bg-white p-1 flex gap-1 items-center absolute bottom-2.5 left-2.5  text-sm leading-[16.0.0587rem] font-semibold">
          {product?.rating.rate} <StarSelected />
        </div>
      </div>
      <div className="bg-white p-5  rounded-b-xl flex  flex-col justify-between">
      <div>
      <h3 className="text-foreground font-bold text-lg leading-3.5 mb-[0.3125rem] title">
         {product?.title}
        </h3>
        <p className="text-secondary text-sm mb-4 description">
        {product?.description}
        </p>
        <div className="flex gap-2 mb-4 ">
          <span className="text-foreground text-sm font-semibold leading-2.5">
            Rs.{product?.price}
          </span>
          <span className="text-secondary text-xs leading-[0.9075rem]">
            Rs.4345
          </span>
          <span className="text-danger text-xs leading-[0.9075rem]">
            (81% off)
          </span>
        </div>
      </div>
        <Button variant="primary" className="w-full" onClick={()=>router.push("/cart")}>
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
