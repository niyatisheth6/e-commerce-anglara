"use client";

import HeaderTitle from "@/shared/components/header-title/HeaderTitle";
import React from "react";
import ReviewCard from "./ReviewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCardWrapper from "./ReviewCardWrapper";

function CustomersReview() {
  return (
    <div className="container py-20">
      <HeaderTitle title="Customers Review" />
      <div className="mt-10">
        <ReviewCardWrapper>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </ReviewCardWrapper>
      </div>
    </div>
  );
}

export default CustomersReview;
