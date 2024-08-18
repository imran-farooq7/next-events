import Events from "@/app/components/Events";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "../loading";

interface Props {
	params: {
		city: string;
	};
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const city = params.city;

	return {
		title: `Events in ${city.charAt(0).toLocaleUpperCase() + city.slice(1)}`,
	};
}

const EventsByCityPage = ({ params }: Props) => {
	// if (eventsByCity.length === 0) {
	// 	return (
	// 		<div className="min-h-screen flex justify-center items-center">
	// 			<h1 className="text-white text-4xl">
	// 				No Events found in {params.city}
	// 			</h1>
	// 		</div>
	// 	);
	// }
	return (
		<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<h1 className="mb-6 mt-4 text-xl font-bold lg:text-4xl text-white text-center">
				Events in <span className="capitalize">{params.city}</span>
			</h1>
			<Suspense fallback={<Loading />}>
				<Events city={params.city} />
			</Suspense>
		</main>
	);
};

export default EventsByCityPage;
