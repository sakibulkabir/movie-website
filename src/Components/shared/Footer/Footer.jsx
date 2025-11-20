// src/components/Footer.jsx
import React from "react";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div
        className='bg-[url("https://movflx.atkiah.xyz/img/bg/newsletter_bg.jpg")] bg-cover bg-center'
      >
        <div className="bg-black/70 py-16">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
            {/* Text */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold mb-4 text-white">
                Trial Start First 30 Days
              </h2>
              <p className="text-lg text-gray-200">
                Enter your email to create or restart your membership.
              </p>
            </div>

            {/* Input + Button */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <input
                type="email"
                placeholder="Your Email..."
                className="w-72 sm:w-80 px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button className="bg-yellow-500 text-black font-bold px-6 py-2 rounded-md hover:bg-yellow-400 transition">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div
        className='bg-[url("https://movflx.atkiah.xyz/img/bg/footer_bg.jpg")] bg-cover bg-center'
      >
        <div className="bg-black/80 py-12">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-32" />
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-gray-300 font-semibold">
              <a href="#" className="hover:text-yellow-500 transition">Home</a>
              <a href="#" className="hover:text-yellow-500 transition">Movies</a>
              <a href="#" className="hover:text-yellow-500 transition">TV Shows</a>
              <a href="#" className="hover:text-yellow-500 transition">Pricing</a>
              <a href="#" className="hover:text-yellow-500 transition">Blog</a>
              <a href="#" className="hover:text-yellow-500 transition">Contact</a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} MyMovies. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
