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
            <div className="w-[75%] mx-auto flex flex-col items-center justify-center">
                {certData.map((cert, idx) => {
                    return (
                        <motion.div
                            key={idx}
                            initial={{ x: 100, opacity: 0.02 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            whileHover={{ scale: 0.95 }}
                            transition={{ duration: 1, type: "spring" }}
                            className="bg-secondary-color/70 text-primary-color w-[50%] h-auto p-10 
                            flex flex-col items-start justify-center my-5 rounded-md 
                            shadow-md shadow-primary-color">
                            <Link href={cert.verfyLink} target="_blank">
                                <h3 className="text-4xl font-righteous font-semibold mb-8">
                                    {cert.name}
                                </h3>
                                <p className="text-base font-poppins font-thin text-dark-color/75">
                                    Issued By: {cert.issuedBy}
                                </p>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
