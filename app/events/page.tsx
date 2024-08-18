import { Suspense } from "react";
import Events from "../components/Events";
import Loading from "./loading";
import { Metadata } from "next";
import Pagination from "../components/Pagination";
export const metadata: Metadata = {
	title: "All upcoming Events",
	description: "List of all the upcoming events around you",
};
interface Props {
	searchParams: {
		page: string;
	};
}

const EventsPage = ({ searchParams }: Props) => {
	const page = searchParams.page || "1";
	return (
		<main className="mx-auto py-12 max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
			<h1 className="mb-6 mt-4 text-xl font-bold lg:text-5xl text-white">
				All Events
			</h1>
			<Suspense fallback={<Loading />}>
				<Events isFeatured={false} page={+page} />
			</Suspense>
		</main>
	);
};

export default EventsPage;
