import HeaderTitle from "@/shared/components/header-title/HeaderTitle";
import React from "react";
import ReviewCard from "./ReviewCard";

function CustomersReview() {
  return (
    <div className="container py-20">
      <HeaderTitle title="Customers Review" />
      <div className="mt-10 flex gap-5">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}

export default CustomersReview;
