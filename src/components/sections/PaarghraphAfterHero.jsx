import React from 'react';
import ScrollReveal from '../reuse/scrollreveal';

const ParagraphAfterHero = () => {
  return (
    <ScrollReveal className="text-[28px] md:text-[48px] text-center leading-[36px] md:leading-[56px] tracking-[-0.5px] px-4 md:px-0 w-full max-w-[910px] mx-auto text-white font-normal">
      <>
        Deep Space delivers{' '}
        <span className="bg-gradient-to-r from-[#34a853] via-[#34a853] to-[#2daeb8] bg-clip-text text-transparent">
          high-fidelity exploration
        </span>{' '}
        and{' '}
        <span className="bg-gradient-to-r from-[#34a853] via-[#34a853] to-[#2daeb8] bg-clip-text text-transparent">
          real-time cosmic insights
        </span>
        , capturing subtle nuances across a range of{' '}
        <span className="bg-gradient-to-r from-[#34a853] via-[#34a853] to-[#2daeb8] bg-clip-text text-transparent">
          celestial experiences
        </span>{' '}
        and immersive journeys across the stars.
      </>
    </ScrollReveal>
  );
};

export default ParagraphAfterHero;
