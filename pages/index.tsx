import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import React, { useState } from "react";
import api from "../api";
import { TCountry } from "../types";
import { Country, Filters, SearchBar } from "../components";

const Home = ({
    countries,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    // Define state of country list.
    const [list] = useState<TCountry[]>(countries);

    // Define state for the search input.
    const [query, setQuery] = useState<string>("");

    // Define state of filter option activated.
    const [filter, setFilter] = useState<string>("");

    // Search by country name, capital, or alternative name spellings.
    const searchCountry = () => {
        return list.filter((country) => {
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
                <div className="flex flex-col gap-8 tablet:flex-row tablet:gap-2 py-4 justify-between">
                    {/* Search Bar */}
                    <SearchBar value={query} setValue={setQuery} placeholder="Search for a country..." />
                    {/* Filter */}
                    <Filters />
                </div>

                {/* Country List */}
                <div className="grid grid-cols-1 px-10 py-4 tablet:px-0 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-10">
                    {searchCountry().length > 0 ? (
                        searchCountry().map((item, index) => (
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
    const res = await api.get("all?fields=name,altSpellings,callingCodes,capital,subregion,region,population,latlng,area,timezones,borders,flags,currencies,languages,independent");
    const countries = await res.data;

    // Return the static props.
    return {
        props: {
            countries,
        },
    };
};

export default Home;
