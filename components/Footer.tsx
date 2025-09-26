'use client'

import Link from "next/link"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"

// Footer Menus
const products = [
  { name: "Composite Decking", href: "#" },
  { name: "Composite Fencing", href: "#" },
  { name: "Composite Cladding", href: "#" },
  { name: "Free Samples", href: "#" },
]

const information = [
  { name: "About Us", href: "#" },
  { name: "Customer Reviews", href: "#" },
  { name: "Advice Centre", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Delivery & Returns", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Terms & Conditions", href: "#" },
]

// Social Icons
const socials = [
  { name: "Facebook", href: "#", icon: FaFacebookF },
  { name: "Instagram", href: "#", icon: FaInstagram },
  { name: "YouTube", href: "#", icon: FaYoutube },
]

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Description */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">COMPOSITE</h3>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adip elit.
            Posuere dolor massa, pellentesque.
          </p>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-white font-semibold mb-4">PRODUCTS</h4>
          <ul className="space-y-2 text-sm">
            {products.map((item, i) => (
              <li key={i}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div>
          <h4 className="text-white font-semibold mb-4">INFORMATION</h4>
          <ul className="space-y-2 text-sm">
            {information.map((item, i) => (
              <li key={i}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">CONTACT US</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <span className="text-red-500">📧</span>
              yourcompany@email.com
            </li>
            <li className="flex items-center gap-2">
              <span className="text-red-500">📞</span>
              +1 627 8697 1264
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 Copyright Company.com
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            {socials.map((social, i) => {
              const Icon = social.icon
              return (
                <Link
                  key={i}
                  href={social.href}
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                  aria-label={social.name}
                >
                  <Icon className="text-white" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
