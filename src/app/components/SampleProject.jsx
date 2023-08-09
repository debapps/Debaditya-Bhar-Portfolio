"use client";

import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import OutboundIcon from "@mui/icons-material/Outbound";
import getHTML from "@/utilities/HTMLConverter";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

// This is Feature Project.
export default function SampleProject({
    title,
    image,
    summary,
    githubRepo,
    projectLink,
}) {
    // Get the first 1 line of the summary.
    const shortSummary = `${summary.split(".")[0]}...`;

    return (
        <motion.article
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between items-center w-full p-10 border-2 border-solid
            border-dark-color dark:border-light-color rounded-2xl shadow-xl shadow-secondary-color 
            bg-white dark:bg-dark-color">
            <Link
                className="mb-4 w-full"
                href={projectLink ? projectLink : githubRepo}
                target="_blank">
                <MotionImage
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl w-full overflow-hidden"
                    src={image}
                    alt={title}
                    width={940}
                    height={788}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <section
                className="flex flex-col justify-center items-start space-y-5
                m-5 md:m-0 md:mt-10">
                <Link
                    href={projectLink ? projectLink : githubRepo}
                    target="_blank">
                    <h3
                        className="font-righteous text-xl md:text-lg text-primary-color 
                        bg-secondary-color p-2 max-w-fit rounded-lg cursor-pointer">
                        {title}
                    </h3>
                </Link>
                <div
                    className="preview"
                    dangerouslySetInnerHTML={{ __html: getHTML(shortSummary) }}
                />
                <div className="w-full flex justify-between items-center">
                    <Link href={githubRepo} target="_blank">
                        <GitHubIcon
                            className="text-github-color cursor-pointer hover:-translate-y-1"
                            fontSize="medium"
                        />
                    </Link>
                    {projectLink && (
                        <Link
                            className="max-w-fit p-2 rounded-md bg-dark-color dark:bg-secondary-color
                            hover:bg-secondary-color text-light-color dark:hover:text-primary-color
                            active:scale-95 font-righteous text-lg md:text-md sm:text-base xs:text-xs"
                            href={projectLink}
                            target="_blank">
                            Visit Project <OutboundIcon />
                        </Link>
                    )}
                </div>
            </section>
        </motion.article>
    );
}
