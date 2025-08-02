import React from "react";
import burger from "../assets/images/burger.jpg";
import beans from "../assets/images/beans1.jpg";
import { Link } from "react-router-dom";
import AnimatedSection from "../component/AnimatedSection";

export default function AboutSection() {
  return (
    <AnimatedSection>
    <section className="py-20 bg-white text-gray-800 font-montserrat">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* History Section */}
        <div className="space-y-6">
          <h3 className="text-gray-500 italic text-xl">𝓗𝓲𝓼𝓽𝓸𝓻𝔂 𝓸𝓯</h3>
          <h2 className="text-4xl font-bold text-gray-900">
            Our Cafe
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Established with love for authentic flavors, Dekettlecafe has been serving mouth-watering dishes made from the freshest ingredients. 
            Our journey started with a vision: to bring people together through food that not only satisfies hunger but also creates memories. 
          </p>
          <p className="text-gray-600 leading-relaxed">
            From classic pizzas to innovative fusion dishes, our menu is crafted to please every taste bud. With a cozy ambiance and a passionate team,
             we promise an unforgettable dining experience.
            From classic pizzas to innovative fusion dishes, our menu is crafted to please every taste bud. With a cozy ambiance and a passionate team,
             we promise an unforgettable dining experience.
          </p>
          <Link 
             to="/about" 
             className="bg-orange-400 hover:bg-orange-500 text-black font-bold py-3 px-6 rounded shadow-lg transition inline-block"
           >
            𝓞𝓾𝓻 𝓼𝓽𝓸𝓻𝔂
           </Link>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={burger}
            alt="Burger and Fries"
            className="rounded-lg shadow-lg border-4 border-orange-100"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center mt-20">
        
        {/* Image */}
        <div className="flex justify-center order-2 md:order-1">
          <img
            src={beans}
            alt="Delicious Dish"
            className="rounded-lg shadow-lg border-4 border-orange-100"
          />
        </div>

        {/* Services Content */}
        <div className="space-y-6 order-1 md:order-2">
          <h3 className="text-gray-500 italic text-xl">𝓓𝓮𝓭𝓲𝓬𝓪𝓽𝓮𝓭</h3>
          <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="text-gray-600 leading-relaxed">
            At <span className="font-bold text-orange-500">DekettleCafe</span>, 
            we believe dining is more than just eating — it’s an experience. 
            Whether you’re here for a quick bite, a family dinner, or a casual 
            hangout, we ensure top-quality service and a warm, welcoming 
            environment.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our chefs are dedicated to blending traditional recipes with modern 
            flavors. We also provide takeaway and online ordering, making it 
            easier for you to enjoy our food anytime, anywhere.
          </p>
          <Link 
             to="/about" 
             className="bg-orange-400 hover:bg-orange-500 text-black font-bold py-3 px-6 rounded shadow-lg transition inline-block"
           >
            𝓞𝓾𝓻 𝓼𝓽𝓸𝓻𝔂
           </Link>
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
}
