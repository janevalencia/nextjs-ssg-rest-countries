import type {
    InferGetStaticPropsType,
    GetStaticPropsContext,
    GetStaticPropsResult,
    GetStaticPathsResult,
} from "next";
import { useState } from "react";
import Link from "next/link";
import api from "../../api";
import { TCountry } from "../../types";
import { BiArrowBack } from "react-icons/bi";

type PageParams = {
    slug: string;
};

type CountryPageProps = {
    country: TCountry;
    borders: string[];
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

    // Get the country borders code and make it into one string.
    const bordersQueryString = country[0].borders?.toString();

    // Fetch the selected country borders and create a custom array containing name of the borders.
    const bordersName: string[] = [];
    if (bordersQueryString) {
        const borders: any[] = await api
            .get(`alpha?codes=${bordersQueryString}`)
            .then((res) => res.data);

        borders.map((border) => bordersName.push(border.name));
    }

    return {
        props: {
            country: country[0],
            borders: bordersName,
        },
    };
};

// Render Country Individual Page.
const Country = ({
    country,
    borders,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [countryBorders] = useState<string[]>(borders);
    return (
        <div className="page-container min-h-screen bg-lt-mode-bg w-full px-16 py-6">
            <Link
                href="/"
                className="min-w-[120px] flex flex-row justify-center items-center gap-4 bg-white shadow-md rounded-md border"
            >
                <button className="dark-mode-btn min-w-[120px] flex flex-row justify-center items-center gap-4 bg-white shadow-md rounded-md border">
                    <BiArrowBack className="icon" />
                    <p>Back</p>
                </button>
            </Link>
            <div className="w-full flex flex-col tablet:items-center laptop:flex-row justify-between laptop:items-start py-5 tablet:py-20">
                {/* Flag */}
                <div className="flex-none">
                    <picture>
                        <source srcSet={country.flags.png} type="image/png" />
                        <img
                            src={country.flags.png}
                            alt={country.name}
                            className="tablet:w-[525px] max-h-[320px] tablet:object-cover border shadow-md dark-mode-border-color"
                        />
                    </picture>
                </div>
                {/* Description */}
                <div className="w-full py-4 tablet:px-4 tablet:w-[525px] laptop:w-full laptop:ml-32">
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
                                    ? country.area
                                          .toString()
                                          .replace(
                                              /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                              ","
                                          )
                                    : "-"}{" "}
                                &#13217;
                            </p>
                            <p className="font-light mt-2">
                                <span className="font-normal">
                                    Lat / Long:{" "}
                                </span>
                                {country.latlng
                                    ? <>{country.latlng[0]}&deg; / {country.latlng[1]}&deg;</>
                                    : "N/A"}
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
                                {country.capital || "N/A"}
                            </p>
                        </div>
                        <div className="w-full">
                            <p className="font-light mt-2">
                                <span className="font-normal">
                                    Calling Code:{" "}
                                </span>
                                {country.callingCodes
                                    ? country.callingCodes.map(
                                          (code, index) => {
                                              let text = "";
                                              if (index === 0) {
                                                  text = "+" + code;
                                              } else {
                                                  text = ", +" + code;
                                              }
                                              return text;
                                          }
                                      )
                                    : "N/A"}
                            </p>
                            <p className="font-light mt-2">
                                <span className="font-normal">
                                    Currencies:{" "}
                                </span>
                                {country.currencies
                                    ? country.currencies.map(
                                          (currency, index) => {
                                              let text = "";
                                              if (index === 0) {
                                                  text = currency.name;
                                              } else {
                                                  text = ", " + currency.name;
                                              }
                                              return text;
                                          }
                                      )
                                    : "N/A"}
                            </p>
                            <p className="font-light mt-2">
                                <span className="font-normal">Languages: </span>
                                {country.languages
                                    ? country.languages.map(
                                          (language, index) => {
                                              let text = "";
                                              if (index === 0) {
                                                  text = language.name;
                                              } else {
                                                  text = ", " + language.name;
                                              }
                                              return text;
                                          }
                                      )
                                    : "N/A"}
                            </p>
                            <p className="font-light mt-2">
                                <span className="font-normal">Timezones: </span>
                                {country.timezones
                                    ? country.timezones.map(
                                          (timezone, index) => {
                                              let text = "";
                                              if (index === 0) {
                                                  text = timezone;
                                              } else {
                                                  text = ", " + timezone;
                                              }
                                              return text;
                                          }
                                      )
                                    : "N/A"}
                            </p>
                            <p className="font-light mt-2">
                                <span className="font-normal">
                                    Alternative Spellings:{" "}
                                </span>
                                {country.altSpellings
                                    ? country.altSpellings.map(
                                          (spelling, index) => {
                                              let text = "";
                                              if (index === 0) {
                                                  text = spelling;
                                              } else {
                                                  text = ", " + spelling;
                                              }
                                              return text;
                                          }
                                      )
                                    : "N/A"}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 laptop:flex-row laptop:items-center flex-wrap pt-6">
                        <h3 className="flex-none text-lg laptop:text-base font-normal">
                            Border Countries:
                        </h3>
                        <div className="flex flex-row flex-wrap gap-4">
                            {borders.length > 0 ? (
                                borders.map((border, index) => (
                                    <a
                                        key={index}
                                        className="dark-mode-btn border shadow-md px-5 py-2 rounded-md bg-white text-center min-w-[100px]"
                                        href={`/countries/${border
                                            .toLowerCase()
                                            .replace(/ /g, "_")}`}
                                    >
                                        {border}
                                    </a>
                                ))
                            ) : (
                                <p className="font-light">None</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;
