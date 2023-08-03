"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SocialIcons from "./SocialIcons";

export default function NavBar({ links }) {
    // Get the current pathname.
    const path = usePathname();

    // Hamburger Menu open hook.
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="flex flex-row justify-between items-center relative">
            {/* Hamburger Menu */}
            <button
                className="hidden lg:flex flex-col justify-center items-center"
                onClick={() => {
                    setIsOpen(!isOpen);
                }}>
                <span
                    className={`bg-dark-color dark:bg-light-color block w-5 h-0.5 
                ${
                    isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                } transition-transform`}></span>
                <span
                    className={`bg-dark-color dark:bg-light-color block w-5 h-0.5 my-0.5 
                ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                <span
                    className={`bg-dark-color dark:bg-light-color block w-5 h-0.5 
                ${
                    isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                } transition-transform`}></span>
            </button>

            {/* Navigation Menu for Hamburger Menu */}
            <div
                className={`min-w-[75vw] bg-dark-color/90 dark:bg-light-color/75 backdrop-blur-md z-10
                p-10 rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                    isOpen ? "block" : "hidden"
                }`}>
                <nav className="flex flex-col justify-between items-center space-y-8">
                    {links.map((link, idx) => {
                        return (
                            <Link
                                onClick={() => {
                                    setIsOpen(!isOpen);
                                }}
                                className="font-righteous text-xl rounded-md text-secondary-color dark:text-primary-color  relative group"
                                key={idx}
                                href={link.href}
                                target={
                                    link.title === "Articles"
                                        ? "_blank"
                                        : "_self"
                                }>
                                {link.title}
                                <span
                                    className={`inline-block h-[2px] bg-secondary-color absolute left-0 bottom-0 group-hover:w-full transition-[width] ease-out duration-300 ${
                                        path === link.href ? "w-full" : "w-0"
                                    }`}>
                                    &nbsp;
                                </span>
                            </Link>
                        );
                    })}
                    <SocialIcons />
                </nav>
            </div>

            {/* Navigation Links for large screen */}
            <nav className="lg:hidden flex flex-row justify-between items-center space-x-8">
                {links.map((link, idx) => {
                    return (
                        <Link
                            className="font-righteous text-xl rounded-md text-primary-color dark:text-secondary-color relative group"
                            key={idx}
                            href={link.href}
                            target={
                                link.title === "Articles" ? "_blank" : "_self"
                            }>
                            {link.title}
                            <span
                                className={`inline-block h-[2px] bg-secondary-color absolute left-0 bottom-0 group-hover:w-full transition-[width] ease-out duration-300 ${
                                    path === link.href ? "w-full" : "w-0"
                                }`}>
                                &nbsp;
                            </span>
                        </Link>
                    );
                })}
            </nav>
        </section>
    );
}
