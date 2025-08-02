import React from "react";

const Contact = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-black via-[#1a120b] to-[#2c1b10] text-white flex items-center justify-center px-6 md:px-16 py-20">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat tracking-wide">
          📞 Contact Us
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          This space is about to get exciting!  
          Whether you wanna collab, ask questions, or just vibe with us —  
          we’ve got something amazing coming soon.  
        </p>

        {/* Coming Soon Note */}
        <div className="bg-[#2c1b10]/80 p-6 rounded-xl shadow-lg">
          <p className="text-orange-400 font-semibold text-lg">
            🚀 Stay tuned — our contact form is dropping soon!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
