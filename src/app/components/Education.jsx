"use client";
import { eduData } from "../../../public/data/eduData";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import CircleIcon from "./CircleIcon";
import getHTML from "@/utilities/HTMLConverter";

export default function Education() {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "center start"],
    });

    return (
        <section className="flex flex-col justify-center items-center my-32 w-full">
            <h1
                className="text-7xl xl:text-6xl lg:text-4xl
                font-roboto text-primary-color dark:text-secondary-color mb-16">
                Education
            </h1>
            <div ref={scrollRef} className="w-[75%] mx-auto relative">
                <motion.div
                    className="absolute top-0 left-4 w-1 h-full bg-dark-color 
                    dark:bg-light-color origin-top"
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className="flex flex-col justify-between items-start ml-4">
                    {eduData.map((edu, idx) => {
                        return (
                            <Details
                                key={idx}
                                degree={edu.degree}
                                time={edu.time}
                                institute={edu.institute}
                                info={edu.info}
                            />
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

function Details({ degree, time, institute, info }) {
    const listRef = useRef(null);

    return (
        <li
            ref={listRef}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto relative">
            <CircleIcon targetRef={listRef} />
            <motion.div
                className="flex flex-col justify-between items-start space-y-2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}>
                <h3
                    className="text-2xl xl:text-xl lg:text-lg font-roboto font-bold 
                    text-primary-color dark:text-secondary-color capitalize">
                    {degree}
                </h3>
                <span
                    className="text-base md:text-sm font-normal font-poppins 
                    text-dark-color/70 dark:text-light-color">
                    {time} | {institute}
                </span>
                <div
                    className="preview"
                    dangerouslySetInnerHTML={{ __html: getHTML(info) }}></div>
            </motion.div>
        </li>
    );
}
