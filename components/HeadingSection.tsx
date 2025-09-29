"use client";
import React, { useState } from 'react'

const HeadingSection = ({ title, desc, readMore }: any) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const text = desc;
    return (

        <div className="md:max-w-[804px] max-w-[389px] mx-auto px-4">
            <h2 className="md:text-6xl text-[33px] leading-none font-semibold text-title text-center font-DM_Sans">
                {title}
            </h2>
            {readMore ?
                <p className="md:text-xl text-sm font-normal text-description text-center mt-3.5">
                    {isExpanded ? text : `${text.substring(0, 122)} ... `}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="font-bold text-secondary hover:underline transition"
                    >
                        {isExpanded ? " SHOW LESS" : " READ MORE"}
                    </button>
                </p> :
                <p className="md:text-xl text-sm font-normal text-description text-center mt-3.5">
                    {text}
                </p>
            }
        </div>
    )
}

export default HeadingSection