import Image from "next/image";
import MyPic from "../../../public/images/profile/My-Pic.png";
import AnimateHeading from "../components/AnimateHeading";

export const metadata = {
    title: "About | Debaditya Bhar",
    description:
        "This is Debaditya Bhar portfolio, experience, projects, education background, resume.",
};

export default function About() {
    return (
        <main className="min-h-screen px-20 py-10 bg-light-color">
            <AnimateHeading text={`Embarking on the Growth Journey!`} />

            <section className="flex flex-row justify-between items-center pt-10">
                <article className="flex flex-col justify-between items-start space-y-8 px-5 w-1/2">
                    <h2 className="text-4xl text-primary-color font-roboto">
                        Biography
                    </h2>
                    <p className="text-base text-dark-color font-poppins">
                        Hello Folks! Welcome to my world. I am Debaditya Bhar, a
                        Computer Science and Engineering Graduate, working in
                        Softwere and Consulting Industry for more than 13 years.
                        Currently, I am with TATA Consultancy Services (TCS), a
                        leading Softwere and Consulting giant based in India.
                    </p>
                    <p className="text-base text-dark-color font-poppins">
                        I have profound interest in computer programming and
                        cutting-edge technologies from my college days. I have
                        started my learning in programing from C, C++ and I work
                        as a Mainframe Developer in my workplace.
                    </p>
                    <p className="text-base text-dark-color font-poppins">
                        In my current company, I have worked with a couple of
                        clients as a developer and project coordinators. I also
                        worked as EDI analyst in B2B communication spaces for
                        more than 2 years.
                    </p>
                    <p className="text-base text-dark-color font-poppins">
                        Although I started my journey as Mainframe Developer, I
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
                    <p className="text-base text-dark-color font-poppins">
                        Beside programming, I have little hobbies... Reading
                        fictions and technical blogs, Watching movies are few of
                        them.
                    </p>
                </article>
                <div className="w-1/3 h-auto p-5 rounded-2xl border-2 border-solid border-dark-color shadow-lg shadow-secondary-color bg-dark-color">
                    <Image
                        src={MyPic}
                        alt="my-image"
                        className="w-full rounded-2xl"
                    />
                </div>
            </section>
        </main>
    );
}
