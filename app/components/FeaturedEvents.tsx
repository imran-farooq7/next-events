import { Suspense } from "react";
import Loading from "../events/loading";
import Events from "./Events";
const FeaturedEvents = () => {
	return (
		<div className="mx-auto text-center py-3 max-w-7xl px-4 sm:px-6 lg:px-8">
			<h1 className="mb-3 mt-4 text-xl font-bold lg:text-3xl text-white">
				Featured Events
			</h1>{" "}
			<Suspense fallback={<Loading />}>
				<Events isFeatured />
			</Suspense>
		</div>
	);
};

export default FeaturedEvents;
