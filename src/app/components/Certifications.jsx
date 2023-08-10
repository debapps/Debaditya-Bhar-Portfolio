"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { certData } from "../../../public/data/certData";

export default function Certifications() {
    return (
        <section className="flex flex-col justify-center items-center my-32 w-full">
            <h1
                className="text-7xl xl:text-6xl lg:text-4xl
                font-roboto text-primary-color dark:text-secondary-color mb-16">
                Certifications
            </h1>
            <motion.div
                className="w-full mx-auto flex flex-row md:flex-col items-center justify-center"
                initial={{ y: 100, opacity: 0.02 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                }}>
                {certData.map((cert, idx) => {
                    return (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 0.95 }}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-secondary-color/70 text-primary-color 
                            dark:text-light-color w-1/3 md:w-full h-fit p-10 
                            flex items-center justify-center m-5 rounded-md 
                            shadow-md shadow-primary-color">
                            <Link href={cert.verfyLink} target="_blank">
                                <h3
                                    className="text-2xl lg:text-xl md:text-xl font-righteous 
                                font-semibold mb-2">
                                    {cert.name}
                                </h3>
                                <p
                                    className="text-base lg:text-base md:text-sm font-poppins 
                                font-thin text-dark-color/75 dark:text-primary-color">
                                    Issued By: {cert.issuedBy}
                                </p>
                            </Link>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}
