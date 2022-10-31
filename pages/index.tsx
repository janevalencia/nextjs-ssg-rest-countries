import type { GetStaticProps, InferGetStaticPropsType } from "next";
import axios from 'axios';
import Head from "next/head";

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
    countries: any[];
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
