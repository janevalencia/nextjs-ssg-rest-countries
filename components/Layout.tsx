import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Solution developed by Jane Valencia for Frontend Mentor (FEM) challenge called REST Countries API."
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
