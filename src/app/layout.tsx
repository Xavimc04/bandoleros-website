import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: APP_NAME,
    description: APP_DESCRIPTION,
    icons: {
        icon: "images/bandoleros_rp_logo.jpg"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={ inter.className }>
                { children }
            </body>
        </html>
    );
}
