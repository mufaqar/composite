"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Are Composite Materials Slippery?",
    answer:
      "While traditional wood decking can become slippery, our composite decking is designed with a low slip resistance, offering a safer surface, especially in wet conditions. With an average PTV of 33, it presents a low to medium slip risk.",
  },
  {
    question: "Are Composite Materials Eco-Friendly?",
    answer:
      "While traditional wood decking can become slippery, our composite decking is designed with a low slip resistance, offering a safer surface, especially in wet conditions. With an average PTV of 33, it presents a low to medium slip risk..",
  },
  {
    question: "How Do I Install Composite Products?",
    answer:
      "While traditional wood decking can become slippery, our composite decking is designed with a low slip resistance, offering a safer surface, especially in wet conditions. With an average PTV of 33, it presents a low to medium slip risk.",
  },
];

const FaqsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="md:py-20 py-16">
      <div className="max-w-[804px] mx-auto px-4">
        <h2 className="md:text-6xl text-[34px] leading-none font-semibold text-title text-center font-DM_Sans">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, idx) => (
          <div key={idx} className="py-4 max-w-[1024px] mx-auto border-b">
            {/* Question row */}
            <div
              className="flex justify-between items-center cursor-pointer transition-all duration-300"
              onClick={() => toggleFaq(idx)}
            >
              <h3 className="md:text-[28px] text-lg font-semibold text-title font-DM_Sans">
                {faq.question}
              </h3>
              <FaChevronDown
                className={`md:text-xl text-sm font-normal text-description mt-3 transform transition-transform duration-300 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === idx ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="font-poppins text-black">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqsSection;
