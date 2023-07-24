import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="p-2 border-t-[0.5px] border-gray-300 bg-gray-50 flex flex-col lg:flex-row justify-center lg:justify-between items-center">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center space-y-4 lg:space-x-5 m-2">
                <Logo />
                {/* Virtical Divider */}
                <span className="hidden lg:block lg:border-l-2 lg:border-l-brand-color1 lg:h-20"></span>
                {/* Copyright Text */}
                <p className="font-poppins font-light text-xs">
                    {new Date().getFullYear()} &copy; All Rights Reserved -
                    Debaditya Bhar
                </p>
            </div>
        </footer>
    );
}
