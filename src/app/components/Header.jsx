import NavBar from "./NavBar";
import { navData } from "../../../public/data/navData";
import Logo from "./Logo";
import SocialIcons from "./SocialIcons";

export default function Header() {
    return (
        <header className="w-full px-20 py-8 bg-light-color dark:bg-dark-color flex flex-row justify-between items-center">
            <NavBar links={navData} />
            <div className="absolute left-[50%] translate-x-[-50%]">
                <Logo />
            </div>
            <SocialIcons />
        </header>
    );
}
