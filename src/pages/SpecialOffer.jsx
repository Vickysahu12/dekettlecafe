import React from "react";
import burger from "../assets/images/bur1.png";
import bowl from "../assets/images/bowl1.png";
import AnimatedSection from "../component/AnimatedSection";

export default function SpecialOffers() {
  return (
    <AnimatedSection>
    <section className="py-16 bg-white font-montserrat">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">

        {/* Left Card */}
        <div className="relative bg-orange-400 rounded-lg overflow-hidden flex items-center justify-between shadow-lg max-w-md mx-auto">
          <div className="w-1/2 flex justify-center">
            <img
              src={burger}
              alt="Delicious Burger"
              className="object-contain h-52 md:h-64"
            />
          </div>
          <div className="w-1/2 text-center text-white p-4 md:p-6">
            <p className="text-xs md:text-sm uppercase tracking-wider font-semibold">
              Hot And Special
            </p>
            <h2 className="text-xl md:text-2xl font-bold mt-2 leading-snug">
              Delicious Burger
            </h2>
            <p className="mt-2 text-xs md:text-sm">
              Discount 40% All Soup Menu
            </p>
            <button className="mt-4 bg-black hover:bg-gray-900 text-white px-4 py-2 rounded shadow-md transition">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative bg-black rounded-lg overflow-hidden flex items-center justify-between shadow-lg max-w-md mx-auto">
          <div className="w-1/2 flex justify-center">
            <img
              src={bowl}
              alt="Hygienic Food"
              className="object-contain h-52 md:h-64"
            />
          </div>
          <div className="w-1/2 text-center text-white p-4 md:p-6">
            <p className="text-xs md:text-sm uppercase tracking-wider font-semibold">
              Hot And Special
            </p>
            <h2 className="text-xl md:text-2xl font-bold mt-2 leading-snug">
              100% Hygienic Food
            </h2>
            <p className="mt-2 text-xs md:text-sm">
              Discount 40% All Soup Menu
            </p>
            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded shadow-md transition">
              Shop Now
            </button>
          </div>
        </div>

      </div>
    </section>
    </AnimatedSection>
  );
}
