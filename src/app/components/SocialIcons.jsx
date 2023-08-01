"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import { motion } from "framer-motion";

// Create custom motion link.
const MotionLink = motion(Link);

export default function SocialIcons() {
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
                />
            </MotionLink>
        </section>
    );
}
