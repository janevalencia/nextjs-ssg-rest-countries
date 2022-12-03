import { Dispatch, SetStateAction } from "react";
import { AiOutlineSearch } from "react-icons/ai";

// Define props for SearchBar.
type SearchBarProps = {
    value : string,
    setValue : Dispatch<SetStateAction<string>>,
    placeholder : string
}

// Render SearchBar component.
const SearchBar = ({value, setValue, placeholder} : SearchBarProps) => {
    return (
        <div className="dark-mode-container flex flex-row justify-between items-center gap-4 px-4 py-2 tablet:w-[450px] laptop:w-[550px] desktop:w-[650px] bg-white rounded-md shadow-md">
            <AiOutlineSearch size={18} className="icon" />
            <input
                className="input text-lt-mode-text w-full p-2 bg-transparent focus:outline-none"
                type="search"
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
        </div>
    );
};

export default SearchBar;
