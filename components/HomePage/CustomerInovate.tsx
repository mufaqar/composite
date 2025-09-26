// app/page.tsx
import Image from "next/image";

export default function CustomerInnovate() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center py-16 px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 bg-white shadow-sm">
        {/* Left Image */}
        <div className="relative h-[400px] md:h-auto">
          <Image
            src="/fencing.jpg" // replace with your image in /public
            alt="Composite fencing"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center p-8 md:p-12 bg-white">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            We Listen to Our Customers to Innovate and Improve
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            At Composite Warehouse, your feedback is invaluable. We actively
            listen to your needs and suggestions, which drives our commitment to
            continuous improvement and the introduction of new, high-quality
            products like our composite fencing range, specifically designed
            based on customer demand for a durable and stylish alternative.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Your insights help us ensure we’re always offering the best solutions
            for your outdoor projects.
          </p>

          {/* Testimonial block */}
          <div className="bg-[#004225] text-white p-6 rounded-sm mt-auto">
            <p className="text-lg font-medium leading-relaxed">
              “I mentioned I was looking for composite fencing that could fit into my
              existing posts, and Composite Warehouse delivered! So happy with the
              new range.”
            </p>
            <p className="mt-4 text-sm italic">- Customer Name</p>
          </div>
        </div>
      </div>
    </main>
  );
}
