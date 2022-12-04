import { BsFillMoonFill } from "react-icons/bs";
import { useContext } from "react";
import ThemeContext from "../store/ThemeContext";

const Header = () => {
    // Set context.
    const themeContext: {
        isDarkMode: boolean;
        toggleThemeHandler: () => void;
    } = useContext(ThemeContext);

    // Render.
    return (
        <header className="dark-mode-container flex flex-col items-start tablet:flex-row flex-wrap tablet:justify-between tablet:items-center border-b-2 border-gray-100 w-full min-h-[8vh] px-6 tablet:px-16 py-6">
            <h1 className="text-lg py-2 tablet:text-xl desktop:text-2xl">
                Where in the world?
            </h1>
            <button className="p-0" onClick={() => {themeContext.toggleThemeHandler()}}>
                <div className="flex justify-end items-center gap-2 cursor-pointer text-base desktop:text-lg">
                    <BsFillMoonFill className="theme-toggler-text mx-1 my-2" />
                    <p className="text-bold">
                        <span className="theme-toggler-text underline text-gray-600 hover:text-gray-800 duration-500">
                            {!themeContext.isDarkMode ? "Dark" : "Light"}
                        </span>{" "}
                        Mode
                    </p>
                </div>
            </button>
        </header>
    );
};

export default Header;
