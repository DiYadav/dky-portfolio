import React, { useState, useEffect } from "react";
import { SunMoon } from "lucide-react";

function Navbar() {

const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

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
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Work', id: 'work' },
    { name: 'Contact', id: 'contact' },
    // { name:'Dark', id:'dark'},
  ];

  return (
    <nav className="bg-white shadow-md rounded px-4 py-2 fixed w-full top-0 z-50">
      <div className="flex justify-end space-x-4 items-center h-16">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={`#${link.id}`}
            className="px-4 py-2 rounded-lg hover:bg-blue-100 text-gray-700"
          >
            {link.name}
          </a>
        ))}

         {/* Dark Mode Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-600 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500"
        >
          <SunMoon className="w-5 h-5"/>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
