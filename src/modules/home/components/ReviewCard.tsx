import React from "react";
import Star from "@/assets/icons/star_outline.svg";
import StarSelected from "@/assets/icons/star-selected.svg";
import Avatar from "@/assets/icons/avatar.svg";

function ReviewCard() {
  return (
    <div className="border-[0.1125rem] border-accent-background p-[1.4494rem] rounded-[0.625rem] flex flex-col gap-5">
      <div className="flex max-w-[25rem] w-full">
        <Avatar />
        {/* <Image src={} alt="img"/> */}
        <div className="flex">
          <StarSelected />
          <StarSelected />
          <StarSelected />
          <StarSelected />
          <Star />
        </div>
      </div>
      <h3 className="text-foreground font-semibold text-xl leading-[1.5125rem] tracking-[2%]">
        Floyd Miles
      </h3>
      <p className="text-secondary text-sm leading-[1.0588rem] tracking-[2%]">
        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
        enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
      </p>
    </div>
  );
}

export default ReviewCard;
