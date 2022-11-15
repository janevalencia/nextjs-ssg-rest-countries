import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import api from "../api";
import { TCountry } from "../types";
import { Country } from "../components";
import { GrSearch } from "react-icons/gr";
import React, { useState } from "react";

const Home = ({
    countries,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    // Define state of country list.
    const [list] = useState<TCountry[]>(countries);

    // Define state for the search input.
    const [query, setQuery] = useState<string>("");

    // Search by country name, capital, or alternative name spellings.
    const searchCountry = (countries: TCountry[]) => {
        return countries.filter((country) => {
            return (
                country.name.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
                (country.capital &&
                    country.capital.toLowerCase().indexOf(query.toLowerCase()) >
                        -1) ||
                (country.altSpellings &&
                    country.altSpellings.some(
                        (spelling) =>
                            spelling
                                .toLowerCase()
                                .indexOf(query.toLowerCase()) > -1
                    ))
            );
        });
    };

    return (
        <>
            <Head>
                <title>World of Countries</title>
            </Head>
            <div className="min-h-screen bg-lt-mode-bg w-full px-6">
                {/* Toolbar */}
                <div className="py-4">
                    {/* Search Bar */}
                    <div className="flex flex-row justify-between items-center gap-4 px-4 py-2 tablet:w-[500px] bg-white rounded-md shadow-md">
                        <GrSearch size={18} className="text-gray-600" />
                        <input
                            className="text-lt-mode-text w-full p-2 bg-transparent focus:outline-none"
                            type="search"
                            placeholder="Search for a country..."
                            onChange={(e) => setQuery(e.target.value)}
                            value={query}
                        />
                    </div>
                </div>

                {/* Country List */}
                <div className="grid grid-cols-1 px-10 py-4 tablet:px-0 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-10">
                    {searchCountry(list).length > 0 ? (
                        searchCountry(list).map((item, index) => (
                            <Country key={index} country={item} />
                        ))
                    ) : (
                        <p>No such country found.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps<{
    countries: TCountry[];
}> = async () => {
    // Fetch data from countries API.
    const res = await api.get("all");
    const countries = await res.data;

    // Return the static props.
    return {
        props: {
            countries,
        },
    };
};

export default Home;
