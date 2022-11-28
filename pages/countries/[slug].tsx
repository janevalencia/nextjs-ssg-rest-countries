import type {
    InferGetStaticPropsType,
    GetStaticPropsContext,
    GetStaticPropsResult,
    GetStaticPathsResult,
} from "next";
import Link from "next/link";
import api from "../../api";
import { TCountry } from "../../types";
import { BiArrowBack } from "react-icons/bi";

type PageParams = {
    slug: string;
};

type CountryPageProps = {
    country: TCountry;
};

// Generate page paths for each country.
export const getStaticPaths = async (): Promise<
    GetStaticPathsResult<PageParams>
> => {
    // Fetch all countries data to be mapped into paths.
    const countries: TCountry[] = await api
        .get(
            "all?fields=name,altSpellings,callingCodes,capital,subregion,region,population,latlng,area,timezones,borders,flags,currencies,languages,independent"
        )
        .then((res) => res.data);

    // Generate paths.
    const paths = countries.map((country) => {
        return {
            params: {
                slug: country.name.toLowerCase().replace(/ /g, "_"),
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

// Fetch individual country page path and return to component rendering as props.
export const getStaticProps = async ({
    params,
}: GetStaticPropsContext<PageParams>): Promise<
    GetStaticPropsResult<CountryPageProps>
> => {
    const { slug } = params as PageParams;

    // Fetch single country
    const country = await api
        .get(`name/${slug.replace(/_/g, "%20")}`)
        .then((res) => res.data);

    return {
        props: {
            country: country[0],
        },
    };
};

// Render Country Individual Page.
const Country = ({
    country,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div className="min-h-screen bg-lt-mode-bg w-full px-16 py-6">
            <Link
                href="/"
                className="min-w-[120px] flex flex-row justify-center items-center gap-4 bg-white shadow-md rounded-md border"
            >
                <button className="min-w-[120px] flex flex-row justify-center items-center gap-4 bg-white shadow-md rounded-md border">
                    <BiArrowBack />
                    Back
                </button>
            </Link>
            <div className="w-full flex flex-col tablet:flex-row justify-between items-center py-20">
                <picture>
                    <source srcSet={country.flags.png} type="image/png" />
                    <img
                        src={country.flags.png}
                        alt={country.name}
                        className="w-[500px] object-cover"
                    />
                </picture>
            </div>
        </div>
    );
};

export default Country;
