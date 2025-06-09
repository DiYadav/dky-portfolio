import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import di from '../assets/di.jpg';
import Skills from "../Components/Skills";
import Work from "../Components/Work";
import Contact from "../Components/Contact";

function HomePage() {
  return (
    <div className="relative">
      {/* Fixed Social Links */}
      <div className="fixed left-4 top-[40%] z-50 flex flex-col gap-5">
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

      <div className="fixed right-0 text-xl dark:text-white top-[60%] flex flex-col transform -translate-y-1/2 rotate-[90deg]  ">
        📍 Based in Pune, India
      </div>

      {/* Main Scrollable Content */}
      <div className="flex flex-col items-center bg-slate-300 dark:bg-gray-900 overflow-y-auto scrollbar-hide transition-colors duration-500">
        <div className="flex flex-col bg-white dark:bg-gray-800 gap-6 p-5 mt-20 w-[1200px] h-auto rounded-lg transition-colors duration-500">
          {/* Profile Section */}
          <section id="home" className="grid grid-cols-2 w-[1100px] h-[400px]">
            <img
              className="mt-20 ml-40 w-[300px] h-[300px] rounded-full"
              src={di}
              alt="Profile"
            />
            <div>
              <p className="relative w-[450px] h-[215px] mt-40 ml-20 bg-red-900 dark:bg-red-700 p-5 text-white rounded-xl transition-colors duration-500">
                const HelloWorld =&#123; <br />
                "_id": "127.0.0.1",
                <br /> "name": "Dinesh Yadav", <br/>"developer": true, <br />
                "technologies":["js","react","node","JavaScript","Python","..."],{" "}
                <br />
                "interests": ["Django","AI","DevOps","Aws","..."]<br/>&#125;
              </p>
            </div>
          </section>

          <hr className="border-slate-400 dark:border-gray-300 border" />

          {/* Skills Section */}
          <section id="skills" className="p-6 w-[1100px]">
            <Skills />
          </section>

          <hr className="border-slate-400 dark:border-gray-300 border" />

          {/* Work Section */}
          <section id="work" className="p-6 w-[1100px]">
            <Work />
          </section>

          <hr className="border-slate-400 dark:border-gray-300 border" />

          {/* Contact Section */}
          <section id="contact" className="p-6 w-[1100px]">
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
