import Image from "next/image";
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillInstagram,
    AiFillMediumCircle,
} from "react-icons/ai";

// Define default Footer props.
const defaultFooterProps = {
    year: new Date().getFullYear(),
    author: "Jane Valencia",
};

// Define social media props.
type FooterProps = {
    github?: string;
    linkedin?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
    twitch?: string;
    medium?: string;
} & typeof defaultFooterProps;

// Render component.
const Footer = (props: FooterProps) => {
    return (
        <footer className="dark-mode-container w-full px-6 laptop:px-12 py-6 border-t-2 border-gray-100 tablet:flex align-top justify-between gap-2">
            <div className="mb-4">
                <h2 className="font-bold text-sm laptop:text-base">
                    Frontend Mentor Challenge
                </h2>
                <p className="text-xs tablet:text-sm">
                    Copyright &copy; {props.year} {props.author}.
                </p>
                <p className="text-xs tablet:text-sm">All rights reserved.</p>
            </div>
            <div className="mb-4">
                <h2 className="font-bold text-sm tablet:text-base">
                    Resources
                </h2>
                <div className="flex flex-col">
                    <a
                        href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca"
                        target="_blank"
                        rel="noreferrer"
                    >
                        REST Countries API
                    </a>
                    <a
                        href="https://www.frontendmentor.io/challenges"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Challenges
                    </a>
                    <a
                        href="https://www.frontendmentor.io/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Frontend Mentor
                    </a>
                </div>
            </div>
            <div className="mb-4 flex flex-col justify-between tablet:text-right gap-4">
                <div className="flex gap-2">
                    <a href={props.github} target="_blank" rel="noreferrer">
                        <AiFillGithub size={30} />
                    </a>
                    <a href={props.linkedin} target="_blank" rel="noreferrer">
                        <AiFillLinkedin size={30} />
                    </a>
                    <a href={props.instagram} target="_blank" rel="noreferrer">
                        <AiFillInstagram size={30} />
                    </a>
                    <a href={props.medium} target="_blank" rel="noreferrer">
                        <AiFillMediumCircle size={30} />
                    </a>
                </div>
                <div className="pl-1">
                    <Image
                        src="/android-chrome-512x512.png"
                        alt="by janevalencia"
                        width={20}
                        height={20}
                    />
                </div>
            </div>
        </footer>
    );
};
Footer.defaultProps = defaultFooterProps;

export default Footer;
