import React from "react";
import TechIcon from "./TechIcon";
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

const skillImg = {
    hidden: {
        opacity: 0,
        x: -30,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
        },
    },
};

const Skills = () => {
    return (
        <div id="skills" className="px-3 pt-20 md:py-40 lg:py-60">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center">
                <p className="text-xl tracking-widest uppercase text-[#2980b9]">
                    Skills
                </p>
                <h2 className="py-4">The Tools I Use</h2>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <motion.div variants={skillImg}>
                        <TechIcon
                            techName="JavaScript"
                            techImgSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                        />
                    </motion.div>
                    <motion.div variants={skillImg}>
                        <TechIcon
                            techName="React"
                            techImgSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                        />
                    </motion.div>
                    <motion.div variants={skillImg}>
                        <TechIcon
                            techName="Java"
                            techImgSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                        />
                    </motion.div>
                    <motion.div variants={skillImg}>
                        <TechIcon
                            techName="Spring"
                            techImgSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg"
                        />
                    </motion.div>
                    <motion.div variants={skillImg}>
                        <TechIcon
                            techName="C++"
                            techImgSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                        />
                    </motion.div>
                    <motion.div variants={skillImg}>
                        <TechIcon
                            techName="Python"
                            techImgSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                        />
                    </motion.div>
                    <motion.div variants={skillImg}>
                        <TechIcon
                            techName="MySQL"
                            techImgSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
                        />
                    </motion.div>
                    <motion.div variants={skillImg}>
                        <TechIcon
                            techName="Firebase"
                            techImgSrc="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                        />
                    </motion.div>
                    <motion.div variants={skillImg}>
                        <TechIcon
                            techName="Bootstrap"
                            techImgSrc="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"
                        />
                    </motion.div>
                    <motion.div variants={skillImg}>
                        <TechIcon
                            techName="TailwindCSS"
                            techImgSrc="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                        />
                    </motion.div>
                    <motion.div variants={skillImg}>
                        <TechIcon
                            techName="Git"
                            techImgSrc="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                        />
                    </motion.div>
                    <motion.div variants={skillImg}>
                        <TechIcon
                            techName="Postman"
                            techImgSrc="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;
