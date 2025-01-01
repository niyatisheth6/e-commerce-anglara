"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import HeaderTitle from "@/shared/components/header-title/HeaderTitle";
import brand1 from "@/assets/images/brand-1.png";
import brand2 from "@/assets/images/brand-2.png";
import brand3 from "@/assets/images/brand-3.png";
import brand4 from "@/assets/images/brand-4.png";
import brand5 from "@/assets/images/brand-5.png";
import brand6 from "@/assets/images/brand-6.png";
import brand7 from "@/assets/images/brand-7.png";
import brand8 from "@/assets/images/brand-8.png";

function Brands() {
  const companies = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
  ];

  const infiniteCompanies = [...companies, ...companies];

  return (
    <div className="py-20">
      <div className="container">
        <HeaderTitle title="Popular Brands" />
      </div>
      <div className="mt-10 overflow-hidden">
        <Marquee speed={40} pauseOnHover={true} className="py-4">
          {infiniteCompanies.map((company, index) => (
            <div key={index} className="mx-8">
              <Image
                src={company}
                width={168}
                height={118}
                className="w-[10.5rem] h-[7.375rem] object-contain"
                alt={`company-${(index % companies.length) + 1}`}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Brands;
