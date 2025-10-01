"use client";

import React, { useState } from "react";
import Image from "next/image";

const productImages: string[] = [
    "/images/feature1.png",
    "/images/feature2.png",
    "/images/feature3.png",
    "/images/feature4.png",
];

const ProductGallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string>(productImages[0]);

    return (
        <div className="flex gap-4">
            {/* Thumbnails */}
            <div className="flex flex-col gap-3 w-1/4">
                {productImages.map((src, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(src)}
                        className={`relative w-full h-full border bg-background overflow-hidden 
                        ${selectedImage === src ? "border-secondary" : "border-transparent"}`}
                    >
                        <Image
                            src={src}
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="relative w-full md:h-[440px] h-[254px] bg-background overflow-hidden">
                <Image
                    src={selectedImage}
                    alt="Selected product"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    );
};

export default ProductGallery;
