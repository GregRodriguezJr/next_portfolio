import React from "react";
import ProjectDetails from "../components/ProjectDetails";
import traquraImg from "../public/assets/traqura.png";

const Traqura = () => {
  const techStack = [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Java",
    "Spring",
    "AWS",
  ];

  return (
    <ProjectDetails
      bgImg={traquraImg}
      title="Traqura"
      subtitle="Personal Organization App"
      description="A mobile-first home inventory web app that allows users to maintain the location and value of all their belongings. The frontend is built using React.js and styled with custom CSS and Bootstrap. The application is secured using Spring Security 6.0 and token-based (JWT) authorization. Users can create, edit, view, and delete spaces, and items."
      techArr={techStack}
      demoUrl="https://github.com/Capstone-GJR/frontend"
      codeUrl="https://github.com/orgs/Capstone-GJR/repositories"
    />
  );
};

export default Traqura;
