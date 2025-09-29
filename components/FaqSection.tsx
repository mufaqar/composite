"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import HeadingSection from "./HeadingSection";

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
    <section className="md:py-20 py-16 bg-background">
      {/* Heading + Read More */}
      <HeadingSection title="Frequently Asked Questions" desc="" />
      <div className="max-w-[804px] mx-auto px-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="md:py-8 md:px-5 py-4 max-w-[1024px] mx-auto border-b border-[#E7EAEE]">
            {/* Question row */}
            <div
              className="flex justify-between items-center cursor-pointer transition-all duration-300"
              onClick={() => toggleFaq(idx)}
            >
              <h3 className="md:text-lg text-sm font-semibold text-title font-DM_Sans">
                {faq.question}
              </h3>
              <FaChevronDown
                className={`md:text-base text-sm font-normal text-description mt-3 transform transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""
                  }`}
              />
            </div>

            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? "max-h-40 mt-5" : "max-h-0"
                }`}
            >
              <p className="text-description">{faq.answer}</p>
            </div>
          </div>
        ))}
        <div className='w-fit mx-auto flex md:flex-row flex-col gap-5 mt-10'>
          <Link href="#" className='primary_btn'>
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
