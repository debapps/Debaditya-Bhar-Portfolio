"use client";
import { motion } from "framer-motion";

function Skill({ value, x, y }) {
    return (
        <motion.span
            className="text-base text-light-color bg-dark-color p-2 rounded-lg cursor-pointer absolute border border-solid border-transparent hover:border-dark-color hover:text-dark-color hover:bg-light-color"
            whileHover={{ scale: 1.05 }}
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
            <h1 className="text-7xl font-roboto text-primary-color mb-8">
                Skills
            </h1>
            <div className="w-full h-screen flex justify-center items-center relative bg-spiral-light">
                <motion.span
                    className="text-base text-light-color bg-dark-color p-2 w-16 h-16 text-center rounded-full cursor-pointer"
                    whileHover={{ scale: 1.05 }}>
                    My Skills
                </motion.span>

                {/* List of skills */}

                <Skill value="HTML5" x="1vw" y="8vh" />
                <Skill value="CSS3" x="-10vw" y="-12vh" />
                <Skill value="JavaScript / ES6" x="-10vw" y="10vh" />
                <Skill value="Bootstrap" x="14vw" y="2vh" />
                <Skill value="NodeJS" x="11vw" y="-20vh" />
                <Skill value="ExpressJS" x="-20vw" y="-5vh" />
                <Skill value="Go Lang" x="5vw" y="25vh" />
                <Skill value="Tailwind CSS" x="-10vw" y="-30vh" />
                <Skill value="MySQL" x="25vw" y="-10vh" />
                <Skill value="Unix Scripting" x="20vw" y="25vh" />
                <Skill value="REST API" x="-20vw" y="25vh" />
                <Skill value="MongoDB" x="-25vw" y="-28vh" />
                <Skill value="Python" x="-30vw" y="20vh" />
                <Skill value="NextJS" x="30vw" y="-20vh" />
                <Skill value="Material UI" x="1vw" y="-42vh" />
                <Skill value="Mainframe" x="40vw" y="1vh" />
                <Skill value="AWS" x="-15vw" y="-46vh" />
                <Skill value="Git / GitHub" x="18vw" y="-45vh" />
            </div>
        </section>
    );
}
