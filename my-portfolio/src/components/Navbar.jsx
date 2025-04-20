import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="items-center justify-between flex px-10 py-4 fixed w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
      <motion.span
        className="text-white text-3xl font-bold"
        whileHover={{ scale: 1.05 }}
      >
        Mohd Ahad
      </motion.span>
      <ul className="flex gap-8 text-white text-xl">
        <motion.li
          className="transition-all duration-200 hover:scale-105 hover:font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={scrollToTop}
        >
          About
        </motion.li>
        <motion.li
          className="transition-all duration-200 hover:scale-105 hover:font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <a href="#projects">Projects</a>
        </motion.li>
        <motion.li
          className="transition-all duration-200 hover:scale-105 hover:font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <a href="#contact">Contact</a>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Navbar;
