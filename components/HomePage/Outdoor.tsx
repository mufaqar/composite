"use client";

import Image from "next/image";
import React, { useState } from "react";

const Outdoor = () => {
  return (
    <section className="pt-16 bg-[#F0FAF7] relative  mb-20 ">
      <Image
        src="/images/boxes2.png"
        alt="boxes2"
        width={232}
        height={155}
        className="md:w-[232px] md:h-[155px] w-[87.5px] h-[58.33] -rotate-90 md:-ml-10 md:-mt-6 md:block hidden"
      />

      <div className="max-w-[804px] mx-auto px-4 -mt-[80px] ">
        <h2 className="md:text-6xl text-[34px] leading-none font-semibold text-title text-center font-DM_Sans">
          Create Your Dream Outdoor Space: Inspiration & Ideas
        </h2>
        <p className="md:text-xl text-sm font-normal text-description text-center mt-3.5">
          Imagine the possibilities for your garden or outdoor area with our
          versatile composite materials. Browse our gallery for inspiration and
          discover how Composite Warehouse can help you bring your vision to
          life.
        </p>
      </div>
    </section>
  );
};

export default Outdoor;
