import Image from "next/image";
import productImg from "@/assets/images/product-1.png";
import Button from "@/shared/components/button/Button";
import StarSelected from "@/assets/icons/star-selected.svg";
import { Heart } from "lucide-react";

function ProductCard() {
  return (
    <div className="shadow-lg">
      <div className="relative">
        <button className="bg-white border border-muted-background absolute top-2.5 right-2.5 p-[0.6875rem] rounded-full">
          <Heart size={16} className="text-muted-background" />
        </button>
        <Image
          src={productImg}
          alt="product"
          className="rounded-t-xl max-h-[15.625rem] "
        />
        <div className="bg-white p-1 flex gap-1 items-center absolute bottom-2.5 left-2.5 rounded text-sm leading-[16.0.0587rem] font-semibold">
          4.2 <StarSelected />
        </div>
      </div>
      <div className="bg-white p-5 border border-accent-background rounded-b-xl">
        <h3 className="text-foreground font-bold text-lg leading-[1.3613rem] mb-[0.3125rem]">
          Product Title
        </h3>
        <p className="text-secondary text-sm mb-4">
          Lorem ipsum dolor sit amet consecte tur. Ut vel magnis turpis
          malesuada.
        </p>
        <div className="flex gap-2 mb-4 ">
          <span className="text-foreground text-sm font-semibold leading-[1.0588rem]">
            Rs.825
          </span>
          <span className="text-secondary text-xs leading-[0.9075rem]">
            Rs.4345
          </span>
          <span className="text-danger text-xs leading-[0.9075rem]">
            (81% off)
          </span>
        </div>
        <Button variant="primary" className="w-full">
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
