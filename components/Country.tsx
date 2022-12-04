import { TCountry } from "../types";

// Define the props required for the Country component.
type CountryProps = {
    country: TCountry;
};

// Render Country component.
const Country = ({ country }: CountryProps) => {
    return (
        <div className="dark-mode-container bg-white shadow-md rounded-md hover:cursor-pointer hover:scale-105 duration-300 h-full">
            <div className="mb-4">
                <picture>
                    <source srcSet={country.flags.png} type="image/png" />
                    <img
                        src={country.flags.png}
                        alt={country.name}
                        className="rounded-t-md w-full tablet:h-[250px] laptop:h-[200px] tablet:object-cover"
                    />
                </picture>
            </div>
            <div className="mb-4 p-6">
                <h2 className="text-lg">{country.name}</h2>
                <div className="mt-4 h-full">
                    <p className="font-light">
                        <span className="font-normal">Population: </span>
                        {country.population
                            .toString()
                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                    <p className="font-light">
                        <span className="font-normal">Region: </span>
                        {country.region}
                    </p>
                    <p className="font-light">
                        <span className="font-normal">Capital: </span>
                        {country.capital ? country.capital : "N/A"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Country;
