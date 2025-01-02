import React from "react";

const metrics = [
  {
    value: "95%",
    label: "Happy Customer",
  },
  {
    value: "1 Million+",
    label: "Yearly Sale",
  },
  {
    value: "20k+",
    label: "Customer Rating",
  },
];

function Rates() {
  return (
    <div className="container pt-[3.75rem] pb-[4.6875rem] grid md:grid-cols-3 grid-cols-1   gap-5">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-accent py-[1.4375rem]  rounded-[0.625rem] text-center w-full"
        >
          <h3 className="font-bold text-foreground text-4xl leading-[2.7231rem]">
            {metric.value}
          </h3>
          <p className="text-foreground text-xl leading-5">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Rates;
