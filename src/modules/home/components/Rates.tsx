import { ratesData } from "@/shared/helpers/data/ratesData";

function Rates() {
  return (
    <div className="container lg:pt-[3.75rem] lg:pb-[4.6875rem] py-5 grid md:grid-cols-3 grid-cols-1 gap-5">
      {ratesData.map((rate, index) => (
        <div
          key={index}
          className="bg-accent py-[1.4375rem]  rounded-[0.625rem] text-center w-full"
        >
          <h3 className="font-bold text-foreground text-4xl leading-[2.7231rem]">
            {rate.value}
          </h3>
          <p className="text-foreground text-xl leading-5">{rate.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Rates;
