"use client";

import Image from "next/image";
import Slider from "react-slick";

import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

// testimonialData.ts
const testimonials = [
  {
    id: 1,
    text: "Excellent quality decking and fantastic customer service. Highly recommend!",
    name: "John D.",
    role: "CEO, Company",
    image: "/images/testimonail.png", // place in public folder
    rating: 5,
  },
  {
    id: 2,
    text: "The composite fencing looks amazing and was so easy to install. Very happy!",
    name: "Sarah M.",
    role: "Manager",
    image: "/images/testimonail.png",
    rating: 4,
  },
  {
    id: 3,
    text: "I’m impressed with the durability and look of the cladding. Great choice!",
    name: "Michael B.",
    role: "Homeowner",
    image: "/images/testimonail.png",
    rating: 5,
  },
];

// Custom arrows
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute -left-8 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 z-10"
  >
    <MdArrowBackIos />
  </button>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute -right-8 top-1/2 -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 z-10"
  >
    <MdArrowForwardIos />
  </button>
);

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our <br /> Customers Say
          </h2>
          <p className="mt-4 md:mt-0 text-gray-300 max-w-md text-sm md:text-base">
            Don’t just take our word for it—here’s what our satisfied clients
            have to say
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {testimonials.map((t) => (
            <div key={t.id} className="px-4">
              <div className="bg-gray-900 p-6 rounded-lg h-full flex flex-col justify-between">
                <FaQuoteLeft className="text-green-500 text-2xl mb-4" />
                <p className="text-gray-200 mb-6 italic">“{t.text}”</p>

                <div className="flex items-center gap-4 mt-auto">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-sm text-gray-400">{t.role}</p>
                    <div className="flex text-yellow-400 mt-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
