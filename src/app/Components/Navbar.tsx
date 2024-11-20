// components/Navbar.tsx
"use client";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-black">
      <div className="text-white text-2xl font-bold">My Portfolio</div>
      <div className="md:hidden" onClick={toggleMenu}>
        <div className="space-y-1 cursor-pointer">
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </div>
      <ul
        className={`flex-col md:flex-row md:flex ${
          isOpen ? "flex" : "hidden"
        } absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 text-white md:text-black md:space-x-6`}
      >
        <li className="py-2 md:py-0 text-center">
          <a
            href="#hero"
            className="block px-4 py-2 text-white hover:text-blue-400"
          >
            Home
          </a>
        </li>
        <li className="py-2 md:py-0 text-center">
          <a
            href="#about"
            className="block px-4 py-2 text-white hover:text-blue-400"
          >
            About
          </a>
        </li>
        <li className="py-2 md:py-0 text-center">
          <a
            href="#skills"
            className="block px-4 py-2 text-white hover:text-blue-400"
          >
            Skills
          </a>
        </li>
        <li className="py-2 md:py-0 text-center">
          <a
            href="#contact"
            className="block px-4 py-2 text-white hover:text-blue-400"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
