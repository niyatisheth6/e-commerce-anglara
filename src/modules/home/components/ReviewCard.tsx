import Image from "next/image";

import { Star } from "lucide-react";

function ReviewCard({ review }: any) {
  return (
    <div className="border-[0.1125rem] border-accent-background p-[1.4494rem] rounded-[0.625rem] flex flex-col gap-5">
      <div className="flex max-w-[25rem] w-full justify-between">
        <Image src={review.avatar} alt="avatar" />
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-4 h-4 ${
                star <= review.rating
                  ? "text-secondary-foreground fill-secondary-foreground"
                  : "text-secondary-foreground"
              }`}
            />
          ))}
        </div>
      </div>
      <h3 className="text-foreground font-semibold text-xl leading-2.7 tracking-sm">
        {review.name}
      </h3>
      <p className="text-secondary text-sm leading-2.5 tracking-sm">
        {review.text}
      </p>
    </div>
  );
}

export default ReviewCard;
