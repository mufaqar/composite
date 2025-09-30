"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import HeadingSection from "../HeadingSection";

const WhyUS = [
    {
        id: 1,
        title: "Unrivalled Quality",
        description:
            "Experience long-lasting performance and exceptional durability with our premium composite materials, backed by guarantees up to 25 years.",
        icon: "/images/crown.png",
    },
    {
        id: 2,
        title: "Sustainable Choice",
        description:
            "Eco-friendly materials designed with sustainability in mind for a greener future.",
        icon: "/images/crown.png",
    },
    {
        id: 3,
        title: "Stylish Design",
        description:
            "Enhance your space with modern aesthetics and versatile design options.",
        icon: "/images/crown.png",
    },
    {
        id: 4,
        title: "Trusted Service",
        description:
            "Our experts provide unmatched support to guide you every step of the way.",
        icon: "/images/crown.png",
    },
];

const WhyChooseus = () => {
    const sliderRef = useRef<any>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false, // disable default arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <section className="pt-24 pb-12">
            {/* Heading + Read More */}
            <HeadingSection title="Why Choose Composite Warehouse?" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            readMore />

            {/* Slider Section */}
            <div className="container mx-auto px-4 mt-12 relative">
                <Slider ref={sliderRef} {...settings}>
                    {WhyUS.map((item) => (
                        <div key={item.id} className="px-2">
                            <div className="border border-[#E4E4E4] bg-background/35 px-11 py-9 h-[353px]">
                                <div className="relative w-fit">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={72}
                                        height={72}
                                        className="w-[32px] h-[32px] md:w-[72px] md:h-[72px]"
                                    />
                                    <span className="absolute md:w-10 md:h-10 w-[22px] h-[22px] bg-primary/20 rounded-full -bottom-2"></span>
                                </div>
                                <h3 className="md:text-[28px] text-lg font-semibold text-title font-DM_Sans mt-4">
                                    {item.title}
                                </h3>
                                <p className="md:text-xl text-sm font-normal text-description mt-5">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Custom Arrows */}
                <button
                    onClick={() => sliderRef.current?.slickPrev()}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-secondary transition"
                >
                    <FaChevronLeft size={20} />
                </button>
                <button
                    onClick={() => sliderRef.current?.slickNext()}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-secondary transition"
                >
                    <FaChevronRight size={20} />
                </button>
            </div>
        </section>
    );
};

export default WhyChooseus;
