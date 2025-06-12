import React from "react";

function Contact() {
  return (
    <div className="px-4 sm:px-8 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
        Contact
      </h2>

      <h2 className="text-xl font-semibold underline text-center sm:text-left">
        Get in Touch
      </h2>

      <p className="mt-6 leading-relaxed text-justify">
        Actively seeking full-time opportunities in Web and Software
        Development. Ready to join immediately and contribute to impactful
        projects. Passionate about backend development, collaborative teamwork,
        and building scalable applications. Open to joining innovative teams or
        collaborating on startup ideas and tech-driven ventures.
      </p>

      <div className="mt-8 flex justify-center sm:justify-start">
        <a
          href="https://www.linkedin.com/in/dinesh-yadav-b559852b5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-6 py-2 bg-blue-500 hover:bg-purple-500 text-white rounded transition-all duration-200">
            Reach Out...📌
          </button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
