import React from "react";

const Education = () => {
  return (
    <div
      id="education"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#2980b9]">
            Education
          </p>
          <h2 className="py-4">Codeup - Dallas, TX</h2>
          <p className="py-2 text-gray-600">Certificate of Completion, Full Stack Web Development</p>
          <p className="py-2 text-gray-600">Jul 2020 - Jan 2023</p>
          <p className="py-2 text-gray-600">
            A fully immersive, project-based, and intensive 20-week program that
            provides individuals with 670 hours of expert instruction and
            mentorship in software development.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="p-2 rounded-xl"
            src="assets/CodeupLogo.png"
            alt="codeup logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
