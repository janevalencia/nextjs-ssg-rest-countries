import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import api from "../api";
import { TCountry } from "../types";
import { Country, Filters, SearchBar } from "../components";

// Get initial data on build with getStaticProps.
export const getStaticProps: GetStaticProps<{
    countries: TCountry[];
}> = async () => {
    // Fetch data from countries API.
    const res = await api.get(
        "all?fields=name,altSpellings,capital,region,population,flags"
    );
    const countries = await res.data;

    // Return the static props.
    return {
        props: {
            countries,
        },
    };
};

// Render Home page.
const Home = ({
    countries,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    // Define state of country list.
    const [list, setList] = useState<TCountry[]>([]);

    // Define state of filtered / searched country list.
    const [searchResults, setSearchResults] = useState<TCountry[]>([]);

    // Define state for the search input.
    const [query, setQuery] = useState<string>("");

    // Define state of filter option activated.
    const [filter, setFilter] = useState<string>("");

    // Define state of regions list.
    const [regions] = useState<string[]>([
        "Africa",
        "Americas",
        "Asia",
        "Europe",
        "Oceania",
    ]);

    // Component re-render when there is search query & change in list state.
    useEffect(() => {
        setSearchResults(
            list.filter((country) => {
                return (
                    country.name.toLowerCase().indexOf(query.toLowerCase()) >
                        -1 ||
                    (country.capital &&
                        country.capital
                            .toLowerCase()
                            .indexOf(query.toLowerCase()) > -1) ||
                    (country.altSpellings &&
                        country.altSpellings.some(
                            (spelling) =>
                                spelling
                                    .toLowerCase()
                                    .indexOf(query.toLowerCase()) > -1
                        ))
                );
            })
        );

        // Clean up effect.
        return () => setSearchResults([]);
    }, [query, list]);

    // Component re-render when a filter is activated.
    useEffect(() => {
        if (filter !== "") {
            setList(
                countries.filter((country) => {
                    return (
                        country.region.toLowerCase() === filter.toLowerCase()
                    );
                })
            );
        } else {
            setList(countries);
        }
    }, [filter, countries]);

    return (
        <>
            <Head>
                <title>World of Countries</title>
            </Head>
            <div className="page-container min-h-screen bg-lt-mode-bg w-full px-6 laptop:px-12">
                {/* Toolbar */}
                <div className="flex flex-col gap-8 tablet:flex-row tablet:gap-2 py-6 justify-between">
                    {/* Search Bar */}
                    <SearchBar
                        value={query}
                        setValue={setQuery}
                        placeholder="Search for a country..."
                    />
                    {/* Filter */}
                    <Filters regions={regions} setFilter={setFilter} />
                </div>

                {/* Country List */}
                <div className="grid grid-cols-1 py-10 tablet:grid-cols-2 laptop:grid-cols-4 desktop:grid-cols-6 gap-8">
                    {searchResults.length > 0 ? (
                        searchResults.map((item, index) => (
                            <a key={index} href={`/countries/${item.name.toLowerCase().replace(/ /g, "_")}`}>
                                <Country country={item} />
                            </a>
                        ))
                    ) : (
                        <p>No such country found.</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Home;
