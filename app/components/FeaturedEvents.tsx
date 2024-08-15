import { events } from "@/events";
import Events from "./Events";
const FeaturedEvents = () => {
	const featuredEvents = events.filter((event) => event.isFeatured);
	return (
		<div className="mx-auto text-center py-3 max-w-7xl px-4 sm:px-6 lg:px-8">
			<h1 className="mb-3 mt-4 text-xl font-bold lg:text-3xl text-white">
				Featured Events
			</h1>{" "}
			<div className="">
				<Events events={featuredEvents} />
			</div>
		</div>
	);
};

export default FeaturedEvents;
