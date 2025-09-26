"use client";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import Image from "next/image";

const productsarr = [
    {
        id: 1,
        title: "Capped Composite Fencing Panel — Wide Finish",
        description: "A short description goes in here",
        price: "€299.99",
        discountPrice: "€249.99",
        rating: 4.5,
        image: "/images/Products-1.png", // replace with real image path
        buttons: true,
    },
    {
        id: 2,
        title: "Capped Composite Fencing Panel",
        description: "A short description goes in here",
        price: "€299.99",
        discountPrice: "€249.99",
        rating: 4.5,
        image: "/images/Products-2.png",
        buttons: true,
    },
    {
        id: 3,
        title: "Composite Fencing Panel For Concrete Post",
        description: "A short description goes in here",
        price: "€299.99",
        discountPrice: "€249.99",
        rating: 4.5,
        image: "/images/Products-3.png",
        buttons: true,
    },
];

export default function TrendingProducts() {
    const [isExpanded, setIsExpanded] = useState(false);
    const text =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
    return (
        <section className="py-12 bg-white">
            {/* Heading */}
            <div className="max-w-[804px] mx-auto px-4">
                <h2 className="md:text-6xl text-[34px] leading-none font-semibold text-title text-center font-DM_Sans">Trending Products</h2>
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

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-4 mt-12">
                {productsarr.map((product) => (
                    <div
                        key={product.id}
                        className="relative bg-white  overflow-hidden group"
                    >
                        {/* Image */}
                        <div className="relative">

                            <Image
                                src={product.image}
                                width={500}
                                height={500}
                                alt={product.title}
                                className="w-full h-64 object-cover"
                            />
                            <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                                <Heart className="w-5 h-5 text-gray-600" />
                            </button>

                            {/* Buttons overlay (only for first product) */}
                            {product.buttons && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition bg-black/50">
                                    <button className="px-5 py-2 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600">
                                        View product
                                    </button>
                                    <button className="px-5 py-2 bg-white text-gray-800 font-semibold rounded-full hover:bg-gray-100">
                                        Get Free Sample
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="mt-4">
                            {/* Rating */}
                            <div className="flex items-center gap-1 text-yellow-500 text-lg">
                                {"★".repeat(4)}{" "}
                                <span className="text-gray-600 ml-1 ">{product.rating}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold mt-2 text-gray-800">
                                {product.title}
                            </h3>
                            <p className="text-gray-500 text-md">{product.description}</p>



                            {/* Icons row */}
                            <div className="flex gap-3 mt-3">
                                <span className="w-13 h-13 bg-[#00DFA21C] rounded-full flex items-center justify-center text-teal-600 p-2">  <Image src="/images/products-icon-4.svg" width={500} height={500} alt="Picture" /></span>
                                <span className="w-13 h-13 bg-[#00DFA21C] rounded-full flex items-center justify-center text-teal-600 p-2"  > <Image src="/images/products-icon-1.svg" width={500} height={500} alt="Picture" /></span>
                                <span className="w-13 h-13 bg-[#00DFA21C] rounded-full flex items-center justify-center text-teal-600 p-2"> <Image src="/images/products-icon-3.svg" width={500} height={500} alt="Picture" /></span>
                                <span className="w-13 h-13 bg-[#00DFA21C] rounded-full flex items-center justify-center text-teal-600 p-2"> <Image src="/images/products-icon-2.svg" width={500} height={500} alt="Picture" /></span>
                            </div>
                            {/* Price */}
                            <div className="mt-3 flex items-center gap-2">
                                <span className="text-gray-400 line-through">
                                    {product.price}
                                </span>
                                <span className="text-green-600 font-semibold text-md">
                                    {product.discountPrice}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
