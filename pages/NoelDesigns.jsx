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
      title="Noel Designs"
      subtitle="A Photography Portfolio"
      description="Noel Designs is a web application that displays a photo gallery portfolio. Users can click on an image to show a larger image within a modal to move images forward and reverse with the carousel buttons. This is the current template for the landing page and image gallery. Placeholder images are being used in cloudinary until the client provides images."
      techArr={techStack}
      demoUrl="https://noeldesigns.vercel.app/"
      codeUrl="https://github.com/noeldesign/image-gallery"
    />
  );
};

export default NoelDesigns;
