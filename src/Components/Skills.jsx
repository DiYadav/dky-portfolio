import React from "react";
import dinesh from "../assets/dinesh.jpg";

const skillList = ["Django", "HTML", "CSS", "Python", "JS", "React", "Git"];

function Skills() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-10 px-4 sm:px-8 py-16 w-full max-w-7xl mx-auto">
      {/* Left Section: Text and Skills */}
      <div className="w-full md:w-1/2 space-y-6">
        <h3 className="text-teal-600 text-sm font-semibold text-center md:text-left">
          — Skills and Technologies
        </h3>
        <h2 className="text-3xl font-bold text-black dark:text-white text-center md:text-left">
          Develop Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-md text-justify mx-auto md:mx-0">
          To work with an organization where I can learn new skills and increase
          my abilities for the organizational goals as well as myself. My aim is
          to utilize my potential to achieve personal and professional goals.
          Eager to take on new challenges and be a part of a team that drives
          success.
        </p>

        {/* Skill Circles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
          {skillList.map((skill, index) => (
            <div
              key={index}
              className="w-24 h-24 flex items-center justify-center rounded-full border-8 border-teal-600 text-teal-800 font-semibold text-lg bg-white shadow-md mx-auto"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Developer Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={dinesh}
          alt="Developer"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-xl"
        />
      </div>
    </div>
  );
}

export default Skills;
