import React from "react";

const Blog = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-black via-[#1a120b] to-[#2c1b10] text-white flex items-center justify-center px-6 md:px-16 py-20">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold font-montserrat tracking-wide">
          ✍️ 𝓓𝓻𝓪𝓰𝓸𝓷 𝓓𝓮𝓵𝓲𝓰𝓱𝓽 Cafe <span className="text-orange-400">Blog</span>
        </h2>

        {/* Simple Placeholder Text */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Our blog is <span className="text-orange-400 font-bold">coming soon</span> 🚀  
          Stay tuned for exciting stories, recipes, and behind‑the‑scenes updates!
        </p>
      </div>
    </section>
  );
};

export default Blog;
