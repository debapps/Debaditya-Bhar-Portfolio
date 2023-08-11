import Head from "next/head";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
    title: "Home - Debaditya Bhar - AWS Certified Cloud Developer | Full Stack (MERN) Web Developer | Python Data Analyst | Mainframe Developer",
    description:
        "Debaditya Bhar - AWS Certified Cloud Developer | Full Stack (MERN) Web Developer | Python Data Analyst | Mainframe Developer.Next.JS, React JS, Node JS, MongoDB, HTML, CSS, JavaScript, Python, Pandas, COBOL, JCL, DB2, MtSQL. Open to work, remote work, hybrid work.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </Head>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
