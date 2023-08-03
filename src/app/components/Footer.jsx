import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="p-2 border-t-[0.5px] border-dark-color dark:border-light-color bg-light-color dark:bg-dark-color flex flex-col lg:flex-row justify-center lg:justify-between items-center">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center space-y-4 lg:space-x-5 m-2">
                <Logo />
                {/* Virtical Divider */}
                <span className="hidden lg:block lg:border-l-2 lg:border-l-brand-color1 lg:h-20"></span>
                {/* Copyright Text */}
                <p className="font-poppins font-light text-xs text-dark-color dark:text-light-color">
                    {new Date().getFullYear()} &copy; All Rights Reserved -
                    Debaditya Bhar
                </p>
                <p className="font-poppins font-light text-xs text-dark-color dark:text-light-color">
                    Email: bhar.debaditya@gmail.com
                </p>
                <p className="font-poppins font-light text-xs text-dark-color dark:text-light-color">
                    Mob: +91-629-009-3829
                </p>
            </div>
        </footer>
    );
}
