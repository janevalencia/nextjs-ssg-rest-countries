import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { TCountry } from "../types";
import axios from 'axios';

const Home = ({
    countries,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Head>
                <title>Our World, Our Earth</title>
            </Head>
            <div className="min-h-screen w-full p-6">
                <ul>
                    {countries.map( (country, index) => (
                        <li key={index}>{country.name}</li>
                    ) )}
                </ul>
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
