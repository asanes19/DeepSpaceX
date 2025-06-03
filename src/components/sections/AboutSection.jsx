import React from "react";
import { FaRocket, FaRobot, FaGlobe } from "react-icons/fa";

// Reusable card
const InfoCard = ({ icon: Icon, title, description }) => (
  <div className="bg-[#121212] flex flex-col justify-between rounded-[24px] px-10 py-12 text-center border border-[#2a2a2a] md:w-[400px] md:h-[430px]">
    {/* Inject SVG gradient definition */}
    <svg width="0" height="0">
      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop stopColor="#34a853" offset="0%" />
        <stop stopColor="#2daeb8" offset="100%" />
      </linearGradient>
    </svg>

    <div className="text-[64px] mb-6 flex justify-center h-[40%] items-center">
      <Icon style={{ fill: "url(#icon-gradient)" }} />
    </div>

    <div>
      <h3 className="text-[20px] font-normal text-white mb-4">{title}</h3>
      <p className="text-[#9aa0a6] text-[16px] leading-[26px] font-normal">
        {description}
      </p>
    </div>
  </div>
);


const AboutSection = () => {
const cards = [
  {
    icon: FaRocket,
    title: "Launch Simulations",
    description: "Experience liftoff events and orbital dynamics in interactive 3D simulations.",
  },
  {
    icon: FaRobot,
    title: "AI-Powered Insights",
    description: "Leverage AI to analyze cosmic patterns, star formations, and galaxy behavior.",
  },
  {
    icon: FaGlobe,
    title: "Global Exploration",
    description: "Zoom into the cosmos and explore datasets from across the universe in real-time.",
  },
];
  return (
    <section className="flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-8 text-white max-w-[615px] mx-auto">
        <h2 className="text-[28px] md:text-[48px] font-normal leading-[56px]">
          Intelligent exploration,
          <br />
          infinite frontiers
        </h2>
        <p className="text-[20px] md:text-[28px] text-[#9AA0A6] font-normal leading-[36px]">
          DeepSpaceX uses advanced AI to decode cosmic data, simulate galaxies,
          and create immersive space experiences—empowering users to explore the
          universe like never before.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-7xl">
        {cards.map((card, index) => (
          <InfoCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
