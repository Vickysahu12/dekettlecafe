import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import AnimatedSection from "../component/AnimatedSection";

export default function Footer() {
  return (
    <AnimatedSection>
    <footer className="bg-gradient-to-r from-[#2c1b10] to-black text-gray-300 font-montserrat">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Logo and About */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            𝓓𝓮<span className="text-orange-500">𝓚𝓮𝓽𝓽𝓵𝓮𝓒𝓪𝓯𝓮</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed">
            Welcome to DekettleCafe — a place where every meal feels like home. 
            From freshly brewed coffee to delicious meals, we serve with love 
            and care to make your day brighter.
          </p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-orange-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-orange-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-orange-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500">Special Offers</a></li>
            <li><a href="#" className="hover:text-orange-500">New Arrivals</a></li>
            <li><a href="#" className="hover:text-orange-500">Best Sellers</a></li>
            <li><a href="#" className="hover:text-orange-500">Contact Us</a></li>
            <li><a href="#" className="hover:text-orange-500">Our Stores</a></li>
          </ul>
        </div>

        {/* Our Company */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500">Delivery Info</a></li>
            <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-500">About Us</a></li>
            <li><a href="#" className="hover:text-orange-500">Secure Payment</a></li>
            <li><a href="#" className="hover:text-orange-500">Sitemap</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
          <p className="text-sm">
            Subscribe for updates on new menus, offers & events. You can unsubscribe anytime.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 rounded-l bg-gray-800 text-sm text-gray-300 focus:outline-none"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-r text-white font-semibold hover:bg-orange-600 transition">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} DekettleCafe. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6"/>
          <img src="https://img.icons8.com/color/48/mastercard.png" alt="MasterCard" className="h-6"/>
          <img src="https://img.icons8.com/color/48/paypal.png" alt="PayPal" className="h-6"/>
        </div>
      </div>
    </footer>
    </AnimatedSection>
  );
}
