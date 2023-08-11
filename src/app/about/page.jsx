import Image from "next/image";
import MyPic from "../../../public/images/profile/My-Pic.png";
import AnimateHeading from "../components/AnimateHeading";
import AnimatedNumber from "../components/AnimatedNumber";
import SkillSection from "../components/SkillSection";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certifications from "../components/Certifications";
import { bioData } from "../../../public/data/bioData";
import getHTML from "@/utilities/HTMLConverter";
import TransitionEffect from "../components/TransitionEffect";

export const metadata = {
    title: "About - Debaditya Bhar - AWS Certified Cloud Developer | Full Stack (MERN) Web Developer | Python Data Analyst | Mainframe Developer",
    description:
        "Debaditya Bhar - AWS Certified Cloud Developer | Full Stack (MERN) Web Developer | Python Data Analyst | Mainframe Developer.Next.JS, React JS, Node JS, MongoDB, HTML, CSS, JavaScript, Python, Pandas, COBOL, JCL, DB2, MtSQL. Open to work, remote work, hybrid work.",
};

export default function About() {
    return (
        <main
            className="min-h-screen px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8 
            py-10 bg-light-color dark:bg-dark-color w-full">
            <TransitionEffect />
            <AnimateHeading text={`Embarking on the Growth Journey!`} />

            <section
                className="flex flex-row md:flex-col justify-between items-start 
                space-x-32 md:space-x-0 pt-10">
                {/* Biography */}
                <article
                    className="flex flex-col justify-between md:justify-center items-start
                    space-y-8 w-1/2 md:w-full md:mb-10 md:order-2">
                    <h2
                        className="text-4xl lg:text-3xl md:text-2xl
                         text-primary-color dark:text-secondary-color font-roboto">
                        {bioData.title}
                    </h2>
                    <div
                        className="preview"
                        dangerouslySetInnerHTML={{
                            __html: getHTML(bioData.details),
                        }}></div>
                </article>
                {/* Image */}
                <div
                    className="w-1/2 md:w-full h-auto md:order-1 p-5 md:mb-20 rounded-2xl 
                    border-2 border-solid border-dark-color 
                    shadow-2xl shadow-secondary-color bg-light-color">
                    <Image
                        src={MyPic}
                        alt="my-image"
                        className="w-full rounded-2xl"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                {/* Statistics */}
                <div
                    className="w-20 h-auto flex flex-col md:flex-row justify-between
                    items-center space-y-20 md:space-y-0 md:space-x-28 md:order-3">
                    <div className="flex flex-col justify-center items-start">
                        <AnimatedNumber value={12} />
                        <h3
                            className="text-2xl lg:text-xl md:text-lg sm:text-base 
                            font-poppins text-dark-color dark:text-light-color">
                            years of experience.
                        </h3>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                        <AnimatedNumber value={10} />

                        <h3
                            className="text-2xl lg:text-xl md:text-lg sm:text-base 
                            font-poppins text-dark-color dark:text-light-color">
                            projects completed.
                        </h3>
                    </div>
                </div>
            </section>

            <SkillSection />
            <Experience />
            <Education />
            <Certifications />
        </main>
    );
}
