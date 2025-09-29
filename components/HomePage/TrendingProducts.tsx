"use client";
import React from "react";
import { Heart } from "lucide-react";
import Image from "next/image";
import HeadingSection from "../HeadingSection";

const productsarr = [
    {
        id: 1,
        title: "Capped Composite Fencing Panel ",
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

    return (
        <section className="py-12 bg-white">
            {/* Heading + Read More */}
            <HeadingSection title="Trending Products" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                readMore />
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-4 mt-12">
                {productsarr.map((product) => (
                    <div
                        key={product.id}
                        className="relative"
                    >
                        {/* Image */}
                        <div className="relative group overflow-hidden">
                            <Image
                                src={product.image}
                                width={500}
                                height={500}
                                alt={product.title}
                                className="w-full object-cover"
                            />
                            <button className="absolute top-2.5 right-2.5 bg-white p-2 rounded-full shadow cursor-pointer z-[3]">
                                <Heart className="w-7 h-7 text-description" />
                            </button>

                            {/* Buttons overlay (only for first product) */}
                            {product.buttons && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition bg-black/50">
                                    <button className="px-5 py-2 bg-secondary text-white font-semibold rounded-full hover:bg-primary">
                                        View product
                                    </button>
                                    <button className="px-5 py-2 bg-white text-black hover:text-white font-semibold rounded-full hover:bg-primary">
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
                                <span className="text-description ml-1 ">{product.rating}</span>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold mt-2 text-black">
                                {product.title}
                            </h3>
                            <p className="text-description text-md">{product.description}</p>
                            {/* Icons row */}
                            <div className="flex gap-3 mt-3">
                                <button className="flex flex-col justify-center items-center group relative w-fit">
                                    <span className="bg-primary min-w-[81px] w-full text-white text-xs font-normal font-Satoshi px-1.5 py-0.5 rounded translate-y-8 transition-all ease-in-out duration-300 hidden group-hover:block absolute group-hover:-translate-y-10">
                                        fast Delivery
                                    </span>
                                    <span className="w-13 h-13 bg-[#00DFA21C] rounded-full flex items-center justify-center text-primary p-2">
                                        <Image src="/images/products-icon-4.svg" width={500} height={500} alt="Picture" />
                                    </span>
                                </button>
                                <button className="flex flex-col justify-center items-center group relative w-fit">
                                    <span className="bg-primary min-w-[81px] w-full text-white text-xs font-normal font-Satoshi px-1.5 py-0.5 rounded translate-y-8 transition-all ease-in-out duration-300 hidden group-hover:block absolute group-hover:-translate-y-10">
                                        fast Delivery
                                    </span>
                                    <span className="w-13 h-13 bg-[#00DFA21C] rounded-full flex items-center justify-center text-primary p-2"  >
                                        <Image src="/images/products-icon-1.svg" width={500} height={500} alt="Picture" />
                                    </span>
                                </button>
                                <button className="flex flex-col justify-center items-center group relative w-fit">
                                    <span className="bg-primary min-w-[81px] w-full text-white text-xs font-normal font-Satoshi px-1.5 py-0.5 rounded translate-y-8 transition-all ease-in-out duration-300 hidden group-hover:block absolute group-hover:-translate-y-10">
                                        fast Delivery
                                    </span>
                                    <span className="w-13 h-13 bg-[#00DFA21C] rounded-full flex items-center justify-center text-primary p-2">
                                        <Image src="/images/products-icon-3.svg" width={500} height={500} alt="Picture" />
                                    </span>
                                </button>
                                <button className="flex flex-col justify-center items-center group relative w-fit">
                                    <span className="bg-primary min-w-[81px] w-full text-white text-xs font-normal font-Satoshi px-1.5 py-0.5 rounded translate-y-8 transition-all ease-in-out duration-300 hidden group-hover:block absolute group-hover:-translate-y-10">
                                        fast Delivery
                                    </span>
                                    <span className="w-13 h-13 bg-[#00DFA21C] rounded-full flex items-center justify-center text-primary p-2">
                                        <Image src="/images/products-icon-2.svg" width={500} height={500} alt="Picture" />
                                    </span>
                                </button>
                            </div>
                            {/* Price */}
                            <div className="mt-3 flex items-center gap-2">
                                <span className="text-description line-through">
                                    {product.price}
                                </span>
                                <span className="text-title font-semibold text-md">
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
