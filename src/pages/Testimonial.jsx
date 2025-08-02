import React, { useState, useEffect } from "react";
import soda from "../assets/images/soda.jpg";
import roll from "../assets/images/roll.jpg";
import power from "../assets/images/roll.jpg";
import chococ from "../assets/images/chococ.jpg";
import burgeer from "../assets/images/burgeer.jpg";
import chicken from "../assets/images/chicken.jpg";
import ch from "../assets/images/ch.jpg";
import cappp from "../assets/images/cappp.jpg";
import AnimatedSection from "../component/AnimatedSection";

// Testimonials Data
const testimonials = [
  {
    id: 1,
    name: "Sophia Miller",
    text: "Cookies are the all-time favourites of all those who love tasty and healthy snacks. They bring joy and energy in every bite!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    position: "Food Blogger",
  },
  {
    id: 2,
    name: "James Anderson",
    text: "A perfect blend of taste and health! I love how fresh and hygienic the food feels every time I order.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    position: "Fitness Trainer",
  },
  {
    id: 3,
    name: "Emma Johnson",
    text: "Their pizzas and burgers are not just delicious but also crafted with quality ingredients. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    position: "Chef",
  },
];

// Products Data
const products = [
  { id: 1, name: "Cheese Burger with Beer", price: 30.95, oldPrice: 20.95, rating: 3, image: burgeer },
  { id: 2, name: "Cold Lemon Soda", price: 30.95, oldPrice: 20.95, rating: 4, image: soda },
  { id: 3, name: "Green Tea Ice Cream", price: 30.95, oldPrice: 20.95, rating: 5, image: ch },
  { id: 4, name: "Energy Drink Can", price: 30.95, oldPrice: 20.95, rating: 3, image: power },
];

export default function TestimonialsAndProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slide Testimonials every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <AnimatedSection>
    <section className="py-16 bg-white font-montserrat">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Testimonials Section */}
        <h2 className="text-3xl font-bold mb-8">
          𝓞𝓾𝓻  <span className="text-orange-500">𝓣𝓮𝓼𝓽𝓲𝓶𝓸𝓷𝓲𝓪𝓵𝓼</span>
        </h2>
        
        <div className="transition duration-500">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-orange-400"
          />
          <p className="text-gray-600 italic mb-4 max-w-2xl mx-auto">
            "{testimonial.text}"
          </p>
          <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
          <p className="text-sm text-orange-500">{testimonial.position}</p>
        </div>

        {/* Best Sellers Section */}
        <h2 className="text-3xl font-bold text-gray-800 mt-16 mb-8">
          𝓑𝓮𝓼𝓽 𝓢𝓮𝓵𝓵𝓮𝓻𝓼 <span className="text-orange-500">𝓟𝓻𝓸𝓭𝓾𝓬𝓽𝓼</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-36 mx-auto object-contain mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <div className="flex justify-center my-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-lg ${i < product.rating ? "text-orange-400" : "text-gray-300"}`}
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
