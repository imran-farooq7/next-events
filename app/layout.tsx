import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "./components/Navbar";
import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next Events - Events around you ",
	description: "Browse more than 10,000 events around you",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();
	return (
		<html lang="en">
			<body className={`${inter.className} bg-gray-950 h-screen`}>
				<Navbar user={session?.user!} />
				{children}
			</body>
		</html>
	);
}
