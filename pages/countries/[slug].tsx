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
            <div className="w-full flex flex-col laptop:flex-row justify-between items-center py-5 tablet:py-20">
                {/* Flag */}
                <div className="flex-none">
                    <picture>
                        <source srcSet={country.flags.png} type="image/png" />
                        <img
                            src={country.flags.png}
                            alt={country.name}
                            className="tablet:w-[525px] h-[320px] tablet:object-cover object-contain"
                        />
                    </picture>
                </div>
                {/* Description */}
                <div className="py-4 tablet:px-4 tablet:w-[525px] laptop:w-full laptop:ml-32">
                    <h2 className="text-xl tablet:text-center laptop:text-left">
                        {country.name}
                    </h2>
                    <div className="flex flex-col laptop:flex-row pt-6 gap-4">
                        <div className="w-full">
                            <p className="font-light mt-2">
                                <span className="font-normal">
                                    Population:{" "}
                                </span>
                                {country.population
                                    .toString()
                                    .replace(
                                        /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                        ","
                                    )}
                            </p>
                            <p className="font-light mt-2">
                                <span className="font-normal">Area: </span>
                                {country.area
                                    .toString()
                                    .replace(
                                        /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                        ","
                                    )}{" "}
                                &#13217;
                            </p>
                            <p className="font-light mt-2">
                                <span className="font-normal">
                                    Lat / Long:{" "}
                                </span>
                                {country.latlng[0]}&deg; / {country.latlng[1]}
                                &deg;
                            </p>
                            <p className="font-light mt-2">
                                <span className="font-normal">Region: </span>
                                {country.region}
                            </p>
                            <p className="font-light mt-2">
                                <span className="font-normal">
                                    Sub Region:{" "}
                                </span>
                                {country.subregion}
                            </p>
                            <p className="font-light mt-2">
                                <span className="font-normal">Capital: </span>
                                {country.capital}
                            </p>
                        </div>
                        <div className="w-full">
                            <p className="font-light mt-2">
                                <span className="font-normal">
                                    Calling Code:{" "}
                                </span>
                                {country.callingCodes.map((code, index) => {
                                    let text = "";
                                    if (index === 0) {
                                        text = "+" + code;
                                    } else {
                                        text = ", +" + code;
                                    }
                                    return text;
                                })}
                            </p>
                            <p className="font-light mt-2">
                                <span className="font-normal">
                                    Currencies:{" "}
                                </span>
                                {country.currencies.map((currency, index) => {
                                    let text = "";
                                    if (index === 0) {
                                        text = currency.name;
                                    } else {
                                        text = ", " + currency.name;
                                    }
                                    return text;
                                })}
                            </p>
                            <p className="font-light mt-2">
                                <span className="font-normal">Languages: </span>
                                {country.languages.map((language, index) => {
                                    let text = "";
                                    if (index === 0) {
                                        text = language.name;
                                    } else {
                                        text = ", " + language.name;
                                    }
                                    return text;
                                })}
                            </p>
                            <p className="font-light mt-2">
                                <span className="font-normal">Timezones: </span>
                                {country.timezones.map((timezone, index) => {
                                    let text = "";
                                    if (index === 0) {
                                        text = timezone;
                                    } else {
                                        text = ", " + timezone;
                                    }
                                    return text;
                                })}
                            </p>
                            <p className="font-light mt-2">
                                <span className="font-normal">
                                    Alternative Spellings:{" "}
                                </span>
                                {country.altSpellings.map((spelling, index) => {
                                    let text = "";
                                    if (index === 0) {
                                        text = spelling;
                                    } else {
                                        text = ", " + spelling;
                                    }
                                    return text;
                                })}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;
