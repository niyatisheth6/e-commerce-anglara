import React from "react";

import Offer from "./Offer";
import Benefit from "./Benefit";
import FeatureProducts from "./FeatureProducts";
import Rates from "./Rates";
import Categories from "./Categories";
import PopularProducts from "./PopularProducts";
import Brands from "./Brands";
import FAQ from "./FAQ";
import CustomersReview from "./CustomersReview";
import Hero from "./Hero";

function Home() {
  return (
    <div>
      <Hero/>
      <Rates />
      <Categories />
      <FeatureProducts />
      <Benefit />
      <Offer />
      <PopularProducts />
      <Brands />
      <FAQ />
      <CustomersReview />
    </div>
  );
}

export default Home;
