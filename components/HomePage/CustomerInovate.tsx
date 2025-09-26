// app/page.tsx
import Image from "next/image";

export default function CustomerInnovate() {
  return (
    <section className="pt-16 mb-16">
      <div className="flex md:flex-row flex-col-reverse gap-6">
        {/* Left Image */}
        <div className="md:w-[45%] w-full flex md:z-[3] z-0">
          <Image
            src="/images/innovate.png" // replace with your image in /public
            alt="Composite fencing"
            width={644}
            height={802}
          />
        </div>

        {/* Right Content */}
        <div className="md:w-[55%] w-full md:px-0 px-4 md:pl-20 ">
          {/* Heading */}
          <h2 className="md:text-6xl text-[34px] leading-none font-semibold text-title font-DM_Sans">
            We Listen to Our Customers to Innovate and Improve
          </h2>

          {/* Paragraph */}
          <p className="md:text-xl text-sm font-normal text-description mt-5">
            At Composite Warehouse, your feedback is invaluable. We actively
            listen to your needs and suggestions, which drives our commitment to
            continuous improvement and the introduction of new, high-quality
            products like our composite fencing range, specifically designed
            based on customer demand for a durable and stylish alternative.
          </p>
          <p className="md:text-xl text-sm font-normal text-description mt-5">
            Your insights help us ensure we’re always offering the best solutions
            for your outdoor projects.
          </p>

          {/* Testimonial block */}
          <div className="bg-[#003D2C] md:w-[calc(100%+170px)] md:py-[58px] flex md:flex-row flex-col items-start px-7 py-9 md:-ml-[170px] mt-[50px] mb-[-50px] md:-mb-[200px] relative md:z-0 z-[3]">
            <div className="mxa-w-[561px] mx-auto md:pl-[131px]">
              <p className="md:text-[28px] text-lg font-normal font-DM_Sans text-white ">
                “I mentioned I was looking for composite fencing that could fit into my
                existing posts, and Composite Warehouse delivered! So happy with the
                new range.”
              </p>
              <p className="md:text-xl text-base italic font-normal font-DM_Sans text-white mt-5">- Customer Name</p>
            </div>
            <Image src="/images/qoute.png" alt="qoute" width={168} height={131} className="ml-auto mr-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
