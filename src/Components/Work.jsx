import React from "react";
import Dvchat from '../assets/Dvchat.jpg';
import portfolio from '../assets/portfolio.png';
// Sample project data
const projects = [
  {
    id: 1,
    title: "Curd Operation",
    image: "https://via.placeholder.com/300x200", // Replace with your actual image path
    github: "https://github.com/DiYadav/Curd-Project.git"
  },
  {
    id: 2,
    title: "Dvchat Web App",
    image: Dvchat,
    github: "https://github.com/DiYadav/Dvchat.git"
  },
  {
    id: 3,
    title: "Portfolio",
    image: portfolio,
    github: "https://github.com/DiYadav/Portfolio.git"
  },
  // Add more projects as needed
];

function Work() {
  return (
    <div className="h-[500px]  dark:bg-gray-800 scroll-smooth transition-colors duration-500 tpy-10 px-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white font-semibold text-lg">{project.title}</p>
            </div>
          </a>
        ))}
      </div>
      <div className=" flex justify-center mt-20  dark:text-white">
        <a className=" hover:text-blue-700"
          href="https://github.com/DiYadav"
          target="_blank"
        >
          See More...🤖
        </a>
      </div>
    </div>
  );
}

export default Work;
