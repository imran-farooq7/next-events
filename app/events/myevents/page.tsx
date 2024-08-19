import Events from "@/app/components/Events";
import { auth } from "@/auth";
import prisma from "@/prisma/db";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import Loading from "../loading";

const MyEventsPage = async () => {
	const session = await auth();

	if (!session) {
		redirect("/api/auth/signin");
	}
	return (
		<div className="mx-auto py-12 max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
			<h1 className="mb-6 mt-4 text-xl font-bold lg:text-5xl text-white">
				My Events
			</h1>
			<Suspense fallback={<Loading />}>
				<Events isFeatured={false} myEvents />
			</Suspense>
		</div>
	);
};

export default MyEventsPage;
