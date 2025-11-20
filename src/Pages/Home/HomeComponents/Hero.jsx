import { FaCalendarAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { HiPlay } from "react-icons/hi2";

const Hero = () => {
  return (
    <div className='bg-[url("https://movflx.atkiah.xyz/img/banner/banner_bg01.jpg")] bg-cover bg-center h-screen'>
      <div className="flex flex-col gap-4 pt-40 px-5 sm:px-10 md:px-20 lg:px-80 lg:pt-60">
        {/* Small tagline */}
        <h3 className="text-2xl sm:text-3xl font-bold text-[#E4D804]">Movflx</h3>

        {/* Main heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#E4D804]">
          Unlimited <span className="text-white">Movie</span>, TVs <br /> Shows, & More.
        </h1>

        {/* Movie Info */}
        <div className="flex flex-wrap gap-3 pb-5 pt-3 items-center">
          <p className="bg-white text-xs sm:text-sm text-black w-10 sm:w-12 font-semibold p-1 text-center">Pg 18</p>
          <p className="border border-white text-xs sm:text-sm text-white font-semibold w-9 sm:w-12 h-6 sm:h-6 px-2 py-1 text-center">HD</p>
          <p className="text-white font-semibold cursor-pointer hover:text-[#E4D804]">Romance,</p>
          <p className="text-white font-semibold cursor-pointer hover:text-[#E4D804]">Drama</p>
          <div className="flex items-center gap-1">
            <FaCalendarAlt className="text-[#E4D804]" />
            <p className="text-white font-semibold">2021</p>
          </div>
          <div className="flex items-center gap-1">
            <MdAccessTime className="text-[#E4D804]" />
            <p className="text-white font-semibold">128 min</p>
          </div>
        </div>

        {/* Watch Now Button */}
        <div className="flex items-center gap-3 sm:gap-5 text-white text-xs sm:text-sm md:text-base font-semibold border border-[#E4D804] rounded-full px-5 sm:px-7 py-2 w-max cursor-pointer hover:text-black hover:bg-[#E4D804]">
          <HiPlay className="text-lg sm:text-xl" />
          <p>WATCH NOW</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
