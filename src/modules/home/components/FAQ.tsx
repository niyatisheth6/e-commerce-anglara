"use client";
import { useCallback, useState } from "react";

import { faqData } from "@/shared/helpers/data/faqData";
import HeaderTitle from "@/shared/components/header-title/HeaderTitle";

import FAQData from "./FAQData";

function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([1]);

  const toggleItem = useCallback((id: number) => {
    setOpenItems((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }, []);

  return (
    <div className="bg-muted">
      <div className="container py-20">
        <HeaderTitle title="FAQ" />
        <div className="mt-10">
          <div className="w-full">
            {faqData.map((item, index) => (
              <FAQData
                key={item.id}
                item={item}
                index={index}
                isOpen={openItems.includes(item.id)}
                onToggle={() => toggleItem(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
