import React from "react";

const Products = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#1a120b] via-black to-[#2c1b10] text-white flex items-center justify-center px-6 md:px-16 py-20">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold font-montserrat tracking-wide">
          🛒 Our <span className="text-orange-400">Products</span> — Coming Soon
        </h2>

        {/* Teaser Text */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Hold up fam 👀... abhi ke liye sirf vibes, par thodi der mein full-on drip 💯.  
          𝓓𝓻𝓪𝓰𝓸𝓷 𝓓𝓮𝓵𝓲𝓰𝓱𝓽 Cafe is dropping <span className="text-orange-400 font-bold">mouth-watering products</span>  
          jo tumhari cravings ko next level pe le jayenge 🔥🍕☕.
        </p>

        {/* Product Teasers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-[#2c1b10]/80 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-orange-400">🍕 Pizzas</h3>
            <p className="mt-3 text-gray-300">
              Thin crust ya cheesy burst — sab milega soon 😋.
            </p>
          </div>
          <div className="bg-[#2c1b10]/80 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-orange-400">☕ Coffees</h3>
            <p className="mt-3 text-gray-300">
              Espresso shots that hit harder than Monday mornings 🚀.
            </p>
          </div>
          <div className="bg-[#2c1b10]/80 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-orange-400">🍰 Desserts</h3>
            <p className="mt-3 text-gray-300">
              Sugar rush incoming… get ready to vibe 🍩✨.
            </p>
          </div>
        </div>

        {/* CTA */}
        <button className="mt-12 bg-orange-400 hover:bg-orange-500 text-black font-bold py-4 px-8 rounded-xl shadow-lg transition text-lg">
          🔥 Stay Hungry, Fam — Launching Soon!
        </button>
      </div>
    </section>
  );
};

export default Products;
