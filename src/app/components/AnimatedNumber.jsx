"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AnimatedNumber({ value }) {
    // animation hooks.
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (currentVal) => {
            if (ref.current && currentVal.toFixed(0) <= value) {
                ref.current.textContent = `${currentVal.toFixed(0)}+`;
            }
        });
    }, [springValue, value]);

    return (
        <span
            ref={ref}
            className="block text-5xl xl:text-4xl
            font-roboto text-primary-color dark:text-secondary-color"></span>
    );
}
