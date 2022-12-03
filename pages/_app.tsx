import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components";
import { ThemeContextProvider } from "../store/ThemeContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeContextProvider>
    );
}

export default MyApp;
