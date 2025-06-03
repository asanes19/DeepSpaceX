import React from "react";
import gif from "/bgVid.mp4"; // Adjust the path as necessary
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  return (
    <section
      className="relative h-[calc(100vh-60px)]
 w-full overflow-hidden"
    >
      {/* Background GIF */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={gif} type="video/mp4" />
        {/* fallback */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional gradient filter) */}
<div className="absolute inset-0 z-10 bg-gradient-to-b from-[#050505]/10 via-[#050505]/10 to-[#050505] backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4 space-y-8">
        <h1 className="text-5xl md:text-[128px] font-normal">DeepSpaceX</h1>
        <p className="text-lg md:text-xl text-[#9AADA6]">
          Explore the cosmos with AI
        </p>
        <button
          className="bg-gradient-to-r from-[#34a853] via-[#34a853] to-[#2daeb8] 
             hover:opacity-90 text-white px-6 py-3 rounded-full font-semibold transition inline-flex items-center gap-2"
        >
          Join the mission <MdKeyboardArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
