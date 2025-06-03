import React from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { FaMagic } from "react-icons/fa"; // for Sparkles
const navItems = [
  { name: "About", hasDropdown: true },
  { name: "Research", hasDropdown: false },
  { name: "Technologies", hasDropdown: true },
  { name: "Discover", hasDropdown: true },
];

const HeaderOne = () => {
  return (
    <header className="bg-black text-white px-6 py-3 h-[64px] flex items-center justify-between border-b border-neutral-800">
      {/* Left: Logo and Nav */}
      <div className="flex items-center space-x-8 font-medium text-2xl">
        <span className="text-white">DeepSpaceX</span>

        {/* Center: Nav Items */}
        <nav className="hidden md:flex space-x-6 text-base font-medium">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-1 hover:text-gray-300 cursor-pointer"
            >
              <span>{item.name}</span>
              {item.hasDropdown && <FiChevronDown size={16} />}
            </div>
          ))}
        </nav>
      </div>

      {/* Right: Icons */}
      <div className="flex items-center space-x-8">
        <FiSearch size={21} className="hover:text-gray-300 cursor-pointer" />
        <FaMagic size={20} className="hover:text-gray-300 cursor-pointer" />
      </div>
    </header>
  );
};

export default HeaderOne;
