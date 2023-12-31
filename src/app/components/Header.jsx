import NavBar from "./NavBar";
import { navData } from "../../../public/data/navData";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";
import Link from "next/link";

export default function Header() {
    return (
        <header
            className="w-full px-20 py-16 bg-light-color dark:bg-dark-color 
                flex justify-between items-center relative">
            <div className="absolute left-5">
                <NavBar links={navData} />
            </div>
            <div className="absolute left-[50%] translate-x-[-50%]">
                <Logo />
            </div>
            <div className="md:hidden block absolute right-5">
                <SocialIcons />
            </div>

            <Link
                className="hidden md:inline-block absolute right-5 p-2 rounded-full w-16 h-16 
                text-center text-base font-righteous bg-dark-color text-light-color animate-pulse
                dark:bg-secondary-color border-2 border-solid border-transparent hover:border-dark-color 
                dark:hover:border-light-color hover:bg-light-color hover:text-dark-color"
                href={`mailto:bhar.debaditya@gmail.com`}
                target="_blank">
                Hire Me!
            </Link>
        </header>
    );
}
