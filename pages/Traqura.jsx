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
      description="Traqura is the smart(er) solution for home inventory and personal organization. This web app allows users to transform their mobile device into a powerful inventory management tool where they can catalog their items, their value, and track them via self-assigned locations and totes."
      techArr={techStack}
      demoUrl="https://traqura.xyz/"
      codeUrl="https://github.com/orgs/Capstone-GJR/repositories"
    />
  );
};

export default Traqura;
