import React from "react";
import soup from "../assets/images/ross.jpg";
import steak from "../assets/images/roger.jpg";
import roll from "../assets/images/valer.jpg";
import AnimatedSection from "../component/AnimatedSection";

const blogs = [
  {
    id: 1,
    title: "Scelerisque vestibulum...",
    date: "17 Dec 2020",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...",
    image: soup,
  },
  {
    id: 2,
    title: "Scelerisque vestibulum...",
    date: "17 Dec 2020",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...",
    image: steak,
  },
  {
    id: 3,
    title: "Scelerisque vestibulum...",
    date: "17 Dec 2020",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the...",
    image: roll,
  },
];

export default function LatestBlog() {
  return (
    <AnimatedSection>
    <section className="py-16 bg-gray-50 font-montserrat">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          𝓛𝓪𝓽𝓮𝓼𝓽  <span className="text-orange-500">𝓑𝓵𝓸𝓰</span>
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-52 w-full object-cover"
              />
              <div className="p-6 text-left">
                <span className="inline-block bg-orange-500 text-white text-sm px-3 py-1 rounded">
                  {blog.date}
                </span>
                <h3 className="text-lg font-semibold text-gray-800 mt-3">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">{blog.description}</p>
                <button className="mt-4 text-orange-500 font-semibold hover:underline">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
}
