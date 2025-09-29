"use client";

import Image from "next/image";
import React from "react";
import OutDoorSlider from "./OutdoorSlider";
import Link from "next/link";

const Outdoor = () => {
  return (
    <section className="py-16 bg-[#F0FAF7] relative ">
      <Image
        src="/images/boxes2.png"
        alt="boxes2"
        width={232}
        height={155}
        className="md:w-[232px] md:h-[155px] w-[87.5px] h-[58.33] -rotate-90 md:-ml-10 md:-mt-6 md:block hidden"
      />
      <div className="max-w-[804px] mx-auto px-4 mb-10">
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
      <OutDoorSlider />
      <div className='w-fit mx-auto flex md:flex-row flex-col gap-5 mt-5'>
        <Link href="#" className='primary_btn'>
          View Our Project Gallery
        </Link>
      </div>
    </section>
  );
};

export default Outdoor;
