// src/components/BlogSection.jsx
import React from "react";

const blogPosts = [
  {
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    title: "Top 10 Sci-Fi Movies to Watch",
    description: "Explore the best science fiction movies of all time that you must watch.",
    date: "Nov 10, 2025",
  },
  {
    image: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    title: "How TV Shows Changed Entertainment",
    description: "A deep dive into the evolution of TV shows over the last decade.",
    date: "Nov 12, 2025",
  },
  {
    image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    title: "Streaming Services You Should Try",
    description: "Comparison of top streaming services for movies and TV shows.",
    date: "Nov 15, 2025",
  },
];

const Blog = () => {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl text-white font-bold mb-12 text-center">Latest Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-yellow-500/50 cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
                <p className="text-gray-300 text-sm mb-4">{post.description}</p>
                <span className="text-yellow-400 text-sm">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
