import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, projectImg, projectPage }) => {
  return (
    <Link href={projectPage}>
      <div className="hover:underline md:my-5">
        <h3 className='text-center text-2xl mb-2 '>
          {title}
        </h3>
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#2980b9] to-[#2c3e50]">
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={projectImg}
            alt="/"
          />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2lx text-white tracking-wider text-center uppercase">
              More Info
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
