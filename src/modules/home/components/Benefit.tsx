"use client";
import React from "react";
import Truck from "@/assets/icons/truck.svg";
import Headphones from "@/assets/icons/headphones.svg";
import Rupee from "@/assets/icons/indian-rupee.svg";
import Credit from "@/assets/icons/credit-card.svg";
import clsx from "clsx";

const features = [
  {
    icon: <Truck />,
    title: "Free Shipping",
    description: "Above all orders over 200rs",
  },
  {
    icon: <Rupee />,
    title: "Money Guarantee",
    description: "45 Days to Exchange",
  },
  {
    icon: <Headphones />,
    title: "Online Support",
    description: "24/7 Customer Care",
  },
  {
    icon: <Credit />,
    title: "Flexible Payment",
    description: "Pay with multiple Credit Card",
  },
];

function Benefit() {
  return (
    <div className="container py-[3.75rem]">
      <div className="grid grid-cols-1 maxLg:gap-6 sm:grid-cols-2  xl:grid-cols-4">
        {features.map((feature, index) => (
          <div
            className={clsx("px-3.5 py-4 flex gap-4", {
              "xl:border-r xl:border-accent-background":
                index !== features.length - 1,
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
