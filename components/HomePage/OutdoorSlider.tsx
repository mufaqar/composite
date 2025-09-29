"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

interface SlideImage {
    src: string;
    title: string;
    description: string;
}

interface Slide {
    id: number;
    images: SlideImage[];
}

const slides: Slide[] = [
    {
        id: 1,
        images: [
            {
                src: "/images/slide1.png",
                title: "Modern Deck Design",
                description: "A clean and stylish outdoor deck with contemporary furniture."
            }
        ]
    },
    {
        id: 2,
        images: [
            {
                src: "/images/slide2.png",
                title: "Cozy Outdoor Lounge Top",
                description: "Relax with an elevated lounge surrounded by greenery."
            },
            {
                src: "/images/slide3.png",
                title: "Cozy Outdoor Lounge Bottom",
                description: "Lower section lounge with warm lighting and comfort."
            }
        ]
    },
    {
        id: 3,
        images: [
            {
                src: "/images/slide4.png",
                title: "Classic Patio",
                description: "Traditional outdoor space designed for family gatherings."
            }
        ]
    },
    {
        id: 4,
        images: [
            {
                src: "/images/slide5.png",
                title: "Nature Inspired Top",
                description: "Blending wood textures with greenery."
            },
            {
                src: "/images/slide6.png",
                title: "Nature Inspired Bottom",
                description: "Natural stone with cozy seating arrangement."
            }
        ]
    },
    {
        id: 5,
        images: [
            {
                src: "/images/slide7.png",
                title: "Waterfront Deck",
                description: "Enjoy the beautiful lake view with a simple, elegant deck."
            }
        ]
    }
];

const OutDoorSlider: React.FC = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        rows: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    rows: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    rows: 5,
                },
            },
        ],
    };

    return (
        <Slider {...settings} className="!w-full mt-10">
            {slides.map((slide) => (
                <div key={slide.id}>
                    <div className="flex items-center justify-center w-full md:h-[620px] px-2 md:py-0 py-2">
                        {/* Case: slide has 2 images */}
                        {slide.images.length === 2 ? (
                            <div className="grid md:grid-cols-1 grid-cols-2 gap-4 w-full">
                                {slide.images.map((img, index) => (
                                    <div
                                        key={index}
                                        className="h-[290px] w-full relative group overflow-hidden"
                                    >
                                        <Image
                                            src={img.src}
                                            alt={`slide-${slide.id}-${index}`}
                                            width={290}
                                            height={298}
                                            className="object-cover w-full h-full"
                                        />

                                        {/* Overlay */}
                                        <div
                                            className="
                        absolute inset-0 
                        bg-gradient-to-t from-black via-black/30 
                        flex flex-col justify-end px-4 py-9 
                        opacity-0 translate-y-5
                        transition-all duration-500 ease-in-out 
                        group-hover:opacity-100 group-hover:translate-y-0
                      "
                                        >
                                            <h3 className="md:text-[26px] leading-none text-base font-semibold text-white font-DM_Sans">
                                                {img.title}
                                            </h3>
                                            <p className="md:text-base text-sm font-normal text-white font-Satoshi mt-2">
                                                {img.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            // Case: slide has 1 image
                            <div className="h-[426px] w-full relative group overflow-hidden">
                                <Image
                                    src={slide.images[0].src}
                                    alt={`slide-${slide.id}`}
                                    width={237}
                                    height={426}
                                    className="object-cover w-full h-full"
                                />

                                {/* Overlay */}
                                <div
                                    className="
                    absolute inset-0 
                    bg-gradient-to-t from-black via-black/30 
                    flex flex-col justify-end px-4 py-9 
                    opacity-0 translate-y-5
                    transition-all duration-500 ease-in-out 
                    group-hover:opacity-100 group-hover:translate-y-0
                  "
                                >
                                    <h3 className="md:text-[26px] leading-none text-base font-semibold text-white font-DM_Sans">
                                        {slide.images[0].title}
                                    </h3>
                                    <p className="md:text-base text-sm font-normal text-white font-Satoshi mt-2">
                                        {slide.images[0].description}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default OutDoorSlider;
