"use client";

import React, { useState } from "react";
import Image from "next/image";
import PostBox from "./PostBox";

interface Post {
  id: number;
  title: string;
  date: string;
  readTime: string;
  image: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "What Are the Different Types of Composite Decking?",
    date: "Mar 2024",
    readTime: "3 min read",
    image: "/images/blog1.png",
  },
  {
    id: 2,
    title: "Garden Fencing Colours",
    date: "Mar 2024",
    readTime: "2 min read",
    image: "/images/blog2.png",
  },
  {
    id: 3,
    title: "Garden Privacy Ideas",
    date: "Mar 2024",
    readTime: "2 min read",
    image: "/images/blog3.png",
  },
  {
    id: 4,
    title: "How to Increase your Property Value?",
    date: "Mar 2024",
    readTime: "4 min read",
    image: "/images/blog1.png",
  },
  {
    id: 5,
    title: "Fencing Costs",
    date: "Mar 2024",
    readTime: "2 min read",
    image: "/images/blog2.png",
  },
  {
    id: 6,
    title: "Tips to Improve your Outdoor Space",
    date: "Mar 2024",
    readTime: "3 min read",
    image: "/images/blog3.png",
  },
  {
    id: 7,
    title: "Ways to Decorate your Garden",
    date: "Mar 2024",
    readTime: "3 min read",
    image: "/images/blog2.png",
  },
  {
    id: 8,
    title: "Modern Patio Ideas",
    date: "Mar 2024",
    readTime: "2 min read",
    image: "/images/blog1.png",
  },
  {
    id: 9,
    title: "Outdoor Furniture Trends",
    date: "Mar 2024",
    readTime: "2 min read",
    image: "/images/blog3.png",
  },
];

const BlogGrid: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3); // show 3 more on each click
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.slice(0, visibleCount).map((post) => (
            <PostBox key={post.id} data={post} />
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < posts.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="md:text-base text-sm font-bold text-white inline-flex w-fit md:px-7 md:py-3 px-5 py-2 bg-secondary rounded-4xl hover:bg-primary border border-secondary hover:border-primary hover:text-white transition-all duration-300 ease-in-out"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;
