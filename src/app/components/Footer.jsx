import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer
            className="p-2 border-t-[0.5px] border-dark-color 
                dark:border-light-color bg-light-color dark:bg-dark-color 
                flex lg:flex-col flex-row lg:justify-center justify-between items-center">
            <div
                className="flex lg:flex-col flex-row lg:justify-center justify-start 
                items-center lg:space-y-4 space-x-5 m-2">
                <Logo />
                {/* Virtical Divider */}
                <span className="lg:hidden block border-l-2 border-l-brand-color1 h-20"></span>
                {/* Copyright Text */}
                <p className="font-poppins font-light text-xs text-dark-color dark:text-light-color">
                    {new Date().getFullYear()} &copy; All Rights Reserved -
                    Debaditya Bhar
                </p>
            </div>
            <div className="m-2">
                <Link
                    href={`mailto:bhar.debaditya@gmail.com`}
                    className="font-poppins font-bold text-xs text-dark-color 
                    dark:text-light-color m-1">
                    Email: bhar.debaditya@gmail.com
                </Link>
                <p
                    className="font-poppins font-bold text-xs text-dark-color 
                    dark:text-light-color m-1">
                    Mob: +91-629-009-3829
                </p>
            </div>
        </footer>
    );
}
