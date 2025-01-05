import { memo } from "react";

import clsx from "clsx";
import { Minus, Plus } from "lucide-react";

import { FaqData } from "@/shared/types";
import { faqData } from "@/shared/helpers/data/faqData";

type FAQDataProps = {
  item: FaqData;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

function FAQData({ index, item, isOpen, onToggle }: FAQDataProps) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-3.5 text-left transition-colors  bg-white border-b border-muted-background last:border-0"
        aria-expanded={isOpen}
        aria-controls={`faq-item-${item.id}`}
      >
        <h3 className="font-medium text-xl leading-2.7 tracking-tighter text-foreground">
          <span className=" mr-1">{item.id}.</span>
          <span>{item.question}</span>
        </h3>
        {isOpen ? (
          <Minus className="h-5 w-5 text-primary flex-shrink-0" />
        ) : (
          <Plus className="h-5 w-5 text-primary flex-shrink-0" />
        )}
      </button>
      <div
        id={`faq-item-${item.id}`}
        role="region"
        aria-hidden={!isOpen}
        className={clsx(
          "transition-all duration-300 ease-in-out overflow-hidden pt-5",
          {
            "max-h-screen opacity-100": isOpen,
            "max-h-0 opacity-0": !isOpen,
            "pb-10": isOpen && index !== faqData.length - 1,
          }
        )}
      >
        <p className="text-base leading-1.5 text-secondary tracking-tighter">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default memo(FAQData);
