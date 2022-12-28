import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const ProjectDetails = ({
  bgImg,
  title,
  subtitle,
  description,
  techArr,
  demoUrl,
  codeUrl,
}) => {
  return (
    <div className="w-full">
      <div className="w-screen h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[40vh] lg:h-[40-vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          style={{ objectFit: "cover" }}
          fill
          src={bgImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">{title}</h2>
          <h3>{subtitle}</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="ml-1 text-[#2980b9]">Project</p>
          <h2 className="py-2">Overview</h2>
          <p>{description}</p>
          <a 
            target="_blank" 
            rel="noreferrer"
            href={demoUrl}
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a 
            target="_blank" 
            rel="noreferrer"
            href={codeUrl}
          >
            <button className="px-8 py-2 mt-4">Source Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <p className="text-center font-bold pb-2">Technologies</p>
          <div className="grid grid-cols-2 md:grid-cols-1">
            {techArr.map((techItem,index) => {
              return (
                <p className="text-gray-600 py-2 flex items-center" key={index}>
                  <RiRadioButtonFill className="mr-1" />
                  {techItem}
                </p>
              );
            })}
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
