import Image from "next/image";
import profilePic from "../../public/images/profile/Hero-Image.png";
import AnimateHeading from "./components/AnimateHeading";
import HeroButtons from "./components/HeroButtons";
import TransitionEffect from "./components/TransitionEffect";

export default function Home() {
    return (
        <main
            className="min-h-screen px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8 
            py-10 bg-light-color dark:bg-dark-color w-full">
            <TransitionEffect />
            <section className="flex flex-row md:flex-col justify-between items-center">
                <div
                    className="w-full md:w-3/4 h-auto md:mt-10 md:mb-20 blob-div 
                    bg-gradient-to-br from-primary-color via-purple-500 to-secondary-color 
                    shadow-xl shadow-secondary-color">
                    <Image
                        src={profilePic}
                        alt="hero-image"
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                </div>
                <article className="flex flex-col justify-between items-start space-y-8 ml-20 md:ml-0 md:px-5">
                    <AnimateHeading text="Transforming ideas into reality with Design and Code." />
                    <p className="text-2xl xl:text-xl lg:text-lg md:text-md text-dark-color dark:text-light-color font-poppins font-medium">
                        As an experience web developer, I transform your ideas
                        into really good looking web apps with my full-stack
                        development expertise and experience.
                    </p>
                    <HeroButtons />
                </article>
            </section>
        </main>
    );
}
