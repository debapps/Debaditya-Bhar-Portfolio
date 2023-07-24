"use client";
import { animate, motion } from "framer-motion";

const quote = {
    initial: {},
    animate: {
        transition: {
            delay: 0.5,
            staggerChildren: 0.09,
        },
    },
};

const singleWord = {
    initial: {
        opacity: 0.02,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};

export default function AnimateHeading({ text }) {
    return (
        <div className="w-full overflow-hidden flex items-start justify-start py-2">
            <motion.h1
                className="text-7xl text-primary-color font-bold font-roboto inline-block"
                variants={quote}
                initial="initial"
                animate="animate">
                {text.split(" ").map((word, idx) => {
                    return (
                        <motion.span
                            variants={singleWord}
                            key={idx}>{`${word} `}</motion.span>
                    );
                })}
            </motion.h1>
        </div>
    );
}
