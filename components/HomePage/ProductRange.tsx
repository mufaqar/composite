"use client";
import Link from 'next/link';
import React, { useState } from 'react'

const ProductRange = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [active, setActive] = useState<number | null>(0);

    const products = [
        {
            id: 0,
            title: "Composite Decking Boards",
            desc: "Discover our full range of durable and stylish composite decking boards, available in various colours and finishes.",
            img: "/images/pro1.png",
        },
        {
            id: 1,
            title: "Composite Fencing Panels",
            desc: "Premium cladding boards for a sleek, modern, and weather-resistant exterior finish.",
            img: "/images/pro1.png",
        },
        {
            id: 2,
            title: "Composite Cladding",
            desc: "Durable, low-maintenance fencing solutions that combine privacy with style.",
            img: "/images/pro1.png",
        },
    ];

    const text =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
    return (
        <section className="pt-24 pb-12">
            {/* Heading + Read More */}
            <div className="max-w-[804px] mx-auto px-4">
                <h2 className="md:text-6xl text-[34px] leading-none font-semibold text-title text-center">
                    Explore Our Composite Product Range
                </h2>
                <p className="md:text-xl text-sm font-normal text-description text-center mt-3.5">
                    {isExpanded ? text : `${text.substring(0, 122)} ... `}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="font-bold text-secondary hover:underline transition"
                    >
                        {isExpanded ? " SHOW LESS" : " READ MORE"}
                    </button>
                </p>
            </div>
            <div className='flex md:flex-row flex-col w-full mt-12'>
                {products.map((product) => (
                    <div
                        key={product.id}
                        onClick={() => setActive(product.id)}
                        className={`
                            cursor-pointer  bg-cover bg-no-repeat 
                            flex flex-col justify-end  md:py-[70px] p-9 transition-all duration-500 ease-in-out
                            ${active === product.id ? "md:w-1/2 w-full md:h-[587px] h-[350px] md:px-[70px]" : "md:w-1/4 w-full md:h-[587px] h-[200px] md:px-[60px]"}
                            `} style={{ backgroundImage: `url(${product.img})` }} >
                        <h3 className="md:text-[28px] text-lg font-semibold text-white">
                            {product.title}
                        </h3>
                        <div className={`${active === product.id ? "block" : "hidden"}`}>
                            <p className="md:text-xl text-sm font-normal text-white mt-2.5">
                                {product.desc}
                            </p>
                            <div className="w-fit flex md:flex-row flex-col gap-5 mt-5">
                                <Link
                                    href="#"
                                    className="md:text-base text-sm font-bold text-white inline-flex w-fit md:px-7 md:py-3 px-5 py-2 bg-secondary rounded-4xl hover:bg-primary border border-secondary hover:border-primary hover:text-white transition-all duration-300 ease-in-out"
                                >
                                    View Decking Range
                                </Link>
                                <Link
                                    href="#"
                                    className="md:text-base text-sm font-bold text-white inline-flex w-fit md:px-7 md:py-3 px-5 py-2 bg-transparent rounded-4xl hover:bg-white border border-white hover:text-title transition-all duration-300 ease-in-out"
                                >
                                    Order Free Sample
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    )
}

export default ProductRange