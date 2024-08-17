import { Suspense } from "react";
import Events from "../components/Events";
import Loading from "./loading";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "All upcoming Events",
	description: "List of all the upcoming events around you",
};
const EventsPage = () => {
	return (
		<main className="mx-auto py-12 max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
			<h1 className="mb-6 mt-4 text-xl font-bold lg:text-5xl text-white">
				All Events
			</h1>
			<Suspense fallback={<Loading />}>
				<Events isFeatured={false} />
			</Suspense>
		</main>
	);
};

export default EventsPage;
