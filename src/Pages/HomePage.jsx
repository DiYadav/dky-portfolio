import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import di from "../assets/di.jpg";
import Skills from "../Components/Skills";
import Work from "../Components/Work";
import Contact from "../Components/Contact";

function HomePage() {
  return (
    <div className="relative">
      {/* Fixed Social Links */}
      <div className="fixed left-4 top-[40%] z-50 hidden sm:flex flex-col gap-5">
        <a
          href="https://github.com/DiYadav"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-3xl text-gray-800 hover:text-black dark:text-white dark:hover:text-blue-400 transition-colors duration-300" />
        </a>
        <a href="mailto:yadavdinesh2852002@gmail.com">
          <MdEmail className="text-3xl text-gray-800 hover:text-red-600 dark:text-white dark:hover:text-red-400 transition-colors duration-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/dinesh-yadav-b559852b5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-3xl text-gray-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors duration-300" />
        </a>
      </div>

      {/* Location Note */}
      <div className="hidden md:block fixed right-0 text-sm md:text-xl dark:text-white top-[60%] rotate-[90deg] transform -translate-y-1/2">
        📍 Based in Pune, India
      </div>

      {/* Main Scrollable Content */}
      <div className="flex flex-col items-center bg-slate-300 dark:bg-gray-900 transition-colors duration-500">
        <div className="flex flex-col gap-6 p-4 sm:p-8 mt-20 w-full max-w-6xl rounded-lg bg-white dark:bg-gray-800 transition-colors duration-500">
          
          {/* Profile Section */}
          <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                className="w-52 h-52 sm:w-72 sm:h-72 rounded-full"
                src={di}
                alt="Profile"
              />
            </div>
            <div className="flex justify-center md:justify-start">
              <p className="bg-red-900 dark:bg-red-700 text-white p-4 sm:p-6 rounded-xl text-sm sm:text-base max-w-md">
                const HelloWorld = &#123;<br />
                &nbsp;"_id": "127.0.0.1",<br />
                &nbsp;"name": "Dinesh Yadav",<br />
                &nbsp;"developer": true,<br />
                &nbsp;"technologies": ["js", "react", "HTML", "CSS", "Python", "..."],<br />
                &nbsp;"interests": ["Django", "AI", "AWS", "DevOps", "..."]<br />
                &#125;
              </p>
            </div>
          </section>

          <hr className="border-slate-400 dark:border-gray-300" />

          {/* Skills Section */}
          <section id="skills" className="w-full">
            <Skills />
          </section>

          <hr className="border-slate-400 dark:border-gray-300" />

          {/* Work Section */}
          <section id="work" className="w-full">
            <Work />
          </section>

          <hr className="border-slate-400 dark:border-gray-300" />

          {/* Contact Section */}
          <section id="contact" className="w-full">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
