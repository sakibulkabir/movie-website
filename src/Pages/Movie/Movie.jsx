// src/components/MoviesSection.jsx
import React from "react";

const movies = [
  {
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    title: "Inception",
    rating: 8.8,
    year: 2010,
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    title: "Interstellar",
    rating: 8.6,
    year: 2014,
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    title: "Joker",
    rating: 8.5,
    year: 2019,
  },
  {
    poster: "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    title: "Wonder Woman 1984",
    rating: 5.4,
    year: 2020,
  },
];

const Movie = () => {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl text-white font-bold mb-8 text-center">Movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-yellow-500/50 cursor-pointer"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-white text-xl font-bold mb-2">{movie.title}</h2>
                <div className="flex justify-between items-center text-yellow-400 font-semibold">
                  <span>⭐ {movie.rating}</span>
                  <span>{movie.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Movie;
