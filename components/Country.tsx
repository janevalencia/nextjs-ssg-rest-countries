import Link from "next/link";
import { useState } from "react";
import { TCountry } from "../types";

// Define the props required for the Country component.
type CountryProps = {
    country: TCountry;
};

// Render Country component.
const Country = ({ country }: { country: TCountry }) => {
    const [slug] = useState<string>(
        country.name.toLowerCase().replace(/ /g, "_")
    );

    return (
        <Link href={`/countries/${slug}`}>
            <div className="bg-white shadow-md rounded-md hover:cursor-pointer hover:scale-105 duration-300">
                <div className="mb-4">
                    <picture>
                        <source srcSet={country.flags.png} type="image/png" />
                        <img
                            src={country.flags.png}
                            alt={country.name}
                            className="rounded-t-md w-full h-[250px] laptop:h-[200px] object-cover"
                        />
                    </picture>
                </div>
                <div className="mb-4 p-6">
                    <h2 className="text-lg">{country.name}</h2>
                    <div className="mt-4">
                        <p className="font-light">
                            <span className="font-normal">Population: </span>
                            {country.population}
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
        </Link>
    );
};

export default Country;
