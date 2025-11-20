import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#171D22]">
      <div className="container mx-auto px-5 py-5 flex items-center justify-between lg:justify-between">
        {/* Logo */}
        <img src={logo} alt="logo" className="w-32" />

        {/* Desktop Menu */}
        <div className="hidden lg:flex text-white font-bold gap-10 items-center">
          <NavLink to="/" className="hover:text-yellow-400">HOME</NavLink>
          <NavLink to="/movie" className="hover:text-yellow-400">MOVIE</NavLink>
          <NavLink to="/tv-show" className="hover:text-yellow-400">TV SHOW</NavLink>
          <NavLink to="/pricing" className="hover:text-yellow-400">PRICING</NavLink>
          <NavLink to="/blog" className="hover:text-yellow-400">BLOG</NavLink>
          <NavLink to="/contact" className="hover:text-yellow-400">CONTACT</NavLink>
          <div className="flex items-center gap-3">
            <IoSearch className="text-white text-xl" />
            <TbWorld className="text-yellow-300 text-xl" />
            <div className="flex items-center gap-1">
              <p className="text-white font-bold">Eng</p>
              <MdOutlineKeyboardArrowDown className="text-white" />
            </div>
            <button className="text-white font-bold border border-yellow-400 px-6 py-1 rounded-full hover:bg-amber-400 hover:border-none">
              SIGN IN
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#171D22] text-white px-5 py-5 space-y-4">
          <NavLink to="/" className="block hover:text-yellow-400">HOME</NavLink>
          <NavLink to="/movie" className="block hover:text-yellow-400">MOVIE</NavLink>
          <NavLink to="/tv-show" className="block hover:text-yellow-400">TV SHOW</NavLink>
          <NavLink to="/pricing" className="block hover:text-yellow-400">PRICING</NavLink>
          <NavLink to="/blog" className="block hover:text-yellow-400">BLOG</NavLink>
          <NavLink to="/contact" className="block hover:text-yellow-400">CONTACT</NavLink>
          <div className="flex items-center gap-3 mt-3">
            <IoSearch className="text-white text-xl" />
            <TbWorld className="text-yellow-300 text-xl" />
            <div className="flex items-center gap-1">
              <p className="text-white font-bold">Eng</p>
              <MdOutlineKeyboardArrowDown className="text-white" />
            </div>
          </div>
          <button className="w-full text-white font-bold border border-yellow-400 px-6 py-1 rounded-full hover:bg-amber-400 hover:border-none">
            SIGN IN
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
