"use client";
import { motion, useScroll } from "framer-motion";

export default function CircleIcon({ targetRef }) {
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["center end", "center center"],
    });

    return (
        <figure
            className="absolute -left-[229px] xs:-left-[98px] md:-left-[153px] 
            lg:-left-[167px] xl:-left-[212px] -top-10 stroke-primary-color dark:stroke-secondary-color">
            <svg width="75" height="75" viewBox="0 0 100 100">
                <circle
                    cx="75"
                    cy="75"
                    r="20"
                    className="stroke-light-color stroke-1 fill-none"
                />
                <motion.circle
                    cx="75"
                    cy="75"
                    r="20"
                    className="fill-light-color stroke-primary-color dark:stroke-secondary-color"
                    style={{
                        strokeWidth: 5,
                        pathLength: scrollYProgress,
                    }}
                />
                <circle
                    cx="75"
                    cy="75"
                    r="10"
                    className="storke-1 fill-secondary-color dark:fill-primary-color animate-pulse"
                />
            </svg>
        </figure>
    );
}
