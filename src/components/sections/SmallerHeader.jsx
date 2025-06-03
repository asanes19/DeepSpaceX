import React from "react";

const SmallerHeader = () => {
  return (
    <div className="flex justify-center px-4">
<div className="rounded-full bg-[#121212] text-[#9aa0a6] text-base font-medium overflow-x-auto max-w-full hide-scrollbar">
        <div className="flex max-w-[400px] md:max-w-full whitespace-nowrap p-2">
          <button className="hover:text-white transition py-2 px-6">Capabilities</button>
          <button className="hover:text-white transition py-2 px-6">Showcase</button>
          <button className="hover:text-white transition py-2 px-6">Music AI Sandbox</button>
          <button className="hover:text-white transition py-2 px-6">Safety</button>
        </div>
      </div>
    </div>
  );
};

export default SmallerHeader;
