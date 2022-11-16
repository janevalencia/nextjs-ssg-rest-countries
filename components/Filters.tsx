import { useEffect, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const defaultFilterProps = {
    defaultFilter : "Filter by Region"
}

type FiltersProps = {
    defaultFilter : string
} & typeof defaultFilterProps;

const Filters = ({defaultFilter} : FiltersProps ) => {
    const [filter, setFilter] = useState<string>(defaultFilter);

    return (
        <div className="flex flex-col gap-2 w-[200px]">
            <div className="py-2 w-full bg-white rounded-md shadow-md">
                <button className="flex flex-row justify-between items-center gap-4 w-full">
                    {filter}
                    <RiArrowDropDownLine size={20} />
                </button>
            </div>
            <div className="p-5 w-full bg-white rounded-md shadow-md">
                <ul className="flex flex-col gap-2">
                    <li className="cursor-pointer hover:underline" onClick={() => setFilter("Africa")}>Africa</li>
                    <li className="cursor-pointer hover:underline" onClick={() => setFilter("America")}>America</li>
                    <li className="cursor-pointer hover:underline" onClick={() => setFilter("Asia")}>Asia</li>
                    <li className="cursor-pointer hover:underline" onClick={() => setFilter("Europe")}>Europe</li>
                    <li className="cursor-pointer hover:underline" onClick={() => setFilter("Oceania")}>Oceania</li>
                    <li className="cursor-pointer hover:underline" onClick={() => setFilter(defaultFilter)}>Show All</li>
                </ul>
            </div>
        </div>
    );
};
Filters.defaultProps = defaultFilterProps;

export default Filters;
