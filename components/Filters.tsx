import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import Portal from "./Portal";

// Define the default props value.
const defaultFilterProps = {
    defaultFilter: "Filter by Region",
};

// Define props of Filters component.
type FiltersProps = {
    defaultFilter: string;
} & typeof defaultFilterProps;

// Render component.
const Filters = ({ defaultFilter }: FiltersProps) => {
    const [activeFilter, setActiveFilter] = useState<string>(defaultFilter);

    // Manage state opening and disclosing filter options.
    const [openFilters, setOpenFilters] = useState<boolean>(false);

    const handleFilter = (value : string) => {
        // Set the current active filter state.
        setActiveFilter(value);

        // Disclose filter options.
        setOpenFilters(false);
    }

    return (
        <div className="relative w-[200px]">
            <div className="py-2 w-full bg-white rounded-md shadow-md">
                <button
                    className="flex flex-row justify-between items-center gap-4 w-full"
                    onClick={() => setOpenFilters(!openFilters)}
                >
                    {activeFilter}
                    <RiArrowDropDownLine size={20} />
                </button>
            </div>
            <div id="country_filter_options" className="absolute top-[110%] w-full">
                {openFilters && (
                    <Portal wrapperId="country_filter_options">
                        <div className="p-5 w-full bg-white rounded-md shadow-md">
                            <ul className="flex flex-col gap-2">
                                <li
                                    className="cursor-pointer hover:underline"
                                    onClick={() => handleFilter("Africa")}
                                >
                                    Africa
                                </li>
                                <li
                                    className="cursor-pointer hover:underline"
                                    onClick={() => handleFilter("America")}
                                >
                                    America
                                </li>
                                <li
                                    className="cursor-pointer hover:underline"
                                    onClick={() => handleFilter("Asia")}
                                >
                                    Asia
                                </li>
                                <li
                                    className="cursor-pointer hover:underline"
                                    onClick={() => handleFilter("Europe")}
                                >
                                    Europe
                                </li>
                                <li
                                    className="cursor-pointer hover:underline"
                                    onClick={() => handleFilter("Oceania")}
                                >
                                    Oceania
                                </li>
                                <li
                                    className="cursor-pointer hover:underline"
                                    onClick={() => handleFilter(defaultFilter)}
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
