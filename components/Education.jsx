import Image from "next/image";
import React from "react";

const Education = () => {
  return (
    <div
      id="education"
      className="px-3 flex flex-col items-center py-40 lg:py-60"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#2980b9]">
            Education
          </p>
          <h2 className="py-4">Codeup - Dallas, TX</h2>
          <p className="py-2 text-gray-600">
            Certificate of Completion, Full Stack Web Development
          </p>
          <p className="py-2 text-gray-600">Jul 2022 - Jan 2023</p>
          <p className="py-2 text-gray-600 max-w-[90%]">
            A fully immersive, project-based, and intensive 20-week program that
            provides individuals with 670 hours of expert instruction and
            mentorship in software development.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            width={500}
            height={500}
            className="p-2 rounded-xl"
            src="/assets/CodeupLogo.png"
            alt="codeup logo"
          />
        </div>
      </div>
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 py-16">
        <div className="col-span-2">
          <h2 className="py-4">Del Mar College - Corpus Christi, TX</h2>
          <p className="py-2 text-gray-600">Aug 2021 - Present</p>
          <p className="py-2 text-gray-600 max-w-[90%]">
            The program focuses heavily on programming fundamentals in web
            development. Completed 33 hours of courses towards a Web
            Development, Associate Of Applied Science.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            width={500}
            height={500}
            className="p-2 rounded-xl"
            src="/assets/dmc.png"
            alt="codeup logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
