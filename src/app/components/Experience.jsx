import Link from "next/link";
import { expData } from "../../../public/data/expData";

export default function Experience() {
    return (
        <section className="flex flex-col justify-center items-center mt-32 w-full">
            <h1 className="text-7xl font-roboto text-primary-color mb-16">
                Experience
            </h1>
            <div className="w-[75%] mx-auto relative">
                <div className="absolute top-0 left-4 w-1 h-full bg-dark-color" />
                <ul className="flex flex-col justify-between items-start ml-4">
                    {expData.map((exp, idx) => {
                        return (
                            <Details
                                key={idx}
                                position={exp.position}
                                company={exp.company}
                                companyLink={exp.companyLink}
                                time={exp.time}
                                work={exp.work}
                            />
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

function Details({ position, company, companyLink, time, work }) {
    return (
        <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto">
            <div className="flex flex-col justify-between items-start space-y-2">
                <h3 className="text-2xl font-roboto font-bold text-dark-color capitalize">
                    {position}{" "}
                    <Link
                        href={companyLink}
                        target="_blank"
                        className="text-primary-color">
                        @{company}
                    </Link>
                </h3>
                <span className="text-base font-normal font-poppins text-dark-color/70">
                    {time}
                </span>
                <p className="text-lg font-poppins text-dark-color/85">
                    {work}
                </p>
            </div>
        </li>
    );
}
