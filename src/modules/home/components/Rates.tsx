"use client";
import { useEffect, useState } from "react";

import CountUp from "react-countup";

import { ratesData } from "@/shared/helpers/data/ratesData";

function Rates() {
  const [isMounted, setIsMounted] = useState(false);

  const formatValue = (value: string) => {
    if (value === "1 Million+") {
      return <CountUp end={1} duration={2.5} suffix=" Million+" />;
    }
    if (value === "20k+") {
      return <CountUp end={20} duration={2.5} suffix="k+" />;
    }
    return <CountUp end={95} duration={2.5} suffix="%" />;
  };
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="container lg:pt-[3.75rem] lg:pb-[4.6875rem] py-5 grid md:grid-cols-3 grid-cols-1 gap-5">
      {ratesData.map((rate, index) => (
        <div
          key={index}
          className="bg-accent py-[1.4375rem]  rounded-[0.625rem] text-center w-full"
        >
          {isMounted ? (
            <h3 className="font-bold text-foreground text-4xl leading-[2.7231rem]">
              {formatValue(rate.value)}
            </h3>
          ) : null}
          <p className="text-foreground text-xl leading-5">{rate.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Rates;
