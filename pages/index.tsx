import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import api from "../api";
import { TCountry } from "../types";
import { Country } from "../components";
import { GrSearch } from "react-icons/gr";

const Home = ({
    countries,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Head>
                <title>Our World, Our Earth</title>
            </Head>
            <div className="min-h-screen bg-lt-mode-bg w-full px-6">
                {/* Toolbar */}
                <div className="py-4">
                    {/* Search Bar */}
                    <div className="flex flex-row justify-between items-center gap-4 px-4 py-2 tablet:w-[500px] bg-white rounded-md shadow-md">
                        <GrSearch size={18} className="text-gray-600" />
                        <input
                            className="text-lt-mode-text w-full p-2 bg-transparent focus:outline-none"
                            type="text"
                            placeholder="Search for a country..."
                        />
                    </div>
                </div>

                {/* Country List */}
                <div className="grid grid-cols-1 px-10 py-4 tablet:px-0 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-10">
                    {countries.map((item, index) => (
                        <Country key={index} country={item} />
                    ))}
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
