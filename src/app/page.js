import Image from "next/image";
import Logo from "../../public/images/Debaditya_Bhar_Logo.png";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-roboto text-brand-color1 bg-brand-color2 p-5 mb-5">
                Debaditya Bhar
            </h1>
            <Image className="w-36 h-36 rounded-full" src={Logo} alt="logo" />
        </main>
    );
}
