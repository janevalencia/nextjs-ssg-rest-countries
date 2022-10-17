import { BsFillMoonFill } from "react-icons/bs";

const Header = () => {
    return (
        <header className="flex flex-row flex-wrap justify-between items-center gap-2 w-full min-h-[8vh] px-6 py-10">
            <h1 className="text-lg tablet:text-xl desktop:text-2xl">Where in the world?</h1>
            <div className="flex justify-end items-center gap-2 cursor-pointer text-base desktop:text-lg">
                <BsFillMoonFill className="mx-1 my-2" />
                <p className="text-bold"><span>Dark</span> Mode</p>
            </div>
        </header>
    );
};

export default Header;
