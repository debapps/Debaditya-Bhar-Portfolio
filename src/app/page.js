import Image from "next/image";
import profilePic from "../../public/images/profile/Hero-Image.png";
import AnimateHeading from "./components/AnimateHeading";
import HeroButtons from "./components/HeroButtons";

export default function Home() {
    return (
        <main className="min-h-screen p-20 bg-light-color dark:bg-dark-color">
            <section className="flex flex-row justify-between items-center rounded-[60% 40% 60% 50%]">
                <div className="w-2/3 h-auto blob-div bg-gradient-to-br from-primary-color via-purple-500 to-secondary-color shadow-xl shadow-secondary-color">
                    <Image
                        src={profilePic}
                        alt="hero-image"
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                </div>
                <article className="flex flex-col justify-between items-start space-y-8 px-20">
                    <AnimateHeading text="Transforming ideas into reality with Design and Code." />
                    <p className="text-2xl text-dark-color dark:text-light-color font-poppins font-medium">
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
