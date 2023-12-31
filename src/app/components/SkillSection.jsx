"use client";
import { motion } from "framer-motion";

function Skill({ value, x, y }) {
    return (
        <motion.span
            className="text-base md:text-sm text-light-color hover:text-primary-color 
            dark:hover:text-secondary-color bg-dark-color hover:bg-light-color 
            dark:bg-secondary-color dark:hover:bg-primary-color p-2 md:p-0.5 rounded-lg cursor-pointer 
            absolute border border-solid border-transparent hover:border-dark-color"
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}>
            {value}
        </motion.span>
    );
}

export default function SkillSection() {
    return (
        <section className="flex flex-col justify-center items-center mt-32 w-full">
            <h1
                className="text-7xl xl:text-6xl lg:text-4xl
                font-roboto text-primary-color dark:text-secondary-color mb-32">
                Skills
            </h1>
            <div
                className="w-full h-screen lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
                flex justify-center items-center relative bg-spiral-light dark:bg-spiral-dark
                lg:bg-spiral-light-lg dark:lg:bg-spiral-dark-lg
                md:bg-spiral-light-md dark:md:bg-spiral-dark-md
                sm:bg-spiral-light-sm dark:sm:bg-spiral-dark-sm">
                <motion.span
                    className="text-base md:text-sm text-light-color hover:text-primary-color 
                    dark:hover:text-secondary-color bg-dark-color hover:bg-light-color 
                    dark:bg-secondary-color dark:hover:bg-primary-color 
                    p-2 w-16 h-16 text-center rounded-full cursor-pointer"
                    whileHover={{ scale: 1.05 }}>
                    My Skills
                </motion.span>

                {/* List of skills */}

                <Skill value="HTML5" x="1vw" y="8vh" />
                <Skill value="CSS3" x="-13vw" y="-13vh" />
                <Skill value="JavaScript / ES6" x="-10vw" y="13vh" />
                <Skill value="Bootstrap" x="16vw" y="2vh" />
                <Skill value="NodeJS" x="11vw" y="-20vh" />
                <Skill value="ExpressJS" x="-20vw" y="-2vh" />
                <Skill value="Go Lang" x="5vw" y="29vh" />
                <Skill value="Tailwind CSS" x="-10vw" y="-30vh" />
                <Skill value="MySQL" x="25vw" y="-10vh" />
                <Skill value="Unix Scripting" x="20vw" y="25vh" />
                <Skill value="REST API" x="-20vw" y="25vh" />
                <Skill value="MongoDB" x="-25vw" y="-26vh" />
                <Skill value="Python" x="-30vw" y="20vh" />
                <Skill value="NextJS" x="30vw" y="-20vh" />
                <Skill value="Material UI" x="1vw" y="20vh" />
                <Skill value="Mainframe" x="40vw" y="1vh" />
                <Skill value="AWS" x="-32vw" y="-6vh" />
                <Skill value="Git / GitHub" x="25vw" y="8vh" />
            </div>
        </section>
    );
}
