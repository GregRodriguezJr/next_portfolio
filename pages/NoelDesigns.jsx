import React from "react";
import ProjectDetails from "../components/ProjectDetails";
import noelImg from '../public/assets/noelImg.png'

const NoelDesigns = () => {

  const techStack = [
    "HTML/CSS",
    "JavaScript",
    "Next.js",
    "TailwindCSS",
    "Cloudinary",
    "Vercel",
  ];

  return (
    <ProjectDetails
      bgImg={noelImg}
      title="Noel Fotos"
      subtitle="A Photography Portfolio"
      description="The application allows users to browse and select photo albums from a Cloundinary collection. Once an album is chosen, the application presents the user with a visually appealing gallery view. Noel Fotos aims to provide a user-friendly and visually engaging photo album application. Through its Next.js implementation, the project offers a seamless browsing experience, allowing users to effortlessly navigate between album selection and gallery views."
      techArr={techStack}
      demoUrl="https://cloudinary-images.vercel.app/"
      codeUrl="https://github.com/noeldesign/cloudinary_images"
    />
  );
};

export default NoelDesigns;
