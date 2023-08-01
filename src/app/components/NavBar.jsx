"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar({ links }) {
    // Get the current pathname.
    const path = usePathname();

    return (
        <nav className="flex flex-row justify-between items-center space-x-8">
            {links.map((link, idx) => {
                return (
                    <Link
                        className="font-righteous text-xl rounded-md text-primary-color relative group"
                        key={idx}
                        href={link.href}
                        target={link.title === "Articles" ? "_blank" : "_self"}>
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
    );
}
