import { events } from "@/events";

interface Props {
	params: {
		slug: string;
	};
}
const EventDetailsPage = ({ params }: Props) => {
	const getEventDetails = events.filter((event) => event.slug === params.slug);
	return <div className="text-white">{params.slug}</div>;
};

export default EventDetailsPage;
