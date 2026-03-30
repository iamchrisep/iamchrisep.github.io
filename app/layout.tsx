import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const font = Lato({
    subsets: ["latin-ext"],
    display: "swap",
    variable: "--font-lato",
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Krystsina Bahdanava | Frontend Engineer",
    description:
        "Portfolio website for Krystsina Bahdanava, a frontend engineer focused on accessible, maintainable, and performant product interfaces.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={font.variable}>
            <body>{children}</body>
        </html>
    );
}
