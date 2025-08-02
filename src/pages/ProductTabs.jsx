import React, { useState } from "react";
import soda from "../assets/images/soda.jpg";
import roll from "../assets/images/roll.jpg";
import power from "../assets/images/power.jpg";
import chococ from "../assets/images/chococ.jpg";
import burgeer from "../assets/images/burgeer.jpg";
import chicken from "../assets/images/chicken.jpg";
import ch from "../assets/images/ch.jpg";
import cappp from "../assets/images/cappp.jpg";
import AnimatedSection from "../component/AnimatedSection";

const products = [
  { id: 1, name: "Cheese Burger with Beer", price: 30.95, oldPrice: 20.95, rating: 3, image: burgeer },
  { id: 2, name: "Cold Lemon Soda", price: 30.95, oldPrice: 20.95, rating: 4, image: soda },
  { id: 3, name: "Green Tea Ice Cream", price: 30.95, oldPrice: 20.95, rating: 5, image: ch },
  { id: 4, name: "Energy Drink Can", price: 30.95, oldPrice: 20.95, rating: 3, image: power },
  { id: 5, name: "Veggie Wrap", price: 25.99, oldPrice: 18.99, rating: 4, image: roll },
  { id: 6, name: "Chocolate Ice Cream", price: 28.5, oldPrice: 22.99, rating: 5, image: chococ },
  { id: 7, name: "Chicken Burger", price: 35.95, oldPrice: 27.99, rating: 4, image: chicken },
  { id: 8, name: "Cappuccino Coffee", price: 15.95, oldPrice: 12.99, rating: 5, image: cappp },
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("feature");

  const getProducts = () => {
    if (activeTab === "feature") return products;
    return products.slice(0, 4);
  };

  return (
    <AnimatedSection>
      <section className="py-20 font-montserrat">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-white mb-8">
            𝓦𝓮 𝓵𝓸𝓿𝓮 <span className="text-orange-500">𝓽𝓻𝓮𝓷𝓭</span>
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {["feature", "latest", "popular"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded font-semibold transition ${
                  activeTab === tab
                    ? "bg-orange-400 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Products
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {getProducts().map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300 transform hover:scale-105 overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-48 w-full object-cover mb-4 rounded-md"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <div className="flex justify-center my-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < product.rating ? "text-orange-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-orange-500 font-bold">
                  ${product.price.toFixed(2)}{" "}
                  <span className="line-through text-gray-400 text-sm">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
