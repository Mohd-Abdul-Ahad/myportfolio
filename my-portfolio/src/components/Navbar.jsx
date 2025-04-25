import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  const navLinks = [
    { name: "About", action: scrollToTop },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="px-4 sm:px-6 lg:px-10 py-4 fixed w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <motion.span
          className="text-white text-2xl sm:text-3xl font-bold cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onClick={scrollToTop}
        >
          Mohd Ahad
        </motion.span>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-white text-lg lg:text-xl">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              className="transition-all duration-200 hover:scale-105 hover:font-bold cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              {link.href ? (
                <a href={link.href}>{link.name}</a>
              ) : (
                <span onClick={link.action}>{link.name}</span>
              )}
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-gray-800/95 backdrop-blur-lg mt-4 rounded-lg"
        >
          <ul className="flex flex-col gap-2 p-4">
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                className="py-3 px-4 rounded-md transition-all duration-200 hover:bg-gray-700 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  if (link.action) link.action();
                  else setIsOpen(false);
                }}
              >
                {link.href ? (
                  <a href={link.href} className="block text-white text-lg">
                    {link.name}
                  </a>
                ) : (
                  <span className="block text-white text-lg">{link.name}</span>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
