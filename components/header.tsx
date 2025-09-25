"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaPhoneVolume } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

type MenuItem = {
  label: string;
  href: string;
};

const menuItems: MenuItem[] = [
  { label: "Decking", href: "/decking" },
  { label: "Fencing", href: "/fencing" },
  { label: "Cladding", href: "/cladding" },
  { label: "Free Samples", href: "/free-samples" },
  { label: "Customer Reviews", href: "/customer-reviews" },
  { label: "Advice Centre", href: "/advice-centre" },
  { label: "Contact Us", href: "/contact-us" },
];

const Header = () => {
  const [mblMenu, setMblMenu] = useState(false);

  return (
    <header className="py-3.5 mb-[-102px] relative z-50">
      <div className="container mx-auto px-4 flex flex-row gap-5 items-center justify-between">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={148} height={74} />
          </Link>
        </div>

        {/* Menu */}
        <div>
          {/* Mobile menu button */}
          <button
            onClick={() => setMblMenu(!mblMenu)}
            className="text-4xl text-white md:hidden inline-flex items-center justify-center"
          >
            {mblMenu ? <IoMdClose /> : <FaBars />}
          </button>

          {/* Nav */}
          <nav
            className={`
              md:static absolute top-20 left-0 right-0 
              md:bg-transparent bg-primary 
              md:p-0 p-4 transition-all duration-300 ease-in-out
              ${mblMenu ? "block" : "hidden"} md:block
            `}
          >
            <ul className="flex md:flex-row flex-col gap-6">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-white hover:text-gray-300 md:p-0 transition-all duration-300 ease-in-out"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right side buttons */}
        <div className="md:flex gap-2.5 hidden">
          <Link
            href="#"
            className="text-2xl text-white inline-flex w-[59px] h-[59px] items-center justify-center rounded-full border-2 border-white/30 bg-white/20 hover:bg-primary hover:border-primary transition-all duration-300 ease-in-out"
          >
            <FaPhoneVolume />
          </Link>
          <Link
            href="#"
            className="text-lg font-bold text-black inline-flex w-fit md:px-7 md:py-[18px] px-5 py-2.5 bg-white rounded-4xl hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
          >
            Request a Free Sample
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
