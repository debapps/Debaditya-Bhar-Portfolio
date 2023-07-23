"use client";
import Link from "next/link";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

export default function HeroButtons() {
    return (
        <section className="flex flex-row justify-center items-center space-x-4">
            <Link
                className="inline-block p-2 bg-dark-color text-light-color text-lg font-righteous rounded-md border-2 border-solid border-transparent hover:border-dark-color hover:bg-light-color hover:text-dark-color"
                href={`/resume/Resume-Debaditya-Bhar.pdf`}
                target="_blank"
                download={true}>
                Resume <FileDownloadOutlinedIcon />
            </Link>
            <Link
                className="inline-block p-2 bg-dark-color text-light-color text-lg font-righteous rounded-md border-2 border-solid border-transparent hover:border-dark-color hover:bg-light-color hover:text-dark-color"
                href={`mailto:bhar.debaditya@gmail.com`}
                target="_blank">
                Email me
            </Link>
        </section>
    );
}
