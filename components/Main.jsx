import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

function Main() {
  return (
    <div id="home" className="pt-24 md:py-40 lg:py-60">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 md:p-3">

        {/* Column 1 */}
        <div className="col-span-1 m-auto">
          <Image
            src="/assets/headshot.jpeg"
            width={250}
            height={250}
            className="rounded-xl m-auto"
          />
        </div>

        {/* Colunn 2 */}
        <div className="col-span-2">
          <h2 className="py-4 text-gray-700 text-center">
            {`Hi, I'm`}{" "}
            <span className="text-[#2980b9] text-5xl">Greg Rodriguez</span>
          </h2>
          <h2 className="py-4 text-gray-700 text-center">
            <Typewriter
              options={{
                strings: [
                  "Software Engineer",
                  "Software Developer",
                ],
                autoStart: true,
                loop: true,
                pauseFor: 4500,
              }}
            />
          </h2>
          <p className="p-4 text-gray-600 m-auto">
            Self-Discipline Software Developer and Veteran with sales,
            problem-solving, and leadership experience. I'm Seeking the
            opportunity to leverage technical and collaborative skills to be
            part of a team and write clean code with innovative technologies.
          </p>
          <div className="text-center">
            <Link href="/#projects">
              <button className="px-8 py-2 m-2">Projects</button>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Main;
