import React from "react";
import { FaHeadphonesAlt, FaMusic, FaSlidersH } from "react-icons/fa";

// Reusable card
  const InfoCard = ({ icon: Icon, title, description }) => (
    <div className="bg-[#121212] flex flex-col justify-between rounded-[24px] px-10 py-12 text-center border border-[#2a2a2a] w-[400px] h-[430px]">
      <div className="text-[84px] text-[#34d399] mb-6 flex justify-center h-[40%] items-center">
        <Icon />
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
      icon: FaHeadphonesAlt,
      title: "High-fidelity output",
      description:
        "Produces crystal-clear, professional-grade space audio simulations — perfect for research, exploration, or immersive storytelling.",
    },
    {
      icon: FaSlidersH,
      title: "Granular control",
      description:
        "Tweak simulation speed, object gravity, lighting detail, and more — every detail is yours to command in the space journey.",
    },
    {
      icon: FaMusic,
      title: "Endless scenarios",
      description:
        "Explore an evolving catalog of galaxy types, black hole events, and planetary ecosystems across various cosmic templates.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-8 text-white max-w-[615px] mx-auto">
        <h2 className="text-[48px] font-normal leading-[56px]">
          Intelligent exploration,
          <br />
          infinite frontiers
        </h2>
        <p className="text-[28px] text-[#9AA0A6] font-normal leading-[36px]">
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
