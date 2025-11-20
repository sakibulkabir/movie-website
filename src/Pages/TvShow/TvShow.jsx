// src/components/TVShowsSection.jsx
import React from "react";

const tvShows = [
  {
    poster: "https://image.tmdb.org/t/p/w500/2C4m0j1Q0WfO4bRe9F9fTso6o9S.jpg",
    title: "Stranger Things",
    rating: 8.7,
    year: 2016,
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    title: "Breaking Bad",
    rating: 9.5,
    year: 2008,
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg",
    title: "Game of Thrones",
    rating: 9.3,
    year: 2011,
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/5cPZ7xWQfYl8Jr4R6dyh1eYDR64.jpg",
    title: "The Witcher",
    rating: 8.2,
    year: 2019,
  },
];

const TvShow = () => {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl text-white font-bold mb-8 text-center">TV Shows</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tvShows.map((show, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-yellow-500/50 cursor-pointer"
            >
              <img
                src={show.poster}
                alt={show.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-white text-xl font-bold mb-2">{show.title}</h2>
                <div className="flex justify-between items-center text-yellow-400 font-semibold">
                  <span>⭐ {show.rating}</span>
                  <span>{show.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TvShow;
