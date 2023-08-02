import Image from "next/image";
import LogoImg from "../../../public/images/profile/Debaditya_Bhar_Logo.png";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/">
            <Image
                className="w-16 h-16 rounded-full border border-solid 
                border-transparent dark:border-light-color"
                src={LogoImg}
                alt="logo-image"
            />
        </Link>
    );
}
