import { ReactNode } from "react";
import type { Metadata } from "next";

import { IBM_Plex_Sans } from "next/font/google";

import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
	display: "swap",
	subsets: ["latin"],
	weight: ["500", "600", "700"],
	variable: "--font-ibmPlexSans",
});

export const metadata: Metadata = {
	title: "Coffee Connoisseur",
	description: "Discover your local coffee shops",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${ibmPlexSans.variable} `}>{children}</body>
		</html>
	);
}
