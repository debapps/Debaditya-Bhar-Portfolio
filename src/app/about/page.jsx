import Image from "next/image";
import MyPic from "../../../public/images/profile/My-Pic.png";
import AnimateHeading from "../components/AnimateHeading";
import AnimatedNumber from "../components/AnimatedNumber";
import SkillSection from "../components/SkillSection";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certifications from "../components/Certifications";

export const metadata = {
    title: "About | Debaditya Bhar",
    description:
        "This is Debaditya Bhar portfolio, experience, projects, education background, resume.",
};

export default function About() {
    return (
        <main className="min-h-screen px-32 py-10 bg-light-color dark:bg-dark-color">
            <AnimateHeading text={`Embarking on the Growth Journey!`} />

            <section className="flex flex-row justify-between items-start space-x-32 pt-10">
                <article className="flex flex-col justify-between items-start space-y-8 w-1/2">
                    <h2 className="text-4xl text-primary-color dark:text-secondary-color font-roboto">
                        Biography
                    </h2>
                    <p className="text-base text-dark-color dark:text-light-color font-poppins">
                        Hello Folks! Welcome to my world. I am Debaditya Bhar, a
                        Computer Science and Engineering Graduate, working in
                        Softwere and Consulting Industry for more than 13 years.
                        I help my customer to transform their ideas into user
                        centric design and high performance web pages, make
                        strategic insight from their data.
                    </p>
                    <p className="text-base text-dark-color dark:text-light-color font-poppins">
                        In my current company, I have worked with a couple of
                        clients as a developer and project coordinators. I also
                        worked as EDI analyst in B2B communication spaces for
                        more than 2 years.
                    </p>
                    <p className="text-base text-dark-color dark:text-light-color font-poppins">
                        I started my journey as Mainframe Developer. Then, I
                        switched to digital technologies and self-learned Web
                        technologies, Data analytics with Python, AWS Cloud
                        Development with Golang. I applied my digital skills in
                        several projects for several clients as a project
                        coordinator. I have developed several web applications
                        and used my Data Analysis skills into several analysis
                        projects. I like to apply my skills and knowledge to
                        solve new problems in the ever-chaging scenario of the
                        world of Business.
                    </p>
                    <p className="text-base text-dark-color dark:text-light-color font-poppins">
                        Beside programming, I have little hobbies... Reading
                        fictions and technical blogs, Watching movies are few of
                        them.
                    </p>
                </article>
                <div
                    className="w-1/2 h-auto p-5 rounded-2xl border-2 border-solid border-dark-color 
                shadow-2xl shadow-secondary-color bg-light-color">
                    <Image
                        src={MyPic}
                        alt="my-image"
                        className="w-full rounded-2xl"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="w-20 h-auto flex flex-col justify-between items-start space-y-20">
                    <div className="flex flex-col justify-center items-start">
                        <AnimatedNumber value={12} />
                        <h3 className="text-2xl font-poppins text-dark-color dark:text-light-color ">
                            years of experience.
                        </h3>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                        <AnimatedNumber value={10} />

                        <h3 className="text-2xl font-poppins text-dark-color dark:text-light-color ">
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
