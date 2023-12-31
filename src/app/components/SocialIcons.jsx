"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "next/link";
import { motion } from "framer-motion";
import useThemeSwitcher from "../hooks/useThemeSwitcher";

// Create custom motion link.
const MotionLink = motion(Link);

export default function SocialIcons({ toggleMenu }) {
    // website theme (dark or light).
    const [theme, setTheme] = useThemeSwitcher();

    return (
        <section className="flex flex-row p-2 space-x-2">
            <MotionLink
                href={`https://www.linkedin.com/in/debaditya-bhar-6a00074a/`}
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}>
                <LinkedInIcon
                    className="text-linkedin-color cursor-pointer"
                    fontSize="medium"
                    onClick={toggleMenu}
                />
            </MotionLink>
            <MotionLink
                href={`https://github.com/debapps`}
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}>
                <GitHubIcon
                    className="text-github-color cursor-pointer"
                    fontSize="medium"
                    onClick={toggleMenu}
                />
            </MotionLink>
            <MotionLink
                href={`https://www.facebook.com/debadityabhar`}
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}>
                <FacebookIcon
                    className="text-facebook-color cursor-pointer"
                    fontSize="medium"
                    onClick={toggleMenu}
                />
            </MotionLink>
            <MotionLink
                href={`https://www.instagram.com/debadityabhar14/?hl=en`}
                target="_blank"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}>
                <InstagramIcon
                    className="text-insta-color cursor-pointer"
                    fontSize="medium"
                    onClick={toggleMenu}
                />
            </MotionLink>

            {theme === "light" ? (
                <button
                    className="text-dark-color bg-light-color rounded-full"
                    onClick={() => {
                        setTheme("dark");

                        if (typeof toggleMenu === "function") {
                            toggleMenu();
                        }
                    }}>
                    <DarkModeIcon />
                </button>
            ) : (
                <button
                    className="text-light-color bg-dark-color rounded-full"
                    onClick={() => {
                        setTheme("light");
                        if (typeof toggleMenu === "function") {
                            toggleMenu();
                        }
                    }}>
                    <LightModeIcon />
                </button>
            )}
        </section>
    );
}
