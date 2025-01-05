"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { reviewData } from "@/shared/helpers/data/reviewData";
import HeaderTitle from "@/shared/components/header-title/HeaderTitle";

import ReviewCard from "./ReviewCard";
import ReviewCardWrapper from "./ReviewCardWrapper";

function CustomersReview() {
  return (
    <div className="container lg:py-20 py-10">
      <HeaderTitle title="Customers Review" />
      <div className="mt-10">
        <ReviewCardWrapper>
          {reviewData.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </ReviewCardWrapper>
      </div>
    </div>
  );
}

export default CustomersReview;
