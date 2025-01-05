"use client";

import clsx from "clsx";

import { featureData } from "@/shared/helpers/data/featureData";

function Benefit() {
  return (
    <div className="container lg:py-[3.75rem] py-10">
      <div className="grid grid-cols-1 maxLg:gap-6 sm:grid-cols-2  xl:grid-cols-4">
        {featureData.map((feature, index) => (
          <div
            className={clsx("px-3.5 py-4 flex gap-4", {
              "xl:border-r xl:border-accent-background":
                index !== featureData.length - 1,
            })}
            key={index}
          >
            {feature.icon}
            <div>
              <h3 className="text-xl leading-5 font-bold text-foreground mb-1.5">
                {feature.title}
              </h3>
              <p className="text-secondary text-base leading-5">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefit;
