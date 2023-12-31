import AnimateHeading from "../components/AnimateHeading";
import { projectData } from "../../../public/data/projectData";
import FeatureProject from "../components/FeatureProject";
import SampleProject from "../components/SampleProject";
import TransitionEffect from "../components/TransitionEffect";

export const metadata = {
    title: "Projects - Debaditya Bhar - AWS Certified Cloud Developer | Full Stack (MERN) Web Developer | Python Data Analyst | Mainframe Developer",
    description:
        "Debaditya Bhar - AWS Certified Cloud Developer | Full Stack (MERN) Web Developer | Python Data Analyst | Mainframe Developer.Next.JS, React JS, Node JS, MongoDB, HTML, CSS, JavaScript, Python, Pandas, COBOL, JCL, DB2, MtSQL. Open to work, remote work, hybrid work.",
};

export default function Project() {
    return (
        <main
            className="min-h-screen px-32 xl:px-24 lg:px-16 md:px-12 sm:px-8 
            py-10 bg-light-color dark:bg-dark-color w-full">
            <TransitionEffect />
            <AnimateHeading text={`My Journey through Ingenuity ...`} />
            <section className="grid grid-cols-12 gap-y-24 gap-x-10 md:gap-x-0 w-full my-20">
                <div className="col-span-12">
                    <FeatureProject
                        title={projectData[0].title}
                        summary={projectData[0].summary}
                        image={projectData[0].image}
                        githubRepo={projectData[0].githubRepo}
                        projectLink={projectData[0].projectLink}
                    />
                </div>
                <div className="col-span-6 md:col-span-12">
                    <SampleProject
                        title={projectData[1].title}
                        summary={projectData[1].summary}
                        image={projectData[1].image}
                        githubRepo={projectData[1].githubRepo}
                        projectLink={projectData[1].projectLink}
                    />
                </div>
                <div className="col-span-6 md:col-span-12">
                    <SampleProject
                        title={projectData[2].title}
                        summary={projectData[2].summary}
                        image={projectData[2].image}
                        githubRepo={projectData[2].githubRepo}
                        projectLink={projectData[2].projectLink}
                    />
                </div>
                <div className="col-span-12">
                    <FeatureProject
                        title={projectData[3].title}
                        summary={projectData[3].summary}
                        image={projectData[3].image}
                        githubRepo={projectData[3].githubRepo}
                        projectLink={projectData[3].projectLink}
                    />
                </div>
                <div className="col-span-6 md:col-span-12">
                    <SampleProject
                        title={projectData[4].title}
                        summary={projectData[4].summary}
                        image={projectData[4].image}
                        githubRepo={projectData[4].githubRepo}
                        projectLink={projectData[4].projectLink}
                    />
                </div>
                <div className="col-span-6 md:col-span-12">
                    <SampleProject
                        title={projectData[5].title}
                        summary={projectData[5].summary}
                        image={projectData[5].image}
                        githubRepo={projectData[5].githubRepo}
                        projectLink={projectData[5].projectLink}
                    />
                </div>
                <div className="col-span-12">
                    <FeatureProject
                        title={projectData[6].title}
                        summary={projectData[6].summary}
                        image={projectData[6].image}
                        githubRepo={projectData[6].githubRepo}
                        projectLink={projectData[6].projectLink}
                    />
                </div>
                <div className="col-span-6 md:col-span-12">
                    <SampleProject
                        title={projectData[7].title}
                        summary={projectData[7].summary}
                        image={projectData[7].image}
                        githubRepo={projectData[7].githubRepo}
                        projectLink={projectData[7].projectLink}
                    />
                </div>
            </section>
        </main>
    );
}
