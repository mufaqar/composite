'use client'

import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const faqs = [
  {
    question: "Add Commonly Asked Questions Here",
    answer:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text.",
  },
  {
    question: "Add Commonly Asked Questions Here",
    answer:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text.",
  },
  {
    question: "Add Commonly Asked Questions Here",
    answer:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text.",
  },
];

const FaqsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="md:py-20 py-16">
      <div className="container mx-auto md:px-0 px-4 mt-10 space-y-6">

        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, idx) => (
          <div key={idx} className="py-4 max-w-[1024px] mx-auto border-b">
            {/* Question row */}
            <div
              className="flex justify-between items-center cursor-pointer transition-all duration-300"
              onClick={() => toggleFaq(idx)}
            >
              <h3 className="text-xl font-poppins font-semibold text-black">
                {faq.question}
              </h3>
              <FaChevronDown
                className={`text-primary transform transition-transform duration-300 ${
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
  )
}

export default FaqsSection
