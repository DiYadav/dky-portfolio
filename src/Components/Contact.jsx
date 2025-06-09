import React from "react";

function Contact() {
  return (
    <div className="justify-items-center text-gray-600 dark:text-gray-300">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
        Contact
      </h2>
      <br />
      <br />
      <h2><b><u>Get in Touch</u></b></h2>
      <br />
      <br />
      <div>
        Actively seeking full-time opportunities in Web and Software
        Development. Ready to join immediately and contribute to impactful
        projects. Passionate about backend development, collaborative teamwork,
        and building scalable applications. Open to joining innovative teams or
        collaborating on startup ideas and tech-driven ventures.
      </div>
      <br />
      <br />

      <div className="dark:text-white">
        <a
          href="https://www.linkedin.com/in/dinesh-yadav-b559852b5"
          target="_blank"
        >
          <button className=" w-30 h-8 bg-blue-400 justify-items-center hover:bg-purple-500 rounded">
            Reach Out...📌
          </button>
        </a>
      </div>
    </div>
  );
}
export default Contact;
