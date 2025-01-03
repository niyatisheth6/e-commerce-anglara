"use client";
// import Image from "next/image";
// import Background from "@/assets/images/background.svg";
// import Girls from "@/assets/images/girls.svg";
// import Star from "@/assets/icons/offer.svg";
import style from "@/assets/css/offer.module.css";
// import Image from "next/image";
import Button from "@/shared/components/button/Button";

function Offer() {
  return (
    <div className="bg-accent-foreground">
      <div className="container py-20">
        <div className={style.offerData}>
          <div className="flex flex-col  gap-10 pt-[4.875rem] pl-20 pb-[7.375rem] max-w-[32.8125rem]">
            <h2 className="text-white font-bold text-[4rem] leading-[4.8406rem]">
              Lorem ipsum dolor sit.
            </h2>
            <p className="text-white text-base leading-[1.21rem] -tracking-[3%]">
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
          <div className="flex">
            {/* <Girls />
            <Star /> */}
            {/* <Image src={Girls} alt="girl" className="self-end" />
            <Image src={Star} alt="Star" className="self-baseline" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
