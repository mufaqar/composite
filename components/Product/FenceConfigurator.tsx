"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";

type Option = {
  id: string;
  label: string;
  image?: string; // optional image
  color?: string; // optional color swatch
};

export default function FenceConfigurator() {
  // STATE
  const [unit, setUnit] = useState<"cm" | "ft">("cm");
  const [height, setHeight] = useState("220cm");
  const [postType, setPostType] = useState("composite");
  const [slatType, setSlatType] = useState("classic");
  const [slatColour, setSlatColour] = useState("darkgrey");
  const [panelTrim, setPanelTrim] = useState("");
  const [screenstyle, setScreenstyle] = useState("");
  const [postcolor, setPostColour] = useState("");
  const [installation, setInstallation] = useState("");
  const [quantity, setQuantity] = useState(1);

  // OPTIONS
  const heightsCM: Option[] = [
    { id: "220cm", label: "220cm" },
    { id: "190cm", label: "190cm" },
    { id: "160cm", label: "160cm" },
    { id: "140cm", label: "140cm" },
    { id: "120cm", label: "120cm" },
    { id: "100cm", label: "100cm" },
  ];
  const heightsFT: Option[] = [
    { id: "7ft", label: "7 ft" },
    { id: "6ft", label: "6 ft" },
    { id: "5ft", label: "5 ft" },
    { id: "4ft", label: "4 ft" },
    { id: "3ft", label: "3 ft" },
  ];

  const posts: Option[] = [
    { id: "aluminium", label: "Our Aluminium Posts", image: "/images/comp1.png" },
    { id: "composite", label: "Our Composite Posts", image: "/images/comp2.png" },
    { id: "concrete", label: "Your Concrete Posts", image: "/images/comp3.png" },
  ];

  const slats: Option[] = [
    { id: "classic", label: "Classic", image: "/images/comslat7.png" },
    { id: "fusion", label: "Fusion", image: "/images/comslat2.png" },
    { id: "hudson", label: "Hudson", image: "/images/comslat3.png" },
    { id: "vinto", label: "Vinto", image: "/images/comslat4.png" },
    { id: "ripple", label: "Ripple", image: "/images/comslat5.png" },
    { id: "aspen", label: "Aspen", image: "/images/comslat7.png" },
    { id: "linea", label: "Linea", image: "/images/comslat6.png" },
  ];

  const colours: Option[] = [
    { id: "black", label: "Black", image: "/images/color1.png" },
    { id: "grey", label: "Grey", image: "/images/color2.png" },
    { id: "darkgrey", label: "Dark Grey", image: "/images/color3.png" },
    { id: "midstone", label: "Mid Stone", image: "/images/color4.png" },
    { id: "lightstone", label: "Light Stone", image: "/images/color5.png" },
    { id: "lightstone1", label: "Light Stone", image: "/images/color6.png" },
    { id: "lightstone2", label: "Light Stone", image: "/images/color7.png" },
  ];

  const panelTrims: Option[] = [
    { id: "upgradedtrim", label: "Upgraded Trim", image: "/images/paneltrim1.png" },
    { id: "standardtrim", label: "Standard Trim", image: "/images/paneltrim2.png" },
  ];

  const screenstyles: Option[] = [
    { id: "fullslats", label: "Full Slats", image: "/images/screen1.png" },
    { id: "straighttop", label: "Straight Top", image: "/images/screen2.png" },
    { id: "curvedtop", label: "Curved Top", image: "/images/screen3.png" },
  ];

  const postcolors: Option[] = [
    { id: "black", label: "Black", image: "/images/color1.png" },
    { id: "darkgrey", label: "Dark Grey", image: "/images/color3.png" },
  ];

  const installations: Option[] = [
    { id: "solidconcrete", label: "Solid / Concrete", image: "/images/installation1.png" },
    { id: "timberdecking", label: "Timber / Decking", image: "/images/installation2.png" },
    { id: "sunkintoground", label: "Sunk Into Ground", image: "/images/installation3.png" },
  ];

  // Utility: get label by id
  const getLabel = (options: Option[], id: string) =>
    options.find((opt) => opt.id === id)?.label || "None";

  // Map of summary selections
  const summary = [
    { label: "Height", value: getLabel(unit === "cm" ? heightsCM : heightsFT, height) },
    { label: "Post Type", value: getLabel(posts, postType) },
    { label: "Slat Type", value: getLabel(slats, slatType) },
    { label: "Slat Colour", value: getLabel(colours, slatColour) },
    { label: "Top Trim", value: getLabel(panelTrims, panelTrim) },
    { label: "Screen Style", value: getLabel(screenstyles, screenstyle) },
    { label: "Post Colour", value: getLabel(postcolors, postcolor) },
    { label: "Installation", value: getLabel(installations, installation) },
    { label: "Quantity", value: quantity.toString() },
  ];

  // REUSABLE RENDER FUNCTION
  const renderOptions = (
    options: Option[],
    selected: string,
    setSelected: (id: string) => void,
    gridCols = "grid-cols-4"
  ) => (
    <div className={`grid ${gridCols} gap-4 mt-3`}>
      {options.map((opt) => (
        <div
          key={opt.id}
          onClick={() => setSelected(opt.id)}
          className="cursor-pointer text-center transition-all ease-in-out w-full"
        >
          {/* IMAGE or COLOR SWATCH */}
          {opt.image && (
            <div
              className={`${selected === opt.id ? "border-secondary" : "border-transparent"} border-3 h-fit w-full relative mb-2`}
            >
              {selected === opt.id && (
                <span className="absolute -top-2 -right-2 inline-flex w-7 h-7 justify-center items-center rounded-full bg-secondary text-white">
                  <FaCheck />
                </span>
              )}
              <Image
                src={opt.image}
                alt={opt.label}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
          )}
          {opt.color && (
            <div
              className="h-16 w-16 mx-auto rounded-full border mb-2"
              style={{ backgroundColor: opt.color }}
            />
          )}
          {/* LABEL */}
          <span className="md:text-base text-sm font-normal text-description text-center font-Satoshi">
            {opt.label}
          </span>
        </div>
      ))}
    </div>
  );

  // Handle Add to Cart
  const handleAddToCart = () => {
    const selection = {
      height,
      postType,
      slatType,
      slatColour,
      panelTrim,
      screenstyle,
      postcolor,
      installation,
      quantity,
    };
    console.log("Added to Cart:", selection);
    alert("Added to Cart! Check console log.");
  };

  return (
    <div className="container mx-auto px-4 flex md:flex-row flex-col gap-6 mt-10">
      {/* Summary */}
      <div className="md:w-1/2 w-full">
        <h3 className="font-semibold mb-2">Your Selection:</h3>
        {summary.map((item) => (
          <p key={item.label}>
            {item.label}: {item.value}
          </p>
        ))}
      </div>

      {/* Configurator */}
      <div className="md:w-1/2 w-full space-y-8">
        {/* Step 1: Height */}
        <div className="border border-[#E4E4E4] p-2 pb-9">
          <div className="md:text-lg text-sm font-normal text-white font-Satoshi bg-[#003D2C] py-4 px-7 flex">
            <span className="flex w-fit">Step 1:</span>
            <p className="text-center w-fit mx-auto">
              <span className="text-white/50">Post height: </span> {getLabel(unit === "cm" ? heightsCM : heightsFT, height) }
            </p>
          </div>
          <div className="flex gap-2 mt-4 divide-x divide-[#E4E4E4]">
            <button
              onClick={() => setUnit("cm")}
              className={`${unit === "cm" ? "text-secondary" : "text-description"} md:text-lg text-sm font-normal hover:text-secondary px-4`}
            >
              CM
            </button>
            <button
              onClick={() => setUnit("ft")}
              className={`${unit === "ft" ? "text-secondary" : "text-description"} md:text-lg text-sm font-normal hover:text-secondary px-4`}
            >
              FT
            </button>
          </div>
          <div className="flex gap-1 mt-4 flex-wrap">
            {(unit === "cm" ? heightsCM : heightsFT).map((h) => (
              <button
                key={h.id}
                onClick={() => setHeight(h.id)}
                className={`md:text-lg text-sm font-normal px-4 py-2 rounded-full border hover:bg-primary hover:text-white ${
                  height === h.id
                    ? "bg-primary text-white"
                    : "bg-white text-description border-transparent"
                }`}
              >
                {h.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Post Type */}
        <div className="border border-[#E4E4E4] p-2 pb-9">
          <div className="md:text-lg text-sm font-normal text-white font-Satoshi bg-[#003D2C] py-4 px-7 flex">
            <span className="flex w-fit">Step 2:</span>
            <p className="text-center w-fit mx-auto">
              <span className="text-white/50">Post Type: </span> {getLabel(posts, postType) }
            </p>
          </div>
          {renderOptions(posts, postType, setPostType)}
        </div>

        {/* Step 3: Slat Type */}
        <div className="border border-[#E4E4E4] p-2 pb-9">
          <div className="md:text-lg text-sm font-normal text-white font-Satoshi bg-[#003D2C] py-4 px-7 flex">
            <span className="flex w-fit">Step 3:</span>
            <p className="text-center w-fit mx-auto">
              <span className="text-white/50">Slat Type: </span> {getLabel(slats, slatType) }
            </p>
          </div>
          <h4 className="md:text-base text-sm font-bold text-secondary font-DM_Sans my-4 px-7">
            Composite Slats
          </h4>
          {renderOptions(slats, slatType, setSlatType, "grid-cols-4")}
        </div>

        {/* Step 4: Slat Colour */}
        <div className="border border-[#E4E4E4] p-2 pb-9">
          <div className="md:text-lg text-sm font-normal text-white font-Satoshi bg-[#003D2C] py-4 px-7 flex">
            <span className="flex w-fit">Step 4:</span>
            <p className="text-center w-fit mx-auto capitalize">
              <span className="text-white/50">Slat Colour: </span> {getLabel(colours, slatColour) }
            </p>
          </div>
          {renderOptions(colours, slatColour, setSlatColour, "grid-cols-4")}
        </div>

        {/* Step 5: Panel Trim */}
        <div className="border border-[#E4E4E4] p-2 pb-9">
          <div className="md:text-lg text-sm font-normal text-white font-Satoshi bg-[#003D2C] py-4 px-7 flex">
            <span className="flex w-fit">Step 5:</span>
            <p className="text-center w-fit mx-auto capitalize">
              <span className="text-white/50">
                Upgrade and add our Top & Bottom Panel Trim:
              </span>
            </p>
          </div>
          {renderOptions(panelTrims, panelTrim, setPanelTrim)}
        </div>

        {/* Step 6: Screen Style */}
        <div className="border border-[#E4E4E4] p-2 pb-9">
          <div className="md:text-lg text-sm font-normal text-white font-Satoshi bg-[#003D2C] py-4 px-7 flex">
            <span className="flex w-fit">Step 6:</span>
            <p className="text-center w-fit mx-auto capitalize">
              <span className="text-white/50">Screen Style: </span> {getLabel(screenstyles, screenstyle) }
            </p>
          </div>
          {renderOptions(screenstyles, screenstyle, setScreenstyle)}
        </div>

        {/* Step 7: Post Colour */}
        <div className="border border-[#E4E4E4] p-2 pb-9">
          <div className="md:text-lg text-sm font-normal text-white font-Satoshi bg-[#003D2C] py-4 px-7 flex">
            <span className="flex w-fit">Step 7:</span>
            <p className="text-center w-fit mx-auto capitalize">
              <span className="text-white/50">Post Colour: </span> {getLabel(postcolors, postcolor) }
            </p>
          </div>
          {renderOptions(postcolors, postcolor, setPostColour)}
        </div>

        {/* Step 8: Installation Method */}
        <div className="border border-[#E4E4E4] p-2 pb-9">
          <div className="md:text-lg text-sm font-normal text-white font-Satoshi bg-[#003D2C] py-4 px-7 flex">
            <span className="flex w-fit">Step 8:</span>
            <p className="text-center w-fit mx-auto capitalize">
              <span className="text-white/50">Installation Method: </span> {getLabel(installations, installation) }
            </p>
          </div>
          {renderOptions(installations, installation, setInstallation)}
        </div>

        {/* Short description */}
        <div className="mt-3 mb-10">
          <p className="md:text-xl text-sm font-normal text-description mb-8">
            Introducing the first of its kind and seen in the U.K. our vertical
            fencing unit. Produced to focus on the traditional fence panel. This
            in product boast the benefits of composite fencing with its low
            maintenance solution as well as providing a strong, durable and
            weather-resistant fence unit.
          </p>
          <Link
            href="#"
            className="md:text-lg text-sm font-bold text-secondary underline inline-flex "
          >
            Request a Free Sample
          </Link>
        </div>

        {/* Quantity & Add to Cart */}
        <div>
          <h3 className="md:text-xl text-sm font-bold text-title mb-5">
            Quantity
          </h3>
          <div className="flex items-center gap-4">
            {/* Quantity Selector */}
            <div className="flex items-center border border-[#B2B2B2] rounded-full px-4 py-3">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-2 text-lg"
              >
                -
              </button>
              <span className="md:text-lg text-sm font-bold text-title font-Satoshi px-4">
                {quantity.toString().padStart(2, "0")}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-2 text-lg"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="md:text-lg text-sm font-bold bg-black text-white rounded-full px-6 py-3 hover:bg-primary w-full transition-all ease-in-out duration-300"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
