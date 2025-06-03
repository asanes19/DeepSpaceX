import React from 'react'

const SmallerHeader = () => {
  return (
    <div className="flex justify-center">
      <div className="flex rounded-full p-2 bg-[#121212] text-[#9aa0a6] text-base font-medium">
        <button className="hover:text-white transition py-2 px-6 m-1">Capabilities</button>
        <button className="hover:text-white transition py-2 px-6 m-1">Showcase</button>
        <button className="hover:text-white transition py-2 px-6 m-1">Music AI Sandbox</button>
        <button className="hover:text-white transition py-2 px-6 m-1">Safety</button>
      </div>
    </div>
  );
}

export default SmallerHeader
