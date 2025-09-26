'use client'

import Image from "next/image"

const blogs = [
  {
    id: 1,
    date: "13 Feb 2022",
    title: "Timeless product crafted beautifully with a sustainable materials",
    readTime: "3 minute read",
    image: "/blog1.jpg", // replace with actual image path in public folder
  },
  {
    id: 2,
    date: "12 Jan 2022",
    title: "Timeless product crafted beautifully with a sustainable materials",
    readTime: "8 minute read",
    image: "/blog2.jpg",
  },
  {
    id: 3,
    date: "11 Dec 2021",
    title: "Timeless product crafted beautifully with a sustainable materials",
    readTime: "4 minute read",
    image: "/blog3.jpg",
  },
]

const BlogsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-black mb-12">
          Our Blogs
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-sm">
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <span className="text-red-500 text-lg">•</span>
                  {blog.date}
                </p>
                <h3 className="text-lg font-semibold mt-2 text-black">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {blog.readTime}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogsSection
