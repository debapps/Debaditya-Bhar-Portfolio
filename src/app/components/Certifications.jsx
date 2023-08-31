"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { certData } from "../../../public/data/certData";
import Image from "next/image";

export default function Certifications() {
    return (
        <section className="flex flex-col justify-center items-center my-32 w-full">
            <h1
                className="text-7xl xl:text-6xl lg:text-4xl
                font-roboto text-primary-color dark:text-secondary-color mb-16">
                Certifications
            </h1>

            <div className="w-full mx-auto flex flex-wrap items-center justify-center">
                {certData.map((cert, idx) => {
                    return (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 0.95 }}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-secondary-color/60 text-primary-color 
                            dark:text-light-color w-[500px] md:w-full h-[500px] p-10 
                            flex items-center justify-center m-5 rounded-md 
                            shadow-md shadow-primary-color">
                            <Link href={cert.verfyLink} target="_blank">
                                <h3
                                    className="text-2xl lg:text-2xl md:text-3xl sm:text-4xl 
                                    font-righteous font-semibold mx-auto">
                                    {cert.name}
                                </h3>
                                <Image
                                    className="block py-10 mx-auto"
                                    src={cert.badgeImg}
                                    width={200}
                                    height={200}
                                    alt={cert.name}
                                />
                                <p
                                    className="text-lg lg:text-lg md:text-xl font-poppins 
                                font-thin text-dark-color/75 dark:text-primary-color mx-auto">
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
