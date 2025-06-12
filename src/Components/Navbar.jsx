import React, { useState, useEffect } from "react";
import { SunMoon, Menu, X } from "lucide-react";
import port from "../assets/port.jpg";

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Work", id: "work" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-4 py-2 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center h-16 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#home">
          <img src={port} alt="Logo" className="h-14 w-14 rounded-full shadow-xl" />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              className="px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700 text-gray-700 dark:text-white"
            >
              {link.name}
            </a>
          ))}

          {/* Dark Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-600 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500"
          >
            <SunMoon className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-600 text-black dark:text-white"
          >
            <SunMoon className="w-5 h-5" />
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
            {menuOpen ? <X className="w-6 h-6 text-black dark:text-white" /> : <Menu className="w-6 h-6 text-black dark:text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 px-4 pb-4 flex flex-col space-y-2 bg-white dark:bg-gray-900 rounded-b-lg shadow">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700 text-gray-700 dark:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
