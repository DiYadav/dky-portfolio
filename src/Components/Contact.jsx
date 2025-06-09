import React from "react";

function Contact() {
  return (
    <div className="justify-items-center text-gray-600 dark:text-gray-300">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
        Contact
      </h2>
      <br />
      <br />
      <h2>Get in Touch</h2>
      <br />
      <br />
      <div>
        Currently seeking internships for web and software development
        positions. Can start Imediately.. Also looking to build a team for
        projects & startup ideas or just make professional connections.
      </div>
      <br />
      <br />

      <div className="dark:text-white">
        <a
          href="https://www.linkedin.com/in/dinesh-yadav-b559852b5"
          target="_blank"
        >
          <button className=" w-30 h-8 bg-blue-400 justify-items-center hover:bg-purple-500 rounded">Reach Out...📌</button>
        </a>
      </div>
    </div>
  );
}
export default Contact;
