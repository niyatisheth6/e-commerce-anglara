"use brand";

import React from "react";
// import Image from "next/image";

// import clsx from "clsx";

// import style from "@/assets/css/home.module.css";
// import brand1 from "@/assets/images/brand-1.png";
// import brand2 from "@/assets/images/brand-2.png";
// import brand3 from "@/assets/images/brand-3.png";
// import brand4 from "@/assets/images/brand-4.png";
// import brand5 from "@/assets/images/brand-5.png";
// import brand6 from "@/assets/images/brand-6.png";
// import brand7 from "@/assets/images/brand-7.png";
// import Marquee from "./Marquee";

function Brands() {
  //   const companies = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];
  return (
    <section className=" bg-red-100">
      <div>
        Brands
        {/* <div className="py-10  px-4 md:px-8">
          <h3 className="text-center text-grey text-base font-semibold">
            TRUSTED BY COMPANIES
          </h3>
          <div
            className={clsx(
              style.trustesdGallery,
              " py-8.5 flex gap-6 overflow-hidden relative crelative "
            )}
          >
            <Marquee
              className={clsx(
                style.trustesdGalleryIcon,
                "flex gap-5 max-w-full "
              )}
            >
              {companies.map((logo, idx) => (
                <div
                  className={clsx(
                    "image_wrapper",
                    (logo === brand5 || logo === brand4) &&
                      style.trustesdGrayScaleIcon
                  )}
                  key={idx}
                >
                  <Image src={logo} alt={`brand${idx + 1}`} />
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-rangoongreen dark:from-white"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-rangoongreen dark:from-white"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Brands;
