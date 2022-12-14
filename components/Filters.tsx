import { useState, Dispatch, SetStateAction } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Portal from "./Portal";

// Define the default props value.
const defaultFilterProps = {
    defaultFilter: "Filter by Region",
};

// Define props of Filters component.
type FiltersProps = {
    defaultFilter: string;
    regions: string[];
    setFilter: Dispatch<SetStateAction<string>>;
} & typeof defaultFilterProps;

// Render component.
const Filters = ({ defaultFilter, regions, setFilter }: FiltersProps) => {
    // Define state of filter text.
    const [filterText, setFilterText] = useState<string>(defaultFilter);

    // Define state opening and disclosing filter options.
    const [openFilters, setOpenFilters] = useState<boolean>(false);

    const handleFilter = (value: string) => {
        // Filter the country list.
        setFilter(value);

        // Set the current active filter state.
        setFilterText(value);

        // Disclose filter options.
        setOpenFilters(false);
    };

    const resetFilter = () => {
        // Filter the country list.
        setFilter("");

        // Set the current active filter state.
        setFilterText(defaultFilter);

        // Disclose filter options.
        setOpenFilters(false);
    };

    return (
        <div className="relative w-[200px]">
            <div className="dark-mode-container py-2 w-full bg-white rounded-md shadow-md">
                <button
                    className="dark-mode-btn flex flex-row justify-between items-center gap-4 w-full"
                    onClick={() => setOpenFilters(!openFilters)}
                >
                    <p>{filterText}</p>
                    <RiArrowDropDownLine size={20} className="icon" />
                </button>
            </div>
            <div
                id="country_filter_options"
                className="absolute top-[110%] w-full"
            >
                {openFilters && (
                    <Portal wrapperId="country_filter_options">
                        <div className="dark-mode-container p-5 w-full bg-white rounded-md shadow-md">
                            <ul className="flex flex-col gap-2">
                                {regions.map((region, index) => (
                                    <li
                                        key={index}
                                        className="cursor-pointer hover:underline"
                                        onClick={() => handleFilter(region)}
                                    >
                                        {region}
                                    </li>
                                ))}
                                <li
                                    className="cursor-pointer hover:underline"
                                    onClick={resetFilter}
                                >
                                    Show All
                                </li>
                            </ul>
                        </div>
                    </Portal>
                )}
            </div>
        </div>
    );
};
Filters.defaultProps = defaultFilterProps;

export default Filters;
