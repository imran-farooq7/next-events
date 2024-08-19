import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "./components/Navbar";
import { auth } from "@/auth";
import prisma from "@/prisma/db";
import { Toaster } from "react-hot-toast";

const monst = Montserrat({ subsets: ["latin"] });

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
			<body className={`${monst.className} bg-gray-950 h-screen`}>
				<Navbar user={session?.user!} />
				{children}
				<Toaster />
			</body>
		</html>
	);
}
