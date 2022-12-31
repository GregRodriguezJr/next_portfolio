import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            {`Hi, I'm`} <span className="text-[#2980b9]">Greg Rodriguez</span>
          </h1>
          <h1 className="py-4 text-gray-700">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer",
                  "Front End Developer",
                  "Software Developer",
                ],
                autoStart: true,
                loop: true,
                pauseFor: 4500,
              }}
            />
          </h1>
          <p className="py-4 text-gray-600 md:max-w-[70%] m-auto">
            Self-Discipline Software Developer and Veteran with sales,
            problem-solving, and leadership experience. Being an adaptable
            individual with a passion to learn inspired the shift to focus on
            pursuing a full-time career in the tech industry. Seeking the
            opportunity to leverage technical and collaborative skills to be
            part of a team and write clean code with innovative technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
