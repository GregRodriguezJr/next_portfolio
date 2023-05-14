import React from "react";
import dashboardImg from "../public/assets/dashboard.png";
import ProjectItem from "./ProjectItem";
import noelImg from "../public/assets/noelfotos.png";
import traquraImg from "../public/assets/traqura.png";
import movieAppImg from "../public/assets/movieAppImg.png";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const projectImg = {
    hidden: {
        opacity: 0,
        x: 30,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
        },
    },
};

const Projects = () => {
    return (
        <div id="projects" className="w-full pt-5">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-[#2980b9]">
                    Projects
                </p>
                <h2 className="py-4">{`What I've Built`}</h2>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="grid md:grid-cols-2 gap-8"
                >
                    <motion.div variants={projectImg}>
                        <ProjectItem
                            title="Movie App"
                            projectImg={movieAppImg}
                            projectPage="/MovieApp"
                        />
                    </motion.div>
                    <motion.div variants={projectImg}>
                        <ProjectItem
                            title="Noel Fotos"
                            projectImg={noelImg}
                            projectPage="/NoelDesigns"
                        />
                    </motion.div>
                    <motion.div variants={projectImg}>
                        <ProjectItem
                            title="Crypto Dashboard"
                            projectImg={dashboardImg}
                            projectPage="/Dashboard"
                        />
                    </motion.div>
                    <motion.div variants={projectImg}>
                        <ProjectItem
                            title="Traqura"
                            projectImg={traquraImg}
                            projectPage="/Traqura"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;
