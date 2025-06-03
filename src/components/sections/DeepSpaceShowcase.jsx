import React from "react";
import img from "../../assets/WhirlpoolGalaxy.jpg"; // Adjust the path as necessary
const DeepSpaceShowcase = () => {
  return (
    <section className="w-full px-8 md:px-0 text-center text-white">
      <div className="text-center space-y-8 text-white max-w-[615px] mx-auto">
        <h2 className="text-[28px] md:text-[48px] font-normal leading-[56px]">
          The universe, reimagined
        </h2>
        <p className="text-[20px] md:text-[28px] text-[#9AA0A6] font-normal leading-[36px]">
          Discover how DeepSpaceX transforms raw space data into captivating,
          intelligent experiences. From galaxy simulations to cosmic
          storytelling, here are a few ways we’re unlocking the next frontier.
        </p>
      </div>
      <img src={img} alt="Deep Space Showcase" className="mt-12 w-full max-w-5xl mx-auto rounded-2xl border border-[#2a2a2a]" />
    </section>
  );
};

export default DeepSpaceShowcase;
