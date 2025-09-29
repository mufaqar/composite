import Image from 'next/image'
import React from 'react'

const PostBox = ({ data }: any) => {
    return (
        <div className="bg-white">
            {/* Image */}
            <div className="relative w-full">
                <Image
                    src={data.image}
                    alt={data.title}
                    width={400}
                    height={400}
                />
            </div>

            {/* Content */}
            <div className="mt-4 md:h-[131px] flex flex-col justify-between">
                <p className="text-sm text-description font-DM_Sans flex items-center gap-2">
                    <span className="text-red-500 text-lg ">•</span>
                    {data.date}
                </p>
                <h3 className="text-[22px]  font-normal font-DM_Sans">
                    {data.title}
                </h3>
                <div className="py-2 border-t border-[#D2D2D7]">
                    <p className="text-sm text-description ">
                        {data.readTime}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PostBox