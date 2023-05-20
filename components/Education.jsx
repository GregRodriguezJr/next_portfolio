import Image from "next/image";
import React from "react";
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

const itemContainer = {
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

const Education = () => {
    return (
        <motion.div
            id="education"
            className="px-3 flex flex-col items-center py-40 lg:py-60"
            variants={variants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
        >
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <motion.div className="col-span-2" variants={itemContainer}>
                    <p className="uppercase text-xl tracking-widest text-[#2980b9]">
                        Education
                    </p>
                    <h2 className="py-4">
                        Certificate of Completion, Full Stack Web Development
                    </h2>
                    <p className="py-2 text-gray-600">Codeup - Dallas, TX</p>
                    <p className="py-2 text-gray-600">Jul 2022 - Jan 2023</p>
                </motion.div>
                <motion.div
                    className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4"
                    variants={itemContainer}
                >
                    <Image
                        width={500}
                        height={500}
                        className="p-2 rounded-xl"
                        src="/assets/CodeupLogo.png"
                        alt="codeup logo"
                    />
                </motion.div>
            </div>
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 py-16">
                <motion.div className="col-span-2" variants={itemContainer}>
                    <h2 className="py-4">
                        Associate’s Degree, Computer Information Systems
                    </h2>
                    <p className="py-2 text-gray-600">
                        Del Mar College - Corpus Christi, TX{" "}
                    </p>
                    <p className="py-2 text-gray-600">Aug 2021 - Dec 2023</p>
                </motion.div>
                <motion.div
                    className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4"
                    variants={itemContainer}
                >
                    <Image
                        width={500}
                        height={500}
                        className="p-2 rounded-xl"
                        src="/assets/dmc.png"
                        alt="codeup logo"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Education;
