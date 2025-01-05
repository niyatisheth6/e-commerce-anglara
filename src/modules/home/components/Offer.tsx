"use client";
import Image from "next/image";

import Button from "@/shared/components/button/Button";
import Girls from "@/assets/images/girlwithstar.png";
import style from "@/assets/css/offer.module.css";

function Offer() {
  return (
    <div className="bg-accent-foreground">
      <div className="container lg:py-20 py-10">
        <div className={style.offerData}>
          <div className="flex flex-col gap-10 py-[4.875rem] xl:pr-0 xl:pl-20  xl:max-w-[32.8125rem] p-7">
            <h2 className="text-white font-bold text-[4rem] leading-[4.8406rem]">
              Lorem ipsum dolor sit.
            </h2>
            <p className="text-white text-base leading-1.5 -tracking-md">
              Lorem ipsum dolor sit amet consectetur. Varius eu sed adipiscing
              pellentesque feugiat gravida tincidunt lobortis mi. Nisl
              sollicitudin in dictumst elementum amet nulla. Malesuada tempor
              consequat dui fringilla pretium. Egestas nibh et sociis enim nisl
              aliquet ultrices.
            </p>
            <Button variant="secondary" className="w-fit">
              Buy Now
            </Button>
          </div>
          <Image
            src={Girls}
            alt="Star"
            className=" px-[3.25rem] mx-auto"
            width={640}
            height={552}
          />
        </div>
      </div>
    </div>
  );
}

export default Offer;
