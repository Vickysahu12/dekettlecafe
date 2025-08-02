import React from "react";

const BookaTable = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#2c1b10] via-black to-[#1a120b] text-white flex items-center justify-center px-6 md:px-16 py-20">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold font-montserrat tracking-wide">
          🍽️ Book Your <span className="text-orange-400">Spot</span>
        </h2>

        {/* Simple Placeholder Text */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Online booking is <span className="text-orange-400 font-bold">coming soon</span> 🚀  
          Stay tuned for an easy way to reserve your table!
        </p>
      </div>
    </section>
  );
};

export default BookaTable;
