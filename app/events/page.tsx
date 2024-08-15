import { events } from "@/events";
import Events from "../components/Events";
const EventsPage = () => {
	return (
		<main className="mx-auto py-12 max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
			<h1 className="mb-6 mt-4 text-xl font-bold lg:text-5xl text-white">
				All Events
			</h1>
			<Events events={events} />
		</main>
	);
};

export default EventsPage;
