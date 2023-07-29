"use client";
import Link from "next/link";
import { expData } from "../../../public/data/expData";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import CircleIcon from "./CircleIcon";
import getHTML from "@/utilities/HTMLConverter";

export default function Experience() {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "center start"],
    });

    return (
        <section className="flex flex-col justify-center items-center my-32 w-full">
            <h1 className="text-7xl font-roboto text-primary-color mb-16">
                Experience
            </h1>
            <div ref={scrollRef} className="w-[75%] mx-auto relative">
                <motion.div
                    className="absolute top-0 left-4 w-1 h-full bg-dark-color origin-top"
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className="flex flex-col justify-between items-start ml-4">
                    {expData.map((exp, idx) => {
                        return (
                            <Details
                                key={idx}
                                position={exp.position}
                                company={exp.company}
                                companyLink={exp.companyLink}
                                time={exp.time}
                                work={exp.work}
                            />
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

function Details({ position, company, companyLink, time, work }) {
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
                <h3 className="text-2xl font-roboto font-bold text-primary-color capitalize">
                    {position}{" "}
                    <Link
                        href={companyLink}
                        target="_blank"
                        className="text-secondary-color">
                        @{company}
                    </Link>
                </h3>
                <span className="text-base font-normal font-poppins text-dark-color/70">
                    {time}
                </span>
                <div
                    className="preview"
                    dangerouslySetInnerHTML={{ __html: getHTML(work) }}></div>
            </motion.div>
        </li>
    );
}
