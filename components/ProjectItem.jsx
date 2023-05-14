import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, projectImg, projectPage }) => {
    return (
        <Link href={projectPage}>
            <div className="hover:underline md:my-5">
                <h3 className="text-center text-2xl mb-2 ">{title}</h3>
                <div className="flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group ">
                    <Image
                        className="hover:scale-105 ease-in duration-300 rounded-xl"
                        src={projectImg}
                        alt="/"
                    />
                </div>
            </div>
        </Link>
    );
};

export default ProjectItem;
