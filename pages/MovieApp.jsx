import React from "react";
import ProjectDetails from "../components/ProjectDetails";
import movieAppBg from "../public/assets/movieAppBg.png";

const MovieApp = () => {
  const techStack = [
    "HTML/CSS",
    "JavaScript",
    "React",
    "Bootstrap",
    "Movie DatabBase API",
    "Firebase",
    "Vercel",
  ];

  return (
    <ProjectDetails
      bgImg={movieAppBg}
      title="Movie App"
      subtitle="Personal movie tracker"
      description="The ultimate destination for movie lovers! With high quality poster images and a database of the latest movies. Plus, our easy-to-use search function allows you to discover new and older movies in a snap. Built using the latest web technologies including React and Firebase,the Movie App offers a sleek and modern user experience. Simply select a movie card to learn more and even watch a video. Want to save your favorite movies for later? No problem! Our app utilizes Firestore to save your favorites in a database for easy access. So why wait? Start searching for your favorite movies today with the Movie App!"
      techArr={techStack}
      demoUrl="https://movie-app-gregrodriguezjr.vercel.app/"
      codeUrl="https://github.com/GregRodriguezJr/movie-app"
    />
  );
};

export default MovieApp;
