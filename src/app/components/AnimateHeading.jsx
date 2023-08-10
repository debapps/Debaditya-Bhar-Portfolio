"use client";
import { motion } from "framer-motion";

export default function AnimateHeading({ text }) {
    return (
        <div className="w-full overflow-hidden flex items-start justify-start py-2 sm:py-0">
            <h1
                className="text-7xl xl:text-6xl lg:text-4xl text-primary-color 
                dark:text-secondary-color font-bold font-roboto inline-block">
                {text.split(" ").map((word, idx) => {
                    return (
                        <motion.span
                            key={idx}
                            className={`inline-block mr-4 delay-[${idx * 0.1}]`}
                            initial={{ y: "30px", opacity: 0.02 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeInOut",
                                delay: 0.1 * idx,
                            }}>
                            {`${word}`}
                        </motion.span>
                    );
                })}
            </h1>
        </div>
    );
}
