import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { TCountry } from "../types";
import axios from "axios";
import { Country } from "../components";

const Home = ({
    countries,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Head>
                <title>Our World, Our Earth</title>
            </Head>
            <div className="min-h-screen bg-lt-mode-bg w-full p-6">
                <div className="grid grid-cols-1 px-10 py-2 tablet:px-0 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-10">
                    {countries.map((item, index) => (
                        <Country
                            key={index}
                            country={item}
                        />
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
    const res = await axios.get("https://restcountries.com/v2/all");
    const countries = await res.data;

    // Return the static props.
    return {
        props: {
            countries,
        },
    };
};

export default Home;
