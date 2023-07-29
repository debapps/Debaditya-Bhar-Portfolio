"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { certData } from "../../../public/data/certData";

export default function Certifications() {
    return (
        <section className="flex flex-col justify-center items-center my-32 w-full">
            <h1 className="text-7xl font-roboto text-primary-color mb-16">
                Certifications
            </h1>
            <motion.div
                className="w-[90vw] mx-auto flex flex-row items-center justify-center"
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
                            className="bg-secondary-color/70 text-primary-color w-1/3 h-36 p-10 
                            flex items-center justify-center mx-5 rounded-md 
                            shadow-md shadow-primary-color">
                            <Link href={cert.verfyLink} target="_blank">
                                <h3 className="text-2xl font-righteous font-semibold mb-2">
                                    {cert.name}
                                </h3>
                                <p className="text-base font-poppins font-thin text-dark-color/75">
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
