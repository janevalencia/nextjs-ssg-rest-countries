import { Dispatch, SetStateAction } from "react";
import { GrSearch } from "react-icons/gr";

// Define props for SearchBar.
type SearchBarProps = {
    value : string,
    setValue : Dispatch<SetStateAction<string>>,
    placeholder : string
}

// Render SearchBar component.
const SearchBar = ({value, setValue, placeholder} : SearchBarProps) => {
    return (
        <div className="flex flex-row justify-between items-center gap-4 px-4 py-2 tablet:w-[450px] laptop:w-[550px] desktop:w-[650px] bg-white rounded-md shadow-md">
            <GrSearch size={18} />
            <input
                className="text-lt-mode-text w-full p-2 bg-transparent focus:outline-none"
                type="search"
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
        </div>
    );
};

export default SearchBar;
