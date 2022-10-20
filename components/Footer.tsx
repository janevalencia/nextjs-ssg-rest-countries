import Image from "next/image";

// Define default Footer props.
const defaultFooterProps = {
    year: new Date().getFullYear(),
    author: "Jane Valencia"
}

// Define social media props.
type FooterProps = { 
    github? : string,
    linkedin? : string,
    instagram? : string,
    twitter? : string,
    youtube? : string,
    twitch? : string,
    medium? : string,
  } & typeof defaultFooterProps;

// Render component.
const Footer = (props : FooterProps) => {
    return (
        <footer className="w-full p-6" >
            <div className="border-t-2 border-gray-300 py-4" >
                <Image src="/android-chrome-512x512.png" alt="by janevalencia" width={32} height={32} />
                <p>Copyright &copy; { props.year } { props.author }. All rights reserved.</p>
            </div>
        </footer>
    );
}
Footer.defaultProps = defaultFooterProps;

export default Footer;