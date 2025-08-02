import React from 'react'
import pizza from "../assets/images/pizza3.png"
import { Link } from 'react-router-dom';
import AnimatedSection from '../component/AnimatedSection';

export default function Hero() {
  return (
    <AnimatedSection>
    <section 
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-[#2c1b10] to-black text-white pt-[120px] pb-12"
    >
      {/* Background strip to merge with navbar */}
      <div className="absolute top-0 left-0 w-full h-[120px] bg-gradient-to-r from-[#2c1b10] to-black -z-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-12">
        
        {/* Left Side (Pizza Image) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src={pizza} 
            alt="Pizza" 
            className="w-72 sm:w-80 md:w-[600px] rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side (Text Content) */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 px-2 md:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider font-montserrat leading-snug">
            𝓢𝓾𝓹𝓮𝓻 <br/> 𝓓𝓮𝓵𝓲𝓬𝓲𝓸𝓾𝓼 𝓹𝓲𝔃𝔃𝓪
          </h1>
          <p className="text-gray-300 text-lg">
            Special Offer Big Sale up To <span className="text-orange-400 font-bold">30% Off</span>
          </p>
          <Link 
             to="/Products" 
             className="bg-orange-400 hover:bg-orange-500 text-black font-bold py-3 px-6 rounded shadow-lg transition inline-block"
           >
            𝓼𝓱𝓸𝓹 𝓷𝓸𝔀
           </Link>

        </div>
      </div>
    </section>
    </AnimatedSection>
  );
}
