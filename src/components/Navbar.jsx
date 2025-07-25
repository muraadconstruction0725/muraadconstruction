import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  FaSearch,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (path) => {
    console.log(`Navigate to: ${path}`);
    const section = document.getElementById(path); // ✅ Corrected
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/details.pdf"; // relative to public/
  link.download = "Muraad_Construction_Quote.pdf"; // you can customize the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <nav className="bg-gray-900 text-white fixed z-50 w-full">
      {/* Top contact bar */}
      <div className="bg-gray-800 px-4 py-2 max-lg:hidden">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center justify-center space-x-2">
            <span className="flex items-center">
              <a
                href="tel:91-9617099998"
                className="flex justify-center items-center gap-1"
              >
                <IoCallSharp className="text-orange-400" /> 91-9617099998,
              </a>
            </span>
            <span className="flex items-center">
              <a href="tel:91-9926415706">91-9926415706,</a>
            </span>
            <span className="flex items-center">
              <a href="tel:91-8103628472">91-8103628472</a>
            </span>
            <div className="flex items-center gap-1 pl-5">
              <span className="flex items-center text-orange-400">
                <FaLocationDot />
              </span>
              <div className="flex space-x-2">
                <a href=""> Aman Nagar Mowa Raipur (C.G.)</a>
              </div>
            </div>
          </div>

          <span className="flex items-center">
            <a
              href="mailto:muraad.cons2808@gmail.com"
              className=" flex justify-center items-center gap-1"
            >
              <div className="text-xl">
                <IoIosMail />
              </div>{" "}
              muraad.cons2808@gmail.com
            </a>
          </span>
        </div>
      </div>

      {/* Main navbar */}
      <div className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleNavClick("/")}
          >
            <span className="text-2xl font-bold">Muraad Construction</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick("hero")}
              className="hover:text-orange-500 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="hover:text-orange-500 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("services")}
              className="hover:text-orange-500 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("projects")}
              className="hover:text-orange-500 transition-colors"
            >
              Project
            </button>

            <button
              onClick={() => handleNavClick("contact")}
              className="hover:text-orange-500 transition-colors"
            >
              Contact Us
            </button>
          </div>

          {/* Search and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handleDownload}
              className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded transition-colors flex items-center"
            >
              Get a Quote
              <span className="ml-2">
                <MdArrowOutward />
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-white block h-0.5 w-6 transition-all ${
                  isMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>
              <span
                className={`bg-white block h-0.5 w-6 mt-1 transition-all ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`bg-white block h-0.5 w-6 mt-1 transition-all ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavClick("hero")}
                className="hover:text-orange-500 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("about")}
                className="hover:text-orange-500 transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("services")}
                className="hover:text-orange-500 transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick("projects")}
                className="hover:text-orange-500 transition-colors text-left"
              >
                Project
              </button>

              <button
                onClick={() => handleNavClick("contact")}
                className="hover:text-orange-500 transition-colors text-left"
              >
                Contact Us
              </button>
              <button
                onClick={() => handleNavClick("quote")}
                className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded transition-colors w-full text-left"
              >
                Get a Quote ↗
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
