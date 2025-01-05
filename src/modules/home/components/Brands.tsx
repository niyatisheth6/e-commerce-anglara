"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

import HeaderTitle from "@/shared/components/header-title/HeaderTitle";
import { brandsData } from "@/shared/helpers/data/brandsData";

function Brands() {
  const infiniteCompanies = [...brandsData, ...brandsData];

  return (
    <div className="lg:py-20 py-10">
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
                alt={`company-${(index % brandsData.length) + 1}`}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Brands;
