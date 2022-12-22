import React from "react";
import TechIcon from "./TechIcon";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase">Skills</p>
        <h2 className="py-4">The Tools I Use</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TechIcon
            techName="JavaScript"
            techImgSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          />
          <TechIcon
            techName="React"
            techImgSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
          />
          <TechIcon
            techName="Java"
            techImgSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
          />
          <TechIcon
            techName="Spring"
            techImgSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg"
          />
          <TechIcon
            techName="MySQL"
            techImgSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
          />
          <TechIcon
            techName="Bootstrap"
            techImgSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"
          />
          <TechIcon
            techName="TailwindCSS"
            techImgSrc="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
          />
          <TechIcon
            techName="Git"
            techImgSrc="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
