import React from "react";

const AboutUs = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-[#2c1b10] via-black to-[#1a120b] text-white flex items-center justify-center px-6 md:px-16 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold font-montserrat tracking-wide">
          ⚡ About Us — <span className="text-orange-400">Coming Soon</span>
        </h2>

        {/* Teaser Text */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Yo fam 👋, abhi to sirf trailer hai — picture abhi baaki hai 🔥🍕.  
          𝓓𝓻𝓪𝓰𝓸𝓷 𝓓𝓮𝓵𝓲𝓰𝓱𝓽 Cafe is cooking up something lit — a place where your vibes meet
          the perfect snacks & brews ☕✨.  
          Stay tuned, kyunki hum lekar aa rahe hain woh experience jo Instagram
          pe bhi filter se zyada aesthetic lagega 😎📸.
        </p>

        {/* Funky Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-[#2c1b10]/80 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-orange-400">🚀 New Vibes</h3>
            <p className="mt-3 text-gray-300">
              Coffee + Chill + Squad Goals = perfect hangout 🔥.
            </p>
          </div>
          <div className="bg-[#2c1b10]/80 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-orange-400">🎶 Lo-Fi Beats</h3>
            <p className="mt-3 text-gray-300">
              Late-night convos + chill music = endless memories 💫.
            </p>
          </div>
          <div className="bg-[#2c1b10]/80 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-orange-400">🍕 Foodie Heaven</h3>
            <p className="mt-3 text-gray-300">
              From pizza cravings to chai pe charcha ☕🍕, sab milega soon 👀.
            </p>
          </div>
        </div>

        {/* CTA */}
        <button className="mt-10 bg-orange-400 hover:bg-orange-500 text-black font-bold py-4 px-8 rounded-xl shadow-lg transition text-lg">
          👀 Stay Tuned, Fam!
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
