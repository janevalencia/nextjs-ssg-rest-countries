import Image from "next/image";

// Define the props required for the Country component.
type CountryProps = {
    name: string;
    img: string;
    population: number;
    capital: string;
    region: string;
};

// Render Country component.
const Country = ({ name, capital, region, population, img }: CountryProps) => {
    return (
        <div>
            <div>
                <picture>
                    <source
                        srcSet={img}
                        type="image/png"
                    />
                    <img
                        src={img}
                        alt={name}
                    />
                </picture>
            </div>
        </div>
    );
};

export default Country;
