import Button from "@/app/components/Button";
import { events } from "@/events";
import { formatDate } from "@/lib/helpers";
import delay from "delay";
import Image from "next/image";

interface Props {
	params: {
		slug: string;
	};
}
const EventDetailsPage = async ({ params }: Props) => {
	const event = events.find((event) => event.slug === params.slug);
	await delay(2000);
	return (
		<div className="flex max-w-7xl mx-auto flex-col md:flex-row justify-between gap-12 p-12 text-white">
			<Image
				src={event?.imageUrl!}
				alt={event?.name!}
				width={400}
				height={200}
				className="object-cover border-white border rounded-lg"
				priority
			/>
			<div>
				<div className="flex gap-4">
					<p className="font-bold text-lime-500 text-2xl">
						{formatDate(event?.date!, true)}
					</p>
				</div>
				<h1 className="font-bold text-2xl lg:text-5xl text-white my-4 ">
					{event?.name}
				</h1>
				<p className="text-white">
					Organized by:{" "}
					<span className="font-bold text-lime-500">
						{event?.organizerName}
					</span>
				</p>
				<p className="my-4 max-w-4xl leading-7"> {event?.description}</p>
				<p className="my-4">
					{" "}
					Location:{" "}
					<span className="font-bold text-lime-500">{event?.location}</span>
				</p>
				<Button />
			</div>
		</div>
	);
};

export default EventDetailsPage;
