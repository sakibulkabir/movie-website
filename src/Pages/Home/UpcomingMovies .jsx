import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const movies = [
  {
    id: 1,
    title: "The Easy Reach",
    year: 2021,
    quality: "8K",
    duration: "128 min",
    rating: 3.5,
    img: "https://movflx.atkiah.xyz/img/poster/ucm_poster02.jpg",
  },
  {
    id: 2,
    title: "The Cooking",
    year: 2021,
    quality: "HD",
    duration: "128 min",
    rating: 3.5,
    img: "https://movflx.atkiah.xyz/img/poster/ucm_poster03.jpg",
  },
  {
    id: 3,
    title: "Women's Day",
    year: 2021,
    quality: "HD",
    duration: "128 min",
    rating: 3.5,
    img: "https://movflx.atkiah.xyz/img/poster/ucm_poster04.jpg",
  },
  {
    id: 4,
    title: "The Perfect Match",
    year: 2021,
    quality: "4K",
    duration: "128 min",
    rating: 3.5,
    img: "https://movflx.atkiah.xyz/img/poster/ucm_poster05.jpg",
  },
  {
    id: 5,
    title: "Future Heroes",
    year: 2022,
    quality: "HD",
    duration: "130 min",
    rating: 4.0,
    img: "https://movflx.atkiah.xyz/img/poster/ucm_poster01.jpg",
  },
];

const UpcomingMovies = () => {
  const [index, setIndex] = useState(0);

  // Responsive items per page
  const getItemsPerPage = () => {
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 768) return 2; // md
    return 1; // sm
  };

  const itemsPerPage = getItemsPerPage();

  const nextSlide = () => {
    if (index + itemsPerPage < movies.length) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const visibleMovies = movies.slice(index, index + itemsPerPage);

  return (
    <div className="bg-[#0b0b0b] text-white py-12 px-5 sm:px-8 lg:px-24">
      <div className="container mx-auto">
        {/* Heading and Tabs */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <p className="text-yellow-400 text-sm uppercase mb-1">Online Streaming</p>
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold">Upcoming Movies</h2>
          </div>

          {/* Category Buttons and Arrows */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4 md:mt-0">
            <div className="flex gap-3 flex-wrap">
              {["TV Shows", "Movies", "Anime"].map((cat) => (
                <button
                  key={cat}
                  className="px-4 py-1 rounded-full border border-gray-600 hover:border-yellow-400 hover:text-yellow-400 transition text-sm"
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3 mt-2 sm:mt-0">
              <button
                onClick={prevSlide}
                className="bg-gray-800 hover:bg-yellow-400 p-3 rounded-full transition"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="bg-gray-800 hover:bg-yellow-400 p-3 rounded-full transition"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        {/* Movie Cards */}
        <div className="flex flex-wrap justify-center gap-6 transition-all duration-500">
          {visibleMovies.map((movie) => (
            <div
              key={movie.id}
              className="w-full sm:w-[45%] lg:w-[250px] bg-[#111] rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={movie.img}
                alt={movie.title}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{movie.title}</h3>
                <div className="flex items-center gap-2 sm:gap-3 text-sm text-gray-400 mt-1 flex-wrap">
                  <span>{movie.year}</span>
                  <span>•</span>
                  <span>{movie.duration}</span>
                  <span>•</span>
                  <span>{movie.rating}⭐</span>
                </div>
                <span className="inline-block mt-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">
                  {movie.quality}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingMovies;
